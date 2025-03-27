import { useState } from "react"
import { languages } from "./languages"

export default function AssemblyEndgame() {
    const [currentWord, setCurrentWord] = useState("react")
    
    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    const languageElements = languages.map(lang => {
        const styles = {
            backgroundColor: lang.backgroundColor,
            color: lang.color
        }
        return (
            <span
                className="rounded-[3px] p-1"
                style={styles}
                key={lang.name}
            >
                {lang.name}
            </span>
        )
    })
    
    const letterElements = currentWord.split("").map((letter, index) => (
        <span className="h-[40px] w-[40px] bg-[#323232] flex justify-center items-center text-2xl border-b-1
        " key={index}>{letter.toUpperCase()}</span>
    ))
    
    const keyboardElements = alphabet.split("").map(letter => (
        <button className="h-[35px] w-[35px] bg-[#FCBA29] border-2 border-[#F9FADA] rounded-[3px]  cursor-pointer text-[#323232]
        " key={letter}>{letter.toUpperCase()}</button>
    ))

    return (
        <main>
            <header className="text-center">
                <h1 className="text-2xl font-semibold text-[#F9F4DA]">Assembly: Endgame</h1>
                <p className="text-sm max-w-[350px] mx-auto text-[#8E8E8E]">Guess the word within 8 attempts to keep the
                programming world safe from Assembly!</p>
            </header>
            <section className="bg-[#10A95B] flex flex-col items-center text-[#F9F4DA] rounded-[4px] my-[30px]">
                <h2 className="text-xl m-1">You win!</h2>
                <p className="m-1">Well done! 🎉</p>
            </section>
            <section className="flex flex-wrap gap-[5px] justify-center max-w-[350px] my-auto mb-[36px]">
                {languageElements}
            </section>
            <section className="flex justify-center gap-[2px] mb-[20px]">
                {letterElements}
            </section>
            <section className="flex flex-wrap gap-[8px] justify-center max-w-[450px] mb-[36px]">
                {keyboardElements}
            </section>
            <button className="bg-[#11B5E5] rounded-[4px] border-2 border-[#D7D7D7] w-[225px] h-[40px]
              py-[5px] px-[12px] block mx-[auto] cursor-pointer
            ">New Game</button>
        </main>
    )
}
