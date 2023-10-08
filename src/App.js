import { data } from './data';
import { useState } from 'react';
import './App.css';

function App() {
  const [tracks, setTracks] =useState(data);
  const [showText, setShowText] = useState(false);

  const removeTrack = (id) =>{
    let newTracks = tracks.filter(track => track.id !==id);
    setTracks(newTracks);
  }
  const showTextClick = (element) => {element.showMore = !element.showMore;
    setShowText(!showText);
  }
  return(<div className='main'>
    <div className='container'>
      <h1>TOP {tracks.length} HIKES AND TRAIlS.</h1>
    </div>
    {tracks.map((element=>{
      const {id, name, image, description, showMore} =element;
      return(<div key={id} className='block'>
        <div className='main'>
          <div className='container'>
            <h2>{id}. {name}</h2>
          </div>
          <div className='container'>
            <img src={image} alt="track"/>
          </div>
        </div>
        <div className='main'>
          <div  className='container'>
            <p>{showMore ? description : description.substring(0,350) + "..."}<button onClick = { () => showTextClick(element)}>{showMore ? "show less" : "show more"}</button></p>
          </div>
          <div className='container'>
            <button className='btn' onClick={() => removeTrack(id)}>remove</button>
          </div>
        </div>
        </div>
      )
    }))}
    <div className='container'>
      <button className='btn' onClick={() => setTracks([])}>delete all</button>
    </div>
  </div>
  );
}

export default App;
