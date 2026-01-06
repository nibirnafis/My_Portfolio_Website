import TextSection from "../components/TextSection";

const About = () => {


    return (
        <>
        <div className="page">
            <TextSection></TextSection>
            <div className="w-full flex relative">
                <img className="md:max-w-md" src="/assets/nibir.png" alt="" />
                <div className="flex flex-col justify-start items-center grow gap-2 md:gap-4 absolute right-4 bottom-8 md:static text-white">
                    <div className="text-exsml md:text-reg flex gap-2 md:gap-4 items-center font-bold">
                        <img className="w-6 md:w-8" src="/assets/icons/github.png" alt="" />
                        <p>GITHUB</p>
                    </div>
                    <div className="text-exsml md:text-reg flex gap-2 md:gap-4 items-center font-bold text-white">
                        <img className="w-6 md:w-8" src="/assets/icons/download.png" alt="" />
                        <p>RESUME</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default About;