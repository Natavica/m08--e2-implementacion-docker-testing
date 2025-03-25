const { filtrarProfesionales, mostrarProfesionales, personas } = require('../assets/js/filtrado');

beforeEach(() => {
    document.body.innerHTML = `
      <div class="cards__container--equipo"></div>
      <button id="btn-cardiologos">Cardiólogos</button>
    `;
    require('../assets/js/filtrado');
  });
  
test('Debe filtrar correctamente los cardiólogos', () => {
// Filtra profesionales donde especialidad es "Cardiología"
const cardiologos = filtrarProfesionales(profesional => profesional.especialidad === "Cardiología");

// Muestra los profesionales filtrados en el contenedor
mostrarProfesionales(cardiologos);

// Verifica que el contenedor tiene al menos una tarjeta
const contenedor = document.querySelector('.cards__container--equipo');
expect(contenedor.children.length).toBeGreaterThan(0);
});
  

