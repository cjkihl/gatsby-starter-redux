import React from 'react';
import Link from 'gatsby-link';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import { toggleDrawer as toggleDrawerAction } from '../state/app';
import Hamburger from './hamburger';

const MenuIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 ${p => p.theme.size(1)};
  align-self: stretch;
  transition: right 0.3s ease-in-out;
  left: ${p => (p.isDrawerOpen ? p.theme.size(1) : `-${p.theme.size(4)}`)};
`;

const Navbar = styled.header`
  height: ${p => p.theme.size(4)};
  width: 100vw;
  display: flex;
  align-items: center;
  position: fixed;
  z-index: ${p => p.theme.zIndex.header};
  top: 0;
  left: 0;
  padding-left: ${p => p.theme.size(0.5)};
  background: ${p => p.theme.palette.primary.main};
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  height: ${p => p.theme.size(4)};
  position: fixed;
  z-index: ${p => p.theme.zIndex.header + 25};
  top: 0;
  left: 0;
`;

const Title = styled.h2`
  color: ${p => p.theme.palette.primary.contrast};
  padding-left: ${p => p.theme.size(4)};
  font-size: ${p => p.theme.size(1)};
  margin-bottom: 0;
  z-index: ${p => p.theme.zIndex.header + 10};
  white-space: nowrap;
  @media (min-width: 420px) {
    font-size: ${p => p.theme.size(2)};
  }
`;

const Header = ({ isDrawerOpen, toggleDrawer, siteTitle }) => (
  <div>
    <Top>
      <MenuIcon
        isDrawerOpen={isDrawerOpen}
        href="#"
        onClick={() => toggleDrawer(!isDrawerOpen)}
      >
        <Hamburger />
      </MenuIcon>
    </Top>
    <Navbar isDrawerOpen={isDrawerOpen}>
      <Link to="/" css={{ textDecoration: 'none' }}>
        <Title>{siteTitle}</Title>
      </Link>
    </Navbar>
  </div>
);

export default connect(
  state => ({ isDrawerOpen: state.app.isDrawerOpen }),
  dispatch => ({ toggleDrawer: open => dispatch(toggleDrawerAction(open)) }),
)(Header);
