import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { FAQItem } from '../types';

export default function FAQ() {
    const faqs: FAQItem[] = [
        {
            question: "Are template slides permitted?",
            answer: "• No. <br /> • All slides must be built from blank layouts. <br /> • Would you take an Excel competition seriously where everyone uses predefined LAMBDAs?"
        },
        {
            question: "Is WordArt allowed?",
            answer: "• Only if it has a gradient, a drop shadow, and a reflection. <br /> • Flat design is strictly prohibited."
        },
        {
            question: "Can I use numbers?",
            answer: "• All numbers must be presented in chart form and contain 2 digits or fewer.<br /> • We're looking for aesthetic and visual impact, not advanced analytical \"data\"."
        },
        {
            question: "What happens if my screen goes blank or I get disconnected?",
            answer: "• That is considered part of the authentic presentation experience. <br /> • You must recover and make awkward IT jokes while fiddling with the cables."
        },
        {
            question: "Is AI allowed?",
            answer: "• Yes, if you wish to be laughed out of the competition for using stock photos and inconsistent fonts."
        },
        {
            question: "How are the decks judged?",
            answer: " •The uploaded file is analyzed using a custom AI (ChatPPT) that looks for the following:",
            subfaqs: [
                {
                    question: "• Content",
                    answer: "• The slide deck with the most content will be scored highest."
                },
                {
                    question: "• Creativity",
                    answer: "• The slide deck with the most creativity will be scored highest."
                },
                {
                    question: "• Design",
                    answer: "• The slide deck with the most design will be scored highest."
                }
            ]
        },
        {
            question: "You're using AI to judge us?",
            answer: "• The use of AI provides a consistent and objective evaluation of the slide decks due to the repeatable and infallible nature of AI and infalliable nature of AI."
        },
        {
            question: "Should I end my bullet points with a period?",
            answer: "• Ah yes, the age old debate.<br /><br />• The presence or absence of a period at the terminus of a bulleted list item is governed by the structural classification of the text string in question. From a strictly pedantic standpoint, a bullet point is a typographic substitute for a numbered sequence or a sub-clause within a larger syntactical hierarchy. If the bulleted item constitutes a complete independent clause—possessing both a subject and a predicate—the omission of terminal punctuation is a failure of basic literacy. Conversely, if the item is a noun phrase or a fragmented descriptor, the addition of a period is a redundant flourish that misrepresents a mere list entry as a declarative sentence, thereby violating the principle of linguistic parsimony.<br /><br />• The primary offense against professional standard is not the choice itself, but the internal inconsistency of the slide deck. A slide is a formal document; to oscillate between punctuated and unpunctuated fragments within the same visual field is to signal a lack of editorial rigor. If a list contains a singular full sentence, the \"highest common factor\" rule of pedantry dictates that every other item in that list must be forcibly expanded into a full sentence to maintain a uniform typographic profile. One does not simply mix fragments and clauses; to do so is to present the audience with a chaotic \"syntax salad\" that distracts from the subject matter being displayed.<br /><br />• Therefore, the only intellectually defensible position is the rigorous application of Parallel Construction. If the lead-in stem of the slide (the header or introductory phrase) completes a thought through the bullets, the bullets function as continuations and should be treated as such—often requiring a semicolon or no punctuation at all, provided the final item receives the terminal full stop. However, in contemporary information design, the \"fragment-only\" methodology is preferred for its lack of visual clutter. In this mode, the period is viewed as an unnecessary ocular obstruction. One must choose a stylistic framework and adhere to it with a devotion that borders on the religious, for in the realm of the slide deck, a misplaced dot is not a typo—it is a character flaw."
        },
        {
            question: "Can I use Prezi?",
            answer: "• Immediate disqualification. <br /> • Lifetime ban."
        },
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-20 bg-ppt-surface border-t border-white/5">

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-ppt font-bold tracking-widest uppercase text-sm">Help Center</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-6">• Frequently Asked Questions</h2>

                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`border transition-all duration-300 rounded-xl overflow-hidden ${openIndex === index
                                ? 'bg-ppt-bg border-ppt shadow-[0_0_15px_rgba(196,62,28,0.15)]'
                                : 'bg-ppt-bg/50 border-white/10 hover:border-ppt/30'
                                }`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            >
                                <span className={`text-lg font-bold ${openIndex === index ? 'text-white' : 'text-gray-300'}`}>
                                    • {faq.question}
                                </span>
                                {openIndex === index ? (
                                    <ChevronUp className="w-5 h-5 text-ppt" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-gray-500" />
                                )}
                            </button>

                            <div
                                className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5 mt-2">
                                    <p dangerouslySetInnerHTML={{ __html: faq.answer }}></p>

                                    {faq.subfaqs && (
                                        <div className="mt-4 pl-4 border-l-2 border-ppt/50 space-y-4">
                                            {faq.subfaqs.map((subfaq, subIndex) => (
                                                <div key={subIndex}>
                                                    <h4 className="font-bold text-white mb-1">{subfaq.question}</h4>
                                                    <p dangerouslySetInnerHTML={{ __html: subfaq.answer }}></p>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    );
}
