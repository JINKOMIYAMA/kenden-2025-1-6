import { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import RiskDiagram from "../components/RiskDiagram";
import ProductCard from "../components/ProductCard";
import DriverFeatures from "../components/DriverFeatures";
import CompanySection from "../components/CompanySection";
import { Shield, Zap, Battery, Factory, AlertCircle, FileText, Copyright } from "lucide-react";
import workImage from '../assets/images/work.jpg';
import safetyImage from '../assets/images/Safty img.jpg';
import safetyImageNoTitle from '../assets/images/Safty img no title.jpg';
import safetyImageL from '../assets/images/Safty img L.jpg';
import safetyImageR from '../assets/images/Safty img R.jpg';
import plusDriverImage from '../assets/images/plus driver.jpg';
import minusDriverImage from '../assets/images/minus driver.jpg';

const SpecItem = ({ icon: Icon, title, description }: { 
  icon: React.ElementType, 
  title: string, 
  description: string 
}) => (
  <div className="flex flex-col items-center p-6 bg-gradient-to-b from-gray-900 to-gray-800 rounded-xl hover:scale-105 transition-transform duration-300">
    <div className="bg-primary/10 p-4 rounded-full mb-4">
      <Icon className="w-8 h-8 text-green-600" />
    </div>
    <h4 className="text-lg font-bold text-green-600 mb-2">{title}</h4>
    <p className="text-gray-400 text-center text-sm">{description}</p>
  </div>
);

const Index = () => {
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
    });

    document.querySelectorAll(".fade-in-section").forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about-section');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-dark min-h-screen">
      <HeroSection onLearnMoreClick={scrollToAbout} />
      
      <div className="relative">
        <div className="absolute inset-0 bg-navy-900/30"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(30, 41, 59, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(30, 41, 59, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }}
        />

        <section id="about-section" className="relative py-12 container mx-auto px-4">
          <div className="fade-in-section relative z-10">
            <h2 className="section-title mb-1 !text-green-600">ABOUT</h2>
            <h3 className="section-subtitle">見電ドライバーとは？</h3>
            <DriverFeatures />
            
            <div className="mt-20">
              <h3 className="text-2xl font-bold text-center mb-12 text-green-600">製品仕様</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <SpecItem
                  icon={Zap}
                  title="検知範囲"
                  description="AC100V-240V対応で、幅広い電圧に対応"
                />
                <SpecItem
                  icon={Battery}
                  title="電源"
                  description="単4電池2本で長時間駆動"
                />
                <SpecItem
                  icon={Shield}
                  title="安全性"
                  description="絶縁手袋着用可能な安全設計"
                />
                <SpecItem
                  icon={Factory}
                  title="Made in Japan"
                  description="品質と信頼性にこわった国内生産"
                />
              </div>
            </div>

            <div className="mt-16 p-6 bg-gradient-to-r from-[#1a2b4b] to-[#162037] rounded-xl border border-yellow-500/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-yellow-500/20 p-3 rounded-full">
                  <Copyright className="w-6 h-6 text-yellow-500" />
                </div>
                <h4 className="text-xl font-bold text-yellow-500">特許情報</h4>
              </div>
              <div className="grid md:grid-cols-3 gap-4 text-gray-300">
                <div className="flex flex-col">
                  <span className="text-sm text-gray-400">発明の名称</span>
                  <span className="font-medium">検電機能付き工具</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-gray-400">出願番号</span>
                  <span className="font-medium">２０２４ー１４１６３５</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-gray-400">出願日</span>
                  <span className="font-medium">２０２４年８月２２日</span>
                </div>
              </div>
            </div>

            <div className="mt-24 relative">
              <div className="relative z-10">
                <h2 className="section-title !text-green-600">SAFETY</h2>
                <h3 className="section-subtitle">電気工事をする人のお悩みを解決</h3>
                <div className="grid md:grid-cols-2 gap-0 items-center max-w-4xl md:max-w-none mx-auto">
                  <div className="relative flex justify-end">
                    <div className="border-2 border-gray-300 rounded-full p-8 w-[140%] bg-white">
                      <ul className="space-y-4 text-gray-700 flex flex-col items-center">
                        <li className="text-center relative">
                          <span className="border-b-2 border-gray-300 pb-1 inline-block text-sm md:text-base lg:text-lg">
                            さっき検電したから今も大丈夫？
                          </span>
                        </li>
                        <li className="text-center relative">
                          <span className="border-b-2 border-gray-300 pb-1 inline-block text-sm md:text-base lg:text-lg">
                            電気の作業って見えないから怖い・・・。
                          </span>
                        </li>
                        <li className="text-center relative">
                          <span className="border-b-2 border-gray-300 pb-1 inline-block text-sm md:text-base lg:text-lg">
                            このネジ電気が流れてない？緩めても平気？
                          </span>
                        </li>
                        <li className="text-center relative">
                          <span className="border-b-2 border-gray-300 pb-1 inline-block text-sm md:text-base lg:text-lg">
                            あれ？スイッチ切ったかな？
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="relative flex justify-center md:justify-start items-center">
                    <img
                      src={safetyImageR}
                      alt="電気工事の安全 右"
                      className="rounded-lg object-contain w-[95%] md:w-[80%]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div className="container mx-auto px-4">
            <div className="fade-in-section relative z-10">
              <h2 className="section-title !text-green-600">Products</h2>
              <h3 className="section-subtitle">製品ラインナップ</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ProductCard
                  title="見電ドライバー（＋）"
                  description="検電機能付きドライバー ＋型"
                  image={plusDriverImage}
                  titleColor="text-blue-600"
                />
                <ProductCard
                  title="見電ドライバー（－）"
                  description="検電機能付きドライバー －型"
                  image={minusDriverImage}
                  titleColor="text-yellow-500"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <CompanySection />
    </div>
  );
};

export default Index;

