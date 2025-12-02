import config from "@/libs/config";
import { CheckCircle } from "lucide-react";

const Features = () => {
    return (
        <section id="features" className="py-20 bg-base-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">
                    特徴・強み
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {config.features.map((feature, index) => (
                        <div key={index} className="card bg-base-200 shadow-xl">
                            <div className="card-body">
                                <div className="flex items-center gap-3 mb-4">
                                    <CheckCircle className="w-6 h-6 text-primary" />
                                    <h3 className="card-title">{feature.title}</h3>
                                </div>
                                <p className="text-base-content/80">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
