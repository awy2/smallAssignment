module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "parserOptions": {
    "ecmaVersion": 6,
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "browser": true,
    "node": true,
    "mocha": true,
    "es6": true
  },
  "settings": {
    "import/resolver": {
      "babel-module": {}
    }
  },
  "rules": {
    "space-before-function-paren": "off",
    "react/prefer-stateless-function": "warn",
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "linebreak-style": "off",
    "global-require": "off",
    "semi": "warn",
    "arrow-body-style": "off",
    "no-unused-vars": "warn", 
    "eol-last": "warn",
    "indent": [ "warn", 4 ],
    "object-curly-spacing": "warn",
    "comma-dangle":"warn",
    "space-before-blocks":"warn",
    "array-bracket-spacing":"warn",
    "react/jsx-indent": [ "warn", 4 ],
    "react/jsx-indent-props": [ "warn", 4 ],
    "prefer-const":"warn",
    "quotes":"warn",
    "space-in-parens":"warn",
    "padded-blocks":"warn",
    "no-multi-spaces":"warn",
    "no-multiple-empty-lines":"warn",
    "spaced-comment": "warn",
    "react/jsx-closing-tag-location":"warn",
    "no-trailing-spaces":"warn",
    "no-debugger":"warn",
    "react/prop-types":"off",
    "new-cap":"warn", 
    "import/prefer-default-export": "off",
    "max-len": ["warn", 175], 
    "no-return-assign": "warn",
    "no-console": "off",
    "react/jsx-boolean-value":"off",
    "react/no-array-index-key":"off",
    "react/no-unused-state":"off",
    "prefer-template": "warn", 
    "import/no-unresolved": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off"
  }
}