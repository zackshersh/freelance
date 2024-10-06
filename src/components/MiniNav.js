import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function NavOption({index, text, wide, selected, setSelected, scrollTo}){

    const navigate = useNavigate();
    const location = useLocation();
    const { hash, pathname, search } = location;

    const [hovered, setHovered] = useState(false);

    const handleMouseDown = () => {

        if(pathname != "/") navigate("/");

        setTimeout(() => {
            let a = document.getElementById(scrollTo);
            console.log(a)
            if(a){
                a.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        }, 50)
        // if(pathname== "/"){
        // } else {
        //     navigate("/")

        // }
    }

    return (
        <a onMouseDown={handleMouseDown} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className={`mr-3 sm:mr-0 underline sm:no-underline text-md sm:text-lg transition-colors inline w-auto cursor-pointer ${hovered ? "ml-3 text-black" : "ml-0 text-neutral-700"} transition-all`}>{text}</a>
    )
}

function MiniNav({index, setIndex}) {
    return (
        <div className='relative mt-3 w-[40vw] min-w-[200px] max-w-[300px] '>
        <nav className='sticky top-8'>
            <h3 className='text-xl font-bold'>Zack Hersh</h3>
            <div className='flex sm:flex-col mb-4 mt-1 sm:mt-3'>
                <NavOption index={0} selected={index} setSelected={setIndex} text={"Work"} scrollTo={"work-anchor"} wide={true} />
                <NavOption index={1} selected={index} setSelected={setIndex} text={"About Me"} scrollTo={"about-anchor"} wide={false} />
            </div>
        </nav>
        </div>
    );
}

export default MiniNav;