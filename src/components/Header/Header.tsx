import "./Header.css";
import { Button } from "../Button/Button";
import { useTelegram } from "../../hooks/useTelegram";
export const Header = () => {
  const { user, onClose } = useTelegram();

  return (
    <header className={`header`}>
      <Button onClick={onClose}>Закрыть</Button>
      <span className="username">{user}</span>
    </header>
  );
};
