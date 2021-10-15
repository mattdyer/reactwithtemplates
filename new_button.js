'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewButton = function (_React$Component) {
  _inherits(NewButton, _React$Component);

  function NewButton(props) {
    _classCallCheck(this, NewButton);

    var _this = _possibleConstructorReturn(this, (NewButton.__proto__ || Object.getPrototypeOf(NewButton)).call(this, props));

    _this.state = { liked: false };

    _this.name = props.name;
    _this.class = props.class;

    _this.unLike = _this.unLike.bind(_this);
    _this.like = _this.like.bind(_this);

    return _this;
  }

  _createClass(NewButton, [{
    key: "like",
    value: function like() {
      this.setState({ liked: true });
    }
  }, {
    key: "unLike",
    value: function unLike() {
      this.setState({ liked: false });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.liked) {
        return React.createElement(
          "div",
          { className: this.class },
          "You Liked",
          React.createElement(
            "strong",
            null,
            " ",
            this.name
          ),
          ".\xA0",
          React.createElement(OtherButton, { name: "Un-Like", "class": "other-button", onClick: this.unLike })
        );
      }

      return React.createElement(
        "button",
        { onClick: this.like, className: this.class },
        "Like"
      );
    }
  }]);

  return NewButton;
}(React.Component);