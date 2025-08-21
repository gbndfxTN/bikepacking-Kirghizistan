// Configuration pour le partage social
const SOCIAL_CONFIG = {
  instagram: '@votre_compte_insta', // Remplacez par votre vrai compte
  hashtags: '#bikepacking #kirghizistan #aventure #cycling #voyage',
  siteUrl: 'https://VOTRE-VRAIE-URL-GITLAB-PAGES.gitlab.io/VOTRE-PROJET' // 🔥 REMPLACEZ PAR VOTRE VRAIE URL
};

// 30 étapes extraites directement de votre trace GPX Sedan → Bichkek
const route = [
  { 
    coords: [49.701306, 4.943055], 
    name: "Sedan, France", 
    description: "Point de départ - Sedan, France",
    distance: "0 km",
    altitude: "154m",
    difficulty: "🟢 Facile"
  },
  { 
    coords: [50.287749, 6.188884], 
    name: "Étape 2 - Allemagne/Belgique", 
    description: "Traversée vers l'Allemagne",
    distance: "131 km",
    altitude: "432m",
    difficulty: "🟡 Modéré"
  },
  { 
    coords: [50.725654, 7.188116], 
    name: "Étape 3 - Allemagne", 
    description: "Cœur de l'Allemagne",
    distance: "240 km",
    altitude: "161m",
    difficulty: "🟢 Facile"
  },
  { 
    coords: [51.043737, 8.182398], 
    name: "Étape 4 - Allemagne", 
    description: "Montagnes allemandes",
    distance: "330 km",
    altitude: "584m",
    difficulty: "🟠 Difficile"
  },
  { 
    coords: [51.387377, 9.070847], 
    name: "Étape 5 - Allemagne", 
    description: "Plaines allemandes",
    distance: "424 km",
    altitude: "233m",
    difficulty: "🟡 Modéré"
  },
  { 
    coords: [51.552946, 10.226418], 
    name: "Étape 6 - Allemagne", 
    description: "Vers l'Est allemand",
    distance: "524 km",
    altitude: "159m",
    difficulty: "🟢 Facile"
  },
  { 
    coords: [51.694759, 11.276440], 
    name: "Étape 7 - Allemagne", 
    description: "Allemagne de l'Est",
    distance: "619 km",
    altitude: "299m",
    difficulty: "🟡 Modéré"
  },
  { 
    coords: [51.848521, 12.587589], 
    name: "Étape 8 - Allemagne", 
    description: "Frontière Est",
    distance: "728 km",
    altitude: "66m",
    difficulty: "🟢 Facile"
  },
  { 
    coords: [52.324797, 14.327656], 
    name: "Étape 9 - Pologne", 
    description: "Entrée en Pologne",
    distance: "881 km",
    altitude: "54m",
    difficulty: "🟢 Facile"
  },
  { 
    coords: [52.770544, 16.092676], 
    name: "Étape 10 - Pologne", 
    description: "Traversée polonaise",
    distance: "1014 km",
    altitude: "63m",
    difficulty: "🟢 Facile"
  },
  { 
    coords: [53.020791, 18.234042], 
    name: "Étape 11 - Pologne", 
    description: "Nord de la Pologne",
    distance: "1215 km",
    altitude: "77m",
    difficulty: "🟢 Facile"
  },
  { 
    coords: [52.850164, 19.992737], 
    name: "Étape 12 - Pologne", 
    description: "Plaines polonaises",
    distance: "1341 km",
    altitude: "112m",
    difficulty: "🟢 Facile"
  },
  { 
    coords: [52.680909, 22.498421], 
    name: "Étape 13 - Lituanie/Biélorussie", 
    description: "Pays baltes",
    distance: "1513 km",
    altitude: "114m",
    difficulty: "🟢 Facile"
  },
  { 
    coords: [52.547421, 25.074714], 
    name: "Étape 14 - Biélorussie", 
    description: "Traversée biélorusse",
    distance: "1754 km",
    altitude: "154m",
    difficulty: "🟢 Facile"
  },
  { 
    coords: [52.404506, 27.748784], 
    name: "Étape 15 - Biélorussie", 
    description: "Est de la Biélorussie",
    distance: "1961 km",
    altitude: "134m",
    difficulty: "🟢 Facile"
  },
  { 
    coords: [52.436705, 30.854023], 
    name: "Étape 16 - Ukraine/Russie", 
    description: "Frontière ukrainienne",
    distance: "2239 km",
    altitude: "136m",
    difficulty: "🟢 Facile"
  },
  { 
    coords: [52.475827, 33.208967], 
    name: "Étape 17 - Russie", 
    description: "Plaines russes",
    distance: "2430 km",
    altitude: "138m",
    difficulty: "🟢 Facile"
  },
  { 
    coords: [52.245072, 35.553965], 
    name: "Étape 18 - Russie", 
    description: "Sud de la Russie",
    distance: "2646 km",
    altitude: "205m",
    difficulty: "🟡 Modéré"
  },
  { 
    coords: [51.880181, 37.186169], 
    name: "Étape 19 - Russie", 
    description: "Vers le Caucase",
    distance: "2825 km",
    altitude: "224m",
    difficulty: "🟡 Modéré"
  },
  { 
    coords: [51.683920, 38.853917], 
    name: "Étape 20 - Russie/Géorgie", 
    description: "Approche du Caucase",
    distance: "2964 km",
    altitude: "133m",
    difficulty: "🟢 Facile"
  },
  { 
    coords: [51.000624, 40.857121], 
    name: "Étape 21 - Géorgie", 
    description: "Montagnes géorgiennes",
    distance: "3114 km",
    altitude: "208m",
    difficulty: "🟡 Modéré"
  },
  { 
    coords: [50.151650, 42.673443], 
    name: "Étape 22 - Géorgie/Arménie", 
    description: "Caucase central",
    distance: "3355 km",
    altitude: "80m",
    difficulty: "🟢 Facile"
  },
  { 
    coords: [49.486564, 43.633844], 
    name: "Étape 23 - Arménie", 
    description: "Hauts plateaux arméniens",
    distance: "3578 km",
    altitude: "45m",
    difficulty: "🟢 Facile"
  },
  { 
    coords: [48.943534, 45.608378], 
    name: "Étape 24 - Mer Caspienne", 
    description: "Côte caspienne",
    distance: "3700 km",
    altitude: "22m",
    difficulty: "🟢 Facile"
  },
  { 
    coords: [48.339838, 52.946613], 
    name: "Étape 25 - Kazakhstan", 
    description: "Steppes kazakhes",
    distance: "3924 km",
    altitude: "-5m",
    difficulty: "🟢 Facile"
  },
  { 
    coords: [46.419857, 56.536255], 
    name: "Étape 26 - Kazakhstan", 
    description: "Déserts du Kazakhstan",
    distance: "4619 km",
    altitude: "173m",
    difficulty: "🟢 Facile"
  },
  { 
    coords: [47.071811, 64.110072], 
    name: "Étape 27 - Ouzbékistan", 
    description: "Route de la Soie",
    distance: "5027 km",
    altitude: "124m",
    difficulty: "🟢 Facile"
  },
  { 
    coords: [44.639156, 67.638870], 
    name: "Étape 28 - Ouzbékistan", 
    description: "Oasis ouzbèkes",
    distance: "5690 km",
    altitude: "185m",
    difficulty: "🟢 Facile"
  },
  { 
    coords: [42.994272, 71.998409], 
    name: "Étape 29 - Kirghizistan", 
    description: "Montagnes kirghizes",
    distance: "6347 km",
    altitude: "607m",
    difficulty: "🟠 Difficile"
  },
  { 
    coords: [42.875755, 74.605902], 
    name: "Bichkek, Kirghizistan", 
    description: "🎯 Destination finale - Bichkek !",
    distance: "7003 km",
    altitude: "759m",
    difficulty: "🟠 Difficile"
  }
];

