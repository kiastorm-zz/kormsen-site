/* eslint-disable react/destructuring-assignment */

import { Link as GatsbyLink } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Box, Container, NavLink } from 'rebass';

const Navbar = ({ brand, ...props }) => {
  return (
    <Box is="header" color="white" bg="rebeccapurple" {...props}>
      <Container>
        <NavLink is={GatsbyLink} to="/" px={0} my={3}>
          {brand}
        </NavLink>
      </Container>
    </Box>
  );
};

Navbar.propTypes = {
  brand: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
};

Navbar.defaultProps = {
  brand: 'kormsen',
};

export default Navbar;
