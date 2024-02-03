import React from 'react'
import { AiOutlineArrowUp, AiFillGithub, AiFillLinkedin } from "react-icons/ai"
const Footer = () => {
  return (
    <footer>
        <div>
            <img src="https://avatars.githubusercontent.com/u/65660003" alt="" />
            <h2>Vikrant Pathania</h2>
            <p>&copy; All Rights Reserved.</p>
        </div>

        <aside>
            <h2>Social Media</h2>
            <article>
                <a href="https://www.linkedin.com/in/vikrant-pathania-738955145/" target='blank'>
                    <AiFillLinkedin/>
                </a>
                <a href="https://github.com/vikrant-51" target='blank'>
                    <AiFillGithub/>
                </a>
            </article>
        </aside>
        <a href='#home'>
            <AiOutlineArrowUp/>
        </a>
    </footer>
  )
}

export default Footer