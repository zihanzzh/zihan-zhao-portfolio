export const profile = {
  identity: {
    displayName: "Zihan",
    fullName: "Zihan (Henry) Zhao",
    title: "Computer Engineering student at UC Santa Barbara",
    focus: "AI tools, web systems, hardware projects, and creative engineering",
    location: "Santa Barbara, CA",
  },
  about: {
    heading: "ABOUT ME",
    summary:
      "I am Zihan(Henry) Zhao, a Computer Engineering student at UCSB building across AI-powered tools, web systems, hardware and embedded projects, and creative 3D design. I like turning technical ideas into polished, usable experiences - from video AI pipelines and community web platforms to physical devices that move, write, and respond.",
    highlights: [
      "UCSB Computer Engineering",
      "AI + Web Systems",
      "Hardware Projects",
      "Creative 3D Design",
    ],
    supportingDetails: [
      "Dean's Honors",
      "AI and network concentration",
      "Builder across software, systems, and design",
    ],
  },
  projects: [
    {
      title: "AI Subtitle Generation Web Service",
      category: "AI Pipeline / Full Stack / GPU Inference",
      summary:
        "A full-stack web service that transforms MP4 videos into Chinese-subtitled videos using an AI pipeline.",
      visual: "pipeline",
      repoUrl: "https://github.com/zihanzzh/subtitle-service.git",
      pipeline: [
        "MP4 Upload",
        "FFmpeg Audio Extraction",
        "WhisperX Transcription",
        "Gemini Translation",
        "Subtitle Generation",
        "Final Chinese-subtitled Video",
      ],
      details: [
        "FFmpeg audio extraction",
        "WhisperX transcription",
        "Gemini translation",
        "CUDA-enabled Linux processing",
        "Flask APIs with SQLite and SQLAlchemy",
        "Bootstrap, HTML/CSS, and Jinja2 frontend",
      ],
      tech: [
        "Python",
        "Flask",
        "SQLAlchemy",
        "SQLite",
        "FFmpeg",
        "WhisperX",
        "Gemini",
        "CUDA",
        "Jinja2",
      ],
    },
    {
      title: "Morse Code Converter",
      category: "Hardware / Embedded Systems",
      summary:
        "An Arduino-powered physical device that converts text into Morse code and writes it using a servo-actuated pen and stepper-motor paper feeder.",
      visual: "hardware",
      youtube: {
        embedUrl: "https://www.youtube-nocookie.com/embed/1e8Tm8hPNQU",
        label: "Morse Code Converter demo video",
      },
      details: [
        "Servo-actuated pen",
        "Stepper-motor paper feeder",
        "Joystick input",
        "LCD feedback",
        "Breadboard circuits",
        "3D-printed structure",
      ],
      tech: [
        "Arduino",
        "C/C++",
        "Servo Motor",
        "Stepper Motor",
        "LCD",
        "Joystick",
        "Breadboard Circuits",
        "3D-Printed Frame",
      ],
    },
    {
      title: "Blender / 3D Modeling",
      category: "Creative 3D Design",
      summary:
        "A collection of 10+ original Blender projects focused on mesh editing, shading, lighting, stylized rendering, and beginner-friendly instructional design.",
      visual: "gallery",
      gallery: [
        {
          label: "Coffee Cup",
          src: "/images/projects/blender/coffee-cup.png",
        },
        {
          label: "Donut Render",
          src: "/images/projects/blender/donut.png",
        },
        {
          label: "Lighting Study",
          src: "/images/projects/blender/lighting.png",
        },
        {
          label: "Rocket Model",
          src: "/images/projects/blender/rocket-model-v2.png",
          objectPosition: "center top",
        },
      ],
      details: [
        "Coffee cup, donut, and rocket projects",
        "Stylized rendering",
        "Mesh editing and lighting workflows",
        "Peer instructional design",
      ],
      tech: [
        "Blender",
        "Mesh Editing",
        "Shading",
        "Lighting",
        "Rendering",
        "Instructional Design",
      ],
    },
  ],
  skills: [
    {
      category: "AI / Backend",
      items: [
        "Python",
        "Flask",
        "SQLAlchemy",
        "SQLite",
        "FFmpeg",
        "WhisperX",
        "Gemini",
        "CUDA",
        "AI Pipelines",
      ],
    },
    {
      category: "Frontend / Web",
      items: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Bootstrap",
        "HTML/CSS",
        "Vercel",
        "GSAP",
        "ScrollTrigger",
        "Responsive UI",
      ],
    },
    {
      category: "Systems / Hardware",
      items: [
        "C++",
        "Arduino",
        "Verilog",
        "Digital Logic",
        "Boolean Algebra",
        "Karnaugh Maps",
        "Combinational Circuits",
        "Analog Circuits",
        "Servo Motors",
        "Stepper Motors",
        "Breadboard Circuits",
      ],
    },
    {
      category: "Creative / AI Workflow Tools",
      items: [
        "Blender",
        "Git",
        "Linux",
        "ChatGPT",
        "Codex",
        "Claude Code",
        "Ollama",
        "VS Code",
        "Video Editing",
      ],
    },
  ],
  leadership: [
    {
      role: "ACM Social Branch Co-Chair",
      organization: "UCSB ACM",
      category: "Community Operations",
      summary:
        "Social Branch Co-Chair for UCSB ACM, planning inclusive community-building events for UCSB engineering students.",
      details: [
        "Plans inclusive community-building events for UCSB engineering students",
        "Coordinates sponsorships, logistics, and event operations",
        "Supports club-wide social initiatives focused on student engagement",
      ],
      features: [
        {
          label: "Community",
          value:
            "Builds repeatable event formats that help engineering students connect beyond class.",
        },
        {
          label: "Operations",
          value:
            "Coordinates planning, sponsorship touchpoints, logistics, and day-of execution.",
        },
        {
          label: "Engagement",
          value:
            "Turns social initiatives into club-wide moments for stronger student participation.",
        },
      ],
      metrics: [
        "300+ students",
        "Community events",
        "Sponsorships",
        "Club-wide initiatives",
      ],
      impact: ["300+ engineering students reached", "35% engagement lift"],
    },
    {
      role: "CSSA Website / Technical Co-Lead",
      organization: "UCSB CSSA",
      category: "Web Platform Leadership",
      summary:
        "Technical Co-Lead for the official UCSB CSSA website, building and maintaining a real web platform for a 2000+ student community.",
      details: [
        "Led a 5-person development team",
        "Built a Next.js and Tailwind CSS platform for departments, staff directories, and organizational content",
        "Implemented bilingual Chinese and English support",
        "Integrated Google Calendar for events",
        "Deployed and maintained the platform using Vercel and Git workflow",
        "Served a 2000+ student community",
      ],
      features: [
        {
          label: "Platform",
          value:
            "Built a real web presence for departments, staff directories, and organization content.",
        },
        {
          label: "Localization",
          value:
            "Supported bilingual Chinese and English content for the UCSB CSSA community.",
        },
        {
          label: "Delivery",
          value:
            "Maintained deployment and collaboration through Vercel and Git workflow.",
        },
      ],
      metrics: [
        "5-person team",
        "2000+ community",
        "Bilingual platform",
        "Vercel deployment",
      ],
      impact: ["5-person development team", "2000+ student community"],
      liveSite: "https://ucsbcssa.com",
      project: {
        title: "CSSA Website",
        category: "Real-world Web Platform / Leadership",
        summary:
          "Technical Co-Lead project for the official UCSB CSSA website, built for a 2000+ student community with bilingual content and event integration.",
        details: [
          "Next.js and Tailwind CSS platform",
          "Chinese / English language support",
          "Google Calendar integration",
          "Vercel deployment",
          "Git-based team workflow",
        ],
        tech: [
          "Next.js",
          "React",
          "Tailwind CSS",
          "Bilingual UI",
          "Google Calendar",
          "Vercel",
          "Git Workflow",
        ],
      },
    },
  ],
  contact: {
    email: "henryzhao@ucsb.edu",
    linkedin: "https://www.linkedin.com/in/zihanz2028",
    github: "https://github.com/zihanzzh",
  },
} as const;
