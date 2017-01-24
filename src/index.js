import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

// material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#000',
    textColor: '#fff',
  },
  appBar: {
    height: 50,
  },
});

// relative imports
import reducer from './reducer';

// layout
import App from './App';
import './index.css';

// pages
import List from './components/List';
import Detail from './components/Detail';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk),
);

const application = (
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <Router history={ browserHistory }>
        <Route path="/" component={ App }>
          <IndexRoute component={ List } />
          <Route path='tvshows/:tvshow' component={ Detail } />
        </Route>
      </Router>
    </MuiThemeProvider>
  </Provider>
);

ReactDOM.render(
  application,
  document.getElementById('root')
);
