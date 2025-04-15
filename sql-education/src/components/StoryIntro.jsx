import { useState, useEffect, use } from "react";
import table from "../data/table";
import data from "../data/data";


import IntroDialogue from "./IntroDialogue";
import RightAside from "./RightAside";
import LeftAside from "./LeftAside";
import QuestsDialogues from "./QuestsDialogues";

const StoryIntro = () => {
  const [showStory, setShowStory] = useState(false);
  const [tableIndex, setTableIndex] = useState(0);
  const [showQuestDialogue, setShowQuestDialogue] = useState(true);
  const tasks = data[tableIndex];  

  const ChangePage = (direction) => {
    setTableIndex(prevIndex => {
      if (direction === 'next') return prevIndex < data.length - 1 ? prevIndex + 1 : prevIndex;
      else if (direction === 'previous') return prevIndex > 0 ? prevIndex - 1 : prevIndex;
      return prevIndex;
    });
    setShowQuestDialogue(true);
  }

  return (
    <section className="w-full min-h-screen bg-gradient-to-b text-white bg-black/50 backdrop-blur-sm">
      {showStory && (
        <IntroDialogue onFinish={() => setShowStory(false)} />
      )}

      {!showStory && (
        <main className="w-full min-h-screen flex flex-col lg:flex-row gap-4 p-6">

          {showQuestDialogue && (
            <QuestsDialogues 
              tasks={tasks} 
              onContinue={() => setShowQuestDialogue(false)} 
            />
          )}
          
          {/* Left Panel */}
          <aside className="flex-1 bg-zinc-800 rounded-2xl p-6 shadow-lg space-y-4">
            <LeftAside
              tableIndex={tableIndex}
              tasks={tasks}
              ChangePage={ChangePage}
            />
          </aside>

          <aside className="flex-1 bg-zinc-800 rounded-2xl p-6 shadow-lg">
            <RightAside tableIndex={tableIndex} tasks={tasks} table={table}/>
          </aside>
        </main>
      )}
    </section>
  );
};

export default StoryIntro;
