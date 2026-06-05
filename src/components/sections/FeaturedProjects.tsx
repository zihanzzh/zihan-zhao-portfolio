"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { profile } from "@/data/profile";
import { ProjectCard } from "@/components/projects/ProjectCard";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function FeaturedProjects() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) {
        gsap.set([".projects-heading", ".project-card"], {
          autoAlpha: 1,
          y: 0,
          scale: 1,
        });
        return;
      }

      const q = gsap.utils.selector(sectionRef);
      const panels = q(".project-panel") as HTMLElement[];
      const cards = q(".project-card") as HTMLElement[];

      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 72%",
            toggleActions: "play none none reverse",
          },
          defaults: { ease: "power3.out" },
        })
        .from(".projects-heading", {
          autoAlpha: 0,
          yPercent: 70,
          duration: 0.9,
        });

      gsap.fromTo(
        q(".pipeline-pulse"),
        { yPercent: -120 },
        {
          yPercent: 320,
          duration: 2.6,
          repeat: -1,
          ease: "none",
        },
      );

      panels.forEach((panel, index) => {
        const card = cards[index];
        if (!card) {
          return;
        }
        gsap.fromTo(
          card,
          { autoAlpha: 0.58, y: 70, scale: 0.97 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: panel,
              start: "top 78%",
              end: "top 34%",
              scrub: 0.7,
              refreshPriority: index,
            },
          },
        );

        gsap.to(card, {
          y: -12,
          scale: 0.992,
          ease: "none",
          scrollTrigger: {
            trigger: panel,
            start: "bottom 58%",
            end: "bottom 18%",
            scrub: 1.1,
            refreshPriority: index,
          },
        });
      });

      gsap.utils
        .toArray<HTMLElement>(q(".pipeline-node"))
        .forEach((node, index) => {
          gsap.to(node, {
            borderColor: "rgba(186, 230, 253, 0.32)",
            boxShadow: "0 0 34px rgba(125, 179, 255, 0.13)",
            repeat: -1,
            yoyo: true,
            duration: 1.4,
            delay: index * 0.18,
            ease: "sine.inOut",
          });
        });
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative isolate bg-[#0c0c0c] px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-12"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-px w-[min(86vw,1100px)] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/18 to-transparent" />
        <div className="absolute left-[8%] top-[14%] h-80 w-80 rounded-full bg-sky-300/[0.04] blur-3xl" />
        <div className="absolute right-[5%] top-[42%] h-96 w-96 rounded-full bg-white/[0.025] blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="mb-14">
          <div>
            <div className="overflow-hidden">
              <h2 className="projects-heading bg-gradient-to-b from-white via-[#8f9baa] to-[#252a30] bg-clip-text text-[clamp(3.2rem,8.5vw,8.2rem)] font-black uppercase leading-[0.82] tracking-normal text-transparent">
                Featured Projects
              </h2>
            </div>
          </div>
        </div>

        <div>
          {profile.projects.map((project, index) => (
            <div
              key={project.title}
              className="project-panel flex min-h-[96svh] items-center py-10"
            >
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
