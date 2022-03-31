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
