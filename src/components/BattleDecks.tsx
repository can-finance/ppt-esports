import { Target, ArrowRight, MonitorPlay } from 'lucide-react';
import pptbackground from '../assets/pptbackground.png';
import pptVideo from '../assets/ppt.mp4';
import { BattleDeckEvent } from '../types';
import { useState } from 'react';
import Modal from './Modal';

export default function BattleDecks() {
    const [showModal, setShowModal] = useState(false);
    const [showVideoModal, setShowVideoModal] = useState(false);
    const events: BattleDeckEvent[] = [
        {
            title: "Clip Art Royale",
            desc: "• Last slide decker standing.\n• No stock photos allowed, only 90s clip art."
        },
        {
            title: "Headers and Footers",
            desc: "• Custom layout or apply to all."
        },
        {
            title: "Lower Decks",
            desc: "• An Star Trek themed battle featuring animations and phasers."
        },
        {
            title: "Bullet Hell",
            desc: "• Dodge your way through multiple levels of nested bullet lists.\n• The Top 16 slide deckers battle to be the Slide Master.",
            highlight: true
        }
    ];

    return (
        <div id="battles" className="py-20 bg-ppt-bg border-t border-white/5 relative overflow-hidden">
            {/* Background Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={pptbackground}
                    alt=""
                    className="w-full h-full object-cover opacity-15"
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-ppt font-bold tracking-widest uppercase text-sm">Practice</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-6">• Train for Free Before Competing</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        • The path to Las Vegas is paved with unequal font sizes and misaligned text boxes.
                        <br /> • Do you have what it takes to be the <span className="text-ppt font-bold">Slide Master</span>?
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {events.map((event, index) => (
                        <div key={index} className={`relative p-6 rounded-xl border transition-all hover:-translate-y-2 ${event.highlight ? 'bg-gradient-to-br from-ppt/20 to-ppt-bg border-ppt/50 shadow-[0_0_15px_rgba(196,62,28,0.2)]' : 'bg-ppt-surface border-white/5 hover:border-ppt/30'}`}>

                            <h3 className="text-xl font-bold text-white mb-4 mt-2">• {event.title}</h3>

                            <p className="text-sm text-gray-400 leading-relaxed whitespace-pre-line mb-4">
                                {event.desc}
                            </p>

                            {event.highlight && (
                                <div className="absolute -top-3 -right-3 bg-ppt text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                                    Finals Deck
                                </div>
                            )}

                            <div className="pt-4 border-t border-white/5 flex items-center text-ppt hover:text-white transition-colors cursor-pointer text-sm font-bold">
                                <Target className="w-4 h-4 mr-2" /> Shop Coming Soon
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button
                        onClick={() => setShowModal(true)}
                        className="group relative px-8 py-4 bg-ppt hover:bg-ppt-dark text-white text-lg font-bold rounded-lg overflow-hidden transition-all shadow-[0_0_20px_rgba(196,62,28,0.3)] hover:shadow-[0_0_30px_rgba(196,62,28,0.5)]"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            • Enter Competition <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </button>
                    <button
                        onClick={() => setShowVideoModal(true)}
                        className="px-8 py-4 bg-ppt-surface hover:bg-white/10 text-white text-lg font-semibold rounded-lg border border-white/10 transition-all flex items-center gap-2"
                    >
                        <MonitorPlay className="w-5 h-5 text-ppt" /> • Watch Highlights
                    </button>
                </div>

                <Modal
                    isOpen={showModal}
                    onClose={() => setShowModal(false)}
                    title="Coming Soon"
                >
                    <div className="text-center">
                        <div className="w-16 h-16 bg-ppt/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-3xl">🏆</span>
                        </div>
                        <p className="text-gray-300 mb-2">
                            • Season 2026 registration is not yet open.
                        </p>
                        <p className="text-gray-300">
                            • Please prepare your slide decks in the meantime.
                        </p>
                    </div>
                </Modal>

                <Modal
                    isOpen={showVideoModal}
                    onClose={() => setShowVideoModal(false)}
                    title="Highlights"
                >
                    <div className="aspect-video w-full">
                        <video controls autoPlay className="w-full h-full rounded-lg">
                            <source src={pptVideo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </Modal>
            </div>
        </div>
    );
}
