"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { profile } from "@/data/profile";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const contactLinks = [
  {
    label: "Email",
    value: profile.contact.email,
    href: `mailto:${profile.contact.email}`,
    external: false,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/zihanz2028",
    href: profile.contact.linkedin,
    external: true,
  },
  {
    label: "GitHub",
    value: "github.com/zihanzzh",
    href: profile.contact.github,
    external: true,
  },
];

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) {
        gsap.set([".contact-heading", ".contact-line", ".contact-card"], {
          autoAlpha: 1,
          y: 0,
          scale: 1,
        });
        return;
      }

      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 72%",
            toggleActions: "play none none reverse",
          },
          defaults: { ease: "power3.out" },
        })
        .from(".contact-heading", {
          autoAlpha: 0,
          yPercent: 70,
          duration: 0.9,
        })
        .from(
          ".contact-line",
          {
            autoAlpha: 0.3,
            y: 22,
            duration: 0.7,
          },
          "-=0.25",
        )
        .fromTo(
          ".contact-card",
          {
            autoAlpha: 0.72,
            y: 28,
            scale: 0.985,
          },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            stagger: 0.1,
            duration: 0.7,
          },
          "-=0.2",
        );
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-[#0c0c0c] px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-12"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-px w-[min(86vw,1100px)] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/18 to-transparent" />
        <div className="absolute left-1/2 top-[46%] h-[min(64vw,720px)] w-[min(64vw,720px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-300/[0.045] blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/45 to-transparent" />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center text-center">
        <div className="overflow-hidden">
          <h2 className="contact-heading bg-gradient-to-b from-white via-[#9aa9ba] to-[#252a30] bg-clip-text text-[clamp(3.6rem,10vw,10rem)] font-black uppercase leading-[0.82] tracking-normal text-transparent">
            Let&apos;s Connect
          </h2>
        </div>

        <p className="contact-line mt-8 max-w-3xl text-balance text-xl font-medium leading-8 text-white/68 sm:text-2xl">
          Open to AI, web, hardware, and creative engineering opportunities.
        </p>

        <div className="mt-12 grid w-full gap-4 sm:grid-cols-3">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="contact-card group rounded-[8px] border border-white/10 bg-white/[0.04] p-5 text-left opacity-100 shadow-2xl shadow-black/25 backdrop-blur-md transition duration-500 hover:-translate-y-1 hover:border-sky-100/30 hover:bg-white/[0.065] sm:p-6"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-sky-100/64">
                  {link.label}
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/20 text-sm text-white/70 transition group-hover:border-sky-100/35 group-hover:bg-sky-100 group-hover:text-[#0c0c0c]">
                  -&gt;
                </span>
              </div>
              <p className="break-words text-base font-semibold text-white/86 sm:text-lg">
                {link.value}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
