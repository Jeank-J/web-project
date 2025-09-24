import './App.css'
import CardPlace from './componentes/CardPlace/CardPlace'
import data from './data/data.json'

function App() {
  return (
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
  );
}

export default App;
