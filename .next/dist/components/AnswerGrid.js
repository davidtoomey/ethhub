'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _question = require('../ethereum/question');

var _question2 = _interopRequireDefault(_question);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/davidtoomey/Documents/dev/eth-projects/QandA/components/AnswerGrid.js';


var AnswerGrid = function (_Component) {
  (0, _inherits3.default)(AnswerGrid, _Component);

  function AnswerGrid() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, AnswerGrid);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = AnswerGrid.__proto__ || (0, _getPrototypeOf2.default)(AnswerGrid)).call.apply(_ref, [this].concat(args))), _this), _this.onApprove = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var question, accounts, defaultAccount;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              question = (0, _question2.default)(_this.props.address);
              _context.next = 3;
              return web3.eth.getAccounts();

            case 3:
              accounts = _context.sent;
              defaultAccount = web3.eth.defaultAccount;
              _context.next = 7;
              return question.methods.approveAnswer(_this.props.id).send({
                from: defaultAccount
              });

            case 7:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2);
    })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(AnswerGrid, [{
    key: 'render',
    value: function render() {
      var Row = _semanticUiReact.Table.Row,
          Cell = _semanticUiReact.Table.Cell;
      var _props = this.props,
          id = _props.id,
          answer = _props.answer;

      return _react2.default.createElement(Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, id), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, answer.answerer), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, answer.answerString), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { color: 'green', basic: true, onClick: this.onApprove, __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, 'Approve')));
    }
  }]);

  return AnswerGrid;
}(_react.Component);

exports.default = AnswerGrid;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQW5zd2VyR3JpZC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlRhYmxlIiwiQnV0dG9uIiwiUXVlc3Rpb24iLCJBbnN3ZXJHcmlkIiwib25BcHByb3ZlIiwicXVlc3Rpb24iLCJwcm9wcyIsImFkZHJlc3MiLCJ3ZWIzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsImRlZmF1bHRBY2NvdW50IiwibWV0aG9kcyIsImFwcHJvdmVBbnN3ZXIiLCJpZCIsInNlbmQiLCJmcm9tIiwiUm93IiwiQ2VsbCIsImFuc3dlciIsImFuc3dlcmVyIiwiYW5zd2VyU3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTzs7QUFDaEIsQUFBTyxBQUFjOzs7Ozs7Ozs7SUFFZixBOzs7Ozs7Ozs7Ozs7Ozs7b05BRUosQSxxRkFBWSxtQkFBQTs4QkFBQTtvRUFBQTtrQkFBQTsyQ0FBQTtpQkFDSjtBQURJLHlCQUNPLHdCQUFTLE1BQUEsQUFBSyxNQURyQixBQUNPLEFBQW9COzhCQUQzQjtxQkFHYSxLQUFBLEFBQUssSUFIbEIsQUFHYSxBQUFTOztpQkFBMUI7QUFISSxrQ0FJSjtBQUpJLCtCQUlhLEtBQUEsQUFBSyxJQUpsQixBQUlzQjs4QkFKdEI7OEJBS0osQUFBUyxRQUFULEFBQWlCLGNBQWMsTUFBQSxBQUFLLE1BQXBDLEFBQTBDLElBQTFDLEFBQThDO3NCQUwxQyxBQUtKLEFBQW1ELEFBQ2pEO0FBRGlELEFBQ3ZELGVBREk7O2lCQUxJO2lCQUFBOzhCQUFBOztBQUFBO2tCQUFBO0E7Ozs7OzZCQVVIO1VBQUEsQUFDQyxNQURELEFBQ2UsdUJBRGYsQUFDQztVQURELEFBQ00sT0FETixBQUNlLHVCQURmLEFBQ007bUJBQ1UsS0FGaEIsQUFFcUI7VUFGckIsQUFFQyxZQUZELEFBRUM7VUFGRCxBQUVLLGdCQUZMLEFBRUssQUFFWjs7NkJBQ0csY0FBRDs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRyxjQUFEOztvQkFBQTtzQkFBQSxBQUFPO0FBQVA7QUFBQSxTQURGLEFBQ0UsQUFDQSxxQkFBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUFPO0FBQVA7QUFBQSxnQkFGRixBQUVFLEFBQWMsQUFDZCwyQkFBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUFPO0FBQVA7QUFBQSxnQkFIRixBQUdFLEFBQWMsQUFDZCwrQkFBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLHlDQUFPLE9BQVIsQUFBYyxTQUFRLE9BQXRCLE1BQTRCLFNBQVMsS0FBckMsQUFBMEM7b0JBQTFDO3NCQUFBO0FBQUE7U0FOTixBQUNFLEFBSUUsQUFDRSxBQU1QOzs7OztBQTVCc0IsQSxBQStCekI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiQW5zd2VyR3JpZC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZGF2aWR0b29tZXkvRG9jdW1lbnRzL2Rldi9ldGgtcHJvamVjdHMvUWFuZEEifQ==