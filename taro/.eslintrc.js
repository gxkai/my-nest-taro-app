// ESLint 检查 .vue 文件需要单独配置编辑器：
// https://eslint.vuejs.org/user-guide/#editor-integrations
module.exports = {
  'extends': ['taro/vue3'],
  rules: {
    "@typescript-eslint/no-empty-function": 0,
    "vue/no-unused-components": 0,
  },
}
