import React from 'react';
import styled from 'styled-components';

// Styles the share button with Twitter's brand color, rounded corners, and hover effects
const StyledButton = styled.button`
  background-color: #1DA1F2; 
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: background-color 0.2s, transform 0.2s;

  &:hover {
    background-color: #1991db; 
    transform: translateY(-2px); 
  }

  &:active {
    transform: translateY(1px); 
  }
`;

// The main functional component for sharing the selected team on Twitter
function ShareButton({ team }) {
  const handleShare = () => {
    // Check if there's a team to share
    if (!team || team.length === 0) {
      console.log('No team to share');
      return;
    }
    // Converts the team information to a text string for sharing
    const teamText = team.map(member => `${member.name} as ${member.position}`).join(', ');
    const shareText = `Check out my Marvel soccer team! ${teamText}`;

    // Generates the URL for sharing on Twitter
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;

    // Opens the Twitter share dialog in a new window
    window.open(twitterUrl, '_blank');
  };

  // Renders the styled button that triggers the share functionality
  return (
    <StyledButton onClick={handleShare}>Share Your Team on Twitter</StyledButton>
  );
}

export default ShareButton;
