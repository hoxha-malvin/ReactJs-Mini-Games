import tasks from './tasks'
import { useState } from 'react';
import atronaut from './assets/atronaut.svg';
import flag from './assets/flag.svg';

const matchCSS = (input, expected) => {
  const [property, value] = expected.split(":").map(part => part.trim());
  const pattern = new RegExp(`^${property}\\s*:\\s*${value};?$`, "i");
  return pattern.test(input.trim());
};

const App = () => {
  const [userInput, setUserInput] = useState("");
  const currentTask = tasks[0];
  
  const isCorrect = matchCSS(userInput, currentTask.answer);
  const correctAnswer = isCorrect ? currentTask.properties : "";
  

  return (
    <main className="flex w-full min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 font-sans">
    {/* Left Side */}
    <aside className="w-full flex-1 flex flex-col p-8 space-y-6 bg-white shadow-xl rounded-r-4xl">
      <h1 className="text-4xl font-bold text-blue-700">Flexbox Atronaut</h1>
      
      <p className="text-lg text-gray-700 leading-relaxed flex-1">
        Welcome to <span className="font-semibold text-blue-600">Flexbox Froggy</span>, a game where you help Froggy and friends by writing CSS code!<br /><br />
        Guide this frog to the lilypad on the right by using the <code className="bg-blue-100 text-blue-800 px-1 py-0.5 rounded">justify-content</code> property, which aligns items horizontally and accepts the following values:
        <ul className="list-disc list-inside mt-3">
          <li><code className="font-mono text-blue-600">flex-start</code>: Items align to the left side of the container.</li>
          <li><code className="font-mono text-blue-600">flex-end</code>: Items align to the right side of the container.</li>
          <li><code className="font-mono text-blue-600">center</code>: Items align at the center of the container.</li>
          <li><code className="font-mono text-blue-600">space-between</code>: Items display with equal spacing between them.</li>
          <li><code className="font-mono text-blue-600">space-around</code>: Items display with equal spacing around them.</li>
        </ul>
        <br />
        For example, <code className="bg-blue-100 text-blue-800 px-1 py-0.5 rounded">justify-content: flex-end;</code> will move the frog to the right.
      </p>
  
      <div className="bg-gray-100 p-4 rounded-xl ">
        <Compiler userInput={userInput} setUserInput={setUserInput} />
      </div>
    </aside>
  
    {/* Right Side */}
    <aside className="w-full flex-1 flex items-center justify-center p-10">
      <div className="relative bg-white/30 backdrop-blur-md border border-white/40 shadow-2xl rounded-3xl p-10 w-full max-w-3xl h-[70vh] flex items-center justify-center transition-all duration-300 ease-in-out">
        {/* Frog + Effects Container */}
        <div className={`w-full h-full flex items-center  relative transition-all duration-300 ease-in-out ${correctAnswer}`}>
          {/* Main character */}
          <img src={atronaut} alt="atronaut" className={`${isCorrect ? 'mr-20' : ''} z-10`} width={100} />

          {/* Background effects */}
          <div className="absolute w-full flex justify-center items-center top-1/2 transform -translate-y-1/2">
              <img src={flag} alt="flag" className="z-0 scale-90 transition-transform duration-300" width={100} />
          </div>
        </div>
      </div>
    </aside>

  </main>
  
  )
}

function Compiler({userInput, setUserInput}) {
  const task = tasks[0];
  const contents = task.content.split(";").filter(line => line.trim() !== "");
  const lines = Array.from({ length: task.lines });

  return (
    <div className='flex w-full h-full flex-1 font-mono bg-[#D0DDD0] text-[#4C585B]'>
      <div className='w-[30px] p-2 text-right pr-3 text-[#F8FAFC] bg-gray-400'>
        {lines.map((_, index) => (
          <div key={index}>{index + 1}</div>
        ))}
      </div>
      <div className='w-full p-2'>
        <span>
          .lilypad {'{'}
        </span>
        
        <div className='pl-5'>
          {contents.map((content, index) => (
            <div key={index}>{content.trim()};</div>
          ))}

          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            style={{ caretColor: 'black' }}
            className='bg-[#fff] text-[#000] w-[250px] outline-none pl-1'
          />
        </div>
        <span>{"}"}</span>
        
      </div>
    </div>
  );
}


export default App