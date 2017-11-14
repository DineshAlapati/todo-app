import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Layout.css';

class Layout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };
  render() {
    return <div className="App">{this.props.children}</div>;
  }
}

export default Layout;
