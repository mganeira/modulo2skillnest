const usuario = "cherieluwu"; // tu nombre de usuario en GitHub
const contenedor = document.getElementById("github-projects");

// Obtener los repositorios públicos
fetch(`https://api.github.com/users/${usuario}/repos`)
  .then(respuesta => respuesta.json())
  .then(repos => {
    // Mostrar solo los primeros 6 repos que no sean fork
    repos.filter(repo => !repo.fork).slice(0, 4).forEach(repo => {
      // Crear contenedor del proyecto
      const proyecto = document.createElement("div");
      proyecto.className = "project-item glass-container";

      // Crear título
      const titulo = document.createElement("h3");
      titulo.textContent = repo.name;

      // Crear descripción
      const descripcion = document.createElement("p");
      descripcion.textContent = repo.description || "Sin descripción";

      // Crear imagen (si existe preview.png en el repo)
      const imagen = document.createElement("img");
      imagen.src = `https://raw.githubusercontent.com/${usuario}/${repo.name}/main/preview.png`;
      imagen.alt = `Imagen de ${repo.name}`;
      imagen.onerror = () => imagen.style.display = "none"; // Oculta si no existe

      // Crear botón de enlace
      const boton = document.createElement("a");
      boton.href = repo.html_url;
      boton.target = "_blank";
      boton.className = "glass-button";
      boton.textContent = "Ver en GitHub";

      // Agregar todo al contenedor
      proyecto.appendChild(titulo);
      proyecto.appendChild(imagen);
      proyecto.appendChild(descripcion);
      proyecto.appendChild(boton);
      contenedor.appendChild(proyecto);
    });
  })
  .catch(error => {
    console.log("Error al cargar proyectos:", error);
    contenedor.innerHTML = "<p>No se pudieron cargar los proyectos.</p>";
  });
