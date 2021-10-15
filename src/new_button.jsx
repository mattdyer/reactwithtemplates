'use strict';

class NewButton extends React.Component {
  constructor(props) {
    
    super(props);
    this.state = { liked: false };
    
    this.name = props.name;
    this.class = props.class;
    
    this.unLike = this.unLike.bind(this);
    this.like = this.like.bind(this);
    
  }
  
  like() {
    this.setState({ liked: true });
  }
  
  unLike() {
    this.setState({ liked: false });
  }

  render() {
    if (this.state.liked) {
      return (
        <div className={this.class}>
          You Liked 
          <strong> {this.name}</strong>.&nbsp;
          <OtherButton name="Un-Like" class="other-button" onClick={this.unLike}></OtherButton>
        </div>
      );
    }
    
    return (
      <button onClick={this.like} className={this.class}>
        Like
      </button>
    );

    
  }
}

