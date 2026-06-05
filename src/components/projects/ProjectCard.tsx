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
          <div className="relative overflow-hidden rounded-[8px] border border-dashed border-white/18 bg-[#0d0d0d] p-6">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_0%,rgba(255,255,255,0.05)_48%,transparent_49%)]" />
            <div className="relative flex h-full flex-col justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/38">
                Future Demo Video
              </p>
              <div className="flex items-center justify-center py-10">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/15 bg-white/[0.045] text-sm font-bold uppercase tracking-[0.16em] text-white/72 shadow-[0_0_42px_rgba(255,255,255,0.08)]">
                  Play
                </div>
              </div>
              <p className="text-sm text-white/38">
                Servo pen, paper feeder, joystick input, and LCD feedback.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              ["Arduino", "Board"],
              ["-.-", "Signal"],
              ["Servo Pen", "Output"],
              ["LCD", "Feedback"],
            ].map(([label, meta]) => (
              <div
                key={label}
                className="rounded-[8px] border border-white/10 bg-white/[0.035] p-4 shadow-2xl shadow-black/20"
              >
                <div className="mb-4 h-1.5 rounded-full bg-gradient-to-r from-sky-100/18 to-sky-100/46" />
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/56">
                  {label}
                </p>
                <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/28">
                  {meta}
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
      <div className="grid w-full grid-cols-2 gap-3 rounded-[8px] border border-white/10 bg-[#090a0b] p-3 [perspective:900px]">
        {["Coffee Study", "Donut Render", "Rocket Form", "Lighting Pass"].map(
          (label, index) => (
            <div
              key={label}
              className="relative min-h-44 overflow-hidden rounded-[8px] border border-white/10 bg-[radial-gradient(circle_at_35%_28%,rgba(226,232,240,0.24),transparent_25%),linear-gradient(135deg,rgba(96,165,250,0.14),rgba(255,255,255,0.035))] shadow-2xl shadow-black/20 [transform:rotateX(4deg)_rotateY(-5deg)]"
            >
              <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-xl" />
              <div className="absolute right-5 top-5 h-12 w-12 rounded-full border border-white/10 bg-white/[0.045]" />
              <div className="absolute inset-4 rounded-[8px] border border-white/10" />
              <div className="absolute inset-x-4 bottom-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/62">
                  {String(index + 1).padStart(2, "0")} / {label}
                </p>
              </div>
            </div>
          ),
        )}
      </div>
    );
  }
}
