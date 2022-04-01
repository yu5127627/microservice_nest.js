namespace Tag{
  interface TagRow {
    id: number;
    name: string;
    group: string;
    sort?: number;
    description?: string;
    ctime?: string;
    simg?: string;
  }
}
namespace Category{
  interface CategoryRow {
    id: number;
    name: string;
    group: string;
    pid: number;
    sort: number;
    description?: string;
    ctime?: string;
    simg?: string;
  }
}

namespace Content {
  interface ContentRow {
    id: number;
    title: string;
    top: boolean;
    scan: number;
    recom: number;
    content?: string;
    ctime: string;
    utime: string;
  }
}
