import Image from "next/image";
import Link from "next/link";
import config from "@/libs/config";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Hotel,
  Settings,
  ExternalLink,
  Menu
} from "lucide-react";

// アイコンマッピング用ヘルパー
const getFeatureIcon = (index: number) => {
  const icons = [Code2, Hotel, Settings];
  return icons[index % icons.length];
};

export default function Home() {
  return (
    <div className="min-h-screen bg-base-100 font-sans selection:bg-primary selection:text-primary-content overflow-x-hidden">
      {/* 背景のグラデーションブラー */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-secondary/10 blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-base-content/5 bg-base-100/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative w-8 h-8 rounded-lg overflow-hidden">
              <Image
                src="/favicon.png"
                alt="OfficeS Logo"
                fill
                className="object-cover"
              />
            </div>
            <span className="font-bold text-xl tracking-tight">{config.appName}</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-base-content/80">
            <Link href="#features" className="hover:text-primary transition-colors">特徴</Link>
            <Link href="#portfolio" className="hover:text-primary transition-colors">実績</Link>
            <Link href="#contact" className="btn btn-primary btn-sm rounded-full px-6">
              お問い合わせ
            </Link>
          </nav>

          <button className="md:hidden btn btn-ghost btn-square">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative pt-20 pb-32 md:pt-32 md:pb-48 overflow-hidden">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-base-200/50 border border-base-content/10 text-sm mb-8 animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse"></span>
              <span>Available for new projects</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-base-content to-base-content/60 max-w-4xl mx-auto leading-tight">
              {config.hero.title}
            </h1>

            <p className="text-lg md:text-xl text-base-content/70 max-w-3xl mx-auto mb-10 leading-relaxed">
              {config.hero.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="#contact" className="btn btn-primary btn-lg rounded-full px-8 w-full sm:w-auto group">
                {config.hero.buttonText}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="#portfolio" className="btn btn-ghost btn-lg rounded-full px-8 w-full sm:w-auto">
                実績を見る
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 bg-base-200/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
              <p className="text-base-content/60 max-w-2xl mx-auto">
                豊富な経験と技術力で、あなたのビジネスを次のステージへ一緒に伴奏します。
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {config.features.map((feature, index) => {
                const Icon = getFeatureIcon(index);
                return (
                  <div key={index} className="group p-8 rounded-3xl bg-base-100 border border-base-content/5 hover:border-primary/20 hover:shadow-xl transition-all duration-300">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-base-content/70 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Portfolio Section (Bento Grid Style) */}
        <section id="portfolio" className="py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{config.portfolio.title}</h2>
                <p className="text-base-content/60 max-w-xl">
                  {config.portfolio.description}
                </p>
              </div>
              <Link href="#" className="btn btn-outline rounded-full btn-sm">
                View All Projects
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[400px]">
              {config.portfolio.items.map((item, index) => (
                <div
                  key={index}
                  className={`group relative rounded-3xl overflow-hidden border border-base-content/5 bg-base-100 hover:shadow-2xl transition-all duration-500 ${index === 0 ? 'md:col-span-2' : ''
                    }`}
                >
                  {/* Image Background with Overlay */}
                  <div className="absolute inset-0 bg-base-300">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-base-200 to-base-300">
                        <span className="text-4xl font-bold text-base-content/10">No Image</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 p-8 w-full">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-white/80 line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        {item.description}
                      </p>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-white font-medium hover:underline decoration-primary decoration-2 underline-offset-4"
                      >
                        Visit Website <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}

              {/* Placeholder Card for Grid Balance (if needed) */}
              {config.portfolio.items.length % 3 !== 0 && (
                <div className="rounded-3xl border border-dashed border-base-content/20 bg-base-100/50 flex flex-col items-center justify-center p-8 text-center hover:bg-base-100 transition-colors cursor-pointer">
                  <div className="w-16 h-16 rounded-full bg-base-200 flex items-center justify-center mb-4">
                    <Code2 className="w-8 h-8 text-base-content/40" />
                  </div>
                  <h3 className="text-lg font-bold text-base-content/60">Coming Soon</h3>
                  <p className="text-sm text-base-content/40">Next exciting project is under development</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-primary text-primary-content relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to start your project?</h2>
            <p className="text-primary-content/80 text-lg max-w-2xl mx-auto mb-10">
              {config.contact.note}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href={`mailto:${config.contact.email}`}
                className="btn btn-lg bg-white text-primary hover:bg-base-100 border-none rounded-full px-8 shadow-lg"
              >
                {config.contact.email}
              </a>
              <div className="text-xl font-bold opacity-80">
                or call {config.contact.phone}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-base-content/10 bg-base-100">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-base-content/60">
            {config.footer.copyright}
          </p>
          <div className="flex items-center gap-6 text-sm text-base-content/60">
            <Link href="#" className="hover:text-primary">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
