import { getMenu } from '@/api/menu';
import { getUserInfo } from '@/api/user';
import { store } from '@/store';
import { useMenuStore } from '@/store/modules/menu';
import { useUserStore } from '@/store/modules/user';
import { filterMenu } from '@/utils';
import router from './index';

const menuStore = useMenuStore(store);
const userStore = useUserStore(store);
const whiteList = ['/login'];
router.beforeEach(async (to, form, next) => {
  const token = sessionStorage.getItem('token');
  if (token) {
    if (to.path === '/login') return to.query.to?next(`${to.query.to}`):next('/');
    const asyncMenu = menuStore.asyncMenu;
    if (asyncMenu.length > 0) return next();

    try {
      const [userInfo, menuResult] = await Promise.all([getUserInfo(), getMenu({ attrs: 'all' })]);
      if (userInfo.code === 200 && menuResult.code === 200) {
        userStore.$state.userInfo = userInfo.result;
        const { topMenu, subMenu, actions } = filterMenu(menuResult.result);
        menuStore.$state.originAsyncMenu = [...topMenu, ...subMenu];
        const asyncMenu = menuStore.setAsyncMenu(topMenu, subMenu);
        for (const menu of asyncMenu) {
          router.addRoute(menu);
        }
        next({ ...to, replace:true });
      }
    } catch (error) {
      console.log(error);
      next(`/login?to=${to.path}`);
    }
  } else {
    if (whiteList.includes(to.path)) {
      next();
      return;
    }
    next(`/login?to=${to.path}`);
  }
});

router.afterEach((to, from) => {
  // console.log('afterEach');
});
