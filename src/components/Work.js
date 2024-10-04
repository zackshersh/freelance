import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import workData from "../workData.json";

function WorkBlock({index}){

    const [data, setData] = useState(workData[index]);
    const navigate = useNavigate();

    const handleMouseDown = () => {
        navigate(data.path);
        console.log("ges")
    }
    console.log(data);
    return (
        <div onMouseDown={handleMouseDown} className='my-3'>
            <img src={"./media/" + data.thumbnail} />
            <div className='mt-2'>
                <p>{data.medium}</p>
                <h3 className='text-xl mt-[0px] leading-none'> <b className='font-bold'>{data.client}</b> • {data.title}</h3>
            </div>
        </div>
    )
}

function Work(props) {
    return (
        <div>
            <WorkBlock index={0} />
        </div>
    );
}

export default Work;