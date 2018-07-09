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

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _question = require('../../ethereum/question');

var _question2 = _interopRequireDefault(_question);

var _AnswerForm = require('../../components/AnswerForm');

var _AnswerForm2 = _interopRequireDefault(_AnswerForm);

var _SetBountyForm = require('../../components/SetBountyForm');

var _SetBountyForm2 = _interopRequireDefault(_SetBountyForm);

var _AnswerGrid = require('../../components/AnswerGrid');

var _AnswerGrid2 = _interopRequireDefault(_AnswerGrid);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/davidtoomey/Documents/dev/eth-projects/QandA/pages/questions/show.js?entry';


var QuestionShow = function (_Component) {
  (0, _inherits3.default)(QuestionShow, _Component);

  function QuestionShow() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, QuestionShow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = QuestionShow.__proto__ || (0, _getPrototypeOf2.default)(QuestionShow)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isAsker: false
    }, _this.submitBounty = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return question.methods.setBounty().call();

            case 2:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2);
    })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(QuestionShow, [{
    key: 'componentWillMount',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var accounts, defaultAccount, asker;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _web2.default.eth.getAccounts();

              case 2:
                accounts = _context2.sent;
                defaultAccount = accounts[0];
                asker = this.props.asker;

                if (defaultAccount == asker) {
                  this.setState({ isAsker: true });
                } else {
                  this.setState({ isAsker: false });
                }

              case 6:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function componentWillMount() {
        return _ref3.apply(this, arguments);
      }

      return componentWillMount;
    }()
  }, {
    key: 'renderCards',
    value: function renderCards() {
      var _props = this.props,
          questionString = _props.questionString,
          bounty = _props.bounty,
          answers = _props.answers,
          asker = _props.asker,
          address = _props.address;

      var items = [{
        header: questionString,
        meta: '',
        description: '',
        style: { overflowWrap: 'break-word', fluid: true }
      }, {
        header: asker,
        description: 'The asker of this question.',
        style: { overflowWrap: 'break-word', fluid: true }
      }, {
        header: _web2.default.utils.fromWei(bounty, 'ether') + ' ETH',
        description: 'Bounty for answering this question.'
      }, {
        header: answers + ' answers',
        description: _react2.default.createElement(_routes.Link, { route: '/questions/' + this.props.address + '/answers', __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          }
        }, _react2.default.createElement('a', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          }
        }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, style: { marginTop: '10px' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          }
        }, 'View Answers'))),
        style: { overflowWrap: 'break-word', fluid: true }
      }, {
        header: address,
        description: 'Question Contract Address',
        style: { overflowWrap: 'break-word', fluid: true }
      }];

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, 'Question'), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, this.state.isAsker && _react2.default.createElement('div', { style: { marginBottom: '15px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, _react2.default.createElement('h5', { style: { display: 'inline-block', marginBottom: '15px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, _react2.default.createElement('div', { style: { color: '#32CD32' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, 'You are the asker of this question.'), ' You can ', _react2.default.createElement('div', { style: { color: 'red', display: 'inline-block' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, 'set the bounty in the form below'), ', then approve the correct answer to pay out the bounty.')), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 16, __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, this.renderCards(), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 8, __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, this.state.isAsker ? _react2.default.createElement(_SetBountyForm2.default, { address: this.props.address, __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }) : _react2.default.createElement(_AnswerForm2.default, { address: this.props.address, __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      })))));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(props) {
        var question, address, summary;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                question = (0, _question2.default)(props.query.address);
                address = props.query.address;
                _context3.next = 4;
                return question.methods.getSummary().call();

              case 4:
                summary = _context3.sent;
                return _context3.abrupt('return', {
                  questionString: summary[0],
                  bounty: summary[1],
                  answers: summary[2],
                  asker: summary[3],
                  answerApproved: summary[4],
                  address: address
                });

              case 6:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getInitialProps(_x) {
        return _ref4.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return QuestionShow;
}(_react.Component);

exports.default = QuestionShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3F1ZXN0aW9ucy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsIkdyaWQiLCJCdXR0b24iLCJMYXlvdXQiLCJRdWVzdGlvbiIsIkFuc3dlckZvcm0iLCJTZXRCb3VudHlGb3JtIiwiQW5zd2VyR3JpZCIsIndlYjMiLCJMaW5rIiwiUXVlc3Rpb25TaG93Iiwic3RhdGUiLCJpc0Fza2VyIiwic3VibWl0Qm91bnR5IiwicXVlc3Rpb24iLCJtZXRob2RzIiwic2V0Qm91bnR5IiwiY2FsbCIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJkZWZhdWx0QWNjb3VudCIsImFza2VyIiwicHJvcHMiLCJzZXRTdGF0ZSIsInF1ZXN0aW9uU3RyaW5nIiwiYm91bnR5IiwiYW5zd2VycyIsImFkZHJlc3MiLCJpdGVtcyIsImhlYWRlciIsIm1ldGEiLCJkZXNjcmlwdGlvbiIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwiZmx1aWQiLCJ1dGlscyIsImZyb21XZWkiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJkaXNwbGF5IiwiY29sb3IiLCJyZW5kZXJDYXJkcyIsInF1ZXJ5IiwiZ2V0U3VtbWFyeSIsInN1bW1hcnkiLCJhbnN3ZXJBcHByb3ZlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU0sQUFBTTs7QUFDckIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQWdCOzs7O0FBQ3ZCLEFBQU8sQUFBbUI7Ozs7QUFDMUIsQUFBTyxBQUFnQjs7OztBQUN2QixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxBQUFZOzs7Ozs7O0lBRWYsQTs7Ozs7Ozs7Ozs7Ozs7O3dOLEFBQ0o7ZSxBQUFPLEFBQ0k7QUFESixBQUNMLGEsQUEyRUYsd0ZBQWUsbUJBQUE7b0VBQUE7a0JBQUE7MkNBQUE7aUJB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LEFBS0osOEVBQUMsY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjtvQkFBcEI7c0JBQUEsQUFDRztBQURIO2NBQUEsQUFDRyxBQUFLLEFBQ047O29CQUFBO3NCQVhOLEFBQ0UsQUFRRSxBQUVFLEFBSUo7QUFKSTtBQUFBLDRCQUlILGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjtvQkFBcEI7c0JBQUEsQUFDSTtBQURKO2NBQ0ksQUFBSyxNQUFMLEFBQVcsMEJBQVUsQUFBQyx5Q0FBYyxTQUFTLEtBQUEsQUFBSyxNQUE3QixBQUFtQztvQkFBbkM7c0JBQXJCLEFBQXFCO0FBQUE7T0FBQSxvQkFBaUQsQUFBQyxzQ0FBVyxTQUFTLEtBQUEsQUFBSyxNQUExQixBQUFnQztvQkFBaEM7c0JBcEJsRixBQUNFLEFBRUUsQUFlRSxBQUNFLEFBQzBFLEFBTW5GO0FBTm1GO09BQUE7Ozs7OzZHLEFBakd2RDs7Ozs7bUJBQ3JCO0EsMkJBQVcsd0JBQVMsTUFBQSxBQUFNLE1BQWYsQUFBcUIsQUFDaEMsQTtBLDBCQUFVLE1BQUEsQUFBTSxNLEFBQU07O3VCQUNOLFNBQUEsQUFBUyxRQUFULEFBQWlCLGFBQWpCLEEsQUFBOEI7O21CQUE5QztBOztrQ0FHWSxRQURYLEFBQ1csQUFBUSxBQUN4QjswQkFBUSxRQUZILEFBRUcsQUFBUSxBQUNoQjsyQkFBUyxRQUhKLEFBR0ksQUFBUSxBQUNqQjt5QkFBTyxRQUpGLEFBSUUsQUFBUSxBQUNmO2tDQUFnQixRQUxYLEFBS1csQUFBUSxBQUN4QjsyQkFOSyxBO0FBQUEsQUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVhxQixBLEFBK0czQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJzaG93LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9kYXZpZHRvb21leS9Eb2N1bWVudHMvZGV2L2V0aC1wcm9qZWN0cy9RYW5kQSJ9