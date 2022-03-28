import { getMenu } from '@/api/menu';
import { getUserInfo } from '@/api/user';
import { store } from '@/store';
import { useMenuStore } from '@/store/modules/menu';
import { useUserStore } from '@/store/modules/user';
import { useTagViewStore } from '@/store/modules/tagView';
import router from './index';
import NProgress from '@/utils/progress';


const menuStore = useMenuStore(store);
const userStore = useUserStore(store);
const tagViewStore = useTagViewStore(store);
const whiteList = ['/login'];
router.beforeEach(async (to, form, next) => {
  // 开启进度条动画
  NProgress.start();
  const token = sessionStorage.getItem('token');
  if (token) {
    if (to.path === '/login') return to.query.to?next(`${to.query.to}`):next('/');
    const asyncMenu = menuStore.asyncMenu;
    if (asyncMenu.length > 0) {
      return next();
    }

    try {
      const [userInfo, menuResult] = await Promise.all([getUserInfo(), getMenu({ attrs: 'all' })]);
      if (userInfo.code === 200 && menuResult.code === 200) {
        userStore.$state.userInfo = userInfo.result;
        const { topMenu, subMenu, actions } = menuStore.filterMenu(menuResult.result);
        const asyncMenu = menuStore.setAsyncMenu(topMenu, subMenu);
        for (const menu of asyncMenu) {
          router.addRoute(menu);
        }
        // 关闭进度条动画
        NProgress.done();
        // 再次进入路由
        next({ ...to, replace: true });
      }
    } catch (error) {
      console.log(error);
      // 关闭进度条动画
      NProgress.done();
      next(`/login?to=${to.path}`);
    }
  } else {
    if (whiteList.includes(to.path)) {
      // 关闭进度条动画
      NProgress.done();
      next();
      return;
    }
    // 关闭进度条动画
    NProgress.done();
    next(`/login?to=${to.path}`);
  }
});

router.afterEach((to, from) => {
  // 关闭进度条动画
  NProgress.done();
  // console.log('afterEach');
});