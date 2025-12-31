import TechData from './TechData';

const TechLists = ({tech}) => {

    const { title, techs } = tech
    // console.log(tech)


    return (
        <div className='flex flex-col'>
            <p className='border border-orange text-center text-exsml md:text-sml font-bold tracking-widest py-1 md:py-2 mb-2 rounded-[13.6px]'>{title}</p>
            <div className='flex flex-col gap-2 md:gap-4 mx-auto'>
            {
                techs.map((tech, index) => <TechData tech={tech} key={index}></TechData>)
            }
            </div>
        </div>
    );
};

export default TechLists;