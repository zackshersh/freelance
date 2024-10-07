import React, { useEffect, useState } from 'react';

import workData from "./workData.json";

function ProjectPage({index}) {

    const [data, setData] = useState(workData[index]);


    const generateContentElements = () => {
        let arr = [];

        data.content.forEach((elem, i) => {

            switch(elem.type){
                case "text":
                    arr.push( <p key={i}>{elem.string}</p> );
                    break;
                case "video":
                    arr.push( 
                        <div className='relative'>
                            <video className='mt-3' key={i} autoPlay muted loop>
                                <source src={"./media/"+elem.path} />
                            </video> 
                            {/* <div className='min-w-full min-h-full top-0 left-0 py-6 z-10 bg-red-500'></div> */}
                        </div>
                    )
                    break;
                case "image":
                    arr.push(
                        <div className='w-full flex justify-center'>
                            <img className='mt-3 max-h-[80vh]' src={"./media/" + elem.path} />
                        </div>
                    )
            }
            
        })

        return arr;
    }

    const generateTagElements = () => {
        return data.tags.map((tag, i) => {
            return (<p className="text-end text-sm uppercase" key={i}>{tag}</p>)
        })
    }

    return (
        <div className='pt-4 sm:pt-0'>
            <img className='w-full max-w-[1000px]' src={"./media/"+data.thumbnail} />
            <h1 className='text-xl mt-8 font-bold'>{data.title}</h1>
            <h1 className='text'>{data.client}</h1>
            <section className='mt-3 pt-4 border-t-2 border-[rgba(0,0,0,0.1)] flex justify-between'>
                <p className='md:w-2/3 leading-snug text-[0.96rem]'>{data.description}</p>
                <div className='pl-4 hidden md:block'>
                    {generateTagElements()}
                </div>
            </section>
            <main className='mt-16'>
                {generateContentElements()}
            </main>
        </div>
    );
}

export default ProjectPage;