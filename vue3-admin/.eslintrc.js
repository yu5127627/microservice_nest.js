module.exports = {
  env: {
    browser: true,
    es2021: true, // 添加所有 ECMAScript 2021 全局变量并自动将 ecmaVersion 解析器选项设置为 12
    node: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest', // 支持的es版本
    sourceType: 'module' // 代模块类型，默认为script，我们设置为module
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended'
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    // 不能有声明后未被使用的变量或参数
    'no-unused-vars': [0, { vars: 'all', args: 'after-used' }],
    // 缩进使用 4 个空格，并且 switch 语句中的 Case 需要缩进
    // https://eslint.org/docs/rules/indent
    indent: [
      1,
      2,
      {
        SwitchCase: 1,
        flatTernaryExpressions: true
      }
    ],
    // 只有一个参数时，箭头函数体可以省略圆括号
    // https://eslint.org/docs/rules/arrow-parens
    'arrow-parens': 0,
    'vue/multi-word-component-names': 0,
    "vue/multiline-html-element-content-newline":0,
    // 模板每行属性的数量是否不超过定义的最大值,超过就换行
    'vue/max-attributes-per-line': [
      1,
      {
        singleline: {
          max: 5
        },
        multiline: {
          max: 10
        }
      }
    ],
    // 强制在单行元素的内容前后加换行符
    'vue/singleline-html-element-content-newline': 0,
    'object-curly-spacing': ['error', 'always'], //大括号内是否允许不必要的空格
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/ban-types': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-unused-vars': 0,
    'comma-spacing': 2, // 逗号前后的空格
    'no-else-return': 2, // 如果if语句里面有return,后面不能跟else语句
    'no-extra-parens': 2, // 禁止非必要的括号
    'no-extra-semi': 2, // 禁止多余的冒号
    'no-irregular-whitespace': 2, // 不能有不规则的空格
    'arrow-spacing': 1, // =>的前/后括号
    semi: [2, 'always'], //语句强制分号结尾
    'no-multiple-empty-lines': [1, { max: 2 }], //空行最多不能超过2行
    'no-multi-spaces': 1, //不能用多余的空格
    "indent": "off",
    "@typescript-eslint/indent": ["error", 2]
  }
};
