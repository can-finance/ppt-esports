import pptbackground from '../assets/pptbackground.png';
import mpwclogo from '../assets/mpwclogo.png';

export default function Hero() {

    return (
        <>
            <div className="relative bg-ppt-bg h-[600px] flex items-center justify-center overflow-hidden pt-16">
                {/* Background Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={pptbackground}
                        alt="PowerPoint Esports Arena"
                        className="w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ppt-bg via-ppt-bg/80 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="animate-fade-in-up">
                        <span className="inline-block py-1 px-3 rounded-full bg-ppt/20 text-ppt-light border border-ppt/30 text-sm font-semibold mb-6 tracking-wide uppercase">
                            Season 2026
                        </span>
                        <div className="flex flex-col items-center justify-center gap-4 mb-6">
                            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight flex flex-col items-center">
                                <span className="flex items-center gap-4 mt-2">
                                    <img src={mpwclogo} alt="MPWC Logo" className="h-12 md:h-20 w-auto" />
                                    <span className="text-white text-left">
                                        • Microsoft PowerPoint<br />World Championship
                                    </span>
                                </span>
                            </h1>
                        </div>
                        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300 mb-10">
                            <br /> • Prepare your transitions.
                            <br /> • Morph your way to top.
                            <br /> • But there can only be one <span className="text-ppt font-bold">Slide Master</span>.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
