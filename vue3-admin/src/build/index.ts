// 跨域代理重写
const regExps = (value: string, reg: string): string => {
  return value.replace(new RegExp(reg, "g"), "");
};

// 环境变量
const loadEnv = (): ViteEnv => {
  return import.meta.env;
};

export { regExps, loadEnv };
