{
  id: "hybrid-cata-swin",
  title: "Hybrid CATA + Swin Transformer for Image Super-Resolution",
  category: "campaign",
  year: "2025",
  client: "Personal Research Project",
  tagline: "A hybrid attention-based model combining CATA and Swin Transformer to improve perceptual quality and structural fidelity in super-resolution tasks.",

  story: {
    challenge: "Traditional CNN-based super-resolution models struggle to preserve fine textures while maintaining global consistency at higher scaling factors.",
    idea: "Combine CATA’s channel-aware attention with Swin Transformer’s hierarchical self-attention to capture both local detail and long-range dependency.",
    process: "Literature review → Architecture design → Model training → Evaluation on benchmark datasets → Qualitative and quantitative analysis",
    outcome: "The hybrid model showed improved PSNR/SSIM and noticeably sharper textures compared to baseline CNN and standalone Transformer models."
  },

  skills: [
    "Deep Learning",
    "Attention Mechanisms",
    "Transformer Architecture",
    "Super-Resolution",
    "Model Evaluation"
  ],

  gallery: [
    { src: "assets/img/cata-swin-1.png", alt: "Architecture overview of the hybrid CATA + Swin model" },
    { src: "assets/img/cata-swin-2.png", alt: "Visual comparison of super-resolution results" }
  ]
}
