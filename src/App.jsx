import "./App.css";
import "./Navbar.css";
import Navbar from "./Navbar";
import ButtonComponent from "./ButtonComponent";
import ImageComponent from "./ImageComponent";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar /> {}
      </div>

      <div class="Button">
        <h1
          style={{
            color: "white",
            fontSize: "36px",
            fontFamily: "helvetica",
            textAlign: "center",
            letterSpacing: "2px",
            marginBottom: "20px"
          }}
        >
          Benvenuto a Modica!
        </h1>
        {}
        <ButtonComponent text="Immergiti nel barocco" />
      </div>
      <div class="image">
        <ImageComponent
          src="https://media.istockphoto.com/id/528239943/it/foto/modica.jpg?s=612x612&w=0&k=20&c=T5Fk7ewpkdZfWIZvRKCW2Jkvz_WGU2ZuRnf67R0SMpI="
          alt="Modica"
        />
      </div>
    </div>
  );
}

export default App;
