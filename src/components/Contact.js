import React from 'react';

function Contact(props) {
    return (
        <div className='border-t-2 border-[rgba(0,0,0,0.1)] py-6 mt-12 w-full'>
            <h3 id="contact-anchor" className='text-xl md:w-3/4'>Whether you would like to hire me, or just have a conversation, you can contact me at</h3>
            <a href='mailto: zackshersh@gmail.com' className='text-3xl sm:text-[5vw] md:text-[4.5vw] mt-2 block'><span className='underline decoration-green-400 hover:bg-green-400 transition-colors'>zackshersh@gmail.com</span> →</a>  
        </div>
    );
}

export default Contact;