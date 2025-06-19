# Tenzies Game

This is a simple web-based game called Tenzies, built with React. The objective of the game is to roll dice until all ten dice show the same number. Players can click on individual dice to "freeze" them, preventing them from rolling in subsequent turns.

## How to Play

1.  **Roll the Dice:** Click the "Roll" button to generate new random numbers for all unfrozen dice.
2.  **Freeze Dice:** Click on any die to freeze it. Frozen dice will retain their value in the next roll.
3.  **Unfreeze Dice:** Click on a frozen die to unfreeze it.
4.  **Win:** The game ends when all ten dice display the same number.

## Technologies Used

*   React
*   JavaScript
*   CSS
*   Vite (for development server and build)

## Setup and Installation

To run this project locally:

1.  **Clone the repository:**
    ```bash
    git clone [repository-url]
    cd tenzies
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Start the development server:**
    ```bash
    npm run dev
    ```
    This will typically open the application in your browser at `http://localhost:5173` (or another available port).

## Project Structure

*   `src/App.jsx`: The main application component, handling game logic and state.
*   `src/Die.jsx`: Component for individual dice.
*   `src/index.css`: Global styles for the application.
*   `public/`: Static assets.
*   `index.html`: The main HTML file.
