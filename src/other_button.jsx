'use strict';

class OtherButton extends React.Component {
  constructor(props) {
    
    super(props);
    
    this.state = { liked: false };
    
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
    
    var text = 'Click Me';
    
    if(this.state.liked){
      text = 'Liked';
    }
    
    return (
      <button onClick={this.like}>
        {text}
      </button>
    );
    
  }
}