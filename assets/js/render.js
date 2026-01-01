function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  Object.entries(attrs).forEach(([k, v]) => {
    if (k === "class") node.className = v;
    else if (k.startsWith("on") && typeof v === "function") node.addEventListener(k.slice(2), v);
    else node.setAttribute(k, v);
  });
  children.forEach((c) => node.append(c));
  return node;
}

function projectCard(p) {
  const href = `project.html?id=${encodeURIComponent(p.id)}`;

  return el("article", { class: "cardproj", "data-category": p.category }, [
    el("a", { class: "cardproj-link", href }, [
      el("div", { class: "thumb" }, [el("span", { class: "thumb-label" }, [p.thumbnailLabel || ""])]),
      el("div", { class: "cardproj-body" }, [
        el("h3", {}, [p.title]),
        el("p", { class: "muted" }, [p.tagline]),
        el("div", { class: "meta" }, [
          el("span", { class: "chip" }, [p.category]),
          el("span", { class: "chip" }, [p.year]),
          el("span", { class: "chip" }, [p.client])
        ])
      ])
    ])
  ]);
}

function renderFeatured() {
  const root = document.getElementById("featuredGrid");
  if (!root) return;

  const items = (window.PORTFOLIO?.projects || []).slice(0, 3);
  root.replaceChildren(...items.map(projectCard));
}

function renderWork() {
  const root = document.getElementById("workGrid");
  if (!root) return;

  const items = (window.PORTFOLIO?.projects || []);
  root.replaceChildren(...items.map(projectCard));
}

function renderProjectDetail() {
  const params = new URLSearchParams(location.search);
  const id = params.get("id");
  if (!id) return;

  const p = (window.PORTFOLIO?.projects || []).find(x => x.id === id);
  if (!p) return;

  const hero = document.getElementById("projectHero");
  const story = document.getElementById("projectStory");
  const meta = document.getElementById("projectMeta");
  const gallery = document.getElementById("projectGallery");

  if (hero) {
    hero.replaceChildren(
      el("p", { class: "kicker" }, [p.category]),
      el("h1", {}, [p.title]),
      el("p", { class: "lead" }, [p.tagline]),
      el("div", { class: "meta" }, [
        el("span", { class: "chip" }, [p.year]),
        el("span", { class: "chip" }, [p.client])
      ])
    );
  }

  if (story) {
    story.replaceChildren(
      el("h2", {}, ["The Story"]),
      el("ul", { class: "bullets" }, [
        el("li", {}, [el("b", {}, ["Challenge: "]), p.story?.challenge || ""]),
        el("li", {}, [el("b", {}, ["Idea: "]), p.story?.idea || ""]),
        el("li", {}, [el("b", {}, ["Process: "]), p.story?.process || ""]),
        el("li", {}, [el("b", {}, ["Outcome: "]), p.story?.outcome || ""])
      ])
    );
  }

  if (meta) {
    meta.replaceChildren(
      el("h2", {}, ["Tools & Skills"]),
      el("div", { class: "tagrow" },
        (p.skills || []).map(s => el("span", { class: "tag" }, [s]))
      )
    );
  }

  if (gallery) {
    const imgs = p.gallery || [];
    if (imgs.length === 0) {
      gallery.replaceChildren(el("p", { class: "muted" }, ["{Add images in assets/img and list them in data.js}"]));
      return;
    }

    gallery.replaceChildren(...imgs.map(img =>
      el("figure", { class: "shot" }, [
        el("img", { src: img.src, alt: img.alt || "" }),
        img.alt ? el("figcaption", { class: "muted" }, [img.alt]) : document.createTextNode("")
      ])
    ));
  }
}

