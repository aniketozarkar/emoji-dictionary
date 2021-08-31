import './App.css';
import { useState } from 'react';

var emojiDictionary = {
  "🖤": { name: "Black Heart", meaning: "A heart shaded completely black. May be used to express morbidity, sorrow, or a form of dark humor, but despite the color remains most commonly used for love and affection."},
  "💚": { name: "Green Heart", meaning: "A green heart emoji, often used alongside other colored hearts. Frequently used on Twitter in reference to Korean boy band NCT."},
  "💙": { name: "Blue Heart", meaning: "A blue heart emoji, commonly used by brands as a neutral heart color."},
  "🤍": { name: "White Heart", meaning: "A white heart emoji, used for love and affection. Also commonly used to discuss someone passing away."},
  "💜": { name: "Purple Heart", meaning: "A purple heart emoji, often used alongside other colored hearts. Frequently used on Twitter in reference to Korean boy band Bangtan Sonyeondan, more commonly known as BTS."},
  "🤎": { name: "Brown Heart", meaning: "A brown heart, often used discuss topics related to racial identity 🧑🏽🧑🏾🧑🏿"},
  "💛": { name: "Yellow Heart", meaning: "A yellow or gold colored love-heart, frequently used alongside other colored hearts."},
  "🧡": { name: "Orange Heart", meaning: "No Meaning found"},
  "❤️": { name: "Red Heart", meaning: "A classic red love heart emoji, used for expressions of love and romance. This is the most popular heart emoji."}
  };

var knownEmojies = Object.keys(emojiDictionary);


function App() {
  const [meaning, setMeaning] = useState("");
  const [name, setName] = useState("");

  function emojiClickHandler(emoji) {
    setMeaningAndName(emoji);
  }

  function emojiChangeHandler(event) {
    setMeaningAndName(event.target.value);
  }

  function getMeaning(emoji) {
    if(emoji in emojiDictionary){
      return emojiDictionary[emoji].meaning;
    }
    else{
      return "we don't have this emoji in out database";
    }
  }

  function getName(emoji) {
    if (emoji in emojiDictionary) {
      return emojiDictionary[emoji].name;
    }
    else {
      return "";
    }
  }

  function setMeaningAndName(emoji) {
    setMeaning(getMeaning(emoji));
    setName(getName(emoji));
  }

  

  return (
    <div className="App">
      <h1>Emoji Dictionary</h1>
      <input onChange={ emojiChangeHandler }></input>
      <h2>{name}</h2>
      <div>{meaning}</div>
      <ul>
        {
          knownEmojies.map((emoji) =>
            <span 
              key={emoji}
              onClick={() => emojiClickHandler(emoji)}
              style={{ fontSize: "2rem", cursor: "pointer" }}>{emoji} </span>)
        }
      </ul>
    </div>
  );
}

export default App;
