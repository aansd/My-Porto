import Link from "next/link"
import {FaGithub, FaLinkedinIn, FaInstagram, } from "react-icons/fa"
import { FaSquareThreads } from "react-icons/fa6"

const socials = [
    {icon: <FaGithub />, path: "https://github.com/aansd"},
    {icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/septiyan-abdurrohman-0898b9315/"},
    {icon: <FaInstagram />, path: "https://www.instagram.com/gendaanmu_/#"},
    {icon: <FaSquareThreads />, path: "https://www.threads.com/@gendaanmu_"},
]
const Social = ({containerStyles, iconStyles}) => {
  return  <div className={containerStyles}>
    {socials.map((item, index)=> {
        return ( 
        <Link key={index} href={item.path} className={iconStyles} target="_blank" rel="noopener noreferrer">
            {item.icon}
            </Link>
        )
    })}
  </div>
  
}

export default Social