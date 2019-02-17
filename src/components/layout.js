import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import { ThemeProvider } from 'emotion-theming';
import theme from '../style/theme';
import { toggleDrawer as toggleDrawerAction } from '../state/app';

import Header from './header';
import Drawer from './drawer';
import './layout.css';

const Container = styled.main`
  width: 100vw;
  overflow-x: hidden;
`;

const Content = styled.section`
  transition: transform 0.3s ease-in-out;
  transform: perspective(200px)
    ${p =>
      p.isDrawerOpen
        ? `translateX(${p.theme.size(8)}) translateZ(-20px)`
        : 'none'};
  padding-top: ${p => p.theme.size(5)};
  padding-left: ${p => p.theme.size(1)};
  padding-right: ${p => p.theme.size(1)};
`;

const Overlay = styled.div`
  position: fixed;
  z-index: ${p => p.theme.zIndex.overlay};
  top: 0;
  left: 0;
  background: black;
  width: 100vw;
  height: 100vh;
  transition: opacity 0.3s ease-in-out;
  opacity: ${p => (p.isDrawerOpen ? 0.5 : 0)};
  pointer-events: ${p => (p.isDrawerOpen ? 'all' : 'none')};
`;

const Layout = ({ children, isDrawerOpen, toggleDrawer }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <Container>
          <Content isDrawerOpen={isDrawerOpen}>
            {children}
            <footer>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </footer>
          </Content>
        </Container>
        <Overlay
          isDrawerOpen={isDrawerOpen}
          onClick={() => toggleDrawer(false)}
        />
        <Drawer />
        <Header siteTitle={data.site.siteMetadata.title} />
      </ThemeProvider>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default connect(
  state => ({ isDrawerOpen: state.app.isDrawerOpen }),
  dispatch => ({ toggleDrawer: open => dispatch(toggleDrawerAction(open)) }),
)(Layout);
