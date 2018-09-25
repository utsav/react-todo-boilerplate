import React from 'react';
import { Route, withRouter, Switch } from 'react-router-dom'

import Layout from './components/layout'
import TodoList from './pages/todo/list'
import EditTodo from './pages/todo/edit';
import CreateTodo from './pages/todo/create';

import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
  return <Switch>
    <Layout>
      <Route exact path="/" component={TodoList} />
      <Route exact path="/todos" component={TodoList} />
      <Route sensitive exact path="/todos/create" component={CreateTodo} />
      <Route exact path="/todos/edit/:id" component={EditTodo} />
    </Layout>
  </Switch>
}
export default withRouter(App);
