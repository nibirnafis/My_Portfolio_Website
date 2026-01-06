import { NavLink } from "react-router";
import Icons from "./Icons";
import SmallButton from "./SmallButton";

const Project = ({project}) => {

    const {name, type, img_url, live_url, repository, techs } = project

    return (
        <div className='project flex flex-col md:flex-row gap-4'>
            <div className='overflow-clip min-w-[256px] md:max-w-[256px] rounded-xl'>
                <img src={img_url} alt="" />
            </div>
            <div className='flex flex-col gap-4 justify-between items-start grow md:my-4'>
                <div className='w-full flex justify-between'>
                    <div>
                        <p className="text-sml md:text-reg font-bold tracking-wide mb-1">{name.toUpperCase()}</p>
                        <p className="text-exsml font-light md:text-sml">{type}</p>
                    </div>
                    <div className="flex gap-2">
                        <div className="text-exsml lg:text-sml text-green rotate-315">
                            <NavLink to={live_url} title={live_url}>{'->'}</NavLink>
                        </div>
                        <div className="w-4">
                            <NavLink to={repository} title={repository}>
                                <img src="/assets/icons/github.png" alt="" />
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap gap-2 md:gap-4">
                    {
                        techs.map((icon, index) => <Icons icon={icon} key={index}></Icons>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Project;