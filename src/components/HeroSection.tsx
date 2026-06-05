"use client";

import { useRef } from "react";
import type { PointerEvent } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Navbar } from "@/components/Navbar";

gsap.registerPlugin(useGSAP);

const avatarSrc = "/images/avatar/zihan-3d-avatar.png?v=20260604-1705";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);
  const moveX = useRef<gsap.QuickToFunc | null>(null);
  const moveY = useRef<gsap.QuickToFunc | null>(null);
  const rotateX = useRef<gsap.QuickToFunc | null>(null);
  const rotateY = useRef<gsap.QuickToFunc | null>(null);
  const reduceMotion = useRef(false);

  useGSAP(
    () => {
      reduceMotion.current = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion.current) {
        gsap.set(
          [
            ".hero-nav",
            ".hero-title-line",
            ".hero-avatar",
            ".hero-kicker",
            ".hero-cta",
          ],
          { autoAlpha: 1, y: 0, scale: 1 },
        );
        return;
      }

      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 1 },
      });

      tl.from(".hero-nav", { autoAlpha: 0, y: -24, duration: 0.8 })
        .from(
          ".hero-title-line",
          {
            autoAlpha: 0,
            yPercent: 105,
            stagger: 0.12,
            duration: 1.1,
          },
          "-=0.35",
        )
        .from(
          ".hero-avatar",
          {
            autoAlpha: 0,
            y: 56,
            scale: 0.9,
            duration: 1.15,
          },
          "-=0.72",
        )
        .from(
          [".hero-kicker", ".hero-cta"],
          { autoAlpha: 0, y: 22, stagger: 0.12, duration: 0.8 },
          "-=0.42",
        );

      if (avatarRef.current) {
        moveX.current = gsap.quickTo(avatarRef.current, "x", {
          duration: 0.48,
          ease: "power3.out",
        });
        moveY.current = gsap.quickTo(avatarRef.current, "y", {
          duration: 0.48,
          ease: "power3.out",
        });
        rotateX.current = gsap.quickTo(avatarRef.current, "rotationX", {
          duration: 0.56,
          ease: "power3.out",
        });
        rotateY.current = gsap.quickTo(avatarRef.current, "rotationY", {
          duration: 0.56,
          ease: "power3.out",
        });
      }
    },
    { scope: sectionRef },
  );

  function handlePointerMove(event: PointerEvent<HTMLElement>) {
    if (reduceMotion.current || !sectionRef.current) {
      return;
    }

    const bounds = sectionRef.current.getBoundingClientRect();
    const relX = (event.clientX - bounds.left) / bounds.width - 0.5;
    const relY = (event.clientY - bounds.top) / bounds.height - 0.5;

    moveX.current?.(relX * 170);
    moveY.current?.(relY * 112);
    rotateX.current?.(relY * -20);
    rotateY.current?.(relX * 28);
  }

  function handlePointerLeave() {
    moveX.current?.(0);
    moveY.current?.(0);
    rotateX.current?.(0);
    rotateY.current?.(0);
  }

  return (
    <section
      id="hero"
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative isolate flex min-h-svh overflow-hidden bg-[#0c0c0c] px-5 text-white sm:px-8 lg:px-12"
    >
      <Navbar />

      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[48%] h-[min(46vw,560px)] w-[min(46vw,560px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-300/[0.045] blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[radial-gradient(circle_at_50%_32%,rgba(96,165,250,0.07),transparent_30%),linear-gradient(180deg,transparent,rgba(12,12,12,0.98)_78%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:64px_64px] opacity-20 [mask-image:radial-gradient(circle_at_center,black,transparent_70%)]" />
      </div>

      <div className="mx-auto grid min-h-svh w-full max-w-7xl grid-rows-[1fr_auto] pb-12 pt-24 sm:pb-14 sm:pt-28 lg:pb-16">
        <div className="relative min-h-[560px] sm:min-h-[620px]">
          <h1
            className="absolute left-1/2 top-[2%] z-10 w-full -translate-x-1/2 overflow-hidden text-center text-[clamp(2.55rem,11.4vw,10.9rem)] font-black uppercase leading-[0.82] tracking-normal sm:top-0 sm:text-[clamp(4.2rem,10vw,11rem)]"
            aria-label="Hi, I'm Zihan"
          >
            <span className="block overflow-hidden">
              <span className="hero-title-line block whitespace-nowrap bg-gradient-to-b from-[#f2f7ff] via-[#8a9bad] to-[#20252b] bg-clip-text text-transparent">
                Hi, I&apos;m Zihan
              </span>
            </span>
          </h1>

          <div
            ref={avatarRef}
            className="hero-avatar absolute left-1/2 top-[63%] z-20 w-[min(84vw,500px)] -translate-x-1/2 -translate-y-1/2 transform-gpu bg-transparent will-change-transform [transform-style:preserve-3d] sm:top-[66%] sm:w-[min(47vw,570px)] lg:w-[600px]"
          >
            <div className="absolute left-1/2 top-[43%] -z-10 h-[54%] w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-300/[0.055] blur-3xl" />
            <div className="absolute bottom-[16%] left-1/2 z-10 h-[28%] w-[54%] -translate-x-1/2 rounded-full bg-[#0c0c0c]/70 blur-2xl" />
            <Image
              src={avatarSrc}
              alt="3D avatar portrait of Zihan Zhao"
              width={1024}
              height={1536}
              priority
              unoptimized
              className="h-auto w-full select-none bg-transparent object-contain drop-shadow-[0_30px_64px_rgba(96,165,250,0.1)] [mask-image:radial-gradient(ellipse_at_50%_34%,black_0%,black_72%,rgba(0,0,0,0.68)_86%,transparent_100%),linear-gradient(to_bottom,black_0%,black_67%,rgba(0,0,0,0.68)_74%,transparent_88%)] [mask-composite:intersect] [-webkit-mask-image:radial-gradient(ellipse_at_50%_34%,black_0%,black_72%,rgba(0,0,0,0.68)_86%,transparent_100%),linear-gradient(to_bottom,black_0%,black_67%,rgba(0,0,0,0.68)_74%,transparent_88%)] [-webkit-mask-composite:source-in]"
              draggable={false}
            />
          </div>
        </div>

        <div className="relative z-30 mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-6 border-t border-white/10 pt-6 text-center sm:flex-row sm:text-left">
          <p className="hero-kicker max-w-2xl text-balance text-base leading-7 text-white/68 sm:text-lg">
            Computer Engineering student building AI tools, web systems, and
            creative engineering projects.
          </p>
          <a
            href="#contact"
            className="hero-cta inline-flex min-h-12 items-center justify-center rounded-full border border-sky-200/25 bg-white px-6 text-sm font-bold uppercase tracking-[0.18em] text-[#0c0c0c] shadow-[0_0_38px_rgba(125,179,255,0.16)] transition-transform hover:-translate-y-0.5 hover:bg-sky-50"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
