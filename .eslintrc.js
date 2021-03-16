/*
 * @Description: 
 * @Author: iwillbe12138
 * @Date: 2021-03-15 11:19:24
 * @LastEditTime: 2021-03-16 18:03:55
 * @LastEditors: iwillbe12138
 */
module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
      "no-undef": "off",
      "no-restricted-globals": "off",
      "no-unused-vars": "off"
    }
};
