import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import { Box, Flex, Provider as RebassProvider, Text } from 'rebass';
import { injectGlobal, ThemeProvider } from 'styled-components';
import Navbar from './Navbar';
import theme from '../theme';

injectGlobal`
  body {
    margin: 0;
    text-size-adjust: 100%;
  }
`;

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <RebassProvider
        is={Flex}
        flexDirection="column"
        css={{ minHeight: '100vh' }}
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

        <Flex flexWrap="wrap" css="height:100vh">
          <Navbar />
          <Box is="main" flex={1}>
            {children}
          </Box>
        </Flex>
      </RebassProvider>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
