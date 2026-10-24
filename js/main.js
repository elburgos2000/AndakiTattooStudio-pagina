/**
 * ANDAKI TATTOO STUDIO 2.0 - MAIN INTERACTIVE SCRIPT
 * - 36 Local Verified Tattoo Artworks across 6 Body Zones (Pecho, Espalda, Brazos, Piernas, Cuello, Manos)
 * - Interactive 3D Cylinder Carousel (Filterable by Body Zone, Auto-rotate, Drag/Swipe)
 * - Body Zone Interactive Explorer with 6 photos per zone
 * - Picsart Studio Integration (Upload local Picsart edits, paste URLs, apply Picsart FX filters)
 * - Fullscreen Lightbox & WhatsApp Quote Calculator
 */

const DEFAULT_TATTOO_ARTWORKS = [
    // === PECHO (6 Diseños) ===
    { src: "img/tattoos/pecho-1.jpg", title: "León Realista en Pecho Completo", category: "realismo", zone: "pecho", zoneLabel: "Pecho Completo", tag: "Picsart FX • Pecho" },
    { src: "img/tattoos/pecho-2.jpg", title: "Águila & Geometría en Pectorales", category: "blackwork", zone: "pecho", zoneLabel: "Pectorales", tag: "Picsart FX • Pecho" },
    { src: "img/tattoos/pecho-3.jpg", title: "Mandala Simétrico en Esternón y Pecho", category: "blackwork", zone: "pecho", zoneLabel: "Esternón / Pecho", tag: "Picsart FX • Pecho" },
    { src: "img/tattoos/pecho-4.jpg", title: "Búho en Sombras & Reloj en Torso", category: "realismo", zone: "pecho", zoneLabel: "Pecho / Torso", tag: "Picsart FX • Pecho" },
    { src: "img/tattoos/pecho-5.jpg", title: "Composición Chicana & Lettering en Pecho", category: "realismo", zone: "pecho", zoneLabel: "Pecho / Clavícula", tag: "Picsart FX • Pecho" },
    { src: "img/tattoos/pecho-6.jpg", title: "Dioses Mitológicos en Pecho Completo", category: "realismo", zone: "pecho", zoneLabel: "Pecho Completo", tag: "Picsart FX • Pecho" },

    // === ESPALDA (6 Diseños) ===
    { src: "img/tattoos/espalda-1.jpg", title: "Proyecto Espalda Completa (Full Back)", category: "realismo", zone: "espalda", zoneLabel: "Espalda Completa", tag: "Picsart FX • Espalda" },
    { src: "img/tattoos/espalda-2.jpg", title: "Tigre & Peonías en Espalda", category: "neotradicional", zone: "espalda", zoneLabel: "Espalda Alta", tag: "Picsart FX • Espalda" },
    { src: "img/tattoos/espalda-3.jpg", title: "Línea Fina & Geometría en Columna Vertebral", category: "fine-line", zone: "espalda", zoneLabel: "Columna Vertebral", tag: "Picsart FX • Espalda" },
    { src: "img/tattoos/espalda-4.jpg", title: "Ángel Guerrero en Sombras - Espalda", category: "realismo", zone: "espalda", zoneLabel: "Espalda Completa", tag: "Picsart FX • Espalda" },
    { src: "img/tattoos/espalda-5.jpg", title: "Dragón Oriental en Espalda Completa", category: "neotradicional", zone: "espalda", zoneLabel: "Full Back", tag: "Picsart FX • Espalda" },
    { src: "img/tattoos/espalda-6.jpg", title: "Samurái Realismo Oscuro en Espalda", category: "blackwork", zone: "espalda", zoneLabel: "Espalda / Dorsal", tag: "Picsart FX • Espalda" },

    // === BRAZOS / MANGAS (6 Diseños) ===
    { src: "img/tattoos/brazos-1.jpg", title: "Manga Completa Realismo en Sombras", category: "realismo", zone: "brazos", zoneLabel: "Manga Completa", tag: "Picsart FX • Brazos" },
    { src: "img/tattoos/brazos-2.jpg", title: "Media Manga Antebrazo Blackwork", category: "blackwork", zone: "brazos", zoneLabel: "Antebrazo", tag: "Picsart FX • Brazos" },
    { src: "img/tattoos/brazos-3.jpg", title: "Reloj, Brújula y Rosas en Brazo", category: "realismo", zone: "brazos", zoneLabel: "Brazo / Bíceps", tag: "Picsart FX • Brazos" },
    { src: "img/tattoos/brazos-4.jpg", title: "Manga Geométrica & Puntillismo", category: "blackwork", zone: "brazos", zoneLabel: "Manga Completa", tag: "Picsart FX • Brazos" },
    { src: "img/tattoos/brazos-5.jpg", title: "Retrato Micro-Realismo en Antebrazo", category: "realismo", zone: "brazos", zoneLabel: "Antebrazo Interno", tag: "Picsart FX • Brazos" },
    { src: "img/tattoos/brazos-6.jpg", title: "Manga Neo-Tradicional Botánica", category: "neotradicional", zone: "brazos", zoneLabel: "Brazo Completo", tag: "Picsart FX • Brazos" },

    // === PIERNAS (6 Diseños) ===
    { src: "img/tattoos/piernas-1.jpg", title: "Pierna Completa (Full Leg Sleeve)", category: "realismo", zone: "piernas", zoneLabel: "Pierna Completa", tag: "Picsart FX • Piernas" },
    { src: "img/tattoos/piernas-2.jpg", title: "Diseño Floral & Serpiente en Muslo", category: "fine-line", zone: "piernas", zoneLabel: "Muslo", tag: "Picsart FX • Piernas" },
    { src: "img/tattoos/piernas-3.jpg", title: "Guerrero Espartano en Pantorrilla", category: "realismo", zone: "piernas", zoneLabel: "Pantorrilla / Gemelo", tag: "Picsart FX • Piernas" },
    { src: "img/tattoos/piernas-4.jpg", title: "Blackwork Tribal y Sombras en Pierna", category: "blackwork", zone: "piernas", zoneLabel: "Pierna Externa", tag: "Picsart FX • Piernas" },
    { src: "img/tattoos/piernas-5.jpg", title: "Composición Realista en Gemelo", category: "realismo", zone: "piernas", zoneLabel: "Gemelo", tag: "Picsart FX • Piernas" },
    { src: "img/tattoos/piernas-6.jpg", title: "Arte Japonés en Muslo y Rodilla", category: "neotradicional", zone: "piernas", zoneLabel: "Muslo / Rodilla", tag: "Picsart FX • Piernas" },

    // === CUELLO (6 Diseños) ===
    { src: "img/tattoos/cuello-1.jpg", title: "Alas & Símbolo Gótico en Cuello", category: "blackwork", zone: "cuello", zoneLabel: "Cuello Frontal", tag: "Picsart FX • Cuello" },
    { src: "img/tattoos/cuello-2.jpg", title: "Rosa en Sombras Lateral de Cuello", category: "realismo", zone: "cuello", zoneLabel: "Cuello Lateral", tag: "Picsart FX • Cuello" },
    { src: "img/tattoos/cuello-3.jpg", title: "Mandala de Precisión en Nuca", category: "fine-line", zone: "cuello", zoneLabel: "Nuca / Cuello", tag: "Picsart FX • Cuello" },
    { src: "img/tattoos/cuello-4.jpg", title: "Lettering Fino & Fechas en Cuello", category: "fine-line", zone: "cuello", zoneLabel: "Cuello", tag: "Picsart FX • Cuello" },
    { src: "img/tattoos/cuello-5.jpg", title: "Mariposa Blackwork en Garganta y Cuello", category: "blackwork", zone: "cuello", zoneLabel: "Garganta / Cuello", tag: "Picsart FX • Cuello" },
    { src: "img/tattoos/cuello-6.jpg", title: "Diseño Minimalista Detrás de la Oreja", category: "fine-line", zone: "cuello", zoneLabel: "Detrás de la Oreja", tag: "Picsart FX • Cuello" },

    // === MANOS & COSTILLAS (6 Diseños) ===
    { src: "img/tattoos/manos-1.jpg", title: "Rosa Realista en Dorso de la Mano", category: "realismo", zone: "manos", zoneLabel: "Dorso de Mano", tag: "Picsart FX • Manos" },
    { src: "img/tattoos/manos-2.jpg", title: "Calavera & Sombras en Mano y Nudillos", category: "realismo", zone: "manos", zoneLabel: "Mano / Nudillos", tag: "Picsart FX • Manos" },
    { src: "img/tattoos/manos-3.jpg", title: "Ojo Místico & Geometría en Mano", category: "blackwork", zone: "manos", zoneLabel: "Mano Completa", tag: "Picsart FX • Manos" },
    { src: "img/tattoos/manos-4.jpg", title: "Lettering en Dedos y Muñeca", category: "fine-line", zone: "manos", zoneLabel: "Dedos / Muñeca", tag: "Picsart FX • Manos" },
    { src: "img/tattoos/manos-5.jpg", title: "Serpiente en Mano y Costillas", category: "blackwork", zone: "manos", zoneLabel: "Mano / Costillas", tag: "Picsart FX • Manos" },
    { src: "img/tattoos/manos-6.jpg", title: "Mandala Ornamentado en Mano", category: "blackwork", zone: "manos", zoneLabel: "Mano / Dedos", tag: "Picsart FX • Manos" }
];

