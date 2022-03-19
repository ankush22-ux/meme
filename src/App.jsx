import './App.css';
import {useState, useEffect} from 'react'
import Template from './components/Templates';
import Meme from './components/Meme'

function App() {
  const[templates,setTemplates] = useState([]);
  const[meme,setMeme] = useState(null);
  useEffect(()=>{
    fetch("https://api.imgflip.com/get_memes")
    .then(res=>res.json())
    .then((data)=>{
      // console.log(data.data.memes);
      setTemplates(data.data.memes);
    })
  },[]);


  return (
    <div className="App">
      <img src='./meme.svg'></img>
      <h1> MEME GEN </h1>
      {meme === null ? (<Template templates={templates} setMeme={setMeme}/>) : (<Meme meme={meme} setMeme={setMeme}/>)}
      
    </div>
  );
}

export default App;
