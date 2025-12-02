import config from "@/libs/config";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const Portfolio = () => {
    if (!config.portfolio) return null;

    return (
        <section id="portfolio" className="py-20 bg-base-200">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">{config.portfolio.title}</h2>
                    <p className="text-base-content/70 max-w-2xl mx-auto">
                        {config.portfolio.description}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {config.portfolio.items.map((item, index) => (
                        <div key={index} className="card bg-base-100 shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                            {/* Placeholder for image if actual image is missing */}
                            <figure className="relative h-64 bg-base-300">
                                {item.image ? (
                                    <div className="w-full h-full flex items-center justify-center text-base-content/30">
                                        {/* Using a placeholder text/icon until real images are added */}
                                        <span className="text-lg font-semibold">Image: {item.title}</span>
                                    </div>
                                ) : (
                                    <div className="w-full h-full bg-neutral/10" />
                                )}
                            </figure>
                            <div className="card-body">
                                <h3 className="card-title text-xl">
                                    {item.title}
                                </h3>
                                <p className="text-base-content/80 mb-4">
                                    {item.description}
                                </p>
                                <div className="card-actions justify-end">
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-primary btn-sm gap-2"
                                    >
                                        Visit Site <ExternalLink size={16} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
