# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.

interface 和 type 很像，很多场景，两者都能使用。但也有细微的差别：

类型：对象、函数两者都适用，但是 type 可以用于基础类型、联合类型、元祖。
同名合并：interface 支持，type 不支持。
计算属性：type 支持, interface 不支持。
总的来说，公共的用 interface 实现，不能用 interface 实现的再用 type 实现。主要是一个项目最好保持一致。

#### Tips

- 退出登录保留退出登录时地址
- icon 组件
- 树形勾选菜单封装
- tagView 的完善
