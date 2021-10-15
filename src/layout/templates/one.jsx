'use strict';

class TemplateOne extends React.Component {
  constructor(props) {
    
    super(props);
    
    console.log(props.settings);
    
    //this.state = props.settings;
    
    
  }
  
  render() {
    
    console.log(this.props);
    
    return (
      <div>
        Template One
        <Nav items={this.props.settings.nav}></Nav>
      </div>
    );
    
  }
}

