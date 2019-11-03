module.exports = {
  root: true,
  extends: '@react-native-community',
  settings: {
    "import/resolver": {
      "alias": [
        ["@components", "./src/app/Components"],
        ["@common", "./src/Common"],
        ["@actions", "./src/Actions"],
        ["@scenes", "./src/app/Scenes"],
        ["@assets", "./src/Assets"],
        ["@reducers", "./src/Reducers"],
        ["@theme", "./src/Theme"]
      ]
    }
  },
  rules: {
    "linebreak-style": ["off"],
    "no-undef": ["error"],
    "no-unused-vars": ["off"],
    "camelcase": ["off"],
    "no-underscore-dangle": ["off"],
    "semi": ["off"],
    "max-len": "off",
    "no-use-before-define": "off",
    "prettier/prettier":["off"]
  },
  env: {
    "node": true,
    "es6": true,
    "jest": true,
    "react-native/react-native": true
  }
};
