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
    const asyncMenu = menuStore.asyncMenu;
    if (asyncMenu.length) {
      next();
      return;
    }
    if (to.path === '/login') {
      next('/');
      return;
    }
    try {
      const [userInfo, menuResult] = await Promise.all([getUserInfo(), getMenu({ attrs: 'all' })]);
      if (userInfo.code === 200 && menuResult.code === 200) {
        userStore.$state.userInfo = userInfo.result;
        const { menu, actions } = filterMenu(menuResult.result);
        menuStore.setAsyncMenu(menu);
        const asyncMenu = menuStore.$state.originAsyncMenu = menu;
        // @ts-ignore
        router.addRoute(asyncMenu);
        next();
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