const BODY_ZONES_INFO = {
    pecho: {
        title: "Pecho & Pectorales",
        subtitle: "Impacto visual, fuerza y simetría sagrada (6 diseños de referencia)",
        desc: "El pecho es una de las zonas con mayor presencia para piezas centrales, leones, águilas, lettering chicano, mandalas en el esternón o composiciones que conectan con los hombros.",
        painLevel: 72,
        painText: "Media - Alta (Mayor sensibilidad en el esternón y clavículas)",
        sessions: "1 a 3 sesiones según cobertura",
        styles: "Realismo en Sombras, Blackwork, Lettering, Neo-Tradicional",
        priceRef: "Desde $180.000 COP"
    },
    espalda: {
        title: "Espalda Completa & Columna",
        subtitle: "El lienzo más grande e imponente del cuerpo (6 diseños de referencia)",
        desc: "Ideal para grandes obras maestras sin límites de espacio: desde líneas finas delicadas a lo largo de la columna vertebral hasta proyectos de espalda completa (Full Back) llenos de historia.",
        painLevel: 58,
        painText: "Moderada (Más sensible sobre la columna y zona lumbar)",
        sessions: "1 a 5 sesiones (según tamaño)",
        styles: "Realismo Épico, Mitología, Geometría Sagrada, Fine Line en Columna",
        priceRef: "Desde $220.000 COP"
    },
    brazos: {
        title: "Brazos, Antebrazo & Mangas",
        subtitle: "La zona favorita, versátil y de menor dolor (6 diseños de referencia)",
        desc: "Perfecto tanto para tu primer tatuaje como para construir una media manga o manga completa (Full Sleeve). Excelente cicatrización y visibilidad diaria.",
        painLevel: 32,
        painText: "Baja - Moderada (Ideal para primera experiencia)",
        sessions: "1 sesión (piezas medianas) / 3-4 sesiones (Manga)",
        styles: "Todos los estilos: Realismo, Micro-Realismo, Blackwork, Tribal",
        priceRef: "Desde $100.000 COP"
    },
    piernas: {
        title: "Piernas, Muslos & Pantorrillas",
        subtitle: "Lienzos amplios para piezas verticales y detalladas (6 diseños de referencia)",
        desc: "El muslo y los gemelos permiten trabajar retratos, guerreros, diseños florales, serpientes o mangas de pierna completas con gran comodidad durante la sesión.",
        painLevel: 45,
        painText: "Moderada (Baja en muslo externo, más intensa en rodilla/tobillo)",
        sessions: "1 a 3 sesiones",
        styles: "Realismo, Tradicional, Floral, Blackwork y Color",
        priceRef: "Desde $140.000 COP"
    },
    cuello: {
        title: "Cuello, Nuca & Detrás de la Oreja",
        subtitle: "Actitud pura, elegancia y carácter (6 diseños de referencia)",
        desc: "Desde diseños sutiles y minimalistas detrás de la oreja o en la nuca, hasta alas, rosas y piezas audaces en los laterales del cuello o garganta.",
        painLevel: 82,
        painText: "Alta (Piel delgada, trabajamos con técnica suave y anestesia opcional)",
        sessions: "1 sesión de alta precisión",
        styles: "Lettering, Alas, Rosas, Geometría, Micro-Tatuajes",
        priceRef: "Desde $120.000 COP"
    },
    manos: {
        title: "Manos, Dedos & Costillas",
        subtitle: "Detalles de personalidad y zonas de alto impacto (6 diseños de referencia)",
        desc: "Rosas, calaveras, mandalas o lettering en el dorso de la mano, nudillos y costillas. Usamos pigmentos de alta fijación especiales para zonas de constante movimiento.",
        painLevel: 88,
        painText: "Alta (Sesiones rápidas y precisas)",
        sessions: "1 sesión + retoque de control",
        styles: "Rosas Realistas, Calaveras, Símbolos, Caligrafía, Mandalas",
        priceRef: "Desde $90.000 COP"
    }
};

const STORAGE_KEY = "andaki_picsart_artworks_v3_36imgs";

function getStoredArtworks() {
    try {
        // Limpiar versiones viejas con links de Unsplash rotos
        localStorage.removeItem("andaki_picsart_artworks");
        localStorage.removeItem("andaki_picsart_artworks_v2");

        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            const parsed = JSON.parse(saved);
            if (Array.isArray(parsed) && parsed.length >= 12) {
                return parsed;
            }
        }
    } catch (e) {
        console.warn("No se pudo leer localStorage:", e);
    }
    return [...DEFAULT_TATTOO_ARTWORKS];
}

function saveArtworks(list) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    } catch (e) {
        console.warn("Imagen pesada, se mantiene en memoria durante la sesión.");
    }
}

let currentArtworks = getStoredArtworks();
let carouselZoneFilter = "all";

document.addEventListener("DOMContentLoaded", () => {
    const preloader = document.getElementById("preloder");
    if (preloader) {
        setTimeout(() => preloader.classList.add("loaded"), 300);
    }

    const header = document.querySelector(".header");
    window.addEventListener("scroll", () => {
        if (!header) return;
        header.classList.toggle("scrolled", window.scrollY > 40);
    });

    const mobileToggle = document.getElementById("mobile-toggle");
    const navMenu = document.querySelector(".header__nav__menu");
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener("click", () => {
            navMenu.classList.toggle("open");
        });
    }

    init3DCarousel();
    initBodyZoneExplorer();
    initGalleryGrid();
    initPicsartStudio();
    initLightbox();
    initWhatsAppForms();
});

