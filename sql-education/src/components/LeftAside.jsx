import React from 'react'

const LeftAside = ({tableIndex, userSQL, handleRunSQL, isCorrect, tasks, queryError, userResult, setUserSQL, setUserSQLMap, ChangePage}) => {
  return (
    <>
        <h2 className="text-2xl font-semibold text-amber-400">Command Console</h2>
        <textarea
            value={userSQL}
            onChange={(e) => {
                const val = e.target.value;
                setUserSQL(val);
                setUserSQLMap(prev => ({ ...prev, [tableIndex]: val }));
        }}
            className="w-full h-40 p-4 rounded-lg bg-zinc-700 text-white border border-zinc-600 focus:outline-none 
                focus:ring-2 focus:ring-amber-400"
            placeholder="Enter your SQL command..."
        />

        <button
            onClick={handleRunSQL}
            className="px-5 py-2 bg-amber-500 hover:bg-amber-600 transition-all text-black font-bold rounded-xl shadow cursor-pointer">
            Run Query
        </button>

        <button
            disabled={!isCorrect}
            onClick={() => ChangePage('next')}
            className={`ml-2 mt-4 px-5 py-2  text-white font-semibold rounded-xl shadow-lg 
                transition-all duration-200  
                ${!isCorrect ? 'bg-red-900 cursor-not-allowed' : 'bg-red-600 hover:bg-red-700 cursor-pointer'} `}
        >
            Next
        </button>

        <button
            onClick={() => ChangePage('previous')}
            className="ml-2 mt-4 px-5 py-2 bg-blue-600 text-white font-semibold rounded-xl shadow-lg
                hover:bg-blue-700 transition-all duration-200 cursor-pointer"
        >
            Previous
        </button>

        <div className="my-5">
            <p className="p-2 text-amber-200 italic text-center text-xl rounded-lg bg-zinc-700 border border-zinc-600">
                {`Example: ${tasks.example_sql}`}
            </p>
        </div>

        <div>
            {isCorrect !== null && (
                <h1 className={`text-2xl font-bold ${isCorrect ? 'text-green-500' : 'text-red-500'} transition-all duration-300`}>
                    {isCorrect ? 'CORRECT' : 'WRONG'}
                </h1>
            )}
        </div>

        {queryError && <p className="text-red-400 italic">{queryError}</p>}
        
        {userResult.length > 0 && (
            <div className="mt-6">
                <h2 className="text-xl font-semibold text-amber-400 mb-2">Your Query Result</h2>

                {userResult[0].error ? (
                <p className="text-red-400 italic">{userResult[0].error}</p>
                ) : (
                    <table className="w-full table-auto border-collapse text-sm">
                        <thead className="bg-zinc-700 text-amber-300">
                            <tr>
                                {Object.keys(userResult[0]).map((key) => (
                                <th key={key} className="border border-zinc-600 px-3 py-2 capitalize">
                                    {key}
                                </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                        {userResult.map((row, index) => (
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
                )}
            </div>
        )}
    </>
  )
}

export default LeftAside