import { useState, useEffect, use } from "react";
import darthVader from '../assets/darth-vader.svg';
import yoda from '../assets/yoda.svg';
import table from "../data/table";
import data from "../data/data";
import initSqlJs from 'sql.js';
import padawans from '../data/table';
import IntroDialogue from "./IntroDialogue";
import RightAside from "./RightAside";
import LeftAside from "./LeftAside";
import QuestsDialogues from "./QuestsDialogues";

const StoryIntro = () => {
  const [showStory, setShowStory] = useState(true);
  const [tableIndex, setTableIndex] = useState(0);
  const tasks = data[tableIndex];
  const [userSQLMap, setUserSQLMap] = useState({});
  const [isCorrect, setIsCorrect] = useState(null);

  const [db, setDb] = useState(null);
  const [userSQL, setUserSQL] = useState("");
  const [userResult, setUserResult] = useState([]); 
  const [queryError, setQueryError] = useState("");

  const [showQuestDialogue, setShowQuestDialogue] = useState(true);

  useEffect(() => {
    setUserSQL(userSQLMap[tableIndex] || "");
    setQueryError("");
    setUserResult([]);
    setIsCorrect(null);
  }, [tableIndex, userSQLMap]);

  useEffect(() => {
    (async () => {
      const SQL = await initSqlJs({ locateFile: file => `https://sql.js.org/dist/${file}` });
      const dbInstance = new SQL.Database();
      

      dbInstance.run(`
        CREATE TABLE padawans (
          id INTEGER,
          name TEXT,
          species TEXT,
          age INTEGER,
          lightsaber_color TEXT
        );
      `);

      padawans.forEach(p => {
        dbInstance.run(
          `INSERT INTO padawans (id, name, species, age, lightsaber_color) VALUES (?, ?, ?, ?, ?)`,
          [p.id, p.name, p.species, p.age, p.lightsaber_color]
        );
      });

      setDb(dbInstance);
    })();
  }, []);

  const handleRunSQL = () => {
    try {
      const result = db.exec(userSQL);

      if (result.length > 0) {
        const { columns, values } = result[0];
        const formatted = values.map(row =>
          Object.fromEntries(row.map((val, i) => [columns[i], val]))
        );
        setIsCorrect(userSQL.trim().toLowerCase() === tasks.expected_sql.trim().toLowerCase());
        setUserResult(formatted);
        setQueryError("");
      } else {
        setUserResult([]);
        setQueryError("No rows returned.");
      }
    } catch (err) {
      setUserResult([]);
      setQueryError("Invalid SQL query.");
    }
  };

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
              userSQL={userSQL}
              handleRunSQL={handleRunSQL}
              isCorrect={isCorrect}
              tasks={tasks}
              queryError={queryError}
              userResult={userResult}
              setUserSQL={setUserSQL}
              setUserSQLMap={setUserSQLMap}
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
