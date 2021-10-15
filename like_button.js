'use strict';

class LikeButton extends React.Component {
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
      return e(
        'div', 
        {
          'className': this.class
        }, 
        'You Liked ', 
        e('strong', {}, this.name), '. ', 
        e(
          OtherButton, 
          {
            'name': 'Un-Like', 
            'class': 'other-button',
            onClick: this.unLike
          }
        )
      );
    }

    return e(
      'button',
      { onClick: this.like, 'className': this.class },
      'Like'
    );
  }
}

