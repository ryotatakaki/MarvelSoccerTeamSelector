import React, { useState } from 'react';
import styled from 'styled-components';

// Styles the backdrop of the modal, covering the entire viewport
const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); 
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1050; 
`;

// Styles the actual modal content container
const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  width: auto; 
  max-width: 500px; 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center; 
  position: relative;
`;

// Styles the character image within the modal
const CharacterImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%; 
  object-fit: cover; 
`;

// Styles the position selector dropdown
const Select = styled.select`
  width: 100%;
  padding: 8px 10px;
  margin-top: 10px;
  margin-bottom: 20px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  appearance: none; // Removes default styling provided by the browser
  &:focus {
    outline: none;
    border-color: #007bff; 
  }
`;

// Styles the button to add the character to the team
const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border: none;
  border-radius: 4px;
  background-color: #FF0000;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s; 

  &:hover {
    background-color: #CC0000; 
  }
`;

// Styles the close button for the modal
const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  border: none;
  background: none;
  cursor: pointer;
  color: #000; 
  &:hover {
    color: grey; 
  }
`;

// Defines the functional component for character details modal
function CharacterModal({ character, onClose, onAddToTeam }) {
    const [position, setPosition] = useState(''); // Tracks the selected position for adding the character to the team
    const [error, setError] = useState(''); // Tracks the error state

    const handleAddToTeam = () => {
        if (position === '') {
            setError('Please select a position before adding to the team.'); // Sets an error message if no position is selected
            return; // Prevents further execution
        }
        onAddToTeam(character, position); // Adds the character to the team with the selected position
        setError(''); // Clears the error message
        onClose(); // Closes the modal
    };

    if (!character) return null; // Renders nothing if no character is selected
  
    return (
      <ModalBackdrop onClick={onClose}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <CloseButton onClick={onClose}>&times;</CloseButton> 
          <h2>{character.name}</h2>
          <CharacterImage src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
          <p>{character.description || "No description available."}</p>
          <Select value={position} onChange={(e) => setPosition(e.target.value)}>
            <option value="">Select Position</option> 
            {/* List of positions */}
            <option value="GK">GK</option>
            <option value="LDF">LDF</option>
            <option value="RDF">RDF</option>
            <option value="LMF">LMF</option>
            <option value="RMF">RMF</option>
            <option value="FW">FW</option>
          </Select>
          {error && <p style={{ color: 'red' }}>{error}</p>} 
          <Button onClick={handleAddToTeam}>Add to Team</Button>
        </ModalContent>
      </ModalBackdrop>
    );
}
  
export default CharacterModal;
