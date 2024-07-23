import { RiReactjsLine } from "react-icons/ri"
import { TbBrandJavascript } from "react-icons/tb"
import { TbBrandGraphql } from "react-icons/tb"
import { SiMagento } from "react-icons/si"
import { SiMysql } from "react-icons/si"
import { DiPhp } from "react-icons/di"
import { TbBrandTailwind } from "react-icons/tb"

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <h2 className="my-20 text-center text-4xl">
            Technologies
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiPhp className="text-7xl text-white-400" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMagento className="text-7xl text-orange-600" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandJavascript className="text-7xl text-yellow-600" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandTailwind className="text-7xl text-sky-700" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMysql className="text-7xl text-white-400" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandGraphql className="text-7xl text-pink-600" />
            </div>
        </div>
    </div>
  )
}

export default Technologies