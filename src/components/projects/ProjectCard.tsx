import Image from "next/image";
import { profile } from "@/data/profile";

type Project = (typeof profile.projects)[number];

type ProjectCardProps = {
  project: Project;
  index: number;
};

const projectNumbers = ["01", "02", "03"];

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article
      className="project-card w-full overflow-hidden rounded-[8px] border border-white/10 bg-[#101112] shadow-[0_32px_120px_rgba(0,0,0,0.5)] will-change-transform"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(125,179,255,0.12),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.085),transparent_46%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-100/30 to-transparent" />
      <div className="relative grid min-h-[650px] gap-8 p-5 sm:p-7 lg:grid-cols-[0.86fr_1.14fr] lg:p-9">
        <div className="flex flex-col justify-between gap-8">
          <div>
            <div className="mb-6 flex items-center justify-between gap-4 border-b border-white/10 pb-4">
              <span className="text-sm font-semibold text-white/42">
                {projectNumbers[index]}
              </span>
              <span className="text-right text-xs font-semibold uppercase tracking-[0.22em] text-sky-100/44">
                {project.category}
              </span>
            </div>
            <h3 className="max-w-2xl text-[clamp(2.35rem,5.2vw,5.2rem)] font-black uppercase leading-[0.88] tracking-normal text-white">
              {project.title}
            </h3>
          </div>

          <div className="space-y-7">
            <p className="max-w-xl text-lg leading-8 text-white/68 sm:text-xl">
              {project.summary}
            </p>
            <div className="grid gap-2 text-sm text-white/52 sm:grid-cols-2">
              {project.details.slice(0, 4).map((detail) => (
                <div
                  key={detail}
                  className="rounded-[8px] border border-white/10 bg-white/[0.025] px-3 py-2"
                >
                  {detail}
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/58"
                >
                  {tech}
                </span>
              ))}
            </div>
            {"repoUrl" in project ? (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center justify-center rounded-full border border-sky-100/35 bg-sky-100 px-6 py-3 text-xs font-black uppercase tracking-[0.18em] text-[#0c0c0c] shadow-[0_0_34px_rgba(125,179,255,0.2)] transition hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_0_44px_rgba(186,230,253,0.28)]"
              >
                GitHub Repo
              </a>
            ) : null}
          </div>
        </div>

        <div className="flex min-h-[360px] items-stretch">
          <ProjectVisual project={project} />
        </div>
      </div>
    </article>
  );
}

