(function(graph){
      function require(module){
        function otherRequire(relativePath){
          return require(graph[module].dependencies[relativePath])
        }

        var exports = {};
        (function(require, exports, code){
          eval(code)
        })(otherRequire, exports, graph[module].code)
        return exports;
      }
      require('./src/index.js')
    })({"./src/index.js":{"dependencies":{"./a.js":"./src\\a.js"},"code":"\"use strict\";\n\nvar _a = require(\"./a.js\");\n\nconsole.log(\"hello \".concat(_a.a));"},"./src\\a.js":{"dependencies":{"./b.js":"./src\\b.js"},"code":"\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.a = void 0;\n\nvar _b = require(\"./b.js\");\n\nvar a = \"webpack\".concat(_b.b);\nexports.a = a;"},"./src\\b.js":{"dependencies":{},"code":"\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.b = void 0;\nvar b = \"!!!\";\nexports.b = b;"}})