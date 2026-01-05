import { NavLink } from "react-router";
import Icons from "./Icons";
import SmallButton from "./SmallButton";

const Project = ({project}) => {

    const {name, type, img_url, /* live_url, repository */ techs } = project

    return (
        <div className='project flex gap-4'>
            <div className='overflow-clip max-w-[128px] md:max-w-[256px]'>
                <img src={img_url} alt="" />
            </div>
            <div className='flex flex-col justify-between grow my-4'>
                <div className='h-full flex flex-col justify-between'>
                    <div>
                        <p className="text-exsml md:text-sml font-bold tracking-wide md:tracking-widest mb-1 md:mb-2">{name.toUpperCase()}</p>
                        <p className="text-exsml font-light md:text-sml">{type}</p>
                    </div>
                    <div className="hidden md:flex flex-wrap gap-2 md:gap-4">
                        {
                            techs.map((icon, index) => <Icons icon={icon} key={index}></Icons>)
                        }
                    </div>
                </div>
                {/* <div className="flex gap-2">
                    <SmallButton url={live_url} title='Live Link'></SmallButton>
                    <SmallButton url={repository} title='repository'></SmallButton>
                </div> */}
            </div>
        </div>
    );
};

export default Project;