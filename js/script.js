document.addEventListener('DOMContentLoaded', () => {
  const intro = document.getElementById('intro');
  const enterBtn = document.getElementById('enter-button');

  if (sessionStorage.getItem('introPlayed')) {
    intro.style.display = 'none';
    document.body.style.overflowY = 'auto';
  } else {
    enterBtn.addEventListener('click', () => {
      intro.classList.add('fade-out');
      setTimeout(() => {
        intro.style.display = 'none';
        document.body.style.overflowY = 'auto';
        sessionStorage.setItem('introPlayed', 'true');
      }, 500);
    });
  }

  const modal = document.getElementById('build-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalDescription = document.getElementById('modal-description');
  const modalDetails = document.getElementById('modal-details');
  const closeModalBtn = document.querySelector('.close-modal');

  document.querySelectorAll('.build-card').forEach(card => {
    card.addEventListener('click', () => {
      const title = card.querySelector('h3').textContent.trim();
      const data = builds[title];

      if (!data) return; 

      modalTitle.textContent = title;
      modalDescription.textContent = data.desc;
      modalDetails.innerHTML = `
        <li><strong>Class:</strong> ${data.class}</li>
        <li><strong>Weapon:</strong> ${data.weapon}</li>
        <li><strong>Armor:</strong> ${data.armor}</li>
        <li><strong>Talismans:</strong> ${data.talismans}</li>
      `;

      modal.classList.remove('hidden');
      modal.classList.add('visible');
    });
  });

  closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('visible');
    modal.classList.add('hidden');
  });

  window.addEventListener('keydown', e => {
    if (e.key === "Escape") {
      modal.classList.remove('visible');
      modal.classList.add('hidden');
    }
  });

const builds = {
  "Lord of Blood": {
    desc: "Mohg demands blood — this Arcane monster melts bosses with Bloodboon Ritual.",
    class: "Bandit",
    weapon: "Mohgwyn's Sacred Spear, Eleonora's Poleblade / Rivers of Blood",
    armor: "White Mask, anything that won't fat roll",
    talismans: "Shard of Alexander, Lord of Blood’s Exultation, Millicent’s Prosthesis, Rotten/Winged Sword Insignia"
  },
  "Dual Rivers of Blood": {
    desc: "Feared in PvP — dual Corpse Piler spam with maximum bleed stacking.",
    class: "Bandit or Vagabond",
    weapon: "Rivers of Blood x2",
    armor: "White Mask, Raptor's Black Feathers + Medium Load",
    talismans: "Lord of Blood's Exaltation, Rotten Winged Sword Insignia, Carian Filigree Crest, Erdtree's Favor +2"
  },
  "Backhand Blades": {
    desc: "Stylish Shadow of the Erdtree build with fast dual hits and Seppuku bleeds.",
    class: "Vagabond",
    weapon: "Backhand Blade, Uchigatana (Seppuku), Finger Seal",
    armor: "White Mask, Gravebird Blackquill Armor",
    talismans: "Rotten Winged Sword Insignia, Two-Headed Turtle Talisman, Claw Talisman, Lord of Blood’s Exultation"
  }
};

  const backToTopBtn = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

});
