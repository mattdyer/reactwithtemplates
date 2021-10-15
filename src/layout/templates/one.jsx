'use strict';

class TemplateOne extends React.Component {
  constructor(props) {
    
    super(props);
    
    console.log('template props');
    console.log(props);
    
    //this.state = props.settings;
    
    
  }
  
  renderPage(){
    var pageComponents = {
      HomePage,
      ContentPage
    }
    
    console.log(this.props.currentpage);
    console.log(this.props.settings.pages);
    
    var PageComponent = pageComponents[this.props.settings.pages[this.props.currentpage].layout];
    
    return(
      <PageComponent></PageComponent>
    );
  }
  
  render() {
    
    
    var page = this.renderPage();
    
    
    return (
      <div>
        Template One
        <Nav items={this.props.settings.nav} updateCurrentPage={this.props.updateCurrentPage} currentpage={this.props.currentpage}></Nav>
        {page}
      </div>
    );
    
  }
}

