import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const ButtonTheme = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("err : theme context does not provide theme");
  }

  const { theme, changeTheme } = themeContext;
  return <button onClick={changeTheme}>{theme}</button>;
};

export default ButtonTheme;
