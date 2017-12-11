import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IndexPage from './routes/IndexPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <MuiThemeProvider>
          <Route path="/" exact component={IndexPage} />
        </MuiThemeProvider>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
