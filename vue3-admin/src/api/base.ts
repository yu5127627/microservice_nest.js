import { request, Response } from "@/utils/http";
import { toast } from "@/utils/message";
import { emitter } from "@/utils/mitt";
import { ElMessage, ElMessageBox } from "element-plus";
const baseUrl = '/api/v1/';

type RowData = Manage.ManageRow | Menu.MenuRow;

export const openDialog = (dialogData: DialogData<any>, title: string, row?: RowData) => {
  dialogData.visible = true;
  dialogData.title = title;
  dialogData.type = row? 'update':'create' ;
  dialogData.data = row;
};

/**
 * 页面公共删除方法
 * @param ids {array} 要删除的id数组
 * @param module {string} 要删除的模块
 */
export const handleDelete = (ids: number[], module: string) => {
  ElMessageBox.confirm(
    '删除后不可恢复，确认删除操作吗？',
    '警告',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
      draggable: true,
    }
  )
    .then(async () => {
      const { code, message } = await request<Response>({ method: 'DELETE', url: `${baseUrl}${module}`, data: { ids } });
      if (code === 200) {
        toast(message);
        emitter.emit('list-reload', module);
      } else {
        toast(message, 'error');
      }
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '操作取消',
      });
    });
};

export const handleSubmit = async (dialogData: DialogData<RowData>, module: string) => {
 try {
    const { code, message, result } = await request<Response>({
      method: dialogData.data?.id ? 'PUT' : 'POST',
      url: dialogData.data?.id ? `${baseUrl}${module}/${dialogData.data.id}` : `${baseUrl}${module}`,
      data: dialogData.data
    });
    toast(message);
    emitter.emit('list-reload', module);
    dialogData.visible = false;
 } catch (error:any) {
   if (typeof error.message !== 'string') {
     for (const msg of error.message) {
       toast(msg, 'error', 2000);
     }
   } else {
      toast(error.message, 'error', 2000);
   }
 }
};
