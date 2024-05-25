import React, { useState } from 'react';

const emojis = [
  { id: 1, symbol: '😀', votes: 0 },
  { id: 2, symbol: '😂', votes: 0 },
  { id: 3, symbol: '😍', votes: 0 },
  { id: 4, symbol: '😎', votes: 0 },
  { id: 5, symbol: '😭', votes: 0 }
];

const App = () => {
  const [emojiList, setEmojiList] = useState(emojis);
  const [winner, setWinner] = useState(null);
  const [noVotes, setNoVotes] = useState(false);
  const [tie, setTie] = useState(false);

  const handleVote = (id) => {
    const updatedEmojis = emojiList.map(emoji =>
      emoji.id === id ? { ...emoji, votes: emoji.votes + 1 } : emoji
    );
    setEmojiList(updatedEmojis);
    setWinner(null); // Сбросить результаты при новом голосе
    setNoVotes(false);
    setTie(false);
  };

  const showResults = () => {
    const maxVotes = Math.max(...emojiList.map(emoji => emoji.votes));
    const topEmojis = emojiList.filter(emoji => emoji.votes === maxVotes);

    if (maxVotes === 0) {
      setNoVotes(true);
    } else if (topEmojis.length > 1) {
      setTie(true);
    } else {
      setWinner(topEmojis[0]);
    }
  };

  return (
    <div>
      <h1>Vote for the Best Emoji</h1>
      <ul>
        {emojiList.map(emoji => (
          <li key={emoji.id}>
            {emoji.symbol} - {emoji.votes} votes
            <button onClick={() => handleVote(emoji.id)}>Vote</button>
          </li>
        ))}
      </ul>
      <button onClick={showResults}>Show Results</button>
      {noVotes && (
        <div>
          <h2>No votes yet!</h2>
          <p>Be the first to vote for your favorite emoji!</p>
        </div>
      )}
      {tie && (
        <div>
          <h2>It's a tie!</h2>
          <p>There is no clear winner yet.</p>
        </div>
      )}
      {winner && (
        <div>
          <h2>Winner Emoji</h2>
          <p>{winner.symbol} with {winner.votes} votes!</p>
        </div>
      )}
    </div>
  );
};

export default App;
