import React from 'react';
import Icons from "./Icons";


const Experience = ({experience}) => {

    const {company, post, timeline, type, img_url, skills } = experience

    return (
        <div className="main-section">
            <div className='project flex gap-2 md:gap-4'>
                <div className='overflow-clip max-w-[128px] md:max-w-[256px] rounded-[13.6px]'>
                    <img src={img_url} alt="" />
                </div>
                <div className='flex flex-col justify-between grow my-4 md:my-8'>
                    <div className='flex justify-between'>
                        <div>
                            <p className='mb-2 text-exsml md:text-sml'>{post}</p>
                            <p className='mb-1 text-sml md:text-med font-bold'>{company}</p>
                            <p className='text-exsml md:text-sml'>{type}</p>
                        </div>
                        <div className="hidden md:flex gap-4">
                            {
                                skills.map((icon, index) => <Icons icon={icon} key={index}></Icons>)
                            }
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <p className='text-exsml md:text-sml'>{timeline}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;