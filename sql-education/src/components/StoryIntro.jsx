import { useState, useEffect } from "react";
import darthVader from '../assets/darth-vader.svg';
import yoda from '../assets/yoda.svg';
import table from "../data/table";
import data from "../data/data";
import initSqlJs from 'sql.js';
import padawans from '../data/table';

const StoryIntro = () => {
  const [showStory, setShowStory] = useState(false);
  const [tableIndex, setTableIndex] = useState(0);
  const tasks = data[tableIndex];

  const [db, setDb] = useState(null);
  const [userSQL, setUserSQL] = useState("");
  const [userResult, setUserResult] = useState([]); 
  const [queryError, setQueryError] = useState("");

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

  const handleClick = () => {
    setShowStory(false);
  };

  return (
    <section className="w-full min-h-screen bg-gradient-to-b text-white bg-black/50 backdrop-blur-sm">
      {showStory && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm p-5">
          <div className="bg-zinc-900 border border-red-600 rounded-3xl shadow-xl p-8 max-w-xl w-full text-center space-y-4">
            <img src={darthVader} alt="darth-vader" className="mx-auto w-16 mb-2" />
            <p className="text-lg font-light text-amber-100">
              "You are trapped. The only way to escape is to solve the puzzles of the database.
              Fail, and you will remain in my grasp forever. Your first challenge... begins now."
            </p>
            <button
              onClick={handleClick}
              className="mt-4 px-6 py-2 bg-red-600 text-white font-semibold rounded-xl shadow-lg hover:bg-red-700 transition-all duration-200 cursor-pointer"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {!showStory && (
        <main className="w-full min-h-screen flex flex-col lg:flex-row gap-4 p-6">
          
          {/* Left Panel */}
          <aside className="flex-1 bg-zinc-800 rounded-2xl p-6 shadow-lg space-y-4">
            <h2 className="text-2xl font-semibold text-amber-400">Command Console</h2>

            <textarea
              value={userSQL}
              onChange={(e) => setUserSQL(e.target.value)}
              className="w-full h-40 p-4 rounded-lg bg-zinc-700 text-white border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-amber-400"
              placeholder="Enter your SQL command..."
            />

            <button
              onClick={handleRunSQL}
              className="px-5 py-2 bg-amber-500 hover:bg-amber-600 transition-all text-black font-bold rounded-xl shadow cursor-pointer">
              Run Query
            </button>

            <button
              onClick={handleClick}
              className="ml-2 mt-4 px-5 py-2 bg-red-600 text-white font-semibold rounded-xl shadow-lg hover:bg-red-700 transition-all duration-200 cursor-pointer"
            >
              Next
            </button>

            <div className="my-5">
              <p className="p-2 text-amber-200 italic text-center text-xl rounded-lg bg-zinc-700 border border-zinc-600">{`Example: ${tasks.example_sql}`}</p>
            </div>

            <h2 className="text-2xl font-semibold text-amber-400 mt-6">Query Output</h2>
            {queryError && <p className="text-red-400 italic">{queryError}</p>}
          </aside>

          <aside className="flex-1 bg-zinc-800 rounded-2xl p-6 shadow-lg">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 mt-4">
                <img src={yoda} alt="yoda" className="w-10" />
                <div>
                <p className="text-amber-200 italic text-xl">{`"${tasks.hint}"`}</p>
                </div>
                
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-amber-400">Expected Result</h2>
                {tasks.resulted_table.length > 0 ? (
                  <table className="w-full table-auto border-collapse text-sm">
                    <thead className="bg-zinc-700 text-amber-300">
                      <tr>
                        {Object.keys(tasks.resulted_table[0]).map((key) => (
                          <th key={key} className="border border-zinc-600 px-3 py-2 capitalize">
                            {key}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {tasks.resulted_table.map((row, index) => (
                        <tr key={index} className="hover:bg-zinc-700 transition-colors">
                          {Object.values(row).map((value, i) => (
                            <td key={i} className="border border-zinc-600 px-3 py-2 text-center">
                              {value}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <p className="text-amber-200 italic">No results to display.</p>
                )}
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold text-amber-400 mb-4">Jedi Data</h2>
                <table className="w-full table-auto border-collapse text-sm">
                  <thead className="bg-zinc-700 text-amber-300">
                    <tr>
                      {Object.keys(table[0]).map((key) => (
                        <th key={key} className="border border-zinc-600 px-3 py-2 capitalize">
                          {key}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {table.map((row, index) => (
                      <tr key={index} className="hover:bg-zinc-700 transition-colors">
                        {Object.values(row).map((value, i) => (
                          <td key={i} className="border border-zinc-600 px-3 py-2 text-center">
                            {value}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
            </div>
          </aside>
        </main>
      )}
    </section>
  );
};

export default StoryIntro;
