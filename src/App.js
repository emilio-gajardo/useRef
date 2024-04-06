import { Ejemplo } from "./components/Ejemplo";
import { Formulario } from "./components/Formulario";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"></header> */}
      <section>
        {
          <>
            <Ejemplo />
            <hr />
            <Formulario />
          </>
        }
      </section>
    </div>
  );
}

export default App;
