import { useEffect, useState } from 'react'
import './App.css'
//This code is my first react app and demonstrates common ract principles
//such as states, props, and proper rendering for a responsive react app.

//Card element that contains a title, a counter for clicks, and a like button
const Card = ({ title }) => {
  const [count, setCount] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    console.log(`${title} has been liked: ${hasLiked}`);
  }, [hasLiked]);

  return (
    <div className='card' onClick={() => setCount(count + 1)}>
      <h2>{title} <br/> {count ? count : null}</h2>

      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? '❤️' : '🤍'}
      </button>
    </div>
  )
}

//Our app that renders three different card objects that cna be clicked and liked
const App = () => {
  return (
    <div className='card-container'>
        <Card title="Star Wars"/>
        <Card title="Lion King"/>
        <Card title="Lord of the Rings"/>
    </div>
  )
}

export default App
