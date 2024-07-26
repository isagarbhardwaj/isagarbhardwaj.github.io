import { motion } from "framer-motion"
import { FaGithub } from "react-icons/fa";
import { FaBitbucket } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";
import { SiSublimetext } from "react-icons/si";
import { SiMacos } from "react-icons/si";
import { FcLinux } from "react-icons/fc";
import { SiZendesk } from "react-icons/si";
import { FaWindows } from "react-icons/fa6";
import { FaGitlab } from "react-icons/fa";
import { IoTerminal } from "react-icons/io5";

const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})

const Tools = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h2 
            whileInView={{y: 0, opacity: 1}} 
            initial={{y: -100, opacity: 0}} 
            transition={{duration: 1.5}}
            className="my-20 text-center text-4xl">
            Tools | Project Mgmt | OS
        </motion.h2>
        <div  className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
                whileHover={{ scale: 1.2 }}
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandVscode className="text-7xl text-sky-600" />
            </motion.div>
            <motion.div 
                whileHover={{ scale: 1.2 }}
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiSublimetext className="text-7xl text-orange-400" />
            </motion.div>
            <motion.div 
                whileHover={{ scale: 1.2 }}
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <IoTerminal className="text-7xl text-white" />
            </motion.div>
            <motion.div 
                whileHover={{ scale: 1.2 }}
                variants={iconVariants(4)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiZendesk className="text-7xl text-green-900" />
            </motion.div>
            <motion.div 
                whileHover={{ scale: 1.2 }}
                variants={iconVariants(3.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaGithub className="text-7xl text-purple-400" />
            </motion.div>
            <motion.div 
                whileHover={{ scale: 1.2 }}
                variants={iconVariants(5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaBitbucket className="text-7xl text-sky-500" />
            </motion.div>
            <motion.div 
                whileHover={{ scale: 1.2 }}
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaGitlab className="text-7xl text-orange-600" />
            </motion.div>
            <motion.div 
                whileHover={{ scale: 1.2 }}
                variants={iconVariants(4)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMacos className="text-7xl text-white-400" />
            </motion.div>
            <motion.div 
                whileHover={{ scale: 1.2 }}
                variants={iconVariants(4.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <FcLinux className="text-7xl text-white-400" />
            </motion.div>
            <motion.div 
                whileHover={{ scale: 1.2 }}
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaWindows className="text-7xl text-sky-400" />
            </motion.div>
        </div>
    </div>
  )
}

export default Tools