import { CONTACT } from "../constants"
import { motion } from "framer-motion"
import updatedCV from "../assets/Updated_CV.pdf";

const callTo = "tel:";
const mailtTo = "mailto:";
const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
        <motion.h2 
            whileInView={{y: 0, opacity: 1}} 
            initial={{y: -100, opacity: 0}} 
            transition={{duration: 1}}
            className="my-10 text-center text-4xl">
            Get in Touch
        </motion.h2>
        <div className="text-center tracking-tighter">
            <motion.p 
                whileInView={{x: 0, opacity: 1}} 
                initial={{x: -100, opacity: 0}} 
                transition={{duration: 1}} 
                className="my-4">
                {CONTACT.address}
            </motion.p>
            <motion.p 
                whileInView={{x: 0, opacity: 1}} 
                initial={{x: 100, opacity: 0}} 
                transition={{duration: 1}} 
                className="my-4">
                <a href={callTo+CONTACT.phoneNo} >
                    {CONTACT.phoneNo}
                </a>
            </motion.p>
            <a href={mailtTo+CONTACT.email} className="border-b">{CONTACT.email}</a>
            <p className="mt-4">
            <a href={updatedCV} target="_blank">
                <span className="mt-4 rounded bg-neutral-900 px-2 py-1 text-xl font-medium text-purple-800 hover:text-white">
                    <button className="">Download Resume</button>
                </span>
            </a>
            </p>
            <p className="mt-4">CodePsyc © 2024</p>
        </div>
    </div>
  )
}

export default Contact