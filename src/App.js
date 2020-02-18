import React from 'react';
import './App.css';
import Card from './Components/Card/Card';
import Image from './Components/Card/david.jpg';
import ImageTwo from './Components/Card/prince.jpeg';
import ImageThree from './Components/Card/lennon.jpg';
import ImageFour from './Components/Card/thom.jpg';
import ImageFive from './Components/Card/madonna2.jpg';
import Footer from './Components/Footer/Footer';

function App() {
  const cards = [
    {
      img: Image,
      title: "DAVID BOWIE",
      subtitle:"STARMAN", 
      color:"#FF6654"
    },
    {
      img: ImageTwo,
      title: "PRINCE",  
      subtitle: "THE ARTIST",
      color:"#AF6FE8"
    },
    {
      img:ImageThree,
      title: "JOHN LENNON",
      subtitle: "JEALOUS GUY",
      color:"#EBA2CB"
    },
    {
      img:ImageFour,
      title: "THOM YORKE",
      subtitle: "CREEPY",
      color:"#6FAEEB"
    },
    {
      img:ImageFive,
      title: "MADONNA",
      subtitle: "MATERIAL GIRL",
      color:"#FFD728"
    }
  ];
  return (
    <div>
      {cards.map ( card => {    //es para no tener que imprimir uno por uno, entonces se loopea. Map transforma el array y devuelve un nuevo array. 
        return (
        <Card key ={card.title}
          color={card.color}
          title={card.title}
          img={card.img}
          subtitle={card.subtitle}>
        </Card>);
      })}
        <Footer></Footer>
    </div>
  );
}

export default App;

//En react para map necesita una key. 