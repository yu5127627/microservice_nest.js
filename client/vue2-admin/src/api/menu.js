import request from "./config";
const MODULE = "menu";

export const getList = () => {
  return request({
    url: `/${MODULE}/list`,
    method: "get",
    params: {
      attrs: "all"
    }
  });
};

export const create = (data) => {
  return request({
    url: `/${MODULE}`,
    method: "post",
    data
  });
};

export const update = (id, data) => {
  return request({
    url: `/${MODULE}/${id}`,
    method: "put",
    data
  });
};

export const remove = (data) => {
  return request({
    url: `/${MODULE}`,
    method: "delete",
    data
  });
};
