import { NavLink } from "react-router";
import TextSection from "../components/TextSection";
import IconsAnimation from "../components/IconsAnimation";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


gsap.registerPlugin(useGSAP);


const About = () => {

    const container = useRef()

    useGSAP(()=>{
            gsap.from(".image-class", 
                {
                    opacity: 0,
                    y: 20,
                    delay: .3                
                }
            )
        }, { scope: container }
    )

    return (
        <>
        <div className="page">
            <TextSection></TextSection>
            <div className="main-section">
                <div className="flex flex-col justify-center items-center gap-4 md:gap-8">
                    <div className="w-full">
                        <IconsAnimation></IconsAnimation>
                    </div>
                    <div ref={container} className="max-w-md bg-white rounded-2xl">
                        <img className="image-class rounded-2xl" src="/assets/nibir.png" alt="" />
                    </div>
                </div>
            </div>


            <div className="flex flex-col gap-2 md:gap-4 fixed right-4 bottom-12 md:bottom-16">
                <NavLink to='https://github.com/nibirnafis' title="https://github.com/nibirnafis" target="_blank" rel="noopener noreferrer">
                    <div className="flex gap-2 p-2 bg-white rounded-xl ">
                        <img className="w-4" src="/assets/icons/github.png" alt="" />
                        <p className="text-black text-sml font-light">GITHUB</p>
                    </div>
                </NavLink>
                <NavLink 
                    to='https://drive.google.com/drive/folders/1YQhpf6dQzoKoQBjQyavmdEIr39sDvmJX?usp=sharing' 
                    title="https://drive.google.com/drive/folders/1YQhpf6dQzoKoQBjQyavmdEIr39sDvmJX?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer">

                    <div className="flex gap-2 p-2 bg-white rounded-xl ">
                        <img className="w-4 " src="/assets/icons/download.png" alt="" />
                        <p className=" text-black text-sml font-light">RESUME</p>
                    </div>
                </NavLink>
            </div>
        </div>
        </>
    );
};

export default About;