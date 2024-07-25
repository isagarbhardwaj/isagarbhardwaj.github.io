import logo from "../assets/profileLogo.png"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-10" src={logo} alt="" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <motion.a 
              whileHover={{ scale: 1.5 }}
              href="https://www.linkedin.com/in/isagarbhardwaj/">
              <FaLinkedin />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.5 }}
              href="https://github.com/isagarbhardwaj">
              <FaGithub />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.5 }}
              href="https://x.com/isagarbhardwaj">
              <FaSquareXTwitter />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.5 }}
              href="https://www.instagram.com/isagarbhardwaj">
              <FaInstagram />
            </motion.a>
        </div>
    </nav>
  )
}

export default Navbar