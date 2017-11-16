import React from 'react';
import { connect } from 'react-redux';
import Header from './../Header/Header';

/**
 * Connected Component
 * Renders TodoApp
 */
class TodoApp extends React.Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default connect()(TodoApp);
