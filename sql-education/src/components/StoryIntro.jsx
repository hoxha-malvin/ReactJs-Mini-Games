import { useState, useEffect, useRef } from "react";
import table from "../data/table";
import data from "../data/data";
import pause_icon from '../assets/pause_icon.png';
import play_icon from '../assets/play_icon.png';

import IntroDialogue from "./IntroDialogue";
import RightAside from "./RightAside";
import LeftAside from "./LeftAside";
import QuestsDialogues from "./QuestsDialogues";

const StoryIntro = () => {
  const [showStory, setShowStory] = useState(true);
  const [tableIndex, setTableIndex] = useState(0);
  const [showQuestDialogue, setShowQuestDialogue] = useState(true);
  const tasks = data[tableIndex];  
  const [showCredits, setShowCredits] = useState(false);

  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(null);

  const ChangePage = (direction) => {
    setTableIndex(prevIndex => {
      if (direction === 'next') return prevIndex < data.length - 1 ? prevIndex + 1 : prevIndex;
      else if (direction === 'previous') return prevIndex > 0 ? prevIndex - 1 : prevIndex;
      return prevIndex;
    });
    setShowQuestDialogue(true);
  }

  useEffect(() => {
  if (audioRef.current) {
    audioRef.current.play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch(() => {
        console.log('Audio does not respond or autoplay was blocked.');
        setIsPlaying(false);
      });
  }
}, []);


  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="w-full min-h-screen bg-gradient-to-b text-white bg-black/50 backdrop-blur-sm">
      <div className="fixed top-0 right-0 flex items-center gap-4 z-51">
        <audio ref={audioRef} src="/music.mp3" loop autoPlay/>
        <div>
          <button
            onClick={toggleAudio}
            className="text-black font-bold transition-all w-15 cursor-pointer"
          >
            {isPlaying ? <img src={pause_icon} alt="Pause Icon" /> : <img src={play_icon} alt="Play Icon"/>}
          </button>
        </div>

        {/* Credits Button */}
        <div>
          <button
            onClick={() => setShowCredits(true)}
            className="text-black font-bold bg-white/70 px-4 py-2 rounded-lg shadow transition hover:bg-white"
          >
            Credits
          </button>
        </div>
      </div>

      {showCredits && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur flex items-center justify-center z-51">
          <div className="bg-zinc-800 text-white p-6 rounded-2xl shadow-lg space-y-4 max-w-lg w-full">
            <h2 className="text-2xl font-bold">Credits</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>MAMIDAKIS GEORGE</li>
              <li>MALVIN HOXHA</li>
              <li>KIRKALAS PANAGIOTIS</li>
              <li>PASXALIDIS ANTONIOS</li>
              <li>PIGGIOS PANAGIOTIS</li>
              <li>Music by Luis Humanoide from Pixabay</li>
              <li>Play, Pause, Yoda, Vader icons by Icons8</li>
            </ul>
            <button
              onClick={() => setShowCredits(false)}
              className="mt-4 bg-white text-black px-4 py-2 rounded-lg shadow hover:bg-zinc-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
      
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
