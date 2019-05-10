import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';

import styled, { injectGlobal, ThemeProvider } from 'styled-components';
import Navbar from './Navbar';
import theme from '../theme';

import '../scss/index.scss';

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

console.log(theme);

const MainView = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  padding: 40px 60px;
  background-color: ${theme.colors.lightBlack};
  overflow-y: scroll;
  overflow-x: hidden;
`;

const Layout = ({ children }) => {
  console.log(theme);
  return (
    <>
      <StaticQuery
        query={graphql`
          {
            site {
              siteMetadata {
                title
                language
              }
            }
          }
        `}
        render={data => (
          <Helmet
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            defaultTitle={data.site.siteMetadata.title}
          >
            <html lang={data.site.siteMetadata.language} />
          </Helmet>
        )}
      />
      <ThemeProvider theme={theme}>
        <AppContainer>
          <Navbar />
          <MainView>{children}</MainView>
        </AppContainer>
      </ThemeProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