// Variable pour stocker la trace GPX
let gpxTrack = null;

// Init carte avec une vue plus adaptée
const map = L.map('map').setView([49.701306, 4.943055], 6);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Fonction pour charger et afficher le fichier GPX
async function loadGPXTrack() {
  try {
    const response = await fetch('gps.gpx');
    const gpxData = await response.text();
    
    // Parser le GPX
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(gpxData, "text/xml");
    const trackPoints = xmlDoc.getElementsByTagName('trkpt');
    
    // Extraire les coordonnées
    gpxCoords = [];
    for (let i = 0; i < trackPoints.length; i += 50) { // Prendre 1 point sur 50 pour optimiser
      const lat = parseFloat(trackPoints[i].getAttribute('lat'));
      const lon = parseFloat(trackPoints[i].getAttribute('lon'));
      gpxCoords.push([lat, lon]);
    }
    
    // Créer la trace GPX sur la carte
    gpxTrack = L.polyline(gpxCoords, {
      color: '#e74c3c',
      weight: 3,
      opacity: 0.8
    }).addTo(map);
    
    // Créer le marqueur personnalisé maintenant que nous avons les coordonnées GPX
    createCustomMarker();
    
    // Ajuster la vue pour montrer toute la trace
    map.fitBounds(gpxTrack.getBounds(), { padding: [20, 20] });
    
    console.log(`Trace GPX chargée: ${gpxCoords.length} points`);
  } catch (error) {
    console.log('Fichier GPX non trouvé, utilisation de la route par défaut');
    // Fallback: créer une polyligne simple avec les points d'étapes
    const routeCoords = route.map(point => point.coords);
    gpxCoords = routeCoords; // Utiliser les étapes comme fallback
    const routeLine = L.polyline(routeCoords, {
      color: '#667eea',
      weight: 3,
      opacity: 0.7,
      dashArray: '10, 10'
    }).addTo(map);
    
    // Créer le marqueur même en cas d'erreur
    createCustomMarker();
    
    map.fitBounds(routeLine.getBounds(), { padding: [20, 20] });
  }
}

