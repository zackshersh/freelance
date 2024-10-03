import React from 'react';

function NavOption({index, text, wide, selected, setSelected}){
    return (
        <div
            onMouseDown={() => {
                
            }}
            className={`${wide ? "w-2/3" : "w-1/3"} text-lg ${selected == index ? "border-b-2" : ""}`}>{text}</div>
    )
}

function MiniNav({index, setIndex}) {
    return (
        <div className='flex mt-3'>
            <NavOption index={0} selected={index} setSelected={setIndex} text={"Work"} wide={true} />
            <NavOption index={1} selected={index} setSelected={setIndex} text={"About Me"} wide={false} />
        </div>
    );
}

export default MiniNav;