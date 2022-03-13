import request from "./config";
const MODULE = "role";

export const getAllList = () => {
  return request({
    url: `/${MODULE}/list`,
    method: "get",
    params: {
      attrs: ["all"]
    }
  });
};

export const getList = (params) => {
  return request({
    url: `/${MODULE}`,
    method: "get",
    params
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

export const setActions = (id, data) => {
  return request({
    url: `/${MODULE}/actions/${id}`,
    method: "put",
    data
  });
};

export const getActions = (id) => {
  return request({
    url: `/${MODULE}/actions/${id}`,
    method: "get"
  });
};
