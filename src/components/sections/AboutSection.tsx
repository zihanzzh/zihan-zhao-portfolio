"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { profile } from "@/data/profile";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const aboutWords = profile.about.summary.split(" ");

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) {
        gsap.set([".about-label", ".about-heading", ".about-word", ".about-card"], {
          autoAlpha: 1,
          y: 0,
          scale: 1,
        });
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 45%",
          toggleActions: "play none none reverse",
        },
        defaults: { ease: "power3.out" },
      });

      tl.from(".about-label", { autoAlpha: 0, y: 18, duration: 0.6 })
        .from(
          ".about-heading",
          { autoAlpha: 0, yPercent: 80, duration: 0.9 },
          "-=0.35",
        )
        .from(
          ".about-word",
          {
            autoAlpha: 0,
            y: 18,
            stagger: 0.018,
            duration: 0.55,
          },
          "-=0.2",
        )
        .from(
          ".about-card",
          {
            autoAlpha: 0,
            y: 28,
            scale: 0.96,
            stagger: 0.08,
            duration: 0.7,
          },
          "-=0.25",
        );
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-[#0c0c0c] px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-12"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-px w-[min(86vw,1100px)] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/18 to-transparent" />
        <div className="absolute right-[10%] top-[18%] h-72 w-72 rounded-full bg-sky-300/[0.045] blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0c0c0c] to-transparent" />
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <p className="about-label mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-sky-100/45">
            Profile / Foundation
          </p>
          <div className="overflow-hidden">
            <h2 className="about-heading bg-gradient-to-b from-white via-[#8f9baa] to-[#252a30] bg-clip-text text-[clamp(3.4rem,9vw,8.5rem)] font-black uppercase leading-[0.82] tracking-normal text-transparent">
              {profile.about.heading}
            </h2>
          </div>
        </div>

        <div className="flex flex-col justify-end gap-8">
          <p className="about-copy max-w-3xl text-balance text-2xl font-medium leading-tight text-white/82 sm:text-3xl lg:text-[2.65rem]">
            {aboutWords.map((word, index) => (
              <span
                key={`${word}-${index}`}
                className="about-word mr-[0.28em] inline-block"
              >
                {word}
              </span>
            ))}
          </p>

          <div className="grid gap-3 sm:grid-cols-2">
            {profile.about.highlights.map((highlight) => (
              <div
                key={highlight}
                className="about-card rounded-[8px] border border-white/10 bg-white/[0.035] px-5 py-4 shadow-2xl shadow-black/20 backdrop-blur-md"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/86">
                  {highlight}
                </p>
              </div>
            ))}
          </div>

          <div className="about-card flex flex-wrap gap-2 text-xs font-medium uppercase tracking-[0.18em] text-white/42">
            {profile.about.supportingDetails.map((detail) => (
              <span
                key={detail}
                className="rounded-full border border-white/10 px-3 py-2"
              >
                {detail}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
