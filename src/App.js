import { useState } from "react";
import TitleCard from "./components/TitleCard";
import MiniNav from "./components/MiniNav";


function App() {

    const [subpage, setSubpage] = useState(0);

    return (
        <div className="App min-h-screen p-7">
            <TitleCard />
            <MiniNav index={subpage} setIndex={setSubpage}/>
        </div>
    );
}

export default App;