/* ==========================================================================
   3D CAROUSEL ENGINE
   ========================================================================== */
let carouselState = {
    angle: 0,
    isPaused: false,
    isDragging: false,
    startX: 0,
    startAngle: 0,
    autoTimer: null
};

function getCarouselItems() {
    if (carouselZoneFilter === "all") {
        // Mostrar una selección equilibrada de 12 obras en el cilindro 3D (2 de cada zona) para que se vea amplio y nítido
        const zones = ["pecho", "espalda", "brazos", "piernas", "cuello", "manos"];
        const balanced = [];
        zones.forEach((z) => {
            const matches = currentArtworks.filter((a) => a.zone === z).slice(0, 2);
            balanced.push(...matches);
        });
        return balanced.length ? balanced : currentArtworks.slice(0, 12);
    }
    return currentArtworks.filter((a) => a.zone === carouselZoneFilter);
}

function init3DCarousel() {
    const ring = document.getElementById("carousel-3d-ring");
    const scene = document.getElementById("scene-3d");
    if (!ring || !scene) return;

    render3DCarouselCards();

    if (carouselState.autoTimer) clearInterval(carouselState.autoTimer);
    carouselState.autoTimer = setInterval(() => {
        if (!carouselState.isPaused && !carouselState.isDragging) {
            carouselState.angle -= 0.32;
            updateRingTransform();
        }
    }, 30);

    scene.addEventListener("mouseenter", () => {
        carouselState.isPaused = true;
    });
    scene.addEventListener("mouseleave", () => {
        carouselState.isPaused = false;
    });

    scene.addEventListener("mousedown", (e) => {
        carouselState.isDragging = true;
        carouselState.startX = e.clientX;
        carouselState.startAngle = carouselState.angle;
        ring.classList.add("dragging");
    });

    window.addEventListener("mousemove", (e) => {
        if (!carouselState.isDragging) return;
        const deltaX = e.clientX - carouselState.startX;
        carouselState.angle = carouselState.startAngle + deltaX * 0.35;
        updateRingTransform();
    });

    window.addEventListener("mouseup", () => {
        if (!carouselState.isDragging) return;
        carouselState.isDragging = false;
        ring.classList.remove("dragging");
    });

    scene.addEventListener("touchstart", (e) => {
        if (!e.touches.length) return;
        carouselState.isDragging = true;
        carouselState.startX = e.touches[0].clientX;
        carouselState.startAngle = carouselState.angle;
        ring.classList.add("dragging");
    }, { passive: true });

    scene.addEventListener("touchmove", (e) => {
        if (!carouselState.isDragging || !e.touches.length) return;
        const deltaX = e.touches[0].clientX - carouselState.startX;
        carouselState.angle = carouselState.startAngle + deltaX * 0.45;
        updateRingTransform();
    }, { passive: true });

    scene.addEventListener("touchend", () => {
        carouselState.isDragging = false;
        ring.classList.remove("dragging");
    });

    const prevBtn = document.getElementById("carousel-prev");
    const nextBtn = document.getElementById("carousel-next");
    const toggleBtn = document.getElementById("carousel-toggle");

    const stepAngle = () => 360 / Math.max(getCarouselItems().length, 1);

    if (prevBtn) {
        prevBtn.addEventListener("click", () => {
            carouselState.angle += stepAngle();
            updateRingTransform();
        });
    }
    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            carouselState.angle -= stepAngle();
            updateRingTransform();
        });
    }
    if (toggleBtn) {
        toggleBtn.addEventListener("click", () => {
            carouselState.isPaused = !carouselState.isPaused;
            toggleBtn.innerHTML = carouselState.isPaused
                ? '<i class="fa fa-play"></i> Reanudar Giro'
                : '<i class="fa fa-pause"></i> Pausar Giro';
        });
    }

    // Botones para filtrar el Carrusel 3D por zona del cuerpo en vivo
    document.querySelectorAll("[data-carousel-zone]").forEach((btn) => {
        btn.addEventListener("click", () => {
            document.querySelectorAll("[data-carousel-zone]").forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");
            carouselZoneFilter = btn.dataset.carouselZone;
            render3DCarouselCards();
        });
    });
}

