import React from 'react';
import { useNavigate } from 'react-router-dom';

function NavOption({index, text, wide, selected, setSelected}){

    const navigate = useNavigate();

    const handleMouseDown = () => {
        navigate("/")
    }

    return (
        <a onMouseDown={handleMouseDown} className={`mr-3 sm:mr-0 underline sm:no-underline text-md sm:text-lg transition-colors block cursor-pointer`}>{text}</a>
    )
}

function MiniNav({index, setIndex}) {
    return (
        <nav className='mt-3 w-[40vw] min-w-[200px] max-w-[300px]'>
            <h3 className='text-xl font-bold'>Zack Hersh</h3>
            <div className='flex sm:flex-col mb-4 mt-1 sm:mt-3'>
                <NavOption index={0} selected={index} setSelected={setIndex} text={"Work"} wide={true} />
                <NavOption index={1} selected={index} setSelected={setIndex} text={"About Me"} wide={false} />
            </div>
        </nav>
    );
}

export default MiniNav;