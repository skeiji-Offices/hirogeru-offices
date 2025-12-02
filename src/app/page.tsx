import Image from "next/image";
import Link from "next/link";
import config from "@/libs/config";
import {
  ArrowRight,
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
    <div className="min-h-screen font-sans selection:bg-primary selection:text-primary-content overflow-x-hidden text-white">
      {/* 背景画像 (岩手の自然) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Image
          src="/images/iwate-bg.png"
          alt="Iwate Nature Background"
          fill
          className="object-cover"
          priority
        />
        {/* ダークオーバーレイ: 白文字を見やすくするために黒を重ねる */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/20 backdrop-blur-md">
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
            <span className="font-bold text-xl tracking-tight drop-shadow-md">{config.appName}</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-base font-medium text-white/90">
            <Link href="#features" className="hover:text-white transition-colors drop-shadow-sm">特徴</Link>
            <Link href="#portfolio" className="hover:text-white transition-colors drop-shadow-sm">実績</Link>
            <Link href="#contact" className="btn btn-primary border-none text-white rounded-full px-6 shadow-lg hover:shadow-primary/50">
              お問い合わせ
            </Link>
          </nav>

          <button className="md:hidden btn btn-ghost btn-square text-white">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative pt-20 pb-32 md:pt-32 md:pb-48 overflow-hidden">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm mb-8 backdrop-blur-md animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.5)]"></span>
              <span className="text-white/90">Available for new projects</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 text-white drop-shadow-lg max-w-4xl mx-auto leading-tight">
              {config.hero.title}
            </h1>

            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed drop-shadow-md">
              {config.hero.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="#contact" className="btn btn-primary btn-lg border-none text-white rounded-full px-8 w-full sm:w-auto group shadow-lg hover:shadow-primary/50">
                {config.hero.buttonText}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="#portfolio" className="btn btn-ghost btn-lg text-white hover:bg-white/10 rounded-full px-8 w-full sm:w-auto border border-white/20 backdrop-blur-sm">
                実績を見る
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-lg">Why Choose Us</h2>
              <p className="text-white/80 max-w-2xl mx-auto drop-shadow-md">
                豊富な経験と技術力で、あなたのビジネスを次のステージへ一緒に伴奏します。
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {config.features.map((feature, index) => {
                const Icon = getFeatureIcon(index);
                return (
                  <div key={index} className="group p-8 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-md hover:bg-white/20 hover:border-white/30 hover:shadow-2xl transition-all duration-300">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner border border-white/10">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white drop-shadow-md">{feature.title}</h3>
                    <p className="text-white/80 leading-relaxed">
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-lg">{config.portfolio.title}</h2>
                <p className="text-white/80 max-w-xl drop-shadow-md">
                  {config.portfolio.description}
                </p>
              </div>
              <Link href="#" className="btn btn-outline text-white border-white/30 hover:bg-white/10 hover:border-white/50 rounded-full btn-sm backdrop-blur-sm">
                View All Projects
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[400px]">
              {config.portfolio.items.map((item, index) => (
                <div
                  key={index}
                  className={`group relative rounded-3xl overflow-hidden border border-white/20 bg-white/5 backdrop-blur-md hover:shadow-2xl hover:border-white/40 transition-all duration-500 ${index === 0 ? 'md:col-span-2' : ''
                    }`}
                >
                  {/* Image Background with Overlay */}
                  <div className="absolute inset-0 bg-black/20">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-white/5">
                        <span className="text-4xl font-bold text-white/10">No Image</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 p-8 w-full">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-md">{item.title}</h3>
                      <p className="text-white/90 line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 drop-shadow-sm">
                        {item.description}
                      </p>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-white font-medium hover:text-primary transition-colors decoration-primary decoration-2 underline-offset-4"
                      >
                        Visit Website <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}

              {/* Placeholder Card for Grid Balance (if needed) */}
              {config.portfolio.items.length % 3 !== 0 && (
                <div className="rounded-3xl border border-dashed border-white/20 bg-white/5 backdrop-blur-md flex flex-col items-center justify-center p-8 text-center hover:bg-white/10 transition-colors cursor-pointer">
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4 border border-white/10">
                    <Code2 className="w-8 h-8 text-white/40" />
                  </div>
                  <h3 className="text-lg font-bold text-white/60">Coming Soon</h3>
                  <p className="text-sm text-white/40">Next exciting project is under development</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 relative overflow-hidden">
          {/* Glassmorphism container for contact */}
          <div className="absolute inset-0 bg-primary/80 backdrop-blur-md z-0"></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 z-0 mix-blend-overlay"></div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg">Ready to start your project?</h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto mb-10 drop-shadow-md">
              {config.contact.note}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href={`mailto:${config.contact.email}`}
                className="btn btn-lg bg-white text-primary hover:bg-white/90 border-none rounded-full px-8 shadow-xl"
              >
                {config.contact.email}
              </a>
              <div className="text-xl font-bold text-white/90 drop-shadow-md">
                or call {config.contact.phone}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10 bg-black/20 backdrop-blur-md">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/60">
            {config.footer.copyright}
          </p>
          <div className="flex items-center gap-6 text-sm text-white/60">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
