import './App.css';
import {useState, useEffect} from 'react';

function App() {
  const[templates,setTemplates] = useState([]);
  useEffect(()=>{
    fetch("https://api.imgflip.com/get_memes")
    .then(res=>res.json())
    .then((data)=>{
      console.log(data.data.memes);
      setTemplates(data.data.memes);
    })
  },[]);


  return (
    <div className="App">
      <h1> MEME GEN </h1>
      {templates.map(template=>(
        <div key={template.id} className="template">
        <div className='image'style={{backgroundImage:`url(${template.url})`}}></div>
        {template.name}
        </div>
      ))
      }
    </div>
  );
}

export default App;
