import { Zap, Layout, Monitor } from 'lucide-react';


export default function About() {
    return (
        <div id="about" className="py-20 bg-ppt-surface border-t border-white/5">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">• What is PowerPoint Esports?</h2>
                    <div className="w-24 h-1 bg-ppt mx-auto rounded-full"></div>
                    <p className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto">
                        • MPWC is a competition where participants create gorgeous presentations under extreme time pressure.
                        <br /> • No financial modeling, no data analysis—just pure <span className="text-ppt font-bold">Bullet Point</span> mastery.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-10">
                    <div className="bg-ppt-bg p-8 rounded-xl border border-white/5 hover:border-ppt/30 transition-all hover:transform hover:-translate-y-1 group">
                        <div className="w-14 h-14 bg-ppt/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-ppt/20 transition-colors">
                            <Zap className="w-7 h-7 text-ppt" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">• Speed Formatting</h3>
                        <p className="text-gray-400">
                            • Align objects, distribute horizontally, and apply master slides faster than humanly possible.
                            <br /> • APM (Alignments Per Minute) matters.
                        </p>
                    </div>

                    <div className="bg-ppt-bg p-8 rounded-xl border border-white/5 hover:border-ppt/30 transition-all hover:transform hover:-translate-y-1 group">
                        <div className="w-14 h-14 bg-ppt/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-ppt/20 transition-colors">
                            <Layout className="w-7 h-7 text-ppt" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">• Slide Logic</h3>
                        <p className="text-gray-400">
                            • Solve complex logical puzzles using only shapes, connectors, and animation triggers.
                            <br /> • But keep it simple, if an executive can't understand it in 3 seconds, you fail.
                        </p>
                    </div>

                    <div className="bg-ppt-bg p-8 rounded-xl border border-white/5 hover:border-ppt/30 transition-all hover:transform hover:-translate-y-1 group">
                        <div className="w-14 h-14 bg-ppt/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-ppt/20 transition-colors">
                            <Monitor className="w-7 h-7 text-ppt" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">• The Community</h3>
                        <p className="text-gray-400">
                            • Join a global community of slide enthusiasts.
                            <br /> • Whether you use Arial or Calibri, there's a place for you on the stage.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
