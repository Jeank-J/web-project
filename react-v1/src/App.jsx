import './App.css'
import CardPlace from './componentes/CardPlace/CardPlace'
import data from './data/data.json'
import HeaderSection from './componentes/HeaderSection/HeaderSection'
import Acordeon from './componentes/Acordeon/Acordeon'
import FooterSection from './componentes/FooterSection/FooterSection'
import { useEffect } from 'react'

function App() {

  /*
    prots:
    < Cardsection propts={contenido} /<>
  */

  /*
    estados:
    const[count, seCount] = useState()
    const[variable, setVariable] = useState("valor1")

  */

  /*
    useEffect( () => {} , [])
  */
  useEffect(()=>{
    fetch("https://rickandmortyapi.com/api")
    .then(response => response.json())
    .then(data => setVariable({data}))
    .catch( error => console.log(error))
  });

  return (
    <>

      <HeaderSection></HeaderSection>

      <main>

        <section>
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {data.map((item) => (
              <CardPlace
                key={item.id}
                titulo={item.title}
                descripcion={item.description}
                img={item.image}
              />
            ))}
          </div>
          <Acordeon></Acordeon>
        </section>

        <section>

          <button>hola</button>
        </section>

      </main>

      <FooterSection></FooterSection>

    </>

  );
}

export default App;