function render3DCarouselCards() {
    const ring = document.getElementById("carousel-3d-ring");
    if (!ring) return;

    const items = getCarouselItems();
    const total = items.length;
    const theta = 360 / total;
    const cardWidth = window.innerWidth < 992 ? 210 : 250;
    const radius = Math.max(290, Math.round((cardWidth / 2) / Math.tan(Math.PI / total)) + 55);

    ring.innerHTML = items
        .map((item, index) => {
            const itemAngle = theta * index;
            return `
            <div class="carousel-3d-card" 
                 style="transform: rotateY(${itemAngle}deg) translateZ(${radius}px);"
                 data-src="${item.src}"
                 data-title="${item.title}"
                 data-tag="${item.tag}">
                <img src="${item.src}" alt="${item.title}" loading="lazy">
                <div class="card-caption">
                    <span class="card-tag">${item.tag}</span>
                    <h4 class="card-title">${item.title}</h4>
                </div>
            </div>`;
        })
        .join("");

    ring.querySelectorAll(".carousel-3d-card").forEach((card) => {
        card.addEventListener("click", () => {
            openLightbox(card.dataset.src, card.dataset.title, card.dataset.tag);
        });
    });

    updateRingTransform();
}

function updateRingTransform() {
    const ring = document.getElementById("carousel-3d-ring");
    if (!ring) return;
    ring.style.transform = `translateZ(-340px) rotateX(-4deg) rotateY(${carouselState.angle}deg)`;
}

/* ==========================================================================
   BODY ZONE INTERACTIVE EXPLORER (6 FOTOS POR CADA ZONA)
   ========================================================================== */
