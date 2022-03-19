const Templates=({templates,setMeme})=>{
    return(
        <div className="Templates" >
        {templates.map(template=>(
            <div key={template.id} className="template" onClick={()=>{{setMeme(template)}}}>
            <div className='image'style={{backgroundImage:`url(${template.url})`}}></div>
            {/* {template.name} */}
            
            </div>
          ))
          }
          </div>
    )
}
export default Templates;