import React, { Component } from 'react';
import Layout from '../../components/Layout/Layout';
import TodoApp from '../../components/TodoApp/TodoApp';

class Home extends Component {
  render() {
    return (
      <Layout>
        <TodoApp />
      </Layout>
    );
  }
}

export default Home;