function initBodyZoneExplorer() {
    const container = document.getElementById("body-zone-explorer");
    if (!container) return;

    const pillBtns = container.querySelectorAll("[data-zone-select]");
    const renderZoneDetail = (zoneKey) => {
        const info = BODY_ZONES_INFO[zoneKey] || BODY_ZONES_INFO.pecho;
        const zonePhotos = currentArtworks.filter((a) => a.zone === zoneKey);

        const detailEl = document.getElementById("zone-detail-content");
        if (!detailEl) return;

        const waMsg = `Hola Andaki Tattoo Studio, me interesa cotizar un tatuaje en la zona de *${info.title}*. ¿Me pueden asesorar?`;
        const waLink = `https://api.whatsapp.com/send?phone=573102815841&text=${encodeURIComponent(waMsg)}`;

        detailEl.innerHTML = `
            <div class="row align-items-center g-4">
                <div class="col-lg-5">
                    <span class="section-badge"><i class="fa fa-compass"></i> Zona Corporal Seleccionada</span>
                    <h3 class="display-title mb-1" style="font-size: 2rem;">${info.title}</h3>
                    <p class="text-warning mb-3" style="font-weight: 600;">${info.subtitle}</p>
                    <p class="text-secondary mb-4">${info.desc}</p>

                    <div class="mb-3">
                        <div class="d-flex justify-content-between small">
                            <span class="text-uppercase text-secondary fw-bold">Nivel de Sensibilidad / Dolor:</span>
                            <span style="color: var(--gold-light);">${info.painText}</span>
                        </div>
                        <div class="pain-meter-bar">
                            <div class="pain-meter-fill" style="width: ${info.painLevel}%;"></div>
                        </div>
                    </div>

                    <div class="row g-3 my-3">
                        <div class="col-sm-6">
                            <div class="p-3 rounded-3" style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle);">
                                <small class="text-secondary d-block text-uppercase">Estilos Recomendados</small>
                                <strong class="text-white small">${info.styles}</strong>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="p-3 rounded-3" style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle);">
                                <small class="text-secondary d-block text-uppercase">Sesiones / Referencia</small>
                                <strong style="color: var(--gold-primary);">${info.priceRef}</strong>
                                <small class="d-block text-secondary">${info.sessions}</small>
                            </div>
                        </div>
                    </div>

                    <div class="d-flex flex-wrap gap-3 mt-4">
                        <a href="${waLink}" target="_blank" class="primary-btn">
                            <i class="fa fa-whatsapp"></i> Cotizar en ${info.title.split(" ")[0]}
                        </a>
                    </div>
                </div>

                <div class="col-lg-7">
                    <div class="row g-3">
                        ${zonePhotos.slice(0, 6).map((art) => `
                            <div class="col-md-4 col-sm-6">
                                <div class="zone-mini-card" style="height: 195px;" data-src="${art.src}" data-title="${art.title}" data-tag="${art.tag}">
                                    <img src="${art.src}" alt="${art.title}" loading="lazy">
                                    <div class="zone-mini-label">
                                        <span class="d-block small text-warning" style="font-size:0.7rem;">${art.zoneLabel || info.title}</span>
                                        <span style="font-size:0.8rem;">${art.title}</span>
                                    </div>
                                </div>
                            </div>
                        `).join("")}
                    </div>
                </div>
            </div>
        `;

        detailEl.querySelectorAll(".zone-mini-card").forEach((card) => {
            card.addEventListener("click", () => {
                openLightbox(card.dataset.src, card.dataset.title, card.dataset.tag);
            });
        });
    };

    pillBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            pillBtns.forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");
            renderZoneDetail(btn.dataset.zoneSelect);
        });
    });

    renderZoneDetail("pecho");
}

/* ==========================================================================
   PICSART STUDIO INTEGRATION (FILTERS + UPLOAD + URL)
   ========================================================================== */
