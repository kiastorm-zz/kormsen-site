import { Link as GatsbyLink } from 'gatsby';
import React from 'react';
import { Box, Heading, Link, Text, Button } from 'rebass';
import styled from 'styled-components';
import { themeGet } from 'styled-system';
import Layout from '../components/Layout';
import ArrowIcon from '../assets/arrow.svg';
import theme from '../theme';

const HeadingUnderline = styled.span`
  color: ${props => props.theme.colors.orange};
  display: flex;
  height: 5px;
  width: auto;
`;

const Intro = styled.div`
  display: inline-flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: auto;
`;

const HomepageContent = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: space-between;
`;

const LinkText = styled.h3`
  margin-right: 30px;
  text-align: right;
  transition: all ease-in 0.15s;
`;

const PageHeading = styled.h1`
  color: ${theme.colors.lightGrey};
  font-style: italic;
  text-shadow: 0 1px #303d33, -1px 0 #3d3235, -1px 2px #303d33, -2px 1px #3d3235,
    -2px 3px #303d33, -3px 2px #3d3235, -3px 4px #303d33, -4px 3px #3d3235,
    -4px 5px #303d33, -5px 4px #3d3235, -5px 6px #303d33, -6px 5px #3d3235,
    -6px 7px #303d33, -7px 6px #3d3235, -7px 8px #303d33, -8px 7px #3d3235;
`;

const IndexPage = () => (
  <Layout>
    <HomepageContent>
      <Box>
        <Intro>
          <PageHeading>kia storm</PageHeading>
          <HeadingUnderline />
        </Intro>
        <h2>a web interface & experience designer / developer</h2>
      </Box>
      <Box>
        <LinkText>i specialize in front end javascript</LinkText>
        <LinkText>i also write down my thoughts</LinkText>
        <LinkText>and i create music</LinkText>
      </Box>
    </HomepageContent>
  </Layout>
);

export default IndexPage;
