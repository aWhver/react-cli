module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true
  },
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaVersion: 8,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'no-unused-vars': 2,
    semi: 0,
    indent: 0,
    quotes: 'single',
    'no-unreachable': 'error', // 当有不能执行到的代码时
    'eol-last': 'error', // 文件末尾强制换行
    'no-new': 'error', // 禁止在使用new构造一个实例后不赋值
    'no-trailing-spaces': 'error', // 一行结束后面不要有空格
    'space-before-function-paren': ['error', 'never'], // 函数定义时括号前面要不要有空格
    'no-undef': 'error', // 不能有未定义的变量,定义之前必须有var或者let
    curly: ['error', 'all'], // 必须使用 if(){} 中的{}
    'generator-star-spacing': 'error', // allow async-await
    'space-before-function-paren': ['error', 'never'], // 禁止函数名前有空格，如function Test (aaa,bbb)
    'space-in-parens': ['error', 'never'], // 禁止圆括号有空格，如Test( 2, 3 )
    'space-infix-ops': 'error', //在操作符旁边必须有空格， 如 a + b而不是a+b
    'space-before-blocks': ['error', 'always'], // 语句块之前必须有空格 如 ) {}
    'spaced-comment': ['error', 'always'], // 注释前必须有空格
    'arrow-body-style': ['error', 'always'], // 要求箭头函数必须有大括号 如 a => {}
    'arrow-spacing': ['error', { before: true, after: true }], // 定义箭头函数的箭头前后都必须有空格
    'no-const-assign': 'error', // 禁止修改const变量
    'template-curly-spacing': ['error', 'never'], // 禁止末班字符串中的{}中的变量出现空格，如以下错误`${ a }`
    'no-whitespace-before-property': 'error', // 禁止属性前有空格，如obj. a
    'keyword-spacing': ['error', { before: true, after: true }] //关键字前后必须有空格 如 } else {
  }
};
