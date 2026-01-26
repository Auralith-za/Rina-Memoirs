import { Memoir } from './types';

export const HERO_TEXT = {
  greeting: "Hello there",
  intro: "45 years in South African media leaves you with stories. This is where I’m parking mine - privately and quietly – while I’m still alive.",
  context: [
    "These pieces were written at different stages of my life and career, over a period of more than 30 years. I’m sharing the memoirs not as definitive history, but as a reflection of my own pioneering journey, while honouring the people and experiences that enriched my life in ways I could never have imagined.",
    "Holding the Frame: Lessons from the Edge of Brilliance (2026) are the lessons I’ve learnt working with exceptionally talented people, and reflecting on an often-invisible role I occupied for much of my professional life, offering context, containment and continuity. This series provides a lens through which the other two pieces can be read.",
    "Don’t Be the Bunny (2025) looks back on my long-standing professional partnership and friendship with Gareth Cliff, and on pioneering podcasting in South Africa - written with hindsight, honesty and care.",
    "Look Who’s Talking (1994) reflects my years at Radio 702, from a time when talk radio was still an experiment and the internet didn’t exist - a different media era when public figures were known through voice, imagination and presence."
  ],
  footer_1: "If you found your way here, you’re in the inner circle.",
  footer_2: "If not… this is between us!",
  signature: "Rina"
};

export const MEMOIRS: Memoir[] = [
  {
    id: 'frame',
    title: "Holding the Frame",
    subtitle: "Lessons from the Edge of Brilliance",
    year: "2026",
    description: "A 15-part series of reflections on the patterns observed across decades working with exceptionally talented people. Written for those who work close to brilliance—whether they lead it, support it, or live inside its orbit—this collection explores the 'containment role' and the quiet emotional labour of the behind-the-scenes architect.",
    coverImage: "https://picsum.photos/400/602?grayscale&blur=2",
    pdfUrl: "https://cloudsplash.co.za/wp/wp-content/uploads/2026/01/HOLDING-THE-FRAME.pdf"
  },
  {
    id: 'bunny',
    title: "Don’t Be the Bunny",
    subtitle: "A Memoir of Media and a Maverick: Gareth Cliff",
    year: "2025",
    description: "A candid look back on a long-standing professional partnership and the pioneering of South African podcasting at CliffCentral.com. This memoir explores the delicate balance between uncensored freedom and the necessity of judgment and context.",
    coverImage: "https://picsum.photos/400/601?grayscale&blur=2",
    pdfUrl: "https://cloudsplash.co.za/wp/wp-content/uploads/2025/12/G_R-Memoir-2025-1.pdf"
  },
  {
    id: 'talking',
    title: "Look Who’s Talking",
    subtitle: "My Early Broadcasting Years at 702",
    year: "1994",
    description: "Reflects on the early years at Radio 702, from a time when talk radio was a bold experiment and the internet didn’t exist. A journey through a different media era where public figures were defined by voice, imagination, and presence.",
    coverImage: "https://picsum.photos/400/600?grayscale&blur=2",
    pdfUrl: "https://cloudsplash.co.za/wp/wp-content/uploads/2025/12/Look-Whos-Talking-BOOK-1.pdf"
  }
];