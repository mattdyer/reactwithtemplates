'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Nav = function (_React$Component) {
  _inherits(Nav, _React$Component);

  function Nav(props) {
    _classCallCheck(this, Nav);

    var _this = _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).call(this, props));

    console.log(props.items);

    _this.setCurrentPage = _this.setCurrentPage.bind(_this);

    return _this;
  }

  _createClass(Nav, [{
    key: "setCurrentPage",
    value: function setCurrentPage(e) {

      var itemData = e.target.dataset;

      console.log(e.target.dataset);

      if (itemData.page) {
        this.props.updateCurrentPage(itemData.page);
      }
    }
  }, {
    key: "render",
    value: function render() {

      var nav = this;

      var navItems = this.props.items.map(function (item) {
        return React.createElement(
          "div",
          { key: item.key },
          React.createElement(
            "a",
            { href: "#", "data-page": item.key, onClick: nav.setCurrentPage },
            item.label
          )
        );
      });

      return React.createElement(
        "div",
        null,
        navItems
      );
    }
  }]);

  return Nav;
}(React.Component);