import React, { useState } from 'react';
import Header from './components/Header';
import CharacterSelection from './components/CharacterSelection';
import SoccerField from './components/SoccerField';
import styled from 'styled-components'; 

// AppLayout defines the overall layout of the application, defaulting to a column layout for mobile views.
const AppLayout = styled.div`
  display: flex;
  flex-direction: column; 
`;

// MainLayout adjusts the layout based on screen size, using media queries for responsive design.
const MainLayout = styled.div`
  display: flex;
  flex-direction: column; 
  @media (min-width: 768px) {
    flex-direction: row; 
  }
`;

// SoccerCourtContainer and SearchAndResultsContainer split the screen in half on desktop sizes.
const SoccerCourtContainer = styled.div`
  @media (min-width: 768px) {
    width: 50%; 
  }
`;

const SearchAndResultsContainer = styled.div`
  @media (min-width: 768px) {
    width: 50%; 
  }
`;

function App() {
  const [team, setTeam] = useState([]); // State to track the selected team

  // Function to add a character to the team, ensuring no duplicate characters based on their ID.
  const addCharacterToTeam = (character, position) => {
    const isCharacterAlreadyInTeam = team.some(member => member.id === character.id);

    if (isCharacterAlreadyInTeam) {
      alert(`${character.name} is already in the team!`); // Alert if character is already in the team
      return;
    }

    // Filters out any existing character in the selected position and updates the team with the new selection.
    const updatedTeam = team.filter(member => member.position !== position);
    updatedTeam.push({ ...character, position }); // Adds the new character to the team
    setTeam(updatedTeam); // Updates the state with the new team configuration
  };

  return (
    <AppLayout>
      <Header team={team} />  {/* The Header component displays the application title and possibly the share button */}
      <MainLayout>
        <SoccerCourtContainer>
          <SoccerField team={team} /> {/* SoccerField component displays the selected team on a soccer field layout */}
        </SoccerCourtContainer>
        <SearchAndResultsContainer>
          <CharacterSelection onAddToTeam={addCharacterToTeam} /> {/* CharacterSelection handles character search and selection */}
        </SearchAndResultsContainer>
      </MainLayout>
    </AppLayout>
  );
}

export default App;
