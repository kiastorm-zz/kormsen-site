/* eslint-disable react/destructuring-assignment */

import { Link as GatsbyLink } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Box, NavLink } from 'rebass';
import styled from 'styled-components';
import { themeGet } from 'styled-system';
import Skull from '../assets/skull.svg';

const VerticalNavbar = styled(Box)`
  height: 100%;
  width: 60px;
  align-items: center;
`;

const NavbarContent = styled(Box)`
  display: flex;
  justify-content: center;
  padding: 20px 0;
`;

const Navbar = ({ brand, ...props }) => {
  return (
    <VerticalNavbar as="header" color="blue" bg="black" {...props}>
      <NavbarContent bg="black">
        <NavLink as={GatsbyLink} to="/" px={0} my={3}>
          <Skull fill="#FBEDC1" width="32px" />
        </NavLink>
      </NavbarContent>
    </VerticalNavbar>
  );
};

Navbar.propTypes = {
  brand: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
};

Navbar.defaultProps = {
  brand: 'kormsen',
};

export default Navbar;
