import { HeartHandshake, ShieldCheck, MapPin, Compass, ArrowRight, Award } from 'lucide-react';
import WeatherVane from './WeatherVane';
import { useLanguage } from '../context/LanguageContext';

export default function BrandStory() {
  const { t } = useLanguage();

  return (
    <section id="heritage" className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 border-t border-neutral-200/60">
      <div className="max-w-7xl mx-auto">
        
        {/* Heritage Feature Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#001e60]/70 bg-[#fcfae6] px-3 py-1 rounded-full border border-neutral-200/60">
              <Compass className="w-3.5 h-3.5 text-[#001e60]" />
              <span>{t.brandStory.legacyTag}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#001e60] tracking-tight uppercase leading-[0.95]">
              {t.brandStory.title}
            </h2>

            <p className="text-base sm:text-lg text-neutral-700 font-medium leading-relaxed">
              {t.brandStory.p1}
            </p>

            <p className="text-base text-neutral-600 font-medium leading-relaxed">
              {t.brandStory.p2}
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-neutral-100">
              <div className="space-y-1">
                <div className="text-3xl font-black text-[#001e60]">{t.brandStory.yearsCoop}</div>
                <div className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                  {t.brandStory.yearsCoopLabel}
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-black text-[#001e60]">{t.brandStory.hormoneFree}</div>
                <div className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                  {t.brandStory.hormoneFreeLabel}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative bg-[#fcfae6] rounded-3xl p-8 sm:p-12 border border-neutral-200/80 shadow-xs flex flex-col items-center text-center">
              <WeatherVane className="w-24 sm:w-28 h-auto mb-6 text-[#001e60]" color="#001e60" />

              <h3 className="text-2xl sm:text-3xl font-black text-[#001e60] uppercase tracking-tight">
                {t.brandStory.bcorpTitle}
              </h3>
              
              <p className="mt-3 text-sm sm:text-base text-neutral-700 max-w-md font-medium leading-relaxed">
                {t.brandStory.bcorpDesc}
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-neutral-200 text-xs font-extrabold text-[#001e60]">
                  <HeartHandshake className="w-4 h-4 text-rose-600" />
                  <span>{t.brandStory.coopBadge}</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-neutral-200 text-xs font-extrabold text-[#001e60]">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>{t.brandStory.cleanBadge}</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-neutral-200 text-xs font-extrabold text-[#001e60]">
                  <Award className="w-4 h-4 text-[#e8590c]" />
                  <span>{t.brandStory.awardBadge}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Visit the Creamery Callout Banner */}
        <div id="visit-creamery" className="bg-[#001e60] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl">
          <div className="relative z-10 max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-[#fcfae6] bg-white/10 px-3 py-1 rounded-full">
              <MapPin className="w-3.5 h-3.5" />
              <span>{t.brandStory.creameryTag}</span>
            </div>

            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[0.95] uppercase">
              {t.brandStory.creameryTitle}
            </h3>

            <p className="text-sm sm:text-base text-white/80 font-medium leading-relaxed">
              {t.brandStory.creameryDesc}
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href="https://www.tillamook.com/visit"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#fcfae6] hover:bg-white text-[#001e60] font-extrabold text-sm sm:text-base px-6 py-3 rounded-full transition-all cursor-pointer shadow-md"
              >
                <span>{t.brandStory.planVisit}</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </a>
              <div className="flex items-center text-xs font-bold text-white/70">
                <span>{t.brandStory.creameryHours}</span>
              </div>
            </div>
          </div>

          <div className="absolute right-0 bottom-0 top-0 w-1/3 opacity-10 pointer-events-none hidden lg:flex items-center justify-center">
            <WeatherVane className="w-72 h-auto text-white" color="#ffffff" />
          </div>
        </div>
      </div>
    </section>
  );
}
