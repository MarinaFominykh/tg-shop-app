import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// declare global {
//   interface Window {
//     Telegram: any;
//   }
// }
const tg = window.Telegram.WebApp;

function App() {
  const [count, setCount] = useState(0);

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
