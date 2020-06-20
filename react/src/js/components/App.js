import React, {useState } from 'react';
import data from '../../../data.json';
import Loader from './Loader';


function App(){
    const [loaderList , setLoaderList] = useState([]);
    function handleCLick(){
        setLoaderList(data.loaders);
    }
    return (<div>
        <ul>
            {
                loaderList.map((item) => <Loader data={item} key={item.id}/>)
            }
        </ul>
        <button onClick={handleCLick}>Mostrar lo aprendido hasta el momento</button>
    </div>);
}

export default App;