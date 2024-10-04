import React, { useState } from 'react';

import workData from "./workData.json";

function ProjectPage({index}) {

    const [data, setData] = useState(workData[index]);

    return (
        <div>
            <img src={"./media/"+data.thumbnail} />
            <h1 className='text-2xl mt-4 font-bold'>{data.title}</h1>
            <h1 className='text-2xl'>{data.client}</h1>
        </div>
    );
}

export default ProjectPage;