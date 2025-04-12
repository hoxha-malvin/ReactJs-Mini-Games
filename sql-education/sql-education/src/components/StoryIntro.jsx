import { useState } from "react";
import darthVader from '../assets/darth-vader.svg';
const StoryIntro = () => {
  const [showStory, setShowStory] = useState(false);
  
  const handleClick = () => {
    setShowStory(false);  // Hide the banner when clicked
  };
  
  return (
    <section className="w-full min-h-screen">
      {showStory && (
        <div className="absolute border-2 m-0 border-red-700 rounded-2xl py-5 px-4 bg-black top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-xl">
          <div className="flex flex-col items-center justify-center">
            <img src={darthVader} alt="darth-vader" width={50} className="mb-2"/>
            <p className="text-amber-50 text-center">
              "You are trapped. The only way to escape is to solve the puzzles of the database. 
              Fail, and you will remain in my grasp forever. Do not disappoint me. 
              Your first challenge... begins now."
            </p>
            <button onClick={handleClick} className="button-29 mt-5">
              Continue
            </button>
          </div>
        </div>
      )}

      {!showStory && (
        <main className="w-full min-h-screen flex">
          <aside className="flex-1">
            <input
              type="text"
              
              
              className='bg-[#fff] text-[#000] w-full max-w-[250px] outline-none pl-1'
            />
          </aside>
          <aside className="flex-1">

          </aside>          
        </main>
      )}
    </section>   
  )
}

export default StoryIntro