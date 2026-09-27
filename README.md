# Indian Army — A Nation's Shield
## Comprehensive Educational Defence Information Portal

An authentic, fully responsive, ten-page static educational website detailing the history, organisational doctrine, rank hierarchy, training academies, combat equipment, landmark operations, humanitarian assistance, and service of the Indian Army.

---

### Key Highlights

* **Architecture:** 10 discrete HTML5 pages adhering strictly to semantic markup standards.
* **Technology Stack:** Pure HTML5, CSS3 with Custom Properties (variables), and Vanilla JavaScript (ES6+). Zero external frameworks, zero Node.js dependencies at runtime, zero third-party UI libraries.
* **Theme System:** Full Light and Dark mode engine with system preference auto-detection, smooth CSS transitions, and persistent storage in `localStorage`.
* **Local In-Memory Search Engine:** Instant client-side index covering articles across all 10 pages with keyword highlighting and jump links (`Press /`).
* **Interactive Elements:**
  * Chronological conflict and milestone timelines with era filter tabs.
  * Interactive equipment catalog with multi-category button filters.
  * Rank comparison tables and expandable JCO / NCO accordion guides.
  * Real-time military terminology glossary search.
  * Responsive mobile navigation drawer and dynamic back-to-top button.
* **Factual Rigor:** Zero fabricated badges, fictitious unit statistics, or unverified claims. All content is grounded in official Ministry of Defence (MoD) publications, Press Information Bureau (PIB) releases, and official historical archives.

---

### 10-Page Directory

1. **`index.html`** — Home: Visual hero section, constitutional role, 10-module preview, and factual foundations.
2. **`history.html`** — History of the Indian Army: Evolution from the 1947 post-independence transition to 1947–48, 1962, 1965, 1971, 1999 Kargil, and modern joint doctrines.
3. **`organisation.html`** — Organisation & Structure: Constitutional command, 6 operational commands + ARTRAC, and formation hierarchy from Command down to Section.
4. **`ranks.html`** — Ranks & Insignia: Commissioned officers, Junior Commissioned Officers (JCOs), and Other Ranks (NCOs & Jawans) with insignia descriptions and tri-service differentiation.
5. **`training.html`** — Training & Academies: The Chetwode Creed, pre-commissioning academies (NDA Khadakwasla, IMA Dehradun, OTA Chennai), higher war colleges, and high-altitude warfare schools.
6. **`equipment.html`** — Equipment & Technology: Interactive catalog of tanks (T-90, Arjun), artillery (K9 Vajra, M777, Pinaka), aviation (Dhruv, Prachand), and Atmanirbhar Bharat modernisation.
7. **`operations.html`** — Major Operations: Documented historical overviews of 1947–48, 1961 Goa, 1965, 1971, Operation Meghdoot (Siachen), Operation Cactus, and Operation Vijay (1999 Kargil).
8. **`humanitarian.html`** — Humanitarian Assistance & Disaster Relief: Statutory "Aid to Civil Authorities" doctrine and verified case studies (Bhuj, Tsunami, Uttarakhand, Kashmir, Kerala, Wayanad 2024).
9. **`women.html`** — Women in the Indian Army: Evolution from Military Nursing Service to the 2020 Supreme Court Permanent Commission ruling, NDA admission, and Artillery induction.
10. **`references.html`** — References, Glossary & Project Information: Searchable glossary of military terminology, primary government citations, and academic project declaration.

---

### Project Structure

```
├── index.html
├── history.html
├── organisation.html
├── ranks.html
├── training.html
├── equipment.html
├── operations.html
├── humanitarian.html
├── women.html
├── references.html
├── css/
│   ├── style.css
│   └── responsive.css
├── js/
│   ├── main.js
│   ├── search.js
│   └── interactions.js
├── assets/
│   └── images/
│       ├── hero_indian_army.jpg
│       ├── army_armoured_tank.jpg
│       ├── army_mountain_rescue.jpg
│       ├── army_academy_parade.jpg
│       └── army_aviation_dhruv.jpg
└── README.md
```

---

### Deployment

This website is completely static and can be deployed directly to:
* **GitHub Pages:** Push the repository and enable Pages from the main branch.
* **Local Browser:** Double-click `index.html` to open directly in any modern browser.
