import TechData from './TechData';




const TechLists = ({tech, classname}) => {

    const { title, techs } = tech


    return (
        <div className={`${classname} tech-stack`}>
            <p className='text-exsml md:text-sml font-bold tracking-wide md:tracking-widest text-orange'>{title}</p>
            <div className='grid grid-cols-3 md:grid-cols-5 gap-4'>
            {
                techs.map((tech, index) => <TechData tech={tech} key={index}></TechData>)
            }
            </div>
        </div>
    );
};

export default TechLists;