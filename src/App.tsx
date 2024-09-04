import { useEffect } from "react";

function App() {
  const tg = window.Telegram.WebApp;

  useEffect(() => {
    tg.ready();
  }, []);

  return <main></main>;
}

export default App;
