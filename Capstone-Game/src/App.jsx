import { useState } from "react"
import { languages } from "./languages"
import { getFarewellText } from "./utils";

export default function AssemblyEndgame() {
    const [currentWord, setCurrentWord] = useState("react");
    const [guessedLetters, setGuessedLetters] = useState([]);
    
    const numGuessesLeft = languages.length - 1
    const wrongGuessedCount = guessedLetters.filter((letter) => !currentWord.includes(letter)).length;
    const isGameLost = wrongGuessedCount > numGuessesLeft;
    const isGameWon = currentWord.split("").every(letter => guessedLetters.includes(letter));
    const isGameOver = isGameWon || isGameLost;

    const lastGuessedLetter = guessedLetters[guessedLetters.length - 1];
    const isLastGuessIncorrect = lastGuessedLetter && !currentWord.includes(lastGuessedLetter);


    const alphabet = "abcdefghijklmnopqrstuvwxyz";



    const languageElements = languages.map((lang, index) => {
      const isLanguageLost = index < wrongGuessedCount;

      return (
        <span
          className={`rounded-[3px] p-1 relative ${isLanguageLost ? 'lost' : ''}`}
          style={{
            backgroundColor: lang.backgroundColor,
            color: lang.color,
            position: "relative",
            display: "inline-block",
          }}
          key={lang.name}
        >
          {lang.name}

          
        </span>
      )
    });
    const addGuessedLetter = (letter) => {
      setGuessedLetters(prevLetters => prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]);
    }

    const letterElements = currentWord.split("").map((letter, index) => (
        <span className="h-[40px] w-[40px] bg-[#323232] flex justify-center items-center text-2xl border-b-1
        " key={index}>{guessedLetters.includes(letter) ? letter.toUpperCase() : ''}</span>
    ));
    
    const keyboardElements = alphabet.split("").map(letter => {
      const isGuessed = guessedLetters.includes(letter);
      const isCorrect = isGuessed && currentWord.includes(letter);
      const isWrong = isGuessed && !currentWord.includes(letter);
      return (
        <button disabled={isGameOver} aria-disabled={guessedLetters.includes(letter)} aria-label={`Letter ${letter}`}
          onClick={() => addGuessedLetter(letter)} className={` ${isCorrect ? "bg-[#10A95B]" : isWrong ? "bg-[#EC5D49]" : "bg-[#FCBA29]"}
          h-[35px] w-[35px] border-2 border-[#F9FADA] rounded-[3px]  cursor-pointer text-[#323232]`}
        key={letter}>{letter.toUpperCase()}</button>
      )
        
    });

    

    return (
      <main>
          <header className="text-center">
              <h1 className="text-2xl font-semibold text-[#F9F4DA]">Assembly: Endgame</h1>
              <p className="text-sm max-w-[350px] mx-auto text-[#8E8E8E]">Guess the word within 8 attempts to keep the
              programming world safe from Assembly!</p>
          </header>
          <section className={`${isGameWon ? 'bg-[#10A95B]' : isGameLost ? 'bg-[#BA2A2A]' : 'bg-[#7A5EA7] border-dashed border-2 border-[#323232] italic'}
            flex flex-col justify-center items-center text-[#F9F4DA] rounded-[4px] my-[30px] min-h-[60px]`}>
            {!isGameOver && isLastGuessIncorrect ? (
                <p className="font-[400] text-center">
                  {getFarewellText(languages[wrongGuessedCount - 1].name)}
                </p>
              ) : isGameOver ? (
                isGameWon ? (
                  <>
                    <h2 className="text-xl m-1">You win!</h2>
                    <p className="m-1">Well done! 🎉</p>
                  </>
                ) : (
                  <>
                    <h2 className="text-xl m-1">Game Over!</h2>
                    <p className="m-1">Better start learning Assembly😭</p>
                  </>
                )
              ) : (
                <p>Go on!</p>
              )
            }


              
          </section>
          <section
              aria-live="polite" 
              role="status"
              className="flex flex-wrap gap-[5px] justify-center max-w-[350px] mx-auto mb-[36px]"
            >
              {languageElements}
          </section>
          <section className="flex justify-center gap-[2px] mb-[20px]">
              {letterElements}
          </section>

          <section className="sr-only" aria-live="polite" role="status">
            <p>
              {currentWord.includes(lastGuessedLetter) ? 
                  `Correct! The letter ${lastGuessedLetter} is in the word.` : 
                  `Sorry, the letter ${lastGuessedLetter} is not in the word.`
              }
              You have {numGuessesLeft} attempts left.
            </p>
            <p>Current word: {currentWord.split("").map(letter => guessedLetters.includes(letter) ? letter + "." : "blank.").join(" ")}</p>
          </section>

          <section className="flex flex-wrap gap-[8px] justify-center max-w-[450px] mb-[36px]">
              {keyboardElements}
          </section>
          {
            isGameOver && <button className="bg-[#11B5E5] rounded-[4px] border-2 border-[#D7D7D7] w-[225px] h-[40px]
              py-[5px] px-[12px] block mx-[auto] cursor-pointer
              ">New Game</button>
          }
          
      </main>
    )
}
