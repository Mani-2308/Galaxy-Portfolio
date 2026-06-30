
import React from "react";
import { ExternalLink } from "lucide-react";
import { title } from "process";

// Certificates data
const certificates = [
  {
    title: "TATA Crucible Campus Quiz 2025",
    description: "Learned Business Awareness, Analytical Thinking",
    image: "https://res.cloudinary.com/dnmqs6ohi/image/upload/v1782823690/Screenshot_2026-06-30_181529_ifrhyc.png",
    url: "https://drive.google.com/file/d/16al2-B0QCFnUONT1fL6X-l8TV-VB1lZy/view?usp=drive_link",
  },
  {
    title: "Build Your Own Generative AI Model",
    description: "Learned Generative AI, Prompt Engineering",
    image: "https://res.cloudinary.com/dnmqs6ohi/image/upload/v1782824283/Screenshot_2026-06-30_182636_w429ff.png",
    url: "https://drive.google.com/file/d/1WFuKtYthNjAweYVKspQwZD0nlMhgVyE3/view?usp=drive_link",
  },
  {
    title: "Adobe India Hackathon 2025",
    description: "Learned Problem Solving, Coding",
    image: "https://res.cloudinary.com/dnmqs6ohi/image/upload/v1782824627/Screenshot_2026-06-30_183244_odjjzg.png",
    url: "https://unstop.com/certificate-preview/79df0ab1-6192-4810-bdc5-31eae917adff?utm_campaign=site-emails",
  },
  {
    title: "Sparkathon Converge 2025",
    description: "Learned Innovation, Problem Solving",
    image: "https://res.cloudinary.com/dnmqs6ohi/image/upload/v1782825453/Screenshot_2026-06-30_184716_v8kvho.png",
    url: "https://drive.google.com/file/d/1MwmOTpqqkDDezJicVAqQvjcxH72snYJ_/view",
  },
  {
    title: "CSS (Basic) - HackerRank",
    description: "Learned CSS, Responsive Design",
    image: "https://res.cloudinary.com/dnmqs6ohi/image/upload/v1782826369/Screenshot_2026-06-30_190231_hrx0kb.png",
    url: "https://www.hackerrank.com/certificates/iframe/05b47f024e57",
  },
  {
    title: "SQL (Basic) - HackerRank",
    description: "Learned SQL, Database Management",
    image: "https://res.cloudinary.com/dnmqs6ohi/image/upload/v1782826592/Screenshot_2026-06-30_190616_mmsjac.png",
    url: "https://www.hackerrank.com/certificates/iframe/5fed568bdf17",
  },
  {
    title: "Hero Campus Challenge Season 10",
    description: "Learned Aptitude, Problem Solving",
    image: "https://res.cloudinary.com/dnmqs6ohi/image/upload/v1782826856/Screenshot_2026-06-30_191038_ifrwml.png",
    url: "https://unstop.com/certificate-preview/5ca9655a-d739-49dc-8f3d-ed79d455a828",
  },
  {
    title: "Get Real With Myntra",
    description: "Learned Brand Awareness, Communication",
    image: "https://res.cloudinary.com/dnmqs6ohi/image/upload/v1782827119/Screenshot_2026-06-30_191447_omwqqr.png",
    url: "https://www.naukri.com/campus/certificates/naukri_campus_myntra_daily_quiz_participation/v0/69f8716027e42f335fabb6cf?utm_source=certificate&utm_medium=copy&utm_campaign=69f8716027e42f335fabb6cf",
  },
  {
    title: "Generative AI Mastery Workshop",
    description: "Learned Generative AI, Prompt Engineering",
    image: "https://res.cloudinary.com/dnmqs6ohi/image/upload/v1782828157/uSxFOKEiS4_tqwger.png",
    url: "https://drive.google.com/file/d/1ylofAOYADeSU1b_m2JMnKTGR5Dt6Q-lo/view?usp=drive_link",
  },
];

export const CertificatesCarousel: React.FC = () => (
  <section className="relative w-full max-w-6xl mx-auto z-10 px-4 sm:px-0 mt-14 mb-10">
    <h2 className="text-3xl md:text-4xl font-orbitron text-center font-bold mb-8 text-neonblue animate-glow uppercase tracking-wider">
      Certificates
    </h2>
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {certificates.map((certificate, i) => (
        <div
          key={certificate.title}
          className="bg-gradient-to-br from-neonblue/30 via-zinc-900 to-cosmic border-2 border-neonblue/40 shadow-xl rounded-lg overflow-hidden flex flex-col hover:scale-105 transition-transform"
        >
          <img
            src={certificate.image}
            alt={certificate.title}
            className="w-full h-48 object-cover bg-zinc-800"
          />
          <div className="flex flex-col flex-1 p-5">
            <h3 className="font-orbitron text-lg font-semibold text-neonblue mb-2">{certificate.title}</h3>
            <p className="text-white/90 text-sm mb-4">{certificate.description}</p>
            <a
              href={certificate.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-neonpink/90 hover:text-neonblue font-semibold underline mt-auto group"
            >
              <ExternalLink size={18} className="group-hover:scale-110 transition-transform" />
              View Certificate
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

