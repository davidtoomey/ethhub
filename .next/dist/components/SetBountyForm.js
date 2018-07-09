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

var _jsxFileName = '/Users/davidtoomey/Documents/dev/eth-projects/QandA/components/SetBountyForm.js';


var SetBountyForm = function (_Component) {
  (0, _inherits3.default)(SetBountyForm, _Component);

  function SetBountyForm() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, SetBountyForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = SetBountyForm.__proto__ || (0, _getPrototypeOf2.default)(SetBountyForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: '',
      errorMessage: '',
      loading: false
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var question, accounts, defaultAccount;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();

                question = (0, _question2.default)(_this.props.address);

                _this.setState({ loading: true, errorMessage: '' });

                _context.prev = 3;
                _context.next = 6;
                return web3.eth.getAccounts();

              case 6:
                accounts = _context.sent;
                _context.next = 9;
                return web3.eth.defaultAccount;

              case 9:
                defaultAccount = _context.sent;
                _context.next = 12;
                return question.methods.setBounty().send({
                  from: defaultAccount,
                  value: web3.toWei(_this.state.value, 'ether')
                });

              case 12:
                Router.replaceRoute('/questions/' + _this.props.address);
                _context.next = 18;
                break;

              case 15:
                _context.prev = 15;
                _context.t0 = _context['catch'](3);

                _this.setState({ errorMessage: _context.t0.message });

              case 18:

                _this.setState({ loading: false });

              case 19:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[3, 15]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(SetBountyForm, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, 'Set Bounty'), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.value,
        onChange: function onChange(event) {
          return _this3.setState({ value: event.target.value });
        },
        label: 'ether',
        labelPosition: 'right',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      })), _react2.default.createElement(_semanticUiReact.Button, { primary: true, color: 'green', loading: this.state.loading, onClick: this.onSubmit, __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, 'Set Bounty'));
    }
  }]);

  return SetBountyForm;
}(_react.Component);

exports.default = SetBountyForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU2V0Qm91bnR5Rm9ybS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkZvcm0iLCJJbnB1dCIsIk1lc3NhZ2UiLCJCdXR0b24iLCJRdWVzdGlvbiIsIlNldEJvdW50eUZvcm0iLCJzdGF0ZSIsInZhbHVlIiwiZXJyb3JNZXNzYWdlIiwibG9hZGluZyIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInF1ZXN0aW9uIiwicHJvcHMiLCJhZGRyZXNzIiwic2V0U3RhdGUiLCJ3ZWIzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsImRlZmF1bHRBY2NvdW50IiwibWV0aG9kcyIsInNldEJvdW50eSIsInNlbmQiLCJmcm9tIiwidG9XZWkiLCJSb3V0ZXIiLCJyZXBsYWNlUm91dGUiLCJtZXNzYWdlIiwidGFyZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTSxBQUFPLEFBQVM7O0FBQy9CLEFBQU8sQUFBYzs7Ozs7Ozs7O0ksQUFFZjs7Ozs7Ozs7Ozs7Ozs7OzBOQUNKLEE7YUFBUSxBQUNDLEFBQ1A7b0JBRk0sQUFFUSxBQUNkO2VBSE0sQUFHRyxBO0FBSEgsQUFDTixhQUtGLEE7MkZBQVcsaUJBQUEsQUFBTSxPQUFOO2dDQUFBO3NFQUFBO29CQUFBOzZDQUFBO21CQUNUO3NCQUFBLEFBQU0sQUFFQTs7QUFIRywyQkFHUSx3QkFBUyxNQUFBLEFBQUssTUFIdEIsQUFHUSxBQUFvQixBQUVyQzs7c0JBQUEsQUFBSyxTQUFTLEVBQUUsU0FBRixBQUFXLE1BQU0sY0FMdEIsQUFLVCxBQUFjLEFBQStCOztnQ0FMcEM7Z0NBQUE7dUJBUWdCLEtBQUEsQUFBSyxJQVJyQixBQVFnQixBQUFTOzttQkFBMUI7QUFSQyxvQ0FBQTtnQ0FBQTt1QkFTc0IsS0FBQSxBQUFLLElBVDNCLEFBUytCOzttQkFBaEM7QUFUQywwQ0FBQTtnQ0FBQTtnQ0FVRCxBQUFTLFFBQVQsQUFBaUIsWUFBakIsQUFBNkI7d0JBQUssQUFDaEMsQUFDTjt5QkFBTyxLQUFBLEFBQUssTUFBTSxNQUFBLEFBQUssTUFBaEIsQUFBc0IsT0FaeEIsQUFVRCxBQUFrQyxBQUUvQixBQUE2QjtBQUZFLEFBQ3RDLGlCQURJOzttQkFJTjt1QkFBQSxBQUFPLDZCQUEyQixNQUFBLEFBQUssTUFkaEMsQUFjUCxBQUE2QztnQ0FkdEM7QUFBQTs7bUJBQUE7Z0NBQUE7Z0RBZ0JQOztzQkFBQSxBQUFLLFNBQVMsRUFBRSxjQUFjLFlBaEJ2QixBQWdCUCxBQUFjLEFBQW9COzttQkFHcEM7O3NCQUFBLEFBQUssU0FBUyxFQUFFLFNBbkJQLEFBbUJULEFBQWMsQUFBVzs7bUJBbkJoQjttQkFBQTtnQ0FBQTs7QUFBQTtpQ0FBQTtBOzs7Ozs7Ozs7OzZCQXNCRjttQkFDUDs7NkJBQ0ksQUFBQyx1Q0FBSyxVQUFVLEtBQWhCLEFBQXFCLFVBQVUsT0FBTyxDQUFDLENBQUMsS0FBQSxBQUFLLE1BQTdDLEFBQW1EO29CQUFuRDtzQkFBQSxBQUNFO0FBREY7T0FBQSxrQkFDRyxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSwrQkFBQSxBQUFDO2VBQ1EsS0FBQSxBQUFLLE1BRGQsQUFDb0IsQUFDbEI7a0JBQVUseUJBQUE7aUJBQVMsT0FBQSxBQUFLLFNBQVMsRUFBRSxPQUFPLE1BQUEsQUFBTSxPQUF0QyxBQUFTLEFBQWMsQUFBc0I7QUFGekQsQUFHRTtlQUhGLEFBR1EsQUFDTjt1QkFKRixBQUlnQjs7b0JBSmhCO3NCQUhKLEFBQ0UsQUFFRSxBQU9GO0FBUEU7QUFDRSwyQkFNSixBQUFDLHlDQUFPLFNBQVIsTUFBZ0IsT0FBaEIsQUFBc0IsU0FBUSxTQUFTLEtBQUEsQUFBSyxNQUE1QyxBQUFrRCxTQUFTLFNBQVMsS0FBcEUsQUFBeUU7b0JBQXpFO3NCQUFBO0FBQUE7U0FYTixBQUNJLEFBVUUsQUFHUDs7Ozs7QUE1Q3lCLEEsQUErQzVCOztrQkFBQSxBQUFlIiwiZmlsZSI6IlNldEJvdW50eUZvcm0uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2RhdmlkdG9vbWV5L0RvY3VtZW50cy9kZXYvZXRoLXByb2plY3RzL1FhbmRBIn0=