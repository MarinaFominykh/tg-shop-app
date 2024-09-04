import { useEffect } from "react";
const tg = window.Telegram.WebApp;

function App() {
  const onClose = () => {
    tg.close();
  };

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <main>
      sdff
      <button onClick={onClose}>Закрыть</button>
    </main>
  );
}

export default App;
