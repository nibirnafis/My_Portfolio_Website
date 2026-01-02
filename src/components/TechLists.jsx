import TechData from './TechData';

const TechLists = ({tech}) => {

    const { title, techs } = tech
    // console.log(tech)


    return (
        <div className='main-section'>
            <div className='tech-stack'>
                <p className='text-exsml md:text-sml font-bold tracking-wide md:tracking-widest rounded-[13.6px] text-orange'>{title}</p>
                <div className='flex flex-wrap gap-4'>
                {
                    techs.map((tech, index) => <TechData tech={tech} key={index}></TechData>)
                }
                </div>
            </div>
        </div>
    );
};

export default TechLists;