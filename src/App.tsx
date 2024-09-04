import { useEffect } from "react";
import { useTelegram } from "./hooks/useTelegram";
import { Header } from "./components/Header/Header";
function App() {
  const { tg, onToggleButton } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <>
      <Header />
      <main>
        <button onClick={onToggleButton}>Toggle</button>
      </main>
    </>
  );
}

export default App;
