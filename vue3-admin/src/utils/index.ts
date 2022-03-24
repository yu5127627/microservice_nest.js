// 过滤菜单 区分菜单类型
export const filterMenu = (list: Array<any>) => {
  const menu: Array<any> = [];
  const actions: Array<any> = [];
  list.sort((a, b) => a.sort-b.sort);
  for (const item of list) {
    if (item.type === 3) {
      actions.push(item);
    } else {
      menu.push(item);
    }
  }
  return { menu, actions };
};


export const mergeMenu = (topDir:any, list:any) => {
  const childMenu = [];
  for (const item of list) {
    if (item.pid === topDir.id) {
      childMenu.push(item);
    }
  }
  if(childMenu.length)topDir.children = childMenu;
};
