import React from 'react';
import styled from 'styled-components';
import ShareButton from './ShareButton'; 

const HeaderContainer = styled.header`
  width: 100%;
  padding: 10px 0;
  background-color: #FF0000; 
  color: white;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const HeaderTitle = styled.h1`
  margin: 0;
  padding: 10px 0;
  font-size: 24px;
`;

const StyledShareButton = styled(ShareButton)`
  background-color: #ffffff;
  color: #007bff;
  border: 2px solid #007bff;
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background-color: #007bff;
    color: #ffffff;
  }
`;

function Header({ team }) {
  return (
    <HeaderContainer>
      <HeaderTitle>My Marvel Soccer Team</HeaderTitle>
      <StyledShareButton team={team} />
    </HeaderContainer>
  );
}

export default Header;
