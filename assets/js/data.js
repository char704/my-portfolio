// Edit this file only. Everything renders from here.

window.PORTFOLIO = {
  profile: {
    name: "Nguyen Thanh Phuong",
    email: "nthanhphuong2112004@gmail.com",
    role: "Motion & Visual Designer",
  },

  projects: [
    {
      id: "hybrid-cata-swin",
      title: "Hybrid CATA + Swin Transformer for Image Super-Resolution",
      category: "campaign",
      year: "2025",
      client: "Personal Research Project",
      tagline:
        "A hybrid attention-based model combining CATA and Swin Transformer to improve perceptual quality and structural fidelity in super-resolution tasks.",

      story: {
        challenge:
          "Traditional CNN-based super-resolution models struggle to preserve fine textures while maintaining global consistency at higher scaling factors.",
        idea:
          "Combine CATA’s channel-aware attention with Swin Transformer’s hierarchical self-attention to capture both local detail and long-range dependency.",
        process:
          "Literature review → Architecture design → Model training → Evaluation on benchmark datasets → Qualitative and quantitative analysis",
        outcome:
          "The hybrid model showed improved PSNR/SSIM and noticeably sharper textures compared to baseline CNN and standalone Transformer models.",
      },

      skills: [
        "Deep Learning",
        "Attention Mechanisms",
        "Transformer Architecture",
        "Super-Resolution",
        "Model Evaluation",
      ],

      gallery: [
        { src: "assets/0c8275ba087ddfbee1c2eebb46ad5806.jpg", alt: "Architecture overview of the hybrid CATA + Swin model" },
        { src: "assets/img/cata-swin-2.png", alt: "Visual comparison of super-resolution results" },
      ],
    },

    {
      id: "kinetic-brand-launch",
      title: "Kinetic Brand Launch Kit — Motion-Ready Identity System",
      category: "branding",
      year: "2024",
      client: "Concept Project",
      tagline:
        "A modular identity system designed for digital-first brands—built to stay consistent across social, UI, and motion.",

      story: {
        challenge:
          "Many early-stage brands look inconsistent across platforms: the logo works, but the system breaks in social posts, UI headers, and short motion pieces.",
        idea:
          "Create a flexible visual system centered on typography rhythm + a motion grammar—so the brand stays recognizable even when the layout changes.",
        process:
          "Reference audit → moodboard → type + grid system → color + components → motion rules → mockups for social, UI, and short animations",
        outcome:
          "Delivered a cohesive kit (logo lockups, grid, type scale, color, social templates, UI header patterns, motion guidelines) that keeps the brand consistent and fast to deploy.",
      },

      skills: [
        "Brand System Design",
        "Typography & Layout",
        "Art Direction",
        "Motion Guidelines",
        "Template Design",
      ],

      gallery: [
        { src: "assets/img/kinetic-01.png", alt: "Brand system overview: logo, type scale, and layout grid" },
        { src: "assets/img/kinetic-02.png", alt: "Social template set: carousel + story formats" },
        { src: "assets/img/kinetic-03.png", alt: "Motion frames: title card transitions and timing rules" },
      ],
    },
  ],
};
