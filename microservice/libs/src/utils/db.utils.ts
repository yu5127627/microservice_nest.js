/**
 * 生成符合 typeorm 排序查询的对象
 * @param orderBy {string|array} 排序参数
 * @returns
 */
export const getOrder = (orderBy) => {
  if (!orderBy) return;
  if (typeof orderBy === 'string') orderBy = [orderBy];
  const obj = {};
  if (orderBy.length <= 0) return {};
  for (const order of orderBy) {
    if (order.includes('+')) {
      obj[order.slice(1)] = 'ASC';
    } else {
      obj[order.slice(1)] = 'DESC';
    }
  }
  return obj;
};
