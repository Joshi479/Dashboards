import React, { Component } from 'react';
import Header from './components/Header/Header.js';
import SideDrawer from './components/SideDrawer/SideDrawer.js';
import BackDrop from './components/Backdrop/Backdrop.js';
import Main from './components/Main/Main.js';
import { Provider } from 'react-redux';
import store from './store.js';


class App extends Component {
  constructor(props){
    super(props);
    this.drawerToggleClickHandler = this.drawerToggleClickHandler.bind(this);
    this.backDropClickHandler = this.backDropClickHandler.bind(this);
    this.state = {
      sideDrawerOpen: false
    }
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    });
  };

  backDropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };
    render() {
      let backDrop;

      if(this.state.sideDrawerOpen){
        backDrop = <BackDrop click={this.backDropClickHandler}/>;
      }
      return (
        <Provider store={store}> 
          <div className="off-canvas-wrapper">
            <Header drawerToggleHandler={this.drawerToggleClickHandler} />
            <SideDrawer show={this.state.sideDrawerOpen}/>
            {backDrop}
            <Main id="page" />
          </div>
        </Provider>     
      );
    }
  }
  
  export default App;