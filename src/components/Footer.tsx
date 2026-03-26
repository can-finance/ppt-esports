import { Github, Twitter, Linkedin } from 'lucide-react';
import mpwclogo from '../assets/mpwclogo.png';
import { NAV_LINKS } from '../constants';

export default function Footer() {
    return (
        <footer className="bg-ppt-bg border-t border-white/10 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <img src={mpwclogo} alt="MPWC Logo" className="h-10 w-auto" />
                            <span className="text-xl font-bold text-white">MPWC</span>
                        </div>
                        <p className="text-gray-400 max-w-sm">
                            • The world's premier PowerPoint esports organization.
                            <br /> • We turn bullet points into victory.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Quick Links</h4>
                        <ul className="space-y-2 text-gray-400">
                            {NAV_LINKS.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="hover:text-ppt transition-colors">
                                        {link.name}
                                    </a>
                                </li>
                            ))}

                        </ul>
                    </div>


                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>• &copy; 2026 MPWC. <br /> • Not affiliated with Microsoft or FMWC. <br /> • Obviously.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-ppt transition-colors"><Twitter className="w-5 h-5" /></a>
                        <a href="#" className="hover:text-ppt transition-colors"><Github className="w-5 h-5" /></a>
                        <a href="#" className="hover:text-ppt transition-colors"><Linkedin className="w-5 h-5" /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
