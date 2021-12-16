import './App.css';
import  Card from './components/Card';
import Header from './components/Header';
import React, {useState, useEffect} from 'react';
import {defaultColors} from './utils/utils';

function App() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://greenspark.mocklab.io/products")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])


  return (
    <div className="main">
      <Header />
      <div className='grid'>
      {items.map((item, i) =>
        <Card key={item.id} type={item.type} amount={item.amount} action={item.action} backColor={defaultColors[i].backColor} txColor={defaultColors[i].textColor} logos={defaultColors[i].logo}/>
      )}
      </div>
    </div>
  );
}

export default App;
