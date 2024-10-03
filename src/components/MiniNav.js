import React from 'react';

function NavOption({index, text, wide, selected, setSelected}){

    return (

        <div onMouseDown={() => {setSelected(index)}} className={` ${selected == index ? " text-black" : "text-neutral-600"} ${index == 0 ? "mr-5" : "mr-0"} transition-colors text-xl`}>{text}</div>
    )
}

function MiniNav({index, setIndex}) {
    return (
        <div className='mt-3 w-[200px]'>
            <NavOption index={0} selected={index} setSelected={setIndex} text={"Work"} wide={true} />
            <NavOption index={1} selected={index} setSelected={setIndex} text={"About Me"} wide={false} />
        </div>
    );
}

export default MiniNav;