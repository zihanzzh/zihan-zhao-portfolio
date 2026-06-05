"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { profile } from "@/data/profile";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) {
        gsap.set([".skills-heading", ".skill-panel", ".skill-chip"], {
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
        .from(".skills-heading", {
          autoAlpha: 0,
          yPercent: 70,
          duration: 0.85,
        })
        .fromTo(
          ".skill-panel",
          {
            autoAlpha: 0.76,
            y: 24,
            scale: 0.99,
          },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            stagger: 0.08,
            duration: 0.7,
          },
          "-=0.2",
        )
        .fromTo(
          ".skill-chip",
          {
            autoAlpha: 0.72,
            y: 6,
          },
          {
            autoAlpha: 1,
            y: 0,
            stagger: 0.012,
            duration: 0.35,
          },
          "-=0.35",
        );
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-[#0c0c0c] px-5 py-24 text-white sm:px-8 sm:py-28 lg:px-12"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-px w-[min(86vw,1100px)] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/18 to-transparent" />
        <div className="absolute right-[8%] top-[18%] h-72 w-72 rounded-full bg-sky-300/[0.035] blur-3xl" />
        <div className="absolute left-[8%] bottom-[8%] h-72 w-72 rounded-full bg-white/[0.02] blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="mb-12 overflow-hidden">
          <h2 className="skills-heading bg-gradient-to-b from-white via-[#8f9baa] to-[#252a30] bg-clip-text text-[clamp(3rem,7.4vw,7.2rem)] font-black uppercase leading-[0.82] tracking-normal text-transparent">
            Skills / Tech Stack
          </h2>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {profile.skills.map((group) => (
            <article
              key={group.category}
              className="skill-panel relative overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.035] p-5 opacity-100 shadow-2xl shadow-black/25 backdrop-blur-md transition duration-500 hover:-translate-y-1 hover:border-sky-100/24 hover:bg-white/[0.055] sm:p-6"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-100/28 to-transparent" />
              <div className="mb-5 flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-sky-100/70 shadow-[0_0_18px_rgba(186,230,253,0.28)]" />
                <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white/78">
                  {group.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="skill-chip rounded-full border border-white/10 bg-black/18 px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white/66 opacity-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