function initPicsartStudio() {
    const fxButtons = document.querySelectorAll("[data-picsart-fx]");
    fxButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            fxButtons.forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");

            const fx = btn.dataset.picsartFx;
            document.body.classList.remove("fx-picsart-neon", "fx-picsart-noir", "fx-picsart-gold");
            if (fx !== "original") {
                document.body.classList.add(`fx-picsart-${fx}`);
            }
        });
    });

    const fileInput = document.getElementById("picsart-file-input");
    if (fileInput) {
        fileInput.addEventListener("change", (e) => {
            const files = Array.from(e.target.files || []);
            if (!files.length) return;

            const selectedZone = document.getElementById("picsart-zone-select")?.value || "pecho";

            files.forEach((file) => {
                const reader = new FileReader();
                reader.onload = (ev) => {
                    const newArt = {
                        src: ev.target.result,
                        title: file.name.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " "),
                        category: "realismo",
                        zone: selectedZone,
                        zoneLabel: selectedZone.toUpperCase(),
                        tag: `Picsart Custom • ${selectedZone.toUpperCase()}`
                    };
                    currentArtworks.unshift(newArt);
                    saveArtworks(currentArtworks);
                    render3DCarouselCards();
                    initGalleryGrid();
                    initBodyZoneExplorer();
                };
                reader.readAsDataURL(file);
            });
        });
    }

    const addUrlBtn = document.getElementById("picsart-url-btn");
    if (addUrlBtn) {
        addUrlBtn.addEventListener("click", () => {
            const url = prompt("Pega aquí el enlace (URL) de tu imagen de Picsart o diseño de tatuaje:");
            if (!url || !url.trim()) return;
            const title = prompt("Nombre del diseño (ej. León en Pecho, Manga Realismo):", "Diseño Exclusivo Picsart") || "Diseño Exclusivo Picsart";
            const zone = prompt("¿A qué zona pertenece? Escribe: pecho, espalda, brazos, piernas, cuello o manos", "pecho")?.toLowerCase().trim() || "pecho";

            currentArtworks.unshift({
                src: url.trim(),
                title: title.trim(),
                category: "realismo",
                zone: BODY_ZONES_INFO[zone] ? zone : "pecho",
                zoneLabel: zone.toUpperCase(),
                tag: `Picsart Studio • ${zone.toUpperCase()}`
            });
            saveArtworks(currentArtworks);
            render3DCarouselCards();
            initGalleryGrid();
            initBodyZoneExplorer();
        });
    }

    const resetBtn = document.getElementById("picsart-reset-btn");
    if (resetBtn) {
        resetBtn.addEventListener("click", () => {
            localStorage.removeItem(STORAGE_KEY);
            currentArtworks = [...DEFAULT_TATTOO_ARTWORKS];
            render3DCarouselCards();
            initGalleryGrid();
            initBodyZoneExplorer();
        });
    }
}

/* ==========================================================================
   FILTERABLE GALLERY GRID (36+ FOTOS POR ZONA DEL CUERPO O ESTILO)
   ========================================================================== */
function initGalleryGrid() {
    const grid = document.getElementById("gallery-grid");
    if (!grid) return;

    const renderItems = (filter = "all") => {
        const filtered = filter === "all"
            ? currentArtworks
            : currentArtworks.filter((item) => item.zone === filter || item.category === filter);

        const countBadge = document.getElementById("gallery-count-badge");
        if (countBadge) {
            countBadge.textContent = `Mostrando ${filtered.length} diseños de tatuajes reales`;
        }

        grid.innerHTML = filtered
            .map((item) => `
                <div class="gallery-item" data-src="${item.src}" data-title="${item.title}" data-tag="${item.tag}">
                    <img src="${item.src}" alt="${item.title}" loading="lazy">
                    <div class="gallery-overlay" style="opacity: 1; background: linear-gradient(to top, rgba(7,7,9,0.92) 0%, rgba(7,7,9,0.15) 45%, transparent 100%);">
                        <span>${item.tag}</span>
                        <h5>${item.title}</h5>
                    </div>
                </div>
            `)
            .join("");

        grid.querySelectorAll(".gallery-item").forEach((el) => {
            el.addEventListener("click", () => {
                openLightbox(el.dataset.src, el.dataset.title, el.dataset.tag);
            });
        });
    };

    renderItems("all");

    const filterBtns = document.querySelectorAll(".filter-btn");
    filterBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            filterBtns.forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");
            renderItems(btn.dataset.filter);
        });
    });
}

/* ==========================================================================
   LIGHTBOX MODAL
   ========================================================================== */
