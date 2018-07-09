'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _Question = require('./build/Question.json');

var _Question2 = _interopRequireDefault(_Question);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (address) {
  return new _web2.default.eth.Contract(JSON.parse(_Question2.default.interface), address);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3F1ZXN0aW9uLmpzIl0sIm5hbWVzIjpbIndlYjMiLCJRdWVzdGlvbiIsImFkZHJlc3MiLCJldGgiLCJDb250cmFjdCIsIkpTT04iLCJwYXJzZSIsImludGVyZmFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQLEFBQWlCLEFBQWpCOzs7O0FBQ0EsQUFBTyxBQUFQLEFBQXFCLEFBQXJCLEFBRUE7Ozs7OztrQkFBZSxVQUFDLEFBQUQsU0FBYSxBQUMxQjtTQUFPLElBQUksY0FBSyxBQUFMLElBQVMsQUFBYixTQUNMLEtBQUssQUFBTCxNQUFXLG1CQUFTLEFBQXBCLEFBREssWUFFTCxBQUZLLEFBQVAsQUFJRDtBQUxEIiwiZmlsZSI6InF1ZXN0aW9uLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9kYXZpZHRvb21leS9Eb2N1bWVudHMvZGV2L2V0aC1wcm9qZWN0cy9RYW5kQSJ9