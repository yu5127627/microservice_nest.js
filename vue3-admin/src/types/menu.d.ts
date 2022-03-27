declare interface Menu implements RouteRecordRaw{
  id?: number;
  path: string;
  component: RawRouteComponent | (() => Promise<typeof import("*.vue")>);
  redirect?: string|undefined;
  hidden?: boolean|undefined;
  alwaysShow?: boolean;
  name?: string;
  meta?: MenuMeta;
  children?: Array<Menu>
}

declare interface requestMenu {
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

declare interface MenuMeta {
  pid?: number;
  type?: number;
  icon?: string;
  cache?: boolean;
  title: string
}
