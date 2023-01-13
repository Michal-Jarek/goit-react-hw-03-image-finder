import { Searchbar } from "./Searchbar/Searchbar";
import { cokolwiek } from "utils/Api/Api";

export const App = () => {

  cokolwiek("big boobs");

  return (
    <div>
      <Searchbar onSubmit />
    </div>
  );
};
