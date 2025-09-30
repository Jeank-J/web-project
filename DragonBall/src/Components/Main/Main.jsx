import {useState,useEffect} from 'react'
import CardCharacter from '../CardCharacter/CardCharacter'
import './Main.css'
const Main = () => {

  const [characters, setCharacters] = useState([]);

  useEffect (
    () =>{

      fetch("https://dragonball-api.com/api/characters")
        .then(response => response.json)
        .then(data => setCharacters(data.items))
        .catch(error => console.error(error));

    }, []
  );

  return (
    <main>
      <div>
        recuadro
      </div>
      <div>
        Numero 2
      </div>
      <CardCharacter />
    </main>
  )
}

export default Main