import { useState } from "react";
import TitleCard from "./components/TitleCard";
import MiniNav from "./components/MiniNav";

import TitleCard2 from "./components/TitleCard2";


function App() {

    const [subpage, setSubpage] = useState(0);

    return (
        <div className="App min-h-screen p-7">
            <TitleCard2 />

            <div className="flex">
                <MiniNav index={subpage} setIndex={setSubpage}/>
                <main>

                </main>
            </div>
        </div>
    );
}

export default App;
