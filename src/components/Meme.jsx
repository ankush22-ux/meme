const Meme=({meme,setMeme})=>{

    console.log(meme)
    return <div className="Meme"> <img src={meme.url}/>
    <div>
        {[...Array(meme.box_count)].map((_ , index)=>(
            <input type="text" placeholder={`Meme Caption ${index+1}`}/>
        ))}
    </div>
    <div>
        <button>Generate Meme</button>
        <button onClick={()=>{setMeme(null)}}>New Templates</button>
    </div>
    </div>
}
export default Meme