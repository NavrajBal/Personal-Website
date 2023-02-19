import React from 'react'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Resume from '../assets/resume.pdf'


const SocialMedia = () => {
    return (
        <div className='app__social'>
            <div>
                <a href="https://www.linkedin.com/in/navraj-bal-25aa061b0/">
                    <FaLinkedin />
                </a>
            </div>
            <div>
                <a href= {Resume}>
                    <BsFillPersonLinesFill />
                </a>
            </div>
            <div>
                <a href="https://github.com/NavrajBal">
                    <FaGithub />
                </a>
            </div>

        </div>
    )
}

export default SocialMedia