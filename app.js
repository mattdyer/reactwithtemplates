'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = { settings: {}, settingsRetrieved: false, currentpage: 'home' };

    _this.readSettings();

    _this.updateCurrentPage = _this.updateCurrentPage.bind(_this);

    return _this;
  }

  _createClass(App, [{
    key: 'readSettings',
    value: function readSettings() {
      var _this2 = this;

      var domain = window.location.hostname;

      fetch('/sites/' + domain + '/settings.json').then(function (response) {
        return response.json();
      }).then(function (data) {
        return _this2.setState({ settings: data, settingsRetrieved: true });
      });
    }
  }, {
    key: 'updateCurrentPage',
    value: function updateCurrentPage(newPage) {
      this.setState({ currentpage: newPage });
    }
  }, {
    key: 'renderLoadingScreen',
    value: function renderLoadingScreen() {
      return React.createElement(
        'div',
        null,
        'Loading...'
      );
    }
  }, {
    key: 'renderTemplate',
    value: function renderTemplate() {
      var templateComponents = {
        TemplateOne: TemplateOne
      };

      var TemplateComponent = templateComponents[this.state.settings.template];

      return React.createElement(TemplateComponent, { settings: this.state.settings, updateCurrentPage: this.updateCurrentPage, currentpage: this.state.currentpage });
    }
  }, {
    key: 'render',
    value: function render() {
      var result = '';

      if (this.state.settingsRetrieved) {
        result = this.renderTemplate();
      } else {
        result = this.renderLoadingScreen();
      }

      return result;
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));