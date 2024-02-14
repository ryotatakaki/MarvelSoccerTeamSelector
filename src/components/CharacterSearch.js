import React, { useState } from 'react';
import axios from 'axios';
import md5 from 'md5';
import CharacterModal from './CharacterModal'; 
import styled from 'styled-components';

// Styles the container for the search functionality
const SearchContainer = styled.div`
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

// Styles the input field for character search
const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

// Styles the button used to initiate the search
const SearchButton = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #FF0000; 
  color: white;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #CC0000; 
  }
`;

// Styles the list that displays search results
const ResultsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Styles each item in the search results list
const ResultItem = styled.li`
  padding: 10px;
  border-bottom: 1px solid #ccc;
  width: 90%;
  text-align: center;
  &:last-child {
    border-bottom: none;
  }
  cursor: pointer;
  &:hover {
    background-color: #white;
  }
`;

// The main functional component for character search
function CharacterSearch({ onSelectCharacter }) {
  const [searchTerm, setSearchTerm] = useState(''); // Tracks the input value for search
  const [characters, setCharacters] = useState([]); // Stores the search results
  const [selectedCharacter, setSelectedCharacter] = useState(null); // Tracks the selected character for more details
  const [error, setError] = useState(''); // Tracks any errors during the search process

  // Handles the search operation
  const handleSearch = async () => {
    const ts = new Date().getTime(); // Timestamp for the request
    const publicKey = process.env.REACT_APP_MARVEL_PUBLIC_KEY; 
    const privateKey = process.env.REACT_APP_MARVEL_PRIVATE_KEY; 
    const hash = md5(ts + privateKey + publicKey); // Hash required for the API request

    try {
      const response = await axios.get(`https://gateway.marvel.com/v1/public/characters`, {
        params: {
          nameStartsWith: searchTerm,
          apikey: publicKey,
          ts: ts,
          hash: hash,
        }
      });
      setCharacters(response.data.data.results); // Set the search results
      setError(''); // Clear any previous errors
    } catch (error) {
      console.error("Error fetching characters:", error);
      setError('Characters could not be fetched. Please try again.'); 
    }
  };

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for Marvel characters"
      />
      <SearchButton onClick={handleSearch}>Search</SearchButton>
      {error && <p>{error}</p>}
      <ResultsList>
        {characters.map(character => (
          <ResultItem key={character.id} onClick={() => onSelectCharacter(character)}>
            {character.name}
          </ResultItem>
        ))}
      </ResultsList>
      {selectedCharacter && (
        <CharacterModal
          character={selectedCharacter}
          onClose={() => setSelectedCharacter(null)}
        />
      )}
    </SearchContainer>
  );
}

export default CharacterSearch;