// Variables pour stocker les coordonnées GPX et le marqueur
let gpxCoords = [];
let currentMarker = null;

// Créer un marqueur personnalisé
function createCustomMarker() {
  const markerIcon = L.divIcon({
    html: `<div style="
      width: 20px; 
      height: 20px; 
      background-color: #e74c3c; 
      border: 3px solid white; 
      border-radius: 50%; 
      box-shadow: 0 2px 6px rgba(0,0,0,0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      color: white;
      font-weight: bold;
    ">📍</div>`,
    iconSize: [26, 26],
    iconAnchor: [13, 13],
    className: 'custom-cyclist-marker'
  });
  
  const startCoords = gpxCoords.length > 0 ? gpxCoords[0] : route[0].coords;
  currentMarker = L.marker(startCoords, { icon: markerIcon }).addTo(map);
}

// Charger la trace GPX au démarrage
loadGPXTrack();

// Fonction pour mettre à jour la progression
function updateProgress() {
  const checkboxes = document.querySelectorAll('input[type=checkbox]');
  const checkedCount = document.querySelectorAll('input[type=checkbox]:checked').length;
  const totalItems = checkboxes.length;
  const progressPercentage = Math.round((checkedCount / totalItems) * 100);
  
  // Mettre à jour la barre de progression
  document.getElementById('progressFill').style.width = progressPercentage + '%';
  document.getElementById('progressText').textContent = progressPercentage + '% complété';
  
  // Calculer la position sur l'itinéraire GPX
  if (gpxCoords.length > 0) {
    // Calculer l'index dans la trace GPX basé sur la progression
    const gpxProgress = Math.min(Math.floor((checkedCount / totalItems) * (gpxCoords.length - 1)), gpxCoords.length - 1);
    
    if (checkedCount > 0 && currentMarker) {
      // Déplacer le marqueur sur la vraie trace GPX
      currentMarker.setLatLng(gpxCoords[gpxProgress]);
      
      // Centrer la carte sur la position actuelle avec un zoom plus important
      map.setView(gpxCoords[gpxProgress], 10); // Zoom 10 au lieu de 6
    }
  } else {
    // Fallback: utiliser les étapes prédéfinies
    const routeProgress = Math.min(Math.floor((checkedCount / totalItems) * (route.length - 1)), route.length - 1);
    
    if (checkedCount > 0 && currentMarker) {
      currentMarker.setLatLng(route[routeProgress].coords);
      map.setView(route[routeProgress].coords, 10);
    }
  }
  
  // Mettre à jour les informations de localisation avec l'étape la plus proche
  const routeProgress = Math.min(Math.floor((checkedCount / totalItems) * (route.length - 1)), route.length - 1);
  const currentLocation = route[routeProgress];
  document.getElementById('locationInfo').innerHTML = `
    <div class="location-name">📍 ${currentLocation.name}</div>
    <div class="distance">${currentLocation.description}</div>
    <div style="margin-top: 8px; font-size: 0.9em;">
      <span style="margin-right: 15px;">📏 ${currentLocation.distance}</span>
      <span>⛰️ ${currentLocation.altitude}</span>
    </div>
    <div style="margin-top: 5px; font-size: 0.9em;">${currentLocation.difficulty}</div>
  `;
  
  // Ajouter la classe 'checked' aux éléments cochés
  checkboxes.forEach((checkbox, index) => {
    const li = checkbox.parentElement;
    if (checkbox.checked) {
      li.classList.add('checked');
    } else {
      li.classList.remove('checked');
    }
  });

  // Sauvegarder la progression dans localStorage
  saveProgress();
}

