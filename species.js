const speciesData = {
  eagle: {
    img: 'https://picsum.photos/seed/ph-eagle/600/300',
    name: 'Philippine Eagle',
    sci: 'Pithecophaga jefferyi',
    body: 'The national bird of the Philippines and one of the world\'s rarest, largest, and most powerful birds of prey. Found only in the rainforests of Mindanao, Leyte, Samar, and Luzon, this magnificent raptor reigns at the top of the forest food chain. Its wingspan can reach up to 2 meters, and it preys on monkeys, flying lemurs, and large bats. Fewer than 800 individuals remain in the wild.',
    badges: ['Luzon', 'Mindanao', 'Forest Predator', 'National Symbol']
  },
  tarsier: {
    img: 'https://picsum.photos/seed/ph-tarsier/600/300',
    name: 'Philippine Tarsier',
    sci: 'Carlito syrichta',
    body: 'Among the smallest primates on Earth, the Philippine Tarsier has eyes larger than its brain — each eye is fixed in its skull and cannot move, so the tarsier rotates its head nearly 180°. Found in the rainforests of Bohol, Samar, Leyte, and Mindanao, it is a nocturnal insectivore and one of the oldest primate lineages still surviving.',
    badges: ['Bohol', 'Nocturnal', 'Ancient Lineage', 'Endemic']
  },
  tamaraw: {
    img: 'https://picsum.photos/seed/ph-tamaraw/600/300',
    name: 'Tamaraw',
    sci: 'Bubalus mindorensis',
    body: 'The Tamaraw is a small, solitary buffalo found only on the island of Mindoro. Smaller and darker than the domestic carabao, it once roamed Mindoro\'s forests in large numbers. Today fewer than 600 remain due to hunting and habitat loss. It is a national symbol and one of the most endangered large mammals in Asia.',
    badges: ['Mindoro', 'Endemic', 'Critically Endangered', 'Buffalo Family']
  },
  irrawaddy: {
    img: 'https://picsum.photos/seed/ph-dolphin/600/300',
    name: 'Irrawaddy Dolphin',
    sci: 'Orcaella brevirostris',
    body: 'A small, blunt-snouted dolphin found in coastal and freshwater habitats. In the Philippines, a genetically distinct population inhabits the Malampaya Sound in Palawan — fewer than 77 individuals remain. The Irrawaddy Dolphin is known for spitting water while feeding and for its expressive, rounded face.',
    badges: ['Palawan', 'Freshwater', 'Endangered', 'Marine Mammal']
  },
  cockatoo: {
    img: 'https://picsum.photos/seed/ph-cockatoo/600/300',
    name: 'Philippine Cockatoo',
    sci: 'Cacatua haematuropygia',
    body: 'Also called the "Katala," this beautiful white parrot was once widespread across the Philippines but is now critically endangered due to illegal trapping for the pet trade and deforestation. Palawan remains its last stronghold. Conservation programs on Palawan have helped stabilize local populations through community-based protection.',
    badges: ['Palawan', 'Endemic', 'Pet Trade Threat', 'Conservation Success']
  }
};

function showSpecies(key) {
  const d = speciesData[key];
  const feature = document.getElementById('speciesFeature');
  feature.style.opacity = '0';
  feature.style.transform = 'translateY(8px)';

  document.querySelectorAll('.species-item').forEach(el => el.classList.remove('active'));
  const activeItem = document.querySelector(`[data-species="${key}"]`);
  if (activeItem) activeItem.classList.add('active');

  setTimeout(() => {
    document.getElementById('featureImg').src = d.img;
    document.getElementById('featureName').textContent = d.name;
    document.getElementById('featureSci').textContent = d.sci;
    document.getElementById('featureBody').textContent = d.body;
    const badgeContainer = document.querySelector('.feature-badges');
    badgeContainer.innerHTML = d.badges.map(b => `<span class="badge">${b}</span>`).join('');
    feature.style.transition = 'opacity 0.35s, transform 0.35s';
    feature.style.opacity = '1';
    feature.style.transform = 'translateY(0)';
  }, 180);
}
