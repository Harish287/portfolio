import { Button } from "@/components/ui/button";
import Summary from "@/static/Summary";
import Timeline from "@/static/Timeline";

function About() {
    return <div className="bg-slate-800" id="About">
        <img className="w-full h-44" src="/transitions/transition_gradient.svg" alt="transition" />
        <div className="flex justify-center items-center text-white">
            <div className="flex flex-row w-full">
                <div className="flex desktop:w-1/2 mobile:w-full mobile:p-4 flex-col desktop:p-20">
                    <Summary />
                </div>
                <div className="desktop:flex mobile:hidden w-1/2 flex-col pl-10">
                    <Timeline />
                </div>
            </div>
        </div>
        <div className="flex justify-center">
            <a href="/assets/HarishResume.pdf" download>
                <button className="relative overflow-hidden rounded-lg bg-white text-black px-6 py-3 font-medium
                 transition-all duration-300 ease-out hover:bg-black hover:text-white hover:scale-105
                active:scale-95 shadow-md hover:shadow-xl">

                    <span className="relative z-10">Download Resume</span>

                    {/* Hover particle glow */}
                    <span className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 
        opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
                </button>
            </a>
        </div>

    </div>
}

export default About;