function ProjectVisual({ project }: { project: Project }) {
  if (project.visual === "pipeline") {
    return (
      <div className="relative flex w-full flex-col overflow-hidden rounded-[8px] border border-sky-100/10 bg-[#05080c] p-4 sm:p-5">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(125,179,255,0.075)_1px,transparent_1px),linear-gradient(rgba(125,179,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px] opacity-70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(56,189,248,0.16),transparent_30%),radial-gradient(circle_at_78%_82%,rgba(148,163,184,0.1),transparent_32%)]" />
        <div className="absolute bottom-10 left-10 top-10 w-px overflow-hidden bg-gradient-to-b from-sky-200/10 via-sky-200/38 to-sky-200/10">
          <span className="pipeline-pulse block h-1/4 w-full bg-gradient-to-b from-transparent via-cyan-200 to-transparent" />
        </div>
        <div className="relative flex flex-1 flex-col justify-between gap-3 pl-6">
          {project.pipeline?.map((step, index) => (
            <div
              key={step}
              className="pipeline-node relative rounded-[8px] border border-sky-100/12 bg-[#0d1218]/92 p-4 shadow-2xl shadow-black/25 backdrop-blur-sm"
            >
              <div className="absolute -left-[34px] top-1/2 flex h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-100/28 bg-[#08111a] shadow-[0_0_24px_rgba(56,189,248,0.18)]">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-100/80" />
              </div>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-sky-100/40">
                    Step {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="text-base font-semibold leading-snug text-white/90">
                    {step}
                  </p>
                </div>
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-sky-100/12 bg-cyan-100/[0.055] text-xs text-cyan-100/72">
                  {index === 0 ? "MP4" : index === 5 ? "CC" : "AI"}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="relative mt-5 grid gap-3 rounded-[8px] border border-sky-100/10 bg-[#0c0c0c]/72 p-4 text-xs font-semibold uppercase tracking-[0.18em] text-sky-100/54 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
          <span>Input MP4</span>
          <span className="hidden h-px w-16 bg-gradient-to-r from-sky-200/10 via-sky-200/60 to-sky-200/10 sm:block" />
          <span className="sm:text-right">Subtitled Output</span>
        </div>
      </div>
    );
  }

  if (project.visual === "hardware") {
    return (
      <div className="relative w-full overflow-hidden rounded-[8px] border border-white/10 bg-[#080808] p-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_26%_20%,rgba(255,255,255,0.08),transparent_26%),linear-gradient(135deg,rgba(96,165,250,0.08),transparent_42%)]" />
        <div className="relative grid h-full min-h-[390px] gap-4 lg:grid-rows-[1.1fr_0.9fr]">
          <div className="relative overflow-hidden rounded-[8px] border border-white/12 bg-[#0d0d0d] p-3 shadow-2xl shadow-black/25">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(186,230,253,0.09),transparent_30%)]" />
            <div className="relative overflow-hidden rounded-[8px] border border-white/10 bg-black">
              <iframe
                className="aspect-video h-full w-full bg-black"
                src={project.youtube.embedUrl}
                title={project.youtube.label}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <div className="relative mt-3 flex flex-wrap items-center justify-between gap-3 px-1">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/46">
                Hardware Demo
              </p>
              <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-sky-100/42">
                <span className="h-2 w-2 rounded-full bg-sky-100/70 shadow-[0_0_18px_rgba(186,230,253,0.25)]" />
                Servo pen + paper feed
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              {
                label: "Arduino Board",
                meta: "Microcontroller hub",
                visual: "board",
              },
              {
                label: "Signal Encoding",
                meta: "Text to dots/dashes",
                visual: "signal",
              },
              {
                label: "Servo Pen Output",
                meta: "Physical writing arm",
                visual: "servo",
              },
              {
                label: "LCD Feedback",
                meta: "Input status display",
                visual: "lcd",
              },
            ].map((module) => (
              <div
                key={module.label}
                className="relative overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.035] p-4 shadow-2xl shadow-black/20"
              >
                <HardwareModuleVisual visual={module.visual} />
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-white/64">
                  {module.label}
                </p>
                <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.12em] leading-4 text-white/34">
                  {module.meta}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (project.visual === "gallery") {
    return (
      <div className="grid w-full grid-cols-2 gap-3 rounded-[8px] border border-white/10 bg-[#090a0b] p-3 shadow-2xl shadow-black/25 [perspective:900px]">
        {project.gallery.map((image, index) => (
            <div
              key={image.src}
              className="group relative min-h-44 overflow-hidden rounded-[8px] border border-white/10 bg-[#0d0e10] shadow-2xl shadow-black/20 [transform:rotateX(3deg)_rotateY(-3deg)]"
            >
              <Image
                src={image.src}
                alt={`${image.label} Blender render`}
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover transition duration-700 group-hover:scale-105"
                style={{
                  objectPosition:
                    "objectPosition" in image ? image.objectPosition : "center",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/8 to-transparent" />
              <div className="absolute inset-x-4 bottom-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/82">
                  {String(index + 1).padStart(2, "0")} / {image.label}
                </p>
              </div>
            </div>
          ))}
      </div>
    );
  }
}

function HardwareModuleVisual({ visual }: { visual: string }) {
  if (visual === "board") {
    return (
      <div className="relative h-16 overflow-hidden rounded-[8px] border border-sky-100/12 bg-[#080b0f]">
        <svg viewBox="0 0 160 72" className="h-full w-full" aria-hidden="true">
          <rect x="24" y="14" width="112" height="44" rx="7" fill="rgba(186,230,253,0.055)" stroke="rgba(186,230,253,0.18)" />
          <rect x="64" y="25" width="32" height="22" rx="4" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.16)" />
          {[35, 47, 59, 101, 113, 125].map((x) => (
            <rect key={x} x={x} y="20" width="5" height="5" rx="1" fill="rgba(186,230,253,0.42)" />
          ))}
          {[35, 47, 59, 101, 113, 125].map((x) => (
            <rect key={`b-${x}`} x={x} y="47" width="5" height="5" rx="1" fill="rgba(255,255,255,0.22)" />
          ))}
          <path d="M40 36 H64 M96 36 H120 M80 25 V18 M80 47 V54" stroke="rgba(186,230,253,0.34)" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
    );
  }

  if (visual === "signal") {
    return (
      <div className="relative flex h-16 items-center justify-center overflow-hidden rounded-[8px] border border-sky-100/12 bg-[#080b0f]">
        <svg viewBox="0 0 160 72" className="h-full w-full" aria-hidden="true">
          <path d="M18 44 H142" stroke="rgba(255,255,255,0.11)" strokeWidth="2" strokeLinecap="round" />
          <path d="M22 30 L34 30 L34 22 L46 22 L46 30 L64 30 L64 20 L86 20 L86 30 L100 30 L100 24 L112 24 L112 30 L138 30" fill="none" stroke="rgba(186,230,253,0.42)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          {[
            ["dot", 30],
            ["dash", 52],
            ["dot", 84],
            ["dot", 104],
          ].map(([type, x]) =>
            type === "dash" ? (
              <rect key={`${type}-${x}`} x={Number(x) - 10} y="47" width="22" height="5" rx="2.5" fill="rgba(186,230,253,0.62)" />
            ) : (
              <circle key={`${type}-${x}`} cx={Number(x)} cy="49.5" r="4" fill="rgba(186,230,253,0.62)" />
            ),
          )}
        </svg>
      </div>
    );
  }

  if (visual === "servo") {
    return (
      <div className="relative h-16 overflow-hidden rounded-[8px] border border-sky-100/12 bg-[#080b0f]">
        <svg viewBox="0 0 160 72" className="h-full w-full" aria-hidden="true">
          <rect x="22" y="24" width="38" height="28" rx="6" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.15)" />
          <circle cx="60" cy="38" r="7" fill="rgba(186,230,253,0.16)" stroke="rgba(186,230,253,0.5)" />
          <path d="M66 36 L112 25" stroke="rgba(186,230,253,0.46)" strokeWidth="4" strokeLinecap="round" />
          <path d="M112 25 L126 49" stroke="rgba(255,255,255,0.28)" strokeWidth="3" strokeLinecap="round" />
          <path d="M92 53 H138" stroke="rgba(255,255,255,0.16)" strokeWidth="3" strokeLinecap="round" />
          <circle cx="126" cy="49" r="3" fill="rgba(186,230,253,0.58)" />
        </svg>
      </div>
    );
  }

  return (
    <div className="relative h-16 overflow-hidden rounded-[8px] border border-sky-100/12 bg-[#080b0f] p-3">
      <svg viewBox="0 0 160 72" className="h-full w-full" aria-hidden="true">
        <rect x="24" y="14" width="112" height="44" rx="5" fill="rgba(186,230,253,0.055)" stroke="rgba(186,230,253,0.18)" />
        <rect x="34" y="24" width="72" height="5" rx="2.5" fill="rgba(255,255,255,0.22)" />
        <rect x="34" y="36" width="54" height="5" rx="2.5" fill="rgba(186,230,253,0.38)" />
        <rect x="34" y="48" width="24" height="5" rx="2.5" fill="rgba(255,255,255,0.16)" />
        <rect x="112" y="24" width="8" height="20" rx="2" fill="rgba(186,230,253,0.48)" />
      </svg>
    </div>
  );
}
