import { NavLink } from "react-router";
import TextSection from "../components/TextSection";

const About = () => {


    return (
        <>
        <div className="page">
            <TextSection></TextSection>
            <div className="main-section pb-0">
                <img className="md:max-w-md bg-white rounded-2xl mx-auto" src="/assets/nibir.png" alt="" />
            </div>
            <div className="flex flex-col gap-2 md:gap-4 fixed right-4 bottom-16">    
                <NavLink to='https://github.com/nibirnafis' title="https://github.com/nibirnafis" target="_blank" rel="noopener noreferrer">
                    <div className="flex gap-2 p-2 bg-white rounded-xl ">
                        <img className="w-4 md:w-6" src="/assets/icons/github.png" alt="" />
                        <p className="text-black text-sml md:text-reg font-light">GITHUB</p>
                    </div>
                </NavLink>
                <NavLink 
                    to='https://drive.google.com/drive/folders/1YQhpf6dQzoKoQBjQyavmdEIr39sDvmJX?usp=sharing' 
                    title="https://drive.google.com/drive/folders/1YQhpf6dQzoKoQBjQyavmdEIr39sDvmJX?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer">

                    <div className="flex gap-2 p-2 bg-white rounded-xl ">
                        <img className="w-4 md:w-6 " src="/assets/icons/download.png" alt="" />
                        <p className=" text-black text-sml md:text-reg font-light">RESUME</p>
                    </div>
                </NavLink>
            </div>
        </div>
        </>
    );
};

export default About;