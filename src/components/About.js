import React from 'react';

function About(props) {
    return (
        <div className='border-t-2 border-[rgba(0,0,0,0.1)] py-6 mt-12'>
            <h3 id="about-anchor" className='text-3xl font-bold'>About Me</h3>
            <section className='mt-3 md:flex justify-between'>
                <div className='md:w-2/3 *:leading-snug'>
                    <p className='text-[0.96rem]'>I am a freelance developer and designer who is passionate about creating functional and beautiful things in a range of digital mediums. Despite recently graduating from UNC Chapel Hill's Hussman School of Media and Journalism in May 2024, I have 6+ years of experience in graphic design, and 5+ years of experience in web design.</p>
                    <p className='mt-4 text-[0.96rem]'>Since I was a teenager, my curiosity about the aesthetic and functional sides of design has pushed my individual exploration of graphics and coding, which I expanded upon in my studies at UNC, as well as my experiences working at Runaway Clothing, Guidehouse Consulting, and UNC's Blue Sky Innovation Lab.</p>
                    <p className='mt-4 text-[0.96rem]'>These days, I am applying my passion and abilities to working with businesses and individuals to create beautiful pieces of graphic, branding, and web design!</p>
                </div>
                <div className='flex flex-row md:flex-col *:underline *:decoration-green-400 *:*:px-1 *:text-xl *:mr-4 *:md:mr-0 mt-6 md:mt-0'>
                    <div>
                        <a className='hover:bg-green-400 transition-colors' href='./media/Zack Hersh Resume.pdf'>Resume</a>
                    </div>
                    <div>
                        <a className='hover:bg-green-400 transition-colors' href='https://www.linkedin.com/in/zack-hersh-3a551b1a4/'>LinkedIn</a>
                    </div>
                    <div>
                        <a className='hover:bg-green-400 transition-colors inline' href='https://github.com/zackshersh'>Github</a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;