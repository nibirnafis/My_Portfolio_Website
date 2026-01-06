import TextSection from "../components/TextSection";

const About = () => {


    return (
        <>
        <div className="page">
            <TextSection></TextSection>
            <div className="relative bottom-0">
                <img className="md:max-w-md bg-white rounded-2xl mx-auto drop-shadow-lg" src="/assets/nibir.png" alt="" />

                <div className="flex flex-col gap-2 md:gap-4 fixed right-4 bottom-16">    
                    <div className="flex gap-2 p-2 bg-white rounded-xl drop-shadow-md">
                        <img className="w-4 md:w-6" src="/assets/icons/github.png" alt="" />
                        <p className="text-black text-sml md:text-reg font-light">GITHUB</p>
                    </div>
                    <div className="flex gap-2 p-2 bg-white rounded-xl drop-shadow-md">
                        <img className="w-4 md:w-6 " src="/assets/icons/download.png" alt="" />
                        <p className=" text-black text-sml md:text-reg font-light">RESUME</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default About;






{/* <div className="flex flex-col justify-start items-center grow gap-2 md:gap-4 absolute right-4 bottom-8 md:static">
    <div className="text-exsml md:text-reg flex gap-2 md:gap-4 items-center">
        <img className="w-6 md:w-8" src="/assets/icons/github.png" alt="" />
        <p>GITHUB</p>
    </div>
    <div className="text-exsml md:text-reg flex gap-2 md:gap-4 items-center">
        <img className="w-6 md:w-8" src="/assets/icons/download.png" alt="" />
        <p>RESUME</p>
    </div>
</div> */}