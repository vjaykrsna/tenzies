import { useState } from "react";
import Die from "./Die";
import { nanoid } from "nanoid";
// import { useWindowSize } from "@react-hook/window-size";
import Confetti from "react-confetti";

export default function App() {
    const [dice, setDice] = useState(generateDiceValues);
    // const { width, height } = useWindowSize();

    function generateDiceValues() {
        return Array(10)
            .fill(0)
            .map(() => ({
                value: Math.ceil(Math.random() * 6),
                isHeld: false,
                id: nanoid(),
            }));
    }

    function handleRoll() {
        gameWon
            ? setDice(generateDiceValues)
            : setDice((prevDice) =>
                  prevDice.map((die) =>
                      die.isHeld
                          ? die
                          : { ...die, value: Math.ceil(Math.random() * 6) }
                  )
              );
    }

    function handleClick(id) {
        setDice((prevDice) =>
            prevDice.map((die) =>
                die.id === id ? { ...die, isHeld: !die.isHeld } : die
            )
        );
    }

    const gameWon = dice.every(
        (die) => die.isHeld && die.value == dice[0].value
    );

    const dieBtnList = dice.map((die) => (
        <Die key={die.id} die={die} handleClick={() => handleClick(die.id)} />
    ));

    return (
        <main>
            {gameWon && <Confetti />}
            <h1>Tenzies</h1>
            <p>
                Roll untill all dice are same. Click each die to freeze it to
                its current value between rolls.
            </p>
            <div className="dice-container">{dieBtnList}</div>
            <button className="roll-btn" onClick={handleRoll}>
                {gameWon ? "New Game" : "Roll"}
            </button>
        </main>
    );
}
