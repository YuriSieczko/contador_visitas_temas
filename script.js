document.addEventListener("DOMContentLoaded", function () {
    // Verificar se o contador de visitas está salvo localmente
    let visitCount = localStorage.getItem("visitCount");
    if (!visitCount) {
      visitCount = 0;
    } else {
      visitCount = parseInt(visitCount);
    }
  
    // Atualizar o contador de visitas na página
    document.getElementById("counter").textContent = `${visitCount} visitas`;
    
    // Adicionar evento de clique ao elemento de toggle
    document
      .querySelector(".toggle-theme")
      .addEventListener("click", function () {
        console.log("Tema alterado.");
        document.body.classList.toggle("dark");
        document.body.classList.toggle("light");
  
        const currentTheme = document.body.classList.contains("dark")
          ? "dark"
          : "light";
        localStorage.setItem("theme", currentTheme);
      });
  
    // Verificar se o tema está salvo localmente e aplicá-lo
    let savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      document.body.classList.add(savedTheme);
    }
  
    // Adicionar evento de clique ao botão para incrementar visitas
    visitCount++;
    localStorage.setItem("visitCount", visitCount);
    console.log(`Contador de visitas atualizado: ${visitCount}`);
  });
  