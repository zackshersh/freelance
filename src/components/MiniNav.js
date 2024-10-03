import React from 'react';

function NavOption({index, text, wide, selected, setSelected}){

    return (

        <div onMouseDown={() => {setSelected(index)}} className={`${wide ? "w-2/3" : "w-1/3"} ${selected == index ? "border-b-4 border-[rgba(0,0,255,0.2)] text-black" : "border-b-[1px] text-neutral-600"} ${index == 0 ? "mr-5" : "mr-0"} transition-colors text-2xl`}>{text}</div>
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