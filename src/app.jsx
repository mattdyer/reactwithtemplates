'use strict';

class App extends React.Component {
  constructor(props) {
    
    super(props);
    
    this.state = {settings: {}, settingsRetrieved: false, currentpage: 'home'};
    
    this.readSettings();
    
    this.updateCurrentPage = this.updateCurrentPage.bind(this);
    
  }
  
  readSettings() {
    var domain = window.location.hostname;
    
    fetch('/sites/' + domain + '/settings.json')
      .then(response => response.json())
      .then(data => this.setState({settings: data, settingsRetrieved: true}));
    
  }
  
  updateCurrentPage(newPage){
    this.setState({currentpage: newPage});
  }
  
  renderLoadingScreen(){
    return (
      <div>
        Loading...
      </div>
    );
  }
  
  renderTemplate(){
    var templateComponents = {
      TemplateOne
    }
    
    
    var TemplateComponent = templateComponents[this.state.settings.template];
      
    return(
      <TemplateComponent settings={this.state.settings} updateCurrentPage={this.updateCurrentPage} currentpage={this.state.currentpage}></TemplateComponent>
    );
  }
  
  render() {
    var result = '';
    
    if(this.state.settingsRetrieved){
      result = this.renderTemplate();
    }else{
      result = this.renderLoadingScreen();
    }
    
    return result
    
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);