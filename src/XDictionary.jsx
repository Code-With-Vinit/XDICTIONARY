import React, { useState } from 'react';

const XDictionary = () => {
  const [dictionary] = useState([
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [definition, setDefinition] = useState('');
  const [notFound, setNotFound] = useState(false);

  const handleSearch = () => {
    const found = dictionary.find(
      item => item.word.toLowerCase() === searchTerm.trim().toLowerCase()
    );

    if (found) {
      setDefinition(found.meaning);
      setNotFound(false);
    } else {
      setDefinition('');
      setNotFound(true);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Dictionary App</h2>

      <input
        type="text"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        placeholder="Search for a word..."
      />

      <button onClick={handleSearch} style={{ marginLeft: '10px' }}>
        Search
      </button>

      <div style={{ marginTop: '20px' }}>
        {definition && (
          <>
            <h3>Definition:</h3>
            <p>{definition}</p>
          </>
        )}

        {notFound && <p>Word not found in the dictionary.</p>}
      </div>
    </div>
  );
};

export default XDictionary;