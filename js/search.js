/**
 * Indian Army — A Nation's Shield
 * Search Engine Module
 * In-memory client-side search across all 10 educational pages
 */

const SEARCH_INDEX = [
  // Page 1: Home
  {
    page: "Home",
    url: "index.html",
    title: "Indian Army — A Nation's Shield Overview",
    snippet: "Introduction to the Indian Army, its fundamental constitutional mission, national defence role, and humanitarian assistance.",
    keywords: "home shield defence army service mission security sovereignty introduction"
  },
  {
    page: "Home",
    url: "index.html#motto",
    title: "Motto: Seva Paramo Dharma",
    snippet: "The guiding ethos of Service Before Self (Seva Paramo Dharma) in war and peace.",
    keywords: "motto ethos service before self seva paramo dharma philosophy"
  },
  // Page 2: History
  {
    page: "History",
    url: "history.html#timeline",
    title: "Chronological History of the Indian Army",
    snippet: "From British Indian Army transition to independence, 1947–48 Jammu & Kashmir conflict, 1962 Sino-Indian War, 1965, 1971, and 1999 Kargil.",
    keywords: "history timeline 1947 1948 1962 1965 1971 1999 kargil british indian army independence partition"
  },
  {
    page: "History",
    url: "history.html#transition",
    title: "Post-Independence Transition (1947)",
    snippet: "The institutional restructuring under General K.M. Cariappa, India's first Indian Commander-in-Chief, establishing a secular constitutional military.",
    keywords: "cariappa first commander in chief partition restructuring institutional secular constitution"
  },
  // Page 3: Organisation
  {
    page: "Organisation",
    url: "organisation.html#commands",
    title: "Operational Commands & Headquarters",
    snippet: "The 6 operational commands (Northern, Western, Eastern, Southern, Central, South Western) and 1 training command (ARTRAC).",
    keywords: "command structure headquarters northern udhampur western chandimandir eastern kolkata southern pune central lucknow artrac shimla jaipur"
  },
  {
    page: "Organisation",
    url: "organisation.html#hierarchy",
    title: "Formation Hierarchy: Command to Section",
    snippet: "Operational breakdown from Army HQ down to Corps, Divisions, Brigades, Battalions, Companies, Platoons, and Sections.",
    keywords: "corps division brigade battalion regiment company platoon section hierarchy organisation structure"
  },
  {
    page: "Organisation",
    url: "organisation.html#arms-services",
    title: "Combat Arms, Combat Support & Logistics Services",
    snippet: "Infantry, Armoured Corps, Mechanised Infantry, Artillery, Engineers, Signals, Army Service Corps, and Ordnance.",
    keywords: "combat arms services infantry armoured corps artillery engineers signals asc ordnance emc"
  },
  // Page 4: Ranks
  {
    page: "Ranks",
    url: "ranks.html#commissioned",
    title: "Commissioned Officers Rank Hierarchy",
    snippet: "From Lieutenant, Captain, Major, Lt Colonel, Colonel, Brigadier, Major General, Lt General, to General and Field Marshal.",
    keywords: "ranks commissioned officers general lieutenant captain major colonel brigadier field marshal insignia"
  },
  {
    page: "Ranks",
    url: "ranks.html#jco",
    title: "Junior Commissioned Officers (JCOs)",
    snippet: "Subedar Major, Subedar, and Naib Subedar — vital link between commissioned commanders and enlisted soldiers.",
    keywords: "jco junior commissioned officers subedar major naib subedar insignia leadership"
  },
  {
    page: "Ranks",
    url: "ranks.html#other-ranks",
    title: "Non-Commissioned Officers & Other Ranks",
    snippet: "Havildar, Naik, Lance Naik, and Sepoy/Sowar forming the backbone of combat formations.",
    keywords: "other ranks non commissioned sepoy havildar naik lance naik enlisted jawans"
  },
  // Page 5: Training
  {
    page: "Training",
    url: "training.html#academies",
    title: "Premier Training Academies (NDA & IMA)",
    snippet: "National Defence Academy (Khadakwasla, Pune), Indian Military Academy (Dehradun), and Officers Training Academy (Chennai).",
    keywords: "training academies nda national defence academy ima indian military academy ota dehradun pune chennai chetwode"
  },
  {
    page: "Training",
    url: "training.html#specialised",
    title: "Specialised Warfare Institutions",
    snippet: "High Altitude Warfare School (HAWS Gulmarg), Counter Insurgency & Jungle Warfare School (CIJWS Vairengte), and College of Military Engineering.",
    keywords: "haws gulmarg cijws vairengte jungle warfare high altitude winter warfare military engineering cme"
  },
  // Page 6: Equipment
  {
    page: "Equipment",
    url: "equipment.html#armoured",
    title: "Main Battle Tanks & Armoured Vehicles",
    snippet: "T-90S Bhishma, T-72M1 Ajeya, Arjun MBT, and BMP-2 Sarath infantry combat vehicles.",
    keywords: "t90 bhishma t72 ajeya arjun mbt bmp2 sarath tanks armour armoured vehicles"
  },
  {
    page: "Equipment",
    url: "equipment.html#artillery",
    title: "Artillery Systems & Rocket Launchers",
    snippet: "K9 Vajra-T self-propelled howitzer, M777 ultra-light howitzer, Dhanush, and Pinaka Multi-Barrel Rocket Launchers.",
    keywords: "artillery k9 vajra m777 dhanush pinaka rocket howitzer bofors guns firepower"
  },
  {
    page: "Equipment",
    url: "equipment.html#aviation",
    title: "Army Aviation Corps & Rotary Assets",
    snippet: "HAL Dhruv Advanced Light Helicopter, Rudra weaponised variant, HAL Prachand Light Combat Helicopter, and Cheetah/Chetak.",
    keywords: "army aviation hal dhruv rudra prachand helicopter lch light utility aircraft"
  },
  {
    page: "Equipment",
    url: "equipment.html#modernisation",
    title: "Atmanirbhar Bharat & Indigenous Modernisation",
    snippet: "Indigenous development under Make in India, iDEX innovation challenges, advanced night vision, and soldier modernization.",
    keywords: "modernisation atmanirbhar bharat make in india idex defence tech indigenous drones"
  },
  // Page 7: Operations
  {
    page: "Operations",
    url: "operations.html#meghdoot",
    title: "Operation Meghdoot (1984) — Siachen Glacier",
    snippet: "Securing the highest battlefield in the world across the Saltoro Ridge in Jammu and Kashmir.",
    keywords: "operation meghdoot 1984 siachen glacier saltoro ridge high altitude warfare bilafond la sia la"
  },
  {
    page: "Operations",
    url: "operations.html#vijay",
    title: "Operation Vijay (1999) — Kargil Conflict",
    snippet: "Evicting intrusions along the Line of Control across Tololing, Tiger Hill, and Point 4875 in high-altitude terrain.",
    keywords: "operation vijay kargil 1999 tololing tiger hill captain vikram batra manoj pandey loc"
  },
  {
    page: "Operations",
    url: "operations.html#un-peacekeeping",
    title: "United Nations Peacekeeping Deployments",
    snippet: "India's historic role as one of the largest troop contributors to UN peacekeeping missions across the Congo, Gaza, Lebanon, and South Sudan.",
    keywords: "un united nations peacekeeping blue helmets congo lebanon gaza sudan global mission"
  },
  // Page 8: Humanitarian Assistance
  {
    page: "Humanitarian",
    url: "humanitarian.html#disaster-relief",
    title: "HADR: Humanitarian Assistance & Disaster Relief",
    snippet: "Operation Rahat (2013 Uttarakhand floods), Operation Madad, Jammu & Kashmir flood rescue, Gujarat earthquake response.",
    keywords: "humanitarian disaster relief hadr operation rahat uttarakhand floods evacuation rescue earthquake"
  },
  {
    page: "Humanitarian",
    url: "humanitarian.html#civil-aid",
    title: "Aid to Civil Authorities & Border Road Construction",
    snippet: "Bridging, emergency medical relief camps, drinking water distribution, and rescue in coordination with NDMA and state authorities.",
    keywords: "aid to civil authorities ndma bro border roads medical relief engineering bridges"
  },
  // Page 9: Women
  {
    page: "Women",
    url: "women.html#milestones",
    title: "Women Officers in the Indian Army",
    snippet: "From the Military Nursing Service to induction into Signals, Engineers, Army Aviation, Artillery, and Supreme Court Permanent Commission rulings.",
    keywords: "women officers permanent commission national defence academy nda babita puniya supreme court aviation artillery"
  },
  {
    page: "Women",
    url: "women.html#nda-entry",
    title: "National Defence Academy Admission for Women (2021)",
    snippet: "Historic opening of NDA entry for women cadets in 2021, creating equal tri-services pre-commissioning training pathways.",
    keywords: "nda admission women cadets 2021 training supreme court landmark gender parity"
  },
  // Page 10: References & Glossary
  {
    page: "References",
    url: "references.html#sources",
    title: "Official Government Sources & Research Citations",
    snippet: "Comprehensive directory of official Ministry of Defence, Indian Army, PIB releases, and historical archives.",
    keywords: "sources citations ministry of defence pib government bibliography references verified"
  },
  {
    page: "References",
    url: "references.html#glossary",
    title: "Military Terminology Glossary",
    snippet: "Definitions for Regiment, Battalion, Brigade, Corps, Command, JCO, Commission, Line of Control, and Military Logistics.",
    keywords: "glossary definitions terms vocabulary regiment battalion brigade corps division jco"
  }
];

document.addEventListener('DOMContentLoaded', () => {
  initSearch();
});

function initSearch() {
  const searchTriggers = document.querySelectorAll('.search-trigger');
  const backdrop = document.querySelector('.search-modal-backdrop');
  const closeBtn = document.querySelector('.search-close-btn');
  const input = document.querySelector('.search-input');
  const resultsContainer = document.querySelector('.search-results');

  if (!backdrop || !input || !resultsContainer) return;

  function openSearch() {
    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
    setTimeout(() => input.focus(), 100);
    renderResults(input.value.trim());
  }

  function closeSearch() {
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
    input.value = '';
  }

  searchTriggers.forEach(btn => btn.addEventListener('click', openSearch));
  if (closeBtn) closeBtn.addEventListener('click', closeSearch);

  // Close on outside click
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closeSearch();
  });

  // Escape key closes modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && backdrop.classList.contains('active')) {
      closeSearch();
    }
    // Keyboard shortcut '/' to search
    if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
      e.preventDefault();
      openSearch();
    }
  });

  // Input event with debounce
  input.addEventListener('input', (e) => {
    renderResults(e.target.value.trim());
  });

  function renderResults(query) {
    if (!query) {
      resultsContainer.innerHTML = `
        <div class="search-empty">
          <p style="font-weight: 500; margin-bottom: 0.25rem;">Type to search the portal</p>
          <span style="font-size: 0.8rem; color: var(--text-muted);">Try: "Kargil", "NDA", "T-90", "Siachen", "Ranks", "Women", "HADR"</span>
        </div>`;
      return;
    }

    const lowerQuery = query.toLowerCase();
    const queryTokens = lowerQuery.split(/\s+/).filter(Boolean);

    const matches = SEARCH_INDEX.filter(item => {
      const corpus = `${item.page} ${item.title} ${item.snippet} ${item.keywords}`.toLowerCase();
      return queryTokens.every(tok => corpus.includes(tok));
    });

    if (matches.length === 0) {
      resultsContainer.innerHTML = `
        <div class="search-empty">
          <p style="font-weight: 600; margin-bottom: 0.25rem;">No results found for "${query}"</p>
          <span style="font-size: 0.8rem; color: var(--text-muted);">Try searching by topic, operation name, rank, equipment, or academy.</span>
        </div>`;
      return;
    }

    resultsContainer.innerHTML = matches.map(item => `
      <a href="${item.url}" class="search-result-item" onclick="document.querySelector('.search-modal-backdrop').classList.remove('active'); document.body.style.overflow='';">
        <span class="search-result-page">${escapeHtml(item.page)}</span>
        <h4 class="search-result-title">${highlightQuery(item.title, queryTokens)}</h4>
        <p class="search-result-snippet">${highlightQuery(item.snippet, queryTokens)}</p>
      </a>
    `).join('');
  }
}

function highlightQuery(text, tokens) {
  let escaped = escapeHtml(text);
  tokens.forEach(tok => {
    if (tok.length > 1) {
      const reg = new RegExp(`(${escapeRegex(tok)})`, 'gi');
      escaped = escaped.replace(reg, '<mark style="background: var(--gold-subtle); color: var(--gold-primary); font-weight: 600; padding: 0 2px; border-radius: 2px;">$1</mark>');
    }
  });
  return escaped;
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