function initLightbox() {
    if (document.getElementById("andaki-lightbox")) return;

    const modal = document.createElement("div");
    modal.id = "andaki-lightbox";
    modal.className = "lightbox-modal";
    modal.innerHTML = `
        <div class="lightbox-content">
            <button class="lightbox-close" id="lightbox-close" aria-label="Cerrar">&times;</button>
            <img id="lightbox-img" src="" alt="Vista previa del tatuaje">
            <div class="lightbox-caption">
                <div>
                    <span id="lightbox-tag" class="section-badge" style="margin-bottom:4px;"></span>
                    <h4 id="lightbox-title" style="font-family:var(--font-display);margin:0;color:#fff;"></h4>
                </div>
                <a id="lightbox-wa" href="#" target="_blank" class="primary-btn" style="padding:10px 20px;font-size:0.78rem;">
                    <i class="fa fa-whatsapp"></i> Cotizar este diseño
                </a>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    modal.addEventListener("click", (e) => {
        if (e.target === modal || e.target.id === "lightbox-close") {
            modal.classList.remove("active");
        }
    });
}

function openLightbox(src, title, tag) {
    const modal = document.getElementById("andaki-lightbox");
    if (!modal) return;

    document.getElementById("lightbox-img").src = src;
    document.getElementById("lightbox-title").textContent = title;
    document.getElementById("lightbox-tag").textContent = tag;

    const msg = `Hola Andaki Tattoo Studio, vi el diseño "${title}" (${tag}) en su página web y me gustaría cotizar algo similar.`;
    document.getElementById("lightbox-wa").href =
        `https://api.whatsapp.com/send?phone=573102815841&text=${encodeURIComponent(msg)}`;

    modal.classList.add("active");
}

/* ==========================================================================
   WHATSAPP FORMS & TATTOO QUOTE CALCULATOR
   ========================================================================== */
function initWhatsAppForms() {
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const nombre = contactForm.querySelector('[name="nombre"]').value.trim();
            const correo = contactForm.querySelector('[name="correo"]').value.trim();
            const telefono = contactForm.querySelector('[name="telefono"]').value.trim();
            const zona = contactForm.querySelector('[name="zona"]')?.value || "Por definir";
            const estilo = contactForm.querySelector('[name="estilo"]')?.value || "Personalizado";
            const mensaje = contactForm.querySelector('[name="mensaje"]').value.trim();

            const texto = `¡Hola Andaki Tattoo Studio! 👋\n\n*Nombre:* ${nombre}\n*Correo:* ${correo}\n*Teléfono:* ${telefono}\n*Zona del cuerpo:* ${zona}\n*Estilo de interés:* ${estilo}\n*Idea / Mensaje:* ${mensaje}`;
            const url = `https://api.whatsapp.com/send?phone=573102815841&text=${encodeURIComponent(texto)}`;
            window.open(url, "_blank");
        });
    }

    const quoteForm = document.getElementById("tattoo-quote-form");
    if (quoteForm) {
        const sizeInput = document.getElementById("quote-size");
        const sizeLabel = document.getElementById("quote-size-val");
        const styleInput = document.getElementById("quote-style");
        const zoneInput = document.getElementById("quote-zone");
        const estimateOutput = document.getElementById("quote-estimate");

        const updateEstimate = () => {
            if (!sizeInput || !styleInput || !estimateOutput) return;
            const cm = parseInt(sizeInput.value, 10) || 10;
            if (sizeLabel) sizeLabel.textContent = `${cm} cm`;

            let base = 80000;
            const mult = {
                "Realismo": 14000,
                "Blackwork": 11500,
                "Línea Fina (Fine Line)": 10000,
                "Neo-Tradicional / Color": 13000,
                "Perforación / Piercing": 4000
            }[styleInput.value] || 11000;

            const estimated = styleInput.value === "Perforación / Piercing"
                ? 50000
                : base + cm * mult;

            estimateOutput.textContent = `$${estimated.toLocaleString("es-CO")} COP aprox.`;
        };

        if (sizeInput) sizeInput.addEventListener("input", updateEstimate);
        if (styleInput) styleInput.addEventListener("change", updateEstimate);
        if (zoneInput) zoneInput.addEventListener("change", updateEstimate);
        updateEstimate();

        quoteForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const style = styleInput.value;
            const cm = sizeInput.value;
            const zone = zoneInput.value;
            const est = estimateOutput.textContent;

            const msg = `¡Hola Andaki Tattoo Studio! Quiero agendar/cotizar un proyecto:\n\n• *Zona del cuerpo:* ${zone}\n• *Servicio/Estilo:* ${style}\n• *Tamaño aprox:* ${cm} cm\n• *Referencia estimada web:* ${est}\n\n¿Qué disponibilidad tienen?`;
            window.open(`https://api.whatsapp.com/send?phone=573102815841&text=${encodeURIComponent(msg)}`, "_blank");
        });
    }
}
