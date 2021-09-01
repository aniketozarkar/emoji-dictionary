import './App.css';
import { useState } from 'react';

var emojiDictionary = {
  "🖤": { name: "Black", meaning: "A heart shaded completely black. May be used to express morbidity, sorrow, or a form of dark humor, but despite the color remains most commonly used for love and affection."},
  "💚": { name: "Green", meaning: "A green heart emoji, often used alongside other colored hearts. Frequently used on Twitter in reference to Korean boy band NCT."},
  "💙": { name: "Blue", meaning: "A blue heart emoji, commonly used by brands as a neutral heart color."},
  "🤍": { name: "White", meaning: "A white heart emoji, used for love and affection. Also commonly used to discuss someone passing away."},
  "💜": { name: "Purple", meaning: "A purple heart emoji, often used alongside other colored hearts. Frequently used on Twitter in reference to Korean boy band Bangtan Sonyeondan, more commonly known as BTS."},
  "🤎": { name: "Brown", meaning: "A brown heart, often used discuss topics related to racial identity 🧑🏽🧑🏾🧑🏿"},
  "💛": { name: "Yellow", meaning: "A yellow or gold colored love-heart, frequently used alongside other colored hearts."},
  "🧡": { name: "Orange", meaning: "No Meaning found"},
  "❤️": { name: "Red", meaning: "A classic red love heart emoji, used for expressions of love and romance. This is the most popular heart emoji."}
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
      <h1 style={{margin:"1rem 1rem"}}>Emoji Dictionary</h1>
      <input className="emojiInput" onChange={ emojiChangeHandler }></input>
      <h2>{name} Heart</h2>
      <div>{meaning}</div>
      <ul style={{ paddingInlineStart: "0" }}>
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
