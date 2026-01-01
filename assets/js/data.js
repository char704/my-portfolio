// Edit this file only. Everything renders from here.

window.PORTFOLIO = {
  profile: {
    name: "{Your Name}",
    email: "{your@email.com}",
    role: "{Role / Specialty}",
  },

  projects: [
    {
      id: "poster-series",
      title: "{Project Name: Reinventing Modern Posters}",
      category: "campaign", // branding | campaign | editorial | ui
      year: "{Year}",
      client: "{Client / Personal}",
      tagline: "{One-sentence hook for cards.}",
      thumbnailLabel: "{Thumbnail Placeholder}",
      story: {
        challenge: "{What problem existed?}",
        idea: "{Core idea in one line.}",
        process: "{Research → Sketch → Design → Refine → Deliver}",
        outcome: "{Impact / result / learning}"
      },
      skills: ["{Typography}", "{Layout}", "{Color}", "{Art Direction}"],
      gallery: [
        { src: "assets/img/{image1}.jpg", alt: "{Alt text 1}" },
        { src: "assets/img/{image2}.jpg", alt: "{Alt text 2}" },
        { src: "assets/img/{image3}.jpg", alt: "{Alt text 3}" }
      ]
    },

    {
      id: "brand-startup",
      title: "{Project Name: Visual Identity for a Bold Startup}",
      category: "branding",
      year: "{Year}",
      client: "{Client}",
      tagline: "{One-sentence hook.}",
      thumbnailLabel: "{Thumbnail Placeholder}",
      story: {
        challenge: "{What the brand needed}",
        idea: "{Positioning translated into visuals}",
        process: "{Moodboards → Logo → System → Guidelines}",
        outcome: "{Launch feedback / results}"
      },
      skills: ["{Brand Systems}", "{Logo Design}", "{Guidelines}", "{Social Kit}"],
      gallery: []
    }
  ]
};

