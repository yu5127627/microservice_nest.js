import request from "./config";

export const getList = (params) => {
  return request({
    url: "/manage",
    method: "get",
    params
  });
};

export const getOne = (id) => {
  return request({
    url: `/manage/${id}`,
    method: "get"
  });
};

export const create = (data) => {
  return request({
    url: "/manage",
    method: "post",
    data
  });
};

export const update = (id, data) => {
  return request({
    url: `/manage/${id}`,
    method: "put",
    data
  });
};

export const remove = (data) => {
  return request({
    url: "/manage",
    method: "delete",
    data
  });
};
