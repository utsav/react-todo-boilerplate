import React from 'react';
import { Route, withRouter, Switch } from 'react-router-dom'

import Master from './components/master'
import Todos from './containers/todos'
import EditTodo from './containers/editTodo';
import CreateTodo from './containers/createTodo';

import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
  return <Switch>
    <Master>
      <Route exact path="/" component={Todos} />
      <Route exact path="/todos" component={Todos} />
      <Route sensitive exact path="/todos/create" component={CreateTodo} />
      <Route exact path="/todos/edit/:id" component={EditTodo} />
    </Master>
  </Switch>
}
export default withRouter(App);
