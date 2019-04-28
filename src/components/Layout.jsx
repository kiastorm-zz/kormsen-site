import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import { Box, Flex, Provider as RebassProvider } from 'rebass';
import styled, { injectGlobal, ThemeProvider } from 'styled-components';
import Navbar from './Navbar';
import theme from '../theme';

injectGlobal`
  body {
    color: #FBEDC1;
    margin: 0;
    text-size-adjust: 100%;
  }

  h1, h2, h3, h4 {
    font-family: brandon-grotesque, sans-serif;
    margin: 0;
  }

  h1 {
    letter-spacing: 1.8px;
  }
`;

const MainView = styled(Box)`
  display: flex;
  height: 100%;
  width: 100%;
`;

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <RebassProvider
        is={Flex}
        flexDirection="column"
        css={{ minHeight: '100vh' }}
        theme={theme}
      >
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

        <Flex css="height:100vh; width:100vw;">
          <Navbar />
          <MainView
            px={60}
            py={40}
            m={0}
            bg="lightBlack"
            as="main"
            css={{ height: '100%' }}
          >
            {children}
          </MainView>
        </Flex>
      </RebassProvider>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
