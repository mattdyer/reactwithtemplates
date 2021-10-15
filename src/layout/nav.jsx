'use strict';

class Nav extends React.Component {
  constructor(props) {
    
    super(props);
    
    console.log(props.items);
    
    //this.state = props.items;
    
    
  }
  
  render() {
    
    var navItems = this.props.items.map(function(item){
      return <div key={item.key}><a href={item.link}>{item.label}</a></div>;
    });
    
    return (
      <div>
        {navItems}
      </div>
    );
    
  }
}

