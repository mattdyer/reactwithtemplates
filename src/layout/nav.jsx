'use strict';

class Nav extends React.Component {
  constructor(props) {
    
    super(props);
    
    console.log(props.items);
    
    this.setCurrentPage = this.setCurrentPage.bind(this);
    
    
    
    
  }
  
  setCurrentPage(e){
    
    var itemData = e.target.dataset;
    
    console.log(e.target.dataset);
    
    if(itemData.page){
      this.props.updateCurrentPage(itemData.page);
    }
  }
  
  render() {
    
    var nav = this;
    
    var navItems = this.props.items.map(function(item){
      return <div key={item.key}><a href={item.link} data-page={item.key} onClick={nav.setCurrentPage}>{item.label}</a></div>;
    });
    
    return (
      <div>
        {navItems}
      </div>
    );
    
  }
}

