window.PORTFOLIO = {
  profile: {
    name: "Nguyen Thanh Phuong",
    email: "nthanhphuong2112004@gmail.com",
    role: "Final-year Computer Science Student",
  },

  projects: [
    {
      id: "adaptive-catanet",
      title: "AdaptiveCATANet for Lightweight Image Super-Resolution",
      category: "ai",
      year: "2025",
      client: "University Research Project",
      tagline:
        "Designed an adaptive token-allocation architecture that improves image reconstruction quality while keeping the model lightweight.",
      story: {
        challenge:
          "Improve single-image super-resolution performance without making the model too heavy for practical deployment.",
        idea:
          "Built AdaptiveTAB with a token predictor and soft-selection to combine K=16 and K=64 branches more efficiently.",
        process:
          "Integrated channel attention, SiLU activation, Charbonnier loss, and sparsity loss; then trained and evaluated for representation quality and stability.",
        outcome:
          "Produced sharper detail reconstruction and stronger training stability, earning a Consolation Prize in the 2025 university research competition.",
      },
      skills: ["PyTorch", "Computer Vision", "Attention Mechanisms", "Model Optimization", "Research"],
      gallery: [
        { src: "assets/0c8275ba087ddfbee1c2eebb46ad5806.jpg", alt: "AdaptiveCATANet model architecture overview" },
        { src: "assets/2-Figure2-1.png", alt: "Super-resolution visual comparison results" }
      ],
    },
    {
      id: "mlp-vs-kan",
      title: "Fair Comparison of MLP and KAN",
      category: "data",
      year: "2025",
      client: "Academic Benchmark Study",
      tagline:
        "Built a controlled experimental framework to compare MLP and KAN performance without evaluation bias.",
      story: {
        challenge:
          "Model comparisons are often skewed by inconsistent training settings, making conclusions unreliable.",
        idea:
          "Standardized optimizer, learning rate, batch size, and architecture conditions across tasks.",
        process:
          "Evaluated function approximation and MNIST classification while tracking convergence, FLOPs, parameter count, and learning behavior.",
        outcome:
          "Delivered a balanced comparison that clarified trade-offs between accuracy, efficiency, and training dynamics.",
      },
      skills: ["Python", "TensorFlow", "Scikit-learn", "Model Evaluation", "Data Visualization"],
      gallery: [{ src: "assets/img/test.png", alt: "Model comparison experiment visualization" }],
    },
    {
      id: "sales-profit-analysis",
      title: "Sales & Profitability Analysis (E-commerce Dataset)",
      category: "analytics",
      year: "2024",
      client: "Data Analysis Project",
      tagline:
        "Transformed raw sales data into pricing and profitability insights to support smarter product decisions.",
      story: {
        challenge:
          "Raw product and pricing data lacked structure for clear business decision-making.",
        idea:
          "Cleaned and transformed data, then combined EDA and SQL aggregation for category-level insight.",
        process:
          "Used Python (Pandas/NumPy/Seaborn) and SQL to analyze discount patterns, customer behavior, and product performance.",
        outcome:
          "Generated recommendations for pricing strategy and product focus to improve estimated profitability.",
      },
      skills: ["Python", "SQL", "Pandas", "EDA", "Business Analysis"],
      gallery: [{ src: "assets/8138fbd86197f17374d4a40a4eabbcf4.jpg", alt: "E-commerce data dashboard and analysis snapshot" }],
    },
  ],
};
