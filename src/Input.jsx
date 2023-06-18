import React from "react";

function Input({inputText,setInputText, handleKey}) {
  return (
    <div className="px-4 mt-8 mb-8">
      <input
        type="text"
        className="w-full bg-transparent border-b-2 border-green-400 outline-none px-2 py-4 text-2xl rounded"
        placeholder="Enter the past simple form of this verb"
        value={inputText}
        onChange={(e)=> setInputText(e.target.value)}
        onKeyPress={handleKey}
      />

    </div>
  );
}

export default Input;
