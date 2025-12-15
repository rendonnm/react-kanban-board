import { Board } from "./Board";
import { Header } from "./Header";

function App() {
  return (
    <div className="h-screen w-screen grid grid-rows-[auto_1fr] overflow-hidden">
      <Header />
      <main className="h-full w-full overflow-x-scroll">
        <Board />
      </main>
    </div>
  );
}

export default App;
