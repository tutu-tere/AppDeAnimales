import { Aguila, Leon, Lobo, Oso, Serpiente } from './Animal.mjs';

document.getElementById('btnRegistrar').addEventListener('click', () => {
  const nombre = document.getElementById('animal').value;
  const edad = document.getElementById('edad').value;
  const comentarios = document.getElementById('comentarios').value;

  if (!nombre || !edad || !comentarios) {
    alert('Por favor, complete todos los campos.');
    return;
  }

  let animal;
  switch (nombre) {
    case 'Leon':
      animal = new Leon(nombre, edad, `assets/imgs/${nombre}.png`, comentarios, `assets/sounds/Rugido.mp3`);
      break;
    case 'Lobo':
      animal = new Lobo(nombre, edad, `assets/imgs/${nombre}.jpg`, comentarios, `assets/sounds/Aullido.mp3`);
      break;
    case 'Oso':
      animal = new Oso(nombre, edad, `assets/imgs/${nombre}.jpg`, comentarios, `assets/sounds/Gruñido.mp3`);
      break;
    case 'Serpiente':
      animal = new Serpiente(nombre, edad, `assets/imgs/${nombre}.jpg`, comentarios, `assets/sounds/Siseo.mp3`);
      break;
      case 'Aguila':
      animal = new Aguila(nombre, edad, `assets/imgs/${nombre}.png`, comentarios, `assets/sounds/Chillido.mp3`);
      break;
    default:
      alert('Animal no reconocido.');
      return;
  }

  agregarAnimalATabla(animal);
  resetFormulario();
});

async function obtenerAnimales() {
  try {
    const response = await fetch('assets/data/animales.json');
    const data = await response.json();
    return data.animales;
  } catch (error) {
    console.error('Error al cargar el archivo JSON:', error);
  }
}

(async () => {
  const animales = await obtenerAnimales();
  console.log(animales);
})();

function agregarAnimalATabla(animal) {
  const animalesContainer = document.getElementById('Animales');
  const animalCard = document.createElement('div');
  animalCard.className = 'card m-2 p-2 bg-light text-dark';
  animalCard.style.width = '18rem';

  const animalImage = document.createElement('img');
  animalImage.src = animal.getImg();
  animalImage.className = 'card-img-top';
  animalImage.alt = animal.getNombre();
  animalImage.addEventListener('click', () => mostrarModal(animal));

  const animalBody = document.createElement('div');
  animalBody.className = 'card-body';

  const animalTitle = document.createElement('h5');
  animalTitle.className = 'card-title';
  animalTitle.textContent = animal.getNombre();

  const animalSound = document.createElement('audio');
  animalSound.src = animal.getSonido();
  animalSound.controls = true;

  animalBody.appendChild(animalTitle);
  animalBody.appendChild(animalSound);
  animalCard.appendChild(animalImage);
  animalCard.appendChild(animalBody);
  animalesContainer.appendChild(animalCard);
}

function resetFormulario() {
  document.getElementById('animal').value = '';
  document.getElementById('edad').value = '';
  document.getElementById('comentarios').value = '';
}

function mostrarModal(animal) {
  const modal = document.getElementById('exampleModal');
  const modalBody = modal.querySelector('.modal-body');
  modalBody.innerHTML = `
    <h5>${animal.getNombre()}</h5>
    <p>Edad: ${animal.getEdad()}</p>
    <p>Comentarios: ${animal.comentarios}</p>
    <img src="${animal.getImg()}" class="img-fluid" alt="${animal.getNombre()}">
  `;
  $(modal).modal('show');
}
