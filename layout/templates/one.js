'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TemplateOne = function (_React$Component) {
  _inherits(TemplateOne, _React$Component);

  function TemplateOne(props) {
    _classCallCheck(this, TemplateOne);

    var _this = _possibleConstructorReturn(this, (TemplateOne.__proto__ || Object.getPrototypeOf(TemplateOne)).call(this, props));

    console.log(props.settings);

    //this.state = props.settings;


    return _this;
  }

  _createClass(TemplateOne, [{
    key: 'render',
    value: function render() {

      console.log(this.props);

      return React.createElement(
        'div',
        null,
        'Template One',
        React.createElement(Nav, { items: this.props.settings.nav })
      );
    }
  }]);

  return TemplateOne;
}(React.Component);