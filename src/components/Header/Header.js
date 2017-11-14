import React from 'react';
import { connect } from 'react-redux';
import ButtonAppBar from './ButtonAppBar';

/**
 * Connected Component
 * Renders ButtonBar and fetches MenuService onMount
 */
class Header extends React.Component {
  constructor(props) {
    super(props);
    /**
    * @type {object}
    * @property {string} title - Title.
    * @property {object} routes - Routes.
    */
    this.state = {
      title: 'Hello',
      routes: [
        {
          route: '/login',
          label: 'Login',
        },
      ],
    };
  }

  render() {
    return (
      <div>
        {this.state.routes ? (
          <ButtonAppBar title={this.state.title} routes={this.state.routes} />
        ) : null}
      </div>
    );
  }
}

export default connect()(Header);
