import React, { useState } from 'react';
import CharacterSearch from './CharacterSearch'; 
import CharacterModal from './CharacterModal'; 

// Defines the CharacterSelection component that handles character selection for the team
function CharacterSelection({ onAddToTeam }) { // Receives the onAddToTeam function as a prop
  // State to track the currently selected character for more details or addition to the team
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  return (
    <div>
      {/* Renders the CharacterSearch component allowing users to search for Marvel characters */}
      <CharacterSearch onSelectCharacter={setSelectedCharacter} />
      {/* Conditionally renders the CharacterModal component if a character is selected */}
      {selectedCharacter && (
        <CharacterModal
          character={selectedCharacter} // Passes the selected character to the modal
          onClose={() => setSelectedCharacter(null)} // Function to close the modal
          onAddToTeam={onAddToTeam} // Passes the onAddToTeam function to the modal for adding the character to the team
        />
      )}
    </div>
  );
}

export default CharacterSelection;
