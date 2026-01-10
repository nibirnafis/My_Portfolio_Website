import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(useGSAP);


const UseGSAP = (container, className, elements) => {

    return  useGSAP(()=>{
            elements.length > 0 && gsap.from(`${className}`, 
                {
                    opacity: 0,
                    y: 20,
                    stagger: 0.2
                }
            )
        }, { scope: container, dependencies: [elements] }
    )
};

export default UseGSAP;