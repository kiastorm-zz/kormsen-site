import { Link as GatsbyLink } from 'gatsby';
import React from 'react';
import { Box, Heading, Link, Text, Button } from 'rebass';
import styled from 'styled-components';
import { themeGet } from 'styled-system';
import Layout from '../components/Layout';
import ArrowIcon from '../assets/arrow.svg';
import theme from '../theme';

const HeadingUnderline = styled.span`
  background-color: ${themeGet('colors.orange')};
  display: flex;
  height: 5px;
  width: auto;
`;

const HomepageContent = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: space-between;
`;

const LinkText = styled(Text)`
  color: ${themeGet('colors.midGrey')};
  font-family: brandon-grotesque, sans-serif;
  margin-right: 30px;
  text-align: right;
  transition: all ease-in 0.15s;
`;

const Arrow = styled(ArrowIcon)``;

const LinkWithArrow = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 60px;
  text-decoration: none;
  transition: all ease-in-out 0.15s;

  &:hover {
    transform: scale(1.1);

    ${LinkText} {
      color: ${themeGet('colors.beige')};
    }

    ${Arrow} g {
      fill: ${themeGet('colors.beige')};
    }

    ${Arrow} path {
      stroke: ${themeGet('colors.beige')};
    }
  }
`;

const IndexPage = () => (
  <Layout>
    <HomepageContent>
      <Box>
        <Box
          mb={20}
          css={{
            display: 'inline-flex',
            flexDirection: 'column',
            width: 'auto',
          }}
        >
          <Heading
            fontSize={[6, 7]}
            fontWeight="500"
            is="h1"
            css={{ display: 'inline' }}
          >
            kia storm
          </Heading>
          <HeadingUnderline />
        </Box>
        <Heading fontWeight="400" fontSize={[5, 6]} is="h3">
          a web interface & experience designer / developer
        </Heading>
      </Box>
      <Box>
        <LinkWithArrow href="/work">
          <LinkText fontSize={[3, 4]}>
            i specialize in front end javascript
          </LinkText>
          <Arrow />
        </LinkWithArrow>
        <LinkWithArrow href="/blog">
          <LinkText fontSize={[3, 4]}>i also write down my thoughts</LinkText>
          <Arrow />
        </LinkWithArrow>
        <LinkWithArrow href="/music">
          <LinkText fontSize={[3, 4]}>and i create music</LinkText>
          <Arrow />
        </LinkWithArrow>
      </Box>
    </HomepageContent>
  </Layout>
);

export default IndexPage;
