import React, { useEffect, useState, useRef } from 'react';

function TitleCard(props) {

    const svgRef = useRef(0);
    const [svgDimmensions, setSvgDimmensions] = useState({w: 100, h: 100});


    const updateSvgDimmensions = () => {
        let bounds = svgRef.current.getBoundingClientRect();
        // console.log(`0 0 ${bounds.width} ${bounds.height}`)
        // setViewBox(`0 0 ${bounds.width} ${bounds.height}`);
        setSvgDimmensions({
            w: bounds.width,
            h: bounds.height
        })
    };

    useEffect(() => {
        updateSvgDimmensions();
    },[svgRef]);

    useEffect(() => {
        window.addEventListener("resize", () => {
            updateSvgDimmensions();
        })
    }, [])

    return (
        <div className='relative'>
            <div className='relative'>
                <div className='p-5 rounded-md relative z-10 border border-neutral-200 backdrop-blur-[80px]'>
                    <h1 className="text-4xl font-black">Hi! My name is Zack Hersh. I'm a freelance web and graphic designer.</h1>
                </div>
                {/* <div className='absolute rounded-md top-0 left-0 w-full h-full bg-neutral-200 z-0'> */}
                <svg ref={svgRef} className='absolute top-0 w-full h-full bg-neutral-100 rounded-md' viewBox={`0 0 ${svgDimmensions.w} ${svgDimmensions.h}`}>
                    <ellipse cx="0" cy="0" rx="40" ry="40" fill='rgba(0,0,255,0.8)' />
                    <ellipse cx={svgDimmensions.w} cy={svgDimmensions.h} rx="40" ry="40" fill='rgba(0,0,255,0.8)' />
                    <ellipse cx={svgDimmensions.w/1.4} cy={svgDimmensions.h+15} rx="40" ry="40" fill='rgba(0,0,255,0.8)' />
                    <ellipse cx={svgDimmensions.w/2.5} cy={0} rx={svgDimmensions.w/5} ry={svgDimmensions.w/5} fill='rgba(255,255,255,0.7)' />
                    {/* <ellipse cx={svgDimmensions.w/1.2} cy={svgDimmensions.h} rx={svgDimmensions.w/4} ry={svgDimmensions.w/4} fill='rgba(0,0,255,0.2)' /> */}
                </svg>
                {/* </div> */}
            </div>
        </div>
    );

}

export default TitleCard;