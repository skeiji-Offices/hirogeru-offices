import config from "@/libs/config";

const Hero = () => {
    const { hero } = config;

    return (
        <div className="hero min-h-[70vh] bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-2xl">
                    {hero.badge && (
                        <div className="badge badge-primary badge-outline mb-4 p-4">
                            {hero.badge}
                        </div>
                    )}
                    <h1 className="text-5xl font-bold tracking-tight mb-6">
                        {hero.title}
                    </h1>
                    <p className="py-6 text-xl text-base-content/80">
                        {hero.description}
                    </p>
                    <button className="btn btn-primary btn-lg">
                        {hero.buttonText}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
