import React from 'react';
import { connect } from 'react-redux';
import styled from 'react-emotion';
import { toggleDrawer as toggleDrawerAction } from '../../state/app';

const Hamburger = styled.a`
  transition: transform 0.3s ease-in-out;
  transform: ${props => (props.isDrawerOpen ? 'scale(0.7)' : 'scale(0.9)')};
`;

const Line = styled.span`
  width: 40px;
  height: 5px;
  background-color: white;
  display: block;
  margin: 8px auto;
  transition: transform 0.3s ease-in-out;
`;

const Menu = ({ isDrawerOpen, toggleDrawer }) => (
  <Hamburger
    isDrawerOpen={isDrawerOpen}
    href="#"
    onClick={() => toggleDrawer(!isDrawerOpen)}
  >
    <Line
      css={{
        transform: isDrawerOpen ? 'translateX(-10px) rotate(-45deg)' : 'none',
      }}
    />
    <Line />
    <Line
      css={{
        transform: isDrawerOpen ? 'translateX(-10px) rotate(45deg)' : 'none',
      }}
    />
  </Hamburger>
);

export default connect(
  state => ({ isDrawerOpen: state.app.isDrawerOpen }),
  dispatch => ({ toggleDrawer: open => dispatch(toggleDrawerAction(open)) }),
)(Menu);
