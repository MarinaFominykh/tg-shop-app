import "./Header.css";
import { Button } from "../Button/Button";
export const Header = () => {
  const tg = window.Telegram.WebApp;
  const onClose = () => {
    tg.close();
  };
  return (
    <header className={`header`}>
      <Button onClick={onClose}>Закрыть</Button>
      <span className="username">{tg.initDataUnsafe?.user?.username}</span>
    </header>
  );
};
