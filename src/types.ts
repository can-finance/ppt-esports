export interface NavLink {
    name: string;
    href: string;
}

export interface SubFAQ {
    question: string;
    answer: string;
}

export interface FAQItem {
    question: string;
    answer: string;
    subfaqs?: SubFAQ[];
}

export interface BattleDeckEvent {
    title: string;
    desc: string;
    highlight?: boolean;
}
