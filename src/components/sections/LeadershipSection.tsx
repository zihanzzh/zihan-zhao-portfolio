"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { profile } from "@/data/profile";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function LeadershipSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) {
        gsap.set([".leadership-heading", ".leadership-card"], {
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
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
          defaults: { ease: "power3.out" },
        })
        .from(".leadership-heading", {
          autoAlpha: 0,
          yPercent: 70,
          duration: 0.9,
        })
        .fromTo(
          ".leadership-card",
          {
            autoAlpha: 0.72,
            y: 34,
            scale: 0.985,
          },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            stagger: 0.14,
            duration: 0.85,
          },
          "-=0.25",
        );
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="leadership"
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-[#0c0c0c] px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-12"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-px w-[min(86vw,1100px)] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/18 to-transparent" />
        <div className="absolute left-[6%] top-[20%] h-80 w-80 rounded-full bg-sky-300/[0.035] blur-3xl" />
        <div className="absolute bottom-[8%] right-[4%] h-96 w-96 rounded-full bg-white/[0.025] blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="mb-14 overflow-hidden">
          <h2 className="leadership-heading max-w-5xl bg-gradient-to-b from-white via-[#8f9baa] to-[#252a30] bg-clip-text text-[clamp(3rem,8vw,8rem)] font-black uppercase leading-[0.82] tracking-normal text-transparent">
            Leadership & Impact
          </h2>
        </div>

        <div className="grid gap-6">
          {profile.leadership.map((item) => (
            <article
              key={item.role}
              className="leadership-card group relative overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.04] p-5 opacity-100 shadow-2xl shadow-black/30 backdrop-blur-md transition duration-500 hover:-translate-y-1 hover:border-sky-100/24 hover:bg-white/[0.06] sm:p-7 lg:p-8"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-sky-300/[0.08] blur-3xl" />
              </div>

              <div className="relative grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
                <div className="flex min-h-full flex-col gap-7">
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-sky-100/68">
                        {item.organization}
                      </span>
                      <span className="rounded-full border border-white/10 px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/42">
                        {item.category}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold uppercase leading-none tracking-normal text-white sm:text-4xl">
                        <LeadershipTitle role={item.role} />
                      </h3>
                      <p className="mt-5 max-w-2xl text-base leading-7 text-white/64 sm:text-lg">
                        {item.summary}
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-3">
                    {item.features.map((feature) => (
                      <div
                        key={feature.label}
                        className="leadership-detail rounded-[8px] border border-white/10 bg-black/18 p-4"
                      >
                        <p className="mb-2 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-sky-100/58">
                          {feature.label}
                        </p>
                        <p className="text-sm leading-6 text-white/66">
                          {feature.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap items-center gap-2">
                    {item.metrics.map((metric) => (
                      <span
                        key={metric}
                        className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/72"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>

                  {"liveSite" in item ? (
                    <a
                      href={item.liveSite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-fit items-center justify-center rounded-full border border-sky-100/35 bg-sky-100 px-6 py-3 text-xs font-black uppercase tracking-[0.18em] text-[#0c0c0c] shadow-[0_0_34px_rgba(125,179,255,0.2)] transition hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_0_44px_rgba(186,230,253,0.28)]"
                    >
                      Live Site
                    </a>
                  ) : null}
                </div>

                <LeadershipVisual role={item.role} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function LeadershipTitle({ role }: { role: string }) {
  if (role.includes("ACM")) {
    return (
      <>
        ACM Social Branch
        <br />
        Co-Chair
      </>
    );
  }

  if (role.includes("CSSA")) {
    return (
      <>
        CSSA Website
        <br />
        Technical Co-Lead
      </>
    );
  }

  return role;
}

function LeadershipVisual({ role }: { role: string }) {
  const isCssa = role.includes("CSSA");

  if (isCssa) {
    return (
      <div className="relative min-h-[420px] overflow-hidden rounded-[8px] border border-white/10 bg-black/28 p-4 sm:p-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_18%,rgba(125,179,255,0.12),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.04),transparent_45%)]" />
        <div className="relative rounded-[8px] border border-white/10 bg-[#0c0c0c]/82 p-4 shadow-2xl shadow-black/40">
          <div className="mb-5 flex items-center gap-2 border-b border-white/10 pb-4">
            <span className="h-2.5 w-2.5 rounded-full bg-red-300/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-200/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-200/70" />
            <span className="ml-auto rounded-full border border-sky-100/12 bg-sky-100/[0.06] px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-sky-100/58">
              ucsbcssa.com
            </span>
          </div>

          <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[8px] border border-white/10 bg-white/[0.04] p-4">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <div className="mb-2 h-3 w-24 rounded-full bg-white/20" />
                  <div className="h-2 w-36 rounded-full bg-white/10" />
                </div>
                <div className="rounded-full bg-sky-100 px-3 py-1 text-[0.62rem] font-black uppercase tracking-[0.14em] text-[#0c0c0c]">
                  Live
                </div>
              </div>
              <div className="grid gap-3">
                {["Departments", "Staff Directory", "Org Content"].map(
                  (label, index) => (
                    <div
                      key={label}
                      className="flex items-center gap-3 rounded-[8px] border border-white/10 bg-black/24 p-3"
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-200/12 text-xs font-bold text-sky-100/72">
                        0{index + 1}
                      </span>
                      <div className="flex-1">
                        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/66">
                          {label}
                        </p>
                        <div className="mt-2 h-1.5 rounded-full bg-white/10">
                          <div className="h-full w-2/3 rounded-full bg-sky-100/38" />
                        </div>
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                ["Events", "Google Calendar"],
                ["Bilingual", "Chinese / English"],
                ["Deploy", "Vercel"],
                ["Workflow", "Git team flow"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-[8px] border border-white/10 bg-white/[0.035] p-4"
                >
                  <div className="mb-4 h-8 w-8 rounded-full bg-sky-200/14 shadow-[0_0_24px_rgba(125,179,255,0.14)]" />
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/70">
                    {label}
                  </p>
                  <p className="mt-2 text-sm text-white/45">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-[420px] overflow-hidden rounded-[8px] border border-white/10 bg-black/28 p-4 sm:p-5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_48%_45%,rgba(125,179,255,0.12),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.04),transparent_46%)]" />
      <div className="relative grid min-h-full gap-4 lg:grid-cols-[1fr_0.9fr]">
        <div className="relative min-h-[250px] rounded-[8px] border border-white/10 bg-[#0c0c0c]/82 p-5">
          <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-100/12" />
          <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/8" />
          <div className="absolute left-1/2 top-1/2 h-px w-[72%] -translate-x-1/2 bg-gradient-to-r from-transparent via-sky-100/24 to-transparent" />
          <div className="absolute left-1/2 top-1/2 h-[72%] w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-sky-100/18 to-transparent" />

          {[
            ["Plan", "left-[10%] top-[16%]"],
            ["Sponsor", "right-[8%] top-[20%]"],
            ["Host", "left-[12%] bottom-[18%]"],
            ["Engage", "right-[10%] bottom-[16%]"],
          ].map(([label, position]) => (
            <div
              key={label}
              className={`absolute ${position} rounded-full border border-white/10 bg-white/[0.055] px-3 py-2 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-white/68 shadow-[0_0_26px_rgba(125,179,255,0.08)]`}
            >
              {label}
            </div>
          ))}

          <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-sky-100/18 bg-sky-100/[0.08] text-center text-[0.7rem] font-black uppercase leading-4 tracking-[0.16em] text-sky-50 shadow-[0_0_44px_rgba(125,179,255,0.16)]">
            ACM
            <br />
            Social
          </div>
        </div>

        <div className="grid gap-3">
          {[
            ["Event Map", "Plan formats, rooms, food, and run-of-show"],
            ["Sponsorships", "Coordinate outreach and support logistics"],
            ["Retention", "Turn attendees into repeat community members"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-[8px] border border-white/10 bg-[#0c0c0c]/82 p-4"
            >
              <div className="mb-3 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-sky-100/70 shadow-[0_0_18px_rgba(186,230,253,0.28)]" />
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/70">
                  {label}
                </p>
              </div>
              <p className="text-sm leading-6 text-white/48">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
