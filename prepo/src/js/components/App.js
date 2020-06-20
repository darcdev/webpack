import React, {useState } from 'react';
import data from '../../../data.json';
import Loader from './Loader';
import logo from '../../images/platzi.png';
import video from '../../videos/que-es-core.mp4';

function App(){
    const [loaderList , setLoaderList] = useState([]);
    function handleCLick(){
        setLoaderList(data.loaders);
    }
    return (<div>
        
        <video width={360} src={video} controls poster={logo}></video>
        <p>
            <img src={logo} alt="logo platzi"/>
        </p>
        <ul>
            {
                loaderList.map((item) => <Loader data={item} key={item.id}/>)
            }
        </ul>
        <button onClick={handleCLick}>Mostrar lo aprendido hasta el momento</button>
    </div>);
}

export default App;