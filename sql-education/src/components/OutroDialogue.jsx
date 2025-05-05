import React from 'react';
import darthVader from '/darth-vader.svg';
import yoda from '/yoda.svg';

const OutroDialogue = ({ onClose }) => {
    console.log("in")
  return (
    <div className="fixed inset-0 flex items-center justify-center z-60 p-5">
      <div className="bg-zinc-900 border border-green-600 rounded-3xl shadow-xl p-8 max-w-xl w-full text-center space-y-4">
        <div className="flex items-center justify-center gap-4">
          <img src={yoda} alt="yoda" className="w-20" />
          <p className="text-lg font-light text-amber-100 italic">
            "Well done, young padawan. Your training is complete."
          </p>
        </div>
        <button
          onClick={onClose}
          className="px-6 py-2 bg-green-600 text-white font-semibold rounded-xl shadow-lg hover:bg-green-700 transition-all duration-200 cursor-pointer"
        >
          Finish
        </button>
      </div>
    </div>
  );
};

export default OutroDialogue;