import { useState, useEffect, ChangeEvent } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";
import { getData } from "./utils/data.utils";

export type Monster = {
  id: string;
  name: string;
  email: string;
};

const App = () => {
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [searchString, setSearchString] = useState("");
  const [fillterMonsters, setFillterMonsters] = useState(monsters);

  useEffect(() => {
    const fetchUser = async () => {
      const users = await getData<Monster[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setMonsters(users);
    };
    fetchUser();
  }, []);

  useEffect(() => {
    const newfillterMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchString);
    });
    setFillterMonsters(newfillterMonsters);
  }, [monsters, searchString]);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchString = event.target.value.toLowerCase();
    setSearchString(searchString);
  };

  return (
    <div className="App">
      <h1 className="app-title">MONSTER ROLODEX</h1>
      <SearchBox
        onChangeHandle={onSearchChange}
        placeholder="search monster.."
        className="search-class"
      />
      <CardList fillterMonsters={fillterMonsters} />
    </div>
  );
};

export default App;
