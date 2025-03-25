
import { filtrarProfesionales, mostrarProfesionales } from './filtrado.js';

document.getElementById("btn-cardiologos").addEventListener("click", () => {
    const cardiologos = filtrarProfesionales(profesional => profesional.especialidad === "Cardiología");
    mostrarProfesionales(cardiologos);
});

document.getElementById("btn-dermatologos").addEventListener("click", () => {
    const dermatologos = filtrarProfesionales(profesional => profesional.especialidad === "Dermatología");
    mostrarProfesionales(dermatologos);
});

document.getElementById("btn-todos").addEventListener("click", () => {
    mostrarProfesionales(personas);
});