// Sauvegarder la progression
function saveProgress() {
  const checkboxes = document.querySelectorAll('input[type=checkbox]');
  const progress = [];
  checkboxes.forEach((checkbox, index) => {
    progress.push(checkbox.checked);
  });
  localStorage.setItem('bikepackingProgress', JSON.stringify(progress));
  localStorage.setItem('lastUpdate', new Date().toISOString());
}

// Charger la progression sauvegardée
function loadProgress() {
  const savedProgress = localStorage.getItem('bikepackingProgress');
  if (savedProgress) {
    const progress = JSON.parse(savedProgress);
    const checkboxes = document.querySelectorAll('input[type=checkbox]');
    checkboxes.forEach((checkbox, index) => {
      if (progress[index]) {
        checkbox.checked = true;
      }
    });
    updateProgress();
  }
}

// Fonction de partage pour Instagram
function shareProgress() {
  const checkboxes = document.querySelectorAll('input[type=checkbox]');
  const checkedCount = document.querySelectorAll('input[type=checkbox]:checked').length;
  const totalItems = checkboxes.length;
  const progressPercentage = Math.round((checkedCount / totalItems) * 100);
  
  const shareText = `🚴‍♂️ Mon ami prépare un bikepacking épique vers le Kirghizistan !\n\nProgression actuelle : ${progressPercentage}% complétée 📊\n\n${SOCIAL_CONFIG.hashtags}\n\nSuivez cette aventure incroyable : ${SOCIAL_CONFIG.siteUrl}\n\n#SupportLocal #AventureAmis`;
  
  // Essayer de partager via l'API Web Share si disponible
  if (navigator.share) {
    navigator.share({
      title: 'Bikepacking vers le Kirghizistan - Aventure épique !',
      text: shareText,
      url: SOCIAL_CONFIG.siteUrl
    });
  } else {
    // Copier dans le presse-papier comme alternative
    navigator.clipboard.writeText(shareText).then(() => {
      alert('📋 Texte copié ! Partagez cette aventure avec vos amis ! 🙏');
    });
  }
}

// Écouter les changements de cases à cocher
document.querySelectorAll('input[type=checkbox]').forEach(cb => {
  cb.addEventListener('change', updateProgress);
});

// Charger la progression au démarrage
document.addEventListener('DOMContentLoaded', () => {
  loadProgress();
});

// Animation d'introduction
setTimeout(() => {
  map.setView(route[0].coords, 8);
}, 2000);

// Ajouter un event listener pour le bouton de partage
document.addEventListener('DOMContentLoaded', () => {
  const shareButton = document.getElementById('shareButton');
  if (shareButton) {
    shareButton.addEventListener('click', shareProgress);
  }
});
