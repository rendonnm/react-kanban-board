import { Board } from "./Board";
import { Header } from "./Header";

function App() {
  return (
    <div
      className="h-screen w-screen grid grid-rows-[auto_1fr] overflow-hidden
     bg-[url(/sky.jpg)] bg-cover
    "
    >
      <Header />
      <main className="h-full w-full overflow-x-auto">
        <Board />
      </main>
    </div>
  );
}

export default App;
