'use strict';

class App extends React.Component {
  constructor(props) {
    
    super(props);
    
    this.state = {settings: {}, settingsRetrieved: false};
    
    this.readSettings();
    
  }
  
  readSettings() {
    var domain = window.location.hostname;
    
    fetch('/sites/' + domain + '/settings.json')
      .then(response => response.json())
      .then(data => this.setState({settings: data, settingsRetrieved: true}));
    
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
      <TemplateComponent settings={this.state.settings}></TemplateComponent>
    );
  }
  
  render() {
    var result = '';
    
    if(this.state.settingsRetrieved){
      result = renderTemplate();
    }else{
      result = renderLoadingScreen();
    }
    
    return result
    
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);