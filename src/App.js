import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import { Link, browserHistory } from 'react-router';
import IconButton from 'material-ui/IconButton';
import Arrow from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import './App.css';

class App extends Component {
  handleTouchTap() {
    browserHistory.push('/');
  }

  render() {
    return (
      <div className="App">
        <AppBar
          title={<span style={{ cursor: 'pointer' }}>TV Shows</span>}
          onTitleTouchTap={this.handleTouchTap}
          iconElementLeft={
            this.props.params.tvshow &&
            <Link to="/">
              <IconButton><Arrow /></IconButton>
            </Link>
          }
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        {this.props.children}
      </div>
    );
  }
}

export default App;
