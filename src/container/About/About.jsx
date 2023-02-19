import React from 'react';
// import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
// import { urlFor, client } from '../../client';
import images from '../../constants/images'
import { IoMdArrowDropright } from 'react-icons/io'
import { BsArrowRightShort } from 'react-icons/bs'

const About = () => {
    return (
        <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest text-[#e2a013] app-parafrontendf'>
                        About Me
                    </p>
                    <h2 className='py-4 app-head'>Who I Am</h2>
                    <p className='py-2 text-[#e2a013]'>
                        Hi I'm Navraj Singh Bal
                    </p>
                    <p className='py-2 text-gray-600 text-sm'>
                        I am a first year university student studying Computer Science at the University of Waterloo and Business Administration at Wilfrid Laurier University. I have a passion for programming because of its real world applications in solving problems. I am mostly experienced in web development using technolgies including such as HTML/CSS, React, and Node.Js and also use Python. I have used these skills at Hackathons where I've had the chance to built multiple cool projects and for helping local organizations promote themselves in a professional manner.
                    </p>
                    {/* <p className='py-2 text-gray-600'>
                        These are some things I love about programming:
                    </p>
                    <p className='py-2 text-gray-600 flex text-sm'>
                        <IoMdArrowDropright /> Theres always something new to learn. 
                    </p>
                    <p className='py-2 text-gray-600 flex text-sm'>
                        <IoMdArrowDropright />  I am a quick learner and constantly improve my skills not only in professional but also in multiple other fields. If hired for the position, I will continue to learn and transfer obtained knowledge and skills to other team members.

                    </p>
                    <p className='py-2 text-gray-600 flex text-sm'>
                        <IoMdArrowDropright />  You will never find a more disciplined person. I am never late and know how to value the time of other people. Especially in the engineering field, where everything should be clear, structured, and meet requirements.
    </p> */}
                    <a href='/#work'>
                        <button className='flex justify-center items-center my-2'>Check out my projects <BsArrowRightShort /></button>
                    </a>
                </div>
                <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-full flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                    <img src={images.profile} className='rounded-xl' alt='/' />
                </div>
            </div>
        </div >
    );
};
export default AppWrap(
    MotionWrap(About, 'app__about'),
    'about',
    'app__whitebg')