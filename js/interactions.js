/**
 * Indian Army — A Nation's Shield
 * Interactive Components Module
 * Accordions, Category Filtering, Timeline Tabs, and Glossary Search
 */

document.addEventListener('DOMContentLoaded', () => {
  initAccordions();
  initCategoryFilters();
  initTimelineSwitcher();
  initGlossarySearch();
});

/* Accordion Component */
function initAccordions() {
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(item => {
    const trigger = item.querySelector('.accordion-trigger');
    if (!trigger) return;

    trigger.addEventListener('click', () => {
      const isCurrentlyActive = item.classList.contains('active');

      // If user wants only one open at a time in the same group:
      const parentGroup = item.closest('.accordion-group-exclusive');
      if (parentGroup) {
        parentGroup.querySelectorAll('.accordion-item').forEach(sibling => {
          sibling.classList.remove('active');
          const btn = sibling.querySelector('.accordion-trigger');
          if (btn) btn.setAttribute('aria-expanded', 'false');
        });
      }

      if (!isCurrentlyActive) {
        item.classList.add('active');
        trigger.setAttribute('aria-expanded', 'true');
      } else {
        item.classList.remove('active');
        trigger.setAttribute('aria-expanded', 'false');
      }
    });
  });
}

/* Category Filters (e.g., Equipment cards, Training institutions) */
function initCategoryFilters() {
  const filterBars = document.querySelectorAll('.filter-bar[data-filter-group]');

  filterBars.forEach(bar => {
    const targetGroup = bar.getAttribute('data-filter-group');
    const filterButtons = bar.querySelectorAll('.filter-btn');
    const targetCards = document.querySelectorAll(`[data-category-group="${targetGroup}"] .filterable-item`);

    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        targetCards.forEach(card => {
          const cardCategories = (card.getAttribute('data-category') || '').split(' ');
          if (filterValue === 'all' || cardCategories.includes(filterValue)) {
            card.style.display = '';
            card.style.opacity = '1';
          } else {
            card.style.display = 'none';
            card.style.opacity = '0';
          }
        });
      });
    });
  });
}

/* Interactive Timeline Tabs (e.g. History & Operations eras) */
function initTimelineSwitcher() {
  const timelineNavs = document.querySelectorAll('.timeline-nav');

  timelineNavs.forEach(nav => {
    const buttons = nav.querySelectorAll('.timeline-tab-btn');
    const targetStream = document.querySelector(nav.getAttribute('data-target-stream') || '.timeline-stream');
    if (!targetStream) return;

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const era = btn.getAttribute('data-era');
        const items = targetStream.querySelectorAll('.timeline-item');

        items.forEach(item => {
          const itemEra = item.getAttribute('data-era');
          if (era === 'all' || itemEra === era) {
            item.style.display = '';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  });
}

/* Glossary Real-Time Search & Alphabet Quick-Jump */
function initGlossarySearch() {
  const glossaryInput = document.querySelector('#glossary-search');
  const glossaryItems = document.querySelectorAll('.glossary-item');
  const glossaryEmpty = document.querySelector('#glossary-empty-msg');

  if (!glossaryInput || !glossaryItems.length) return;

  glossaryInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    let visibleCount = 0;

    glossaryItems.forEach(item => {
      const term = item.querySelector('.glossary-term')?.textContent.toLowerCase() || '';
      const def = item.querySelector('.glossary-def')?.textContent.toLowerCase() || '';

      if (term.includes(query) || def.includes(query)) {
        item.style.display = '';
        visibleCount++;
      } else {
        item.style.display = 'none';
      }
    });

    if (glossaryEmpty) {
      glossaryEmpty.style.display = visibleCount === 0 ? 'block' : 'none';
    }
  });
}
