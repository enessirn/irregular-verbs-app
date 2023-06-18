import React from "react";
import Input from "./Input";
import Verb1 from "./Verb1";
import Mean from "./Mean";
import { useState } from "react";
const verbList = require("./verbs.json");
function App() {
  const [randomNumber, setRandomNumber] = useState(
    Math.round(Math.random() * verbList.verbs.length)
  );
  const [inputText, setInputText] = useState("");
  const [hidden, setHidden] = useState(false);
  function generateRandomNumber() {
    const randomKey = Math.round(Math.random() * verbList.verbs.length);
    setHidden(false);
    setRandomNumber(randomKey);
    setInputText("");
  }
  const checkButton = (e) => {
    if (e.key == "Enter") {
      if (inputText == verbList.verbs[randomNumber].v2) {
        alert("Doğru Bildiniz");
        setHidden(true);
        setTimeout(generateRandomNumber, 1500);
      } else {
        alert(`Yanlış bildiniz doğrusu : ${verbList.verbs[randomNumber].v2}`);
        setHidden(true);
        setTimeout(generateRandomNumber, 3000);
      }
    }
  };
  return (
    <div className="bg-gray-200 w-full min-h-screen flex justify-center items-center px-6 flex-col rounded-xl">
      <div className="w-[700px] bg-white text-black md:h-[500px] h-[600px] py-2">
        <Verb1 verb1={verbList.verbs[randomNumber].v1} />
        <Input
          inputText={inputText}
          setInputText={setInputText}
          handleKey={checkButton}
        />
        <div className={`${hidden == true ? "block" : "hidden"}`}>
          <Mean
            verb2={verbList.verbs[randomNumber].v2}
            mean={verbList.verbs[randomNumber].mean}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
