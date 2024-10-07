import React from 'react';

function Contact(props) {
    return (
        <div className='border-t-2 py-6 mt-12'>
            <h3 id="contact-anchor" className='text-2xl'>You can contact me at</h3>
            <a href='mailto: zackshersh@gmail.com' className='text-3xl sm:text-[5vw] md:text-[4.5vw] mt-1 block'><span className='underline decoration-green-400'>zackshersh@gmail.com</span> →</a>  
        </div>
    );
}

export default Contact;