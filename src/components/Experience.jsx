import React from 'react';
import Icons from "./Icons";


const Experience = ({experience}) => {

    const {company, post, timeline, type, img_url, skills } = experience

    return (
            <div className='experience flex gap-4'>
                <div className='overflow-clip max-w-[128px] rounded-[13.6px]'>
                    <img src={img_url} alt="" />
                </div>
                <div className='flex flex-col justify-between grow my-2 md:my-4'>
                    <div className='flex flex-col gap-2 md:flex-row justify-between'>
                        <div>
                            <p className='mb-1 text-sml md:text-reg font-bold '>{company}</p>
                            <p className='text-exsml md:text-sml font-light'>{type}</p>
                        </div>
                        <div className="flex flex-row gap-2 md:gap-4">
                            {
                                skills.map((icon, index) => <Icons icon={icon} key={index}></Icons>)
                            }
                        </div>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='font-light text-exsml md:text-sml'>{post.toUpperCase()}</p>
                        <p className='font-light text-exsml'>({timeline})</p>
                    </div>
                </div>
            </div>
        
    );
};

export default Experience;