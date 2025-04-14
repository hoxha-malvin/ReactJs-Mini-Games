import React from 'react'
import yoda from '../assets/yoda.svg'
const QuestsDialogues = ({tasks, onContinue}) => {
  return (
    <main className='min-h-lvh w-full absolute bg-black/50 backdrop-blur-sm inset-0'>
        <div className="fixed inset-0 flex items-center justify-center z-49 p-5">
            <div className="bg-zinc-900 border border-red-600 rounded-3xl shadow-xl p-8 max-w-xl w-full text-center space-y-4">
                <div className='flex items-center justify-center gap-4'>
                    <img src={yoda} alt="yoda" className="w-10" />
                    <p className="text-lg font-light text-amber-100 italic">
                        "{tasks.hint}"
                    </p>
                </div>
                <button
                    onClick={onContinue}
                    className="px-6 py-2 bg-red-600 text-white font-semibold rounded-xl shadow-lg hover:bg-red-700 transition-all duration-200 cursor-pointer"
                >
                    Continue
                </button>
            </div>
        </div>
    </main>
    
  )
}

export default QuestsDialogues