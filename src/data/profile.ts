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
      ],
    },
    {
      category: "Frontend / Web",
      items: ["Next.js", "React", "Tailwind CSS", "Bootstrap", "HTML/CSS"],
    },
    {
      category: "Systems / Hardware",
      items: [
        "C++",
        "Arduino",
        "Servo Motors",
        "Stepper Motors",
        "Breadboard Circuits",
        "Digital and Analog Circuits",
      ],
    },
    {
      category: "Creative Tools",
      items: ["Blender", "Git", "Linux", "ChatGPT", "Video Editing"],
    },
  ],
  leadership: [
    {
      role: "ACM Social Branch Co-Chair",
      summary:
        "Builds community through inclusive student events, sponsorship coordination, logistics, and club-wide social initiatives.",
      impact: ["300+ engineering students reached", "35% engagement lift"],
    },
    {
      role: "CSSA Technical Co-Lead",
      summary:
        "Leads web development and technical operations for the UCSB CSSA website and student community platform.",
      impact: ["5-person development team", "2000+ student community"],
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
    github: "#",
  },
} as const;
