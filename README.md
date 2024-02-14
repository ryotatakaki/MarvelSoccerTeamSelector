## MarvelSoccerTeamSelector
The Marvel Soccer Team Selector is a single-page application (SPA) that allows users to create their own unique soccer team using characters from the Marvel universe. This application leverages the Marvel API to fetch character data and enables users to select characters for specific soccer positions, forming a team of six including a goalkeeper, defenders, midfielders, and a striker.

## Features

- **Marvel Character Search**: Powered by the Marvel API, this feature allows users to explore Marvel's extensive catalog of characters to find their favorites.
- **Custom Team Composition**: Users can build their own soccer team, choosing characters for specific positions, ensuring a personalized experience.
- **Responsive Design**: Crafted to ensure a seamless experience across various devices, enhancing accessibility and user satisfaction.
- **Social Sharing Capability**: Amplifies user engagement by allowing users to share their unique teams on Twitter, fostering community interaction.

## API

- Sign up at the Marvel Developer Portal to obtain your API keys.
- Configure your API keys in a `.env` file at the project's root:

- REACT_APP_MARVEL_PUBLIC_KEY=your_public_api_key
- REACT_APP_MARVEL_PRIVATE_KEY=your_private_api_key

  
## Development Notes

- **API Integration**: The Marvel API was integrated to dynamically fetch character data, showcasing real-time data usage in web applications.
- **State Management**: React Hooks were employed for efficient state management across the application, demonstrating modern React practices.
- **Styling**: Styled-components were utilized for component-specific styling to maintain a clean and organized codebase, illustrating the application's scalable and maintainable architecture.
- **Responsive Design Considerations**: Special attention was given to ensure the application is fully responsive, adhering to best practices in web design and user experience.

## Future Enhancements

- **User Authentication**: Implementing user login functionality to save and manage multiple teams.
- **Advanced Team Statistics**: Introducing statistical analysis of teams based on character attributes provided by the Marvel API.

## Usage

1. Use the search bar to find Marvel characters by name.
2. Click on a character from the search results to view more details.
3. Assign the character to a position on your soccer team.
4. Once your team is assembled, use the "Share Your Team on Twitter" button to brag about your selection.

## Built With

- [React.js](https://reactjs.org/) - The web framework used
- [Styled-components](https://styled-components.com/) - For styling components
- [Marvel API](https://developer.marvel.com/) - Used to fetch character data

