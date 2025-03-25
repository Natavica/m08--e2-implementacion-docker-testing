const personas = [
    {
        nombre: "Dr. Yoda Jedi",
        especialidad: "Otorrinolaringología",
        resena: "orem ipsum, dolor sit amet consectetur adipisicing elit. Abminus repellendus sit quae error! Nam, dicta repudiandae vitae commodi dolores, velitplaceat eligendi quod, eos odit explicabo repellendus sint voluptas.",
        foto: "./assets/images/profesional--yoda.png",
        experiencia: "3 años de experiencia"
    },
    {
        nombre: "Dr. César Tapia",
        especialidad: "Dermatología",
        resena: "orem ipsum, dolor sit amet consectetur adipisicing elit. Abminus repellendus sit quae error! Nam, dicta repudiandae vitae commodi dolores, velitplaceat eligendi quod, eos odit explicabo repellendus sint voluptas.",
        foto: "./assets/images/profesional--c3po.png",
        experiencia: "3 años de experiencia"
    },
    {
        nombre: "Dr. Chew Bacca",
        especialidad: "Cardiología",
        resena: "orem ipsum, dolor sit amet consectetur adipisicing elit. Abminus repellendus sit quae error! Nam, dicta repudiandae vitae commodi dolores, velitplaceat eligendi quod, eos odit explicabo repellendus sint voluptas.",
        foto: "./assets/images/profesional--chewie.png",
        experiencia: "5 años de experiencia"
    },
    {
        nombre: "Dr. Darth Vader",
        especialidad: "Cirujía General",
        resena: "orem ipsum, dolor sit amet consectetur adipisicing elit. Abminus repellendus sit quae error! Nam, dicta repudiandae vitae commodi dolores, velitplaceat eligendi quod, eos odit explicabo repellendus sint voluptas.",
        foto: "./assets/images/profesional--vader.png",
        experiencia: "3 años de experiencia"
    }
];


function filtrarProfesionales(condicion) {
    return personas.filter(profesional => condicion(profesional));
}

function mostrarProfesionales(profesionales) {
    // Only try to access DOM if we're in a browser environment
    if (typeof document === 'undefined') {
        console.log("Not in browser environment, skipping DOM operations");
        return;
    }

    const contenedor = document.querySelector('.cards__container--equipo');
    if (!contenedor) {
      console.error("Contenedor de tarjetas no encontrado.");
      return;
    }

    contenedor.innerHTML = "";


    profesionales.forEach(profesional => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${profesional.foto}" class="card__img" alt="Foto de ${profesional.nombre}">
            <ul>
                <li class="card__text--nombre">${profesional.nombre}</li>
                <li class="card__text--especialidad">${profesional.especialidad}</li>
                <li class="card__text--resena">${profesional.resena}</li>
            </ul>
        `;

        contenedor.appendChild(card);
    });
}


// Only execute DOM-related code if we're in a browser environment
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    // Initialize the view
    mostrarProfesionales(personas);
    
    // Set up event listeners only if the elements exist
    const btnCardiologos = document.getElementById("btn-cardiologos");
    if (btnCardiologos) {
        btnCardiologos.addEventListener("click", () => {
            const cardiologos = filtrarProfesionales(profesional => profesional.especialidad === "Cardiología");
            mostrarProfesionales(cardiologos);
        });
    }
    
    const btnDermatologos = document.getElementById("btn-dermatologos");
    if (btnDermatologos) {
        btnDermatologos.addEventListener("click", () => {
            const dermatologos = filtrarProfesionales(profesional => profesional.especialidad === "Dermatología");
            mostrarProfesionales(dermatologos);
        });
    }
    
    const btnTodos = document.getElementById("btn-todos");
    if (btnTodos) {
        btnTodos.addEventListener("click", () => {
            mostrarProfesionales(personas); 
        });
    }
}

module.exports = {
filtrarProfesionales,
personas,
mostrarProfesionales
};
