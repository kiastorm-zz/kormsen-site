import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import { Box, Flex, Heading, Provider as RebassProvider, Text } from 'rebass';
import { css, injectGlobal } from 'styled-components';
import Footer from './Footer';
import Header from './Header';

injectGlobal`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
  }
`;

const Layout = ({ children }) => (
  <RebassProvider
    is={Flex}
    flexDirection="column"
    css={css`
      min-height: 100vh;
    `}
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

    <Header brand={<Heading>Gatsby</Heading>} />

    <Box is="main" flex={1}>
      {children}
    </Box>

    <Footer>
      <Text align="center">Sticky footer</Text>
    </Footer>
  </RebassProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
