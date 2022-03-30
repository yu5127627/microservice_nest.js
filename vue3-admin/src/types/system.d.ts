namespace Menu {
  declare interface MenuMeta {
    pid?: number;
    type?: number;
    icon?: string;
    cache?: boolean;
    title: string,
    affix: boolean
  }

  declare interface Route implements RouteRecordRaw {
    id?: number;
    path: string;
    component: RawRouteComponent | (() => Promise<typeof import("*.vue")>);
    redirect?: string | undefined;
    hidden?: boolean | undefined;
    alwaysShow?: boolean;
    name?: string;
    meta?: MenuMeta | undefined;
    children?: Array<Route>
  }

  declare interface MenuRow {
    id: number;
    type: number;
    icon: string;
    cache: boolean;
    hide: boolean;
    title: string;
    url: string;
    name: string;
    action: string;
    sort: number;
    path: string;
    pid: number;
    redirect: string;
  }

  declare interface ActionRow {
    pid: number;
    title: string;
    action: string;
    sort: number;
    id: number;
  }
}

namespace Manage {
  declare interface LoginDto {
    username: string;
    password: string;
  }

  declare interface ManageRow {
    id: number | null;
    avatar: string;
    ctime: string;
    nickname: string;
    roleId: string | null;
    username: string;
  }
}

namespace TagView {
  export interface TagViewRow {
    title: string;
    path: string;
    affix: boolean;
    active?: boolean;
  }

  export interface DownMenu {
    label: string;
    value: string;
  }
}

namespace Role {
  export interface RoleRow {
    id: number;
    description: string;
    name: string;
    level: number;
  }
}

namespace Log {
  export interface LoginRow {
    id: number;
    ip: string;
    login_time: string;
    manageId: number;
    ua: string;
    username: string;
    address: string;
  }
}

namespace User {
  declare interface UserInfo {
    avatar: string,
    ctime: string,
    id: number | null,
    nickname: string,
    roleId: number | null,
    username: string
  }
}
