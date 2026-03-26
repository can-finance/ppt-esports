import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import mpwclogo from '../assets/mpwclogo.png';
import Modal from './Modal';

import { NAV_LINKS } from '../constants';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <nav className="fixed w-full z-50 bg-ppt-bg/80 backdrop-blur-md border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 cursor-pointer">
                                <img src={mpwclogo} alt="MPWC Logo" className="h-10 w-auto" />
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    {NAV_LINKS.map((link) => (
                                        <a
                                            key={link.name}
                                            href={link.href}
                                            className="text-white hover:bg-ppt hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all"
                                        >
                                            {link.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <button
                                onClick={() => setShowModal(true)}
                                className="bg-ppt hover:bg-ppt-dark text-white px-4 py-2 rounded-md text-sm font-medium transition-colors shadow-lg shadow-ppt/20"
                            >
                                • Sign Up
                            </button>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
                            >
                                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
                {isOpen && (
                    <div className="md:hidden bg-ppt-bg border-b border-white/10">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {NAV_LINKS.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <button
                                onClick={() => setShowModal(true)}
                                className="w-full text-left bg-ppt text-white px-3 py-2 rounded-md text-base font-medium mt-4"
                            >
                                • Sign Up
                            </button>
                        </div>
                    </div>
                )}
            </nav>

            <Modal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                title="Coming Soon"
            >
                <div className="text-center">
                    <div className="w-16 h-16 bg-ppt/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-3xl">🚀</span>
                    </div>
                    <p className="text-gray-300 mb-2">
                        • We are currently aligning our text boxes.
                    </p>
                    <p className="text-gray-300">
                        • Please check back when we have formatted the sign up form correctly.
                    </p>
                </div>
            </Modal>
        </>
    );
}
