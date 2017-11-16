import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

const styles = {
  root: {
    paddingTop: 10,
    marginTop: 50,
    marginLeft: 50,
    marginRight: 50,
    flex: 'auto',
    backgroundColor: 'grey',
  },
};

/**
 * Connected Component
 * Renders Header Component
 */
class Header extends React.Component {
  static propTypes = {
    classes: PropTypes.shape({
      root: PropTypes.string.isRequired,
    }).isRequired,
  };

  render() {
    return (
      <div>
        <Paper className={this.props.classes.root}>
          <Typography type="display4" component="h1">
            Todos
          </Typography>
        </Paper>

      </div>
    );
  }
}

export default withStyles(styles)(connect()(Header));
