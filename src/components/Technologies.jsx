import { RiReactjsLine } from "react-icons/ri"
import { TbBrandJavascript } from "react-icons/tb"
import { TbBrandGraphql } from "react-icons/tb"
import { SiMagento } from "react-icons/si"
import { SiMysql } from "react-icons/si"
import { DiPhp } from "react-icons/di"
import { TbBrandTailwind } from "react-icons/tb"
import { animate, motion, transform } from "framer-motion"

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
const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h2 
            whileInView={{y: 0, opacity: 1}} 
            initial={{y: -100, opacity: 0}} 
            transition={{duration: 1.5}}
            className="my-20 text-center text-4xl">
            Technologies
        </motion.h2>
        <motion.div 
            whileInView={{x: 0, opacity: 1}} 
            initial={{x: -100, opacity: 0}} 
            transition={{duration: 1.5}} 
            className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiPhp className="text-7xl text-white-400" />
            </motion.div>
            <motion.div 
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMagento className="text-7xl text-orange-600" />
            </motion.div>
            <motion.div 
                variants={iconVariants(5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandJavascript className="text-7xl text-yellow-600" />
            </motion.div>
            <motion.div 
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400" />
            </motion.div>
            <motion.div 
                variants={iconVariants(4)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandTailwind className="text-7xl text-sky-700" />
            </motion.div>
            <motion.div 
                variants={iconVariants(3.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMysql className="text-7xl text-white-400" />
            </motion.div>
            <motion.div 
                variants={iconVariants(4.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandGraphql className="text-7xl text-pink-600" />
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies