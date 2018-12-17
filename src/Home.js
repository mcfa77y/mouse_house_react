import React from 'react';
import PropTypes from 'prop-types';

function Home(props) {
  return <h2>Home!@ React {props.version || 16} Documentation</h2>;
}

Home.propTypes = {
  version: PropTypes.number
};

export default Home;
