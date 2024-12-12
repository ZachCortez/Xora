import { Element } from "react-scroll";
import { features } from '../constants';

const Features = () => {
    return (
        <section >
            <Element name="features">
                <div className="container">
                    <div className="reltaive flex md:flex-wrap flex-nowrap border-2 border-s3 rounded-7xl md:overflow-hidden max-md:flex-col feature-after md:g7 max-md:border-none max-md:rounded-none max-md:gap-3">
                        {features.map(({ id, icon, caption, title, button}) => (
                            <div key={id}
                                 className="realtive z-2 md:px-5 md:ob-10 pb-5 flex-50 max-md:g7 max-md:border-2 max-md:border-s3 max-md:rounded-3xl max-md:flex-320"
                            >
                                <div className="w-full flex justify-start items-start">
                                    <div className="-ml-3 mb-12 flex items-center justify-center flex-col">
                                        <div className="w-0.5 h-16 bg-s3"/>
                                        <img src={icon}
                                             className="size-28 object-contain"
                                             alt={title}
                                        />
                                    </div>
                                </div>
                                <p className="caption mb-5 max-md:mb-6">{caption}</p>
                                <h2 className="max-w-400 mb-7 h3 text-p4 max-md:mb-6 max-md:h5">
                                    {title}
                                </h2>
                            </div>
                        ))}
                    </div>
                </div>
            </Element>
        </section>
    )
}
export default Features