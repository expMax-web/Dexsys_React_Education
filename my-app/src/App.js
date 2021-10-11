import "./styles.css";
import Navbar from "./components/Navbar/Navbar";
import CharacterCard from "./components/CharacterCard/CharacterCard";
import UpButton from "./components/UpButton/UpButton";

function App() {
  const CharacterCards = [];
  return (
    <div className="App">
      <Navbar />
      <main className="Container">
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
      </main>
      <UpButton>Вверх</UpButton>
    </div>
  );
}

export default App;
