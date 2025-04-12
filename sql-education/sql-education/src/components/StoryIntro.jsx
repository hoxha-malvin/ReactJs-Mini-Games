import { useState } from "react";
import darthVader from '../assets/darth-vader.svg';
import yoda from '../assets/yoda.svg';
import table from "../data/table";

const StoryIntro = () => {
  const [showStory, setShowStory] = useState(true); // changed default to true for testing

  const handleClick = () => {
    setShowStory(false);
  };

  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-black via-zinc-900 to-zinc-800 text-white">
      {showStory && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/80 backdrop-blur-sm p-5">
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
        <main className="w-full min-h-screen flex flex-col lg:flex-row gap-6 p-6">
          {/* Left Panel */}
          <aside className="flex-1 bg-zinc-800 rounded-2xl p-6 shadow-lg space-y-4">
            <h2 className="text-2xl font-semibold text-amber-400">Command Console</h2>
            <textarea
              className="w-full h-64 p-4 rounded-lg bg-zinc-700 text-white border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-amber-400"
              placeholder="Enter your SQL command..."
            />
            <div className="flex items-center space-x-3 mt-4">
              <img src={yoda} alt="yoda" className="w-10" />
              <p className="text-amber-200 italic">
                "Young, the padawans are — less than 20, you seek."
              </p>
            </div>
            <div>
            <h2 className="text-2xl font-semibold text-amber-400">Result</h2>
            <table className="w-full table-auto border-collapse text-sm">
              <thead className="bg-zinc-700 text-amber-300">
                    <tr>
                      <th className="border border-zinc-600 px-3 py-2">ID</th>
                      <th className="border border-zinc-600 px-3 py-2">Name</th>
                      <th className="border border-zinc-600 px-3 py-2">Species</th>
                      <th className="border border-zinc-600 px-3 py-2">Age</th>
                      <th className="border border-zinc-600 px-3 py-2">Lightsaber</th>
                    </tr>
                  </thead>
                  <tbody>
                    {table.map(jedi => (
                      <tr key={jedi.id} className="hover:bg-zinc-700 transition-colors">
                        <td className="border border-zinc-600 px-3 py-2 text-center">{jedi.id}</td>
                        <td className="border border-zinc-600 px-3 py-2">{jedi.name}</td>
                        <td className="border border-zinc-600 px-3 py-2">{jedi.species}</td>
                        <td className="border border-zinc-600 px-3 py-2 text-center">{jedi.age}</td>
                        <td className="border border-zinc-600 px-3 py-2 text-center">{jedi.lightsaber_color}</td>
                      </tr>
                    ))}
                  </tbody>
            </table>
            </div>
          </aside>

          {/* Right Panel */}
          <aside className="flex-1 bg-zinc-800 rounded-2xl p-6 shadow-lg">
            <h2 className="text-2xl font-semibold text-amber-400 mb-4">Jedi Data</h2>
            <div className="overflow-auto">
              <table className="w-full table-auto border-collapse text-sm">
                <thead className="bg-zinc-700 text-amber-300">
                  <tr>
                    <th className="border border-zinc-600 px-3 py-2">ID</th>
                    <th className="border border-zinc-600 px-3 py-2">Name</th>
                    <th className="border border-zinc-600 px-3 py-2">Species</th>
                    <th className="border border-zinc-600 px-3 py-2">Age</th>
                    <th className="border border-zinc-600 px-3 py-2">Lightsaber</th>
                  </tr>
                </thead>
                <tbody>
                  {table.map(jedi => (
                    <tr key={jedi.id} className="hover:bg-zinc-700 transition-colors">
                      <td className="border border-zinc-600 px-3 py-2 text-center">{jedi.id}</td>
                      <td className="border border-zinc-600 px-3 py-2">{jedi.name}</td>
                      <td className="border border-zinc-600 px-3 py-2">{jedi.species}</td>
                      <td className="border border-zinc-600 px-3 py-2 text-center">{jedi.age}</td>
                      <td className="border border-zinc-600 px-3 py-2 text-center">{jedi.lightsaber_color}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </aside>
        </main>
      )}
    </section>
  );
};

export default StoryIntro;
