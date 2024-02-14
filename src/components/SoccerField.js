import React from 'react';
import styled from 'styled-components';

// Styles the soccer field container
const Field = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px; 
  height: 600px; 
  background-color: #60A917; 
  margin: 20px auto;
  border: 3px solid #FFF; 
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

// Base style for field markings
const Marking = styled.div`
  position: absolute;
  border: 3px solid #FFF; 
`;

// Styles the half-line marking
const HalfLine = styled.div`
  position: absolute;
  width: 100%;
  height: 3px;
  top: 50%;
  left: 0;
  background-color: #FFF; 
`;

// Styles the center circle
const CenterCircle = styled(Marking)`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  top: calc(50% - 30px);
  left: calc(50% - 30px);
`;

// Styles the penalty area
const PenaltyArea = styled(Marking)`
  width: 200px; 
  height: 120px; 
  bottom: ${(props) => props.side === 'top' ? 'unset' : '0'}; // Position at the field's bottom for 'bottom' side
  top: ${(props) => props.side === 'top' ? '0' : 'unset'}; // Position at the field's top for 'top' side
  left: calc(50% - 100px); 
`;

// Styles the goal area
const GoalArea = styled(Marking)`
  width: 120px; 
  height: 60px; 
  bottom: ${(props) => props.side === 'bottom' ? '0' : '120px'}; // Adjust position inside the penalty area for 'bottom' side
  top: ${(props) => props.side === 'top' ? '0' : 'unset'}; // Adjust position inside the penalty area for 'top' side
  left: calc(50% - 60px); 
`;

// Styles player representations on the field
const Player = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translate(-50%, -50%);
`;

// Styles player images
const PlayerImage = styled.img`
  width: 40px; // Adjusts image size
  height: 40px; // Adjusts image size
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 5px; // Space between the image and name
`;

// Styles player names
const PlayerName = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
  padding: 2px 5px;
  border-radius: 5px;
  font-size: 12px;
`;

// Predefined positions for players on the field
const positions = {
  GK: { top: '90%', left: '50%' },
  LDF: { top: '70%', left: '30%' },
  RDF: { top: '70%', left: '70%' },
  LMF: { top: '50%', left: '30%' },
  RMF: { top: '50%', left: '70%' },
  FW: { top: '30%', left: '50%' },
};

// The main functional component for the soccer field
const SoccerField = ({ team }) => {
    return (
      <Field>
        {/* Field markings */}
        <HalfLine />
        <CenterCircle />
        <PenaltyArea side="top" />
        <PenaltyArea side="bottom" />
        <GoalArea side="top" />
        <GoalArea side="bottom" />
        {/* Mapping team array to display players */}
        {team.map((player, index) => (
          <Player key={index} style={{ top: positions[player.position].top, left: positions[player.position].left }}>
            <PlayerImage src={player.thumbnail.path + '.' + player.thumbnail.extension} alt={player.name} />
            <PlayerName>{player.name}</PlayerName>
          </Player>
        ))}
      </Field>
    );
  };
  
export default SoccerField;
