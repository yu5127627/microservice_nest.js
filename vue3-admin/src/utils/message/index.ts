import { ElMessage } from 'element-plus';

const toast = (message:string, type?:any, duration?:number, icon?: 'string') => {
  return ElMessage({
    message,
    showClose: true,
    type: type || 'success',
    duration: duration || 2000,
    icon
  });
};

export { toast };
