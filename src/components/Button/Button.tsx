import { FC } from "react";
import "./Button.css";
interface Props {
  className?: string;
  children: React.ReactNode;
  onClick: () => void;
}
export const Button: FC<Props> = (props) => {
  return (
    <button {...props} className={`button ${props.className}`}>
      {props.children}
    </button>
  );
};
