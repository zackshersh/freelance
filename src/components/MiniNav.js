import React from 'react';

function NavOption({index, text, wide, selected, setSelected}){

    return (

        <a className={` transition-colors text-xl block`}>{text}</a>
    )
}

function MiniNav({index, setIndex}) {
    return (
        <div className='mt-3 w-[250px]'>
            <h3 className='text-xl mb-6 font-bold'>Zack Hersh</h3>
            <NavOption index={0} selected={index} setSelected={setIndex} text={"Work"} wide={true} />
            <NavOption index={1} selected={index} setSelected={setIndex} text={"About Me"} wide={false} />
        </div>
    );
}

export default MiniNav;