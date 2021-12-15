import './App.css';
import Logo from "./assets/Greenspark.png";
import Logo2 from "./assets/Greenspark2.png";
import  Card from './components/Card';
import Header from './components/Header';
import React, {useState, useEffect} from 'react';

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

 const backColor = ["#2E3A8C", "#3B755F", "#F2EBDB"];
 const txColor =["#ffffff", "#ffffff", "#3b755f"];
 const logos =[Logo, Logo, Logo2];

  return (
    <div className="main">
      <Header />
      <div className='grid'>
      {items.map((item, i) =>
        <Card key={item.id} type={item.type} amount={item.amount} action={item.action} backColor={backColor[i]} txColor={txColor[i]} logos={logos[i]}/>
      )}
      </div>
    </div>
  );
}

export default App;
