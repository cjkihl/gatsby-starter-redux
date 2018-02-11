import React from 'react';
import { connect } from 'react-redux';
import styled from 'react-emotion';
import { navigateTo, withPrefix } from 'gatsby-link';
import Hamburger from './Hamburger';
import { toggleDrawer as toggleDrawerAction } from '../../state/app';

const MenuIcon = styled.nav`
  position: absolute;
  display: flex;
  width: ${p => p.theme.size(2)};
  transition: right 0.3s ease-in-out;
  right: ${p => (p.isDrawerOpen ? p.theme.size(1) : `-${p.theme.size(4)}`)};
`;

const Paper = styled.aside`
  position: fixed;
  z-index: ${p => p.theme.zIndex.drawer};
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
  height: 100vh;
  width: ${p => p.theme.size(16)};
  background: ${p => p.theme.palette.secondary.main};
  transition: transform 0.3s ease-in-out;
  transform: translateX(${p => (p.isDrawerOpen ? 0 : `-${p.theme.size(16)}`)});
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  height: ${p => p.theme.size(4)};
  background: ${p => p.theme.palette.secondary.dark};
`;

const Item = styled.a`
  color: ${p => p.theme.palette.secondary.contrast};
  padding: ${p => p.theme.size(1)} ${p => p.theme.size(2)};
  &:hover {
    background: ${p => p.theme.palette.secondary.main};
  }
  cursor: pointer;
`;

// Static data to keep this starter as simple as possible,
const items = [{ url: '/', name: 'Home' }, { url: '/page-2/', name: 'Page 2' }];

const Drawer = ({ isDrawerOpen, toggleDrawer }) => (
  <Paper isDrawerOpen={isDrawerOpen}>
    <Header>
      <MenuIcon isDrawerOpen={isDrawerOpen}>
        <Hamburger />
      </MenuIcon>
    </Header>
    {items.map(item => (
      <Item
        key={item.url}
        onClick={() => {
          navigateTo(withPrefix(item.url));
          toggleDrawer(false);
        }}
      >
        {item.name}
      </Item>
    ))}
  </Paper>
);

export default connect(
  state => ({ isDrawerOpen: state.app.isDrawerOpen }),
  dispatch => ({ toggleDrawer: open => dispatch(toggleDrawerAction(open)) }),
)(Drawer);
