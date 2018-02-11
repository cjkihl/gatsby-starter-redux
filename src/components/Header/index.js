import React from 'react';
import Link from 'gatsby-link';
import styled from 'react-emotion';
import { connect } from 'react-redux';

const Navbar = styled.div`
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

const Title = styled(Link)`
  color: ${p => p.theme.palette.primary.contrast};
  padding-left: ${p => p.theme.size(6)};
  text-decoration: none;
  font-size: ${p => p.theme.size(2)};
`;

const Header = ({ isDrawerOpen }) => (
  <div>
    <Navbar isDrawerOpen={isDrawerOpen}>
      <Title to="/">Gatsby</Title>
    </Navbar>
  </div>
);

export default connect(state => ({ isDrawerOpen: state.app.isDrawerOpen }))(
  Header,
);
