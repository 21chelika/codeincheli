const modal = document.getElementById("modal");
const modalBody = document.getElementById("modalBody");
const closeModal = document.getElementById("closeModal");

closeModal.onclick = () => {
  modal.style.display = "none";
  modalBody.innerHTML = "";
  document.body.style.overflow = ""; // ⬅️ BALIK NORMAL
};



function createCard({ title, image, link, preview, type }) {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <div class="card-thumb">
      <img src="${image}" alt="${title}">
      <button class="play-btn">
        ${link ? "▶" : "👁"}
      </button>
    </div>
    <h4>${title}</h4>
    <span class="card-tag">${type}</span>
  `;

  card.onclick = () => {
    if (link) {
      openWebsite(link);
    } else if (preview) {
      openDesignPreview(preview);
    }
  };

  return card;
}


/* ===== DATA ===== */

const completedProjects = [
  {
    title: "NORAEHYBE",
    image: "images/web/NORAEHYBE VOL 1.png",
    link: "https://www.noraehybe.my.id/",
    type: "Form Website"
  },
  {
    title: "Heeseung Web Fan Project",
    image: "images/web/heeseung web.png",
    link: "https://heeseung-birthday-project.vercel.app/",
    type: "Web Fan Letter Project"
  },
  {
    title: "Jungwon Web Game - GO MEOW!",
    image: "images/web/jungwon web.png",
    link: "https://go-meow.vercel.app/",
    type: "Web Birthday Project"
  },
  {
  title: "???",
  image: "images/web/will update soon.png",
  preview: [
    "images/web/will update soon.png",
  ],
  type: "Design Concept"
},
];

const undanganDesigns = [
{
  title: "???",
  image: "images/undangan/will update soon.png",
  preview: [
    "images/undangan/will update soon.png",
  ],
  type: "Design Concept"
},
  {
  title: "???",
  image: "images/undangan/will update soon.png",
  preview: [
    "images/undangan/will update soon.png",
  ],
  type: "Design Concept"
  },
    {
  title: "???",
  image: "images/undangan/will update soon.png",
  preview: [
    "images/undangan/will update soon.png",
    "images/undangan/will update soon.png",
  ],
  type: "Design Concept"
  }
];

const eventDesigns = [
  {
    title: "???",
    image: "images/event/will update soon.png",
    preview: [
    "images/undangan/will update soon.png",
    "images/undangan/will update soon.png",
  ],
    type: "Design Only"
  },
  {
    title: "???",
    image: "images/event/will update soon.png",
    preview: [
    "images/undangan/will update soon.png",
    "images/undangan/will update soon.png",
  ],
    type: "Design Only"
  }
];

const cafeDesigns = [
  {
    title: "???",
    image: "images/cafe/will update soon.png",
    preview: [
    "images/undangan/will update soon.png",
    "images/undangan/will update soon.png",
  ],
    type: "Design Only"
  }
];

const ecommerceDesigns = [
  {
    title: "???",
    image: "images/ecommerce/fashion-hoon-poster.png",
    preview: [
    "images/ecommerce/fashion-design-1.png",
  ],
    type: "Design Only"
  }
];

/* ===== RENDER ===== */

completedProjects.forEach(p =>
  webGrid.appendChild(createCard(p))
);

undanganDesigns.forEach(p =>
  undanganGrid.appendChild(createCard(p))
);

eventDesigns.forEach(p =>
  eventGrid.appendChild(createCard(p))
);

cafeDesigns.forEach(p =>
  cafeGrid.appendChild(createCard(p))
);

ecommerceDesigns.forEach(p =>
  ecommerceGrid.appendChild(createCard(p))
);

function openWebsite(url) {
  document.body.style.overflow = "hidden"; // ⬅️ KUNCI
  modal.style.display = "block";
  modalBody.innerHTML = `
    <iframe 
      src="${url}" 
      style="width:100%; height:100%; border:none;"
    ></iframe>
  `;
}

function openDesignPreview(images) {
  document.body.style.overflow = "hidden";
  modal.style.display = "block";

  modalBody.style.overflow = "auto"; // ⬅️ KHUSUS DESIGN
  modalBody.innerHTML = images.map(img => `
    <img src="${img}" class="preview-img">
  `).join("");
}


