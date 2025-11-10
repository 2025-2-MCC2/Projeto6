// --- Código do Menu (mantido igual) ---
const hamburger = document.getElementById("hamburger");
const dropdown = document.getElementById("dropdown");
const overlay = document.getElementById("overlay");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  dropdown.classList.toggle("show");
  overlay.classList.toggle("show");
});

overlay.addEventListener("click", () => {
  hamburger.classList.remove("active");
  dropdown.classList.remove("show");
  overlay.classList.remove("show");
});

// --- Código do Dropdown do Perfil ---
const profile = document.getElementById("profile");
const profileDropdown = document.getElementById("profileDropdown");

if (profile) {
  profile.addEventListener("click", () => {
    profileDropdown.classList.toggle("show");
  });

  document.addEventListener("click", (e) => {
    if (!profile.contains(e.target)) {
      profileDropdown.classList.remove("show");
    }
  });
}

// --- Código do Filtro de Edições ---
const editionFilter = document.getElementById("editionFilter");
if (editionFilter) {
  const data = {
    edicao1: {
      stats: { participantes: 1000, doacoes: 4998, atendidos: 74, valor: 4998 },
      alimentos: [
        { nome: "Arroz", quantidade: 30396 },
        { nome: "Feijão", quantidade: 14835 },
        { nome: "Açucar", quantidade: 13260 },
        { nome: "Macarrão", quantidade: 10376 },
        { nome: "Fubá", quantidade: 10131 },
      ],
      times: [
        { nome: "Arroz", quantidade: 30.396 },
        { nome: "Feijão", quantidade: 14.835 },
        { nome: "Açucar", quantidade: 13.26 },
        { nome: "Macarrão", quantidade: 10.376 },
        { nome: "Fubá", quantidade: 10.131 },
        { nome: "Óleo", quantidade: 6.756 },
        { nome: "Leite em Pó", quantidade: 1.371 },
        { nome: "Itens não listados", quantidade: 638 },
      ],
    },
    edicao2: {
      stats: { participantes: 1000, doacoes: 2208, atendidos: 33, valor: 2208 },
      alimentos: [
        { nome: "Arroz", quantidade: 30396 },
        { nome: "Feijão", quantidade: 14835 },
        { nome: "Açucar", quantidade: 13260 },
        { nome: "Macarrão", quantidade: 10376 },
        { nome: "Fubá", quantidade: 10131 },
      ],
      times: [
        { nome: "Arroz", quantidade: 30.396 },
        { nome: "Feijão", quantidade: 14.835 },
        { nome: "Açucar", quantidade: 13.26 },
        { nome: "Macarrão", quantidade: 10.376 },
        { nome: "Fubá", quantidade: 10.131 },
        { nome: "Óleo", quantidade: 6.756 },
        { nome: "Leite em Pó", quantidade: 1.371 },
        { nome: "Itens não listados", quantidade: 638 },
      ],
    },
    edicao3: {
      stats: {
        participantes: 1000,
        doacoes: 19270,
        atendidos: 285,
        valor: 19270,
      },
      alimentos: [
        { nome: "Arroz", quantidade: 30396 },
        { nome: "Feijão", quantidade: 14835 },
        { nome: "Açucar", quantidade: 13260 },
        { nome: "Macarrão", quantidade: 10376 },
        { nome: "Fubá", quantidade: 10131 },
      ],
      times: [
        { nome: "Arroz", quantidade: 30.396 },
        { nome: "Feijão", quantidade: 14.835 },
        { nome: "Açucar", quantidade: 13.26 },
        { nome: "Macarrão", quantidade: 10.376 },
        { nome: "Fubá", quantidade: 10.131 },
        { nome: "Óleo", quantidade: 6.756 },
        { nome: "Leite em Pó", quantidade: 1.371 },
        { nome: "Itens não listados", quantidade: 638 },
      ],
    },
    edicao4: {
      stats: { participantes: 140, doacoes: 7112, atendidos: 105, valor: 7112 },
      alimentos: [
        { nome: "Arroz", quantidade: 30396 },
        { nome: "Feijão", quantidade: 14835 },
        { nome: "Açucar", quantidade: 13260 },
        { nome: "Macarrão", quantidade: 10376 },
        { nome: "Fubá", quantidade: 10131 },
      ],
      times: [
        { nome: "Arroz", quantidade: 30.396 },
        { nome: "Feijão", quantidade: 14.835 },
        { nome: "Açucar", quantidade: 13.26 },
        { nome: "Macarrão", quantidade: 10.376 },
        { nome: "Fubá", quantidade: 10.131 },
        { nome: "Óleo", quantidade: 6.756 },
        { nome: "Leite em Pó", quantidade: 1.371 },
        { nome: "Itens não listados", quantidade: 638 },
      ],
    },
    edicao5: {
      stats: {
        participantes: 292,
        doacoes: 16247,
        atendidos: 241,
        valor: 16247,
      },
      alimentos: [
        { nome: "Arroz", quantidade: 30396 },
        { nome: "Feijão", quantidade: 14835 },
        { nome: "Açucar", quantidade: 13260 },
        { nome: "Macarrão", quantidade: 10376 },
        { nome: "Fubá", quantidade: 10131 },
      ],
      times: [
        { nome: "Arroz", quantidade: 30.396 },
        { nome: "Feijão", quantidade: 14.835 },
        { nome: "Açucar", quantidade: 13.26 },
        { nome: "Macarrão", quantidade: 10.376 },
        { nome: "Fubá", quantidade: 10.131 },
        { nome: "Óleo", quantidade: 6.756 },
        { nome: "Leite em Pó", quantidade: 1.371 },
        { nome: "Itens não listados", quantidade: 638 },
      ],
    },
    edicao6: {
      stats: { participantes: 117, doacoes: 9736, atendidos: 144, valor: 9736 },
      alimentos: [
        { nome: "Arroz", quantidade: 30396 },
        { nome: "Feijão", quantidade: 14835 },
        { nome: "Açucar", quantidade: 13260 },
        { nome: "Macarrão", quantidade: 10376 },
        { nome: "Fubá", quantidade: 10131 },
      ],
      times: [
        { nome: "Arroz", quantidade: 30.396 },
        { nome: "Feijão", quantidade: 14.835 },
        { nome: "Açucar", quantidade: 13.26 },
        { nome: "Macarrão", quantidade: 10.376 },
        { nome: "Fubá", quantidade: 10.131 },
        { nome: "Óleo", quantidade: 6.756 },
        { nome: "Leite em Pó", quantidade: 1.371 },
        { nome: "Itens não listados", quantidade: 638 },
      ],
    },
    edicao7: {
      stats: {
        participantes: 377,
        doacoes: 28190,
        atendidos: 418,
        valor: 28190,
      },
      alimentos: [
        { nome: "Arroz", quantidade: 30396 },
        { nome: "Feijão", quantidade: 14835 },
        { nome: "Açucar", quantidade: 13260 },
        { nome: "Macarrão", quantidade: 10376 },
        { nome: "Fubá", quantidade: 10131 },
      ],
      times: [
        { nome: "Arroz", quantidade: 30.396 },
        { nome: "Feijão", quantidade: 14.835 },
        { nome: "Açucar", quantidade: 13.26 },
        { nome: "Macarrão", quantidade: 10.376 },
        { nome: "Fubá", quantidade: 10.131 },
        { nome: "Óleo", quantidade: 6.756 },
        { nome: "Leite em Pó", quantidade: 1.371 },
        { nome: "Itens não listados", quantidade: 638 },
      ],
    },
  };

  function updateDashboard(edition) {
    let stats, alimentos, times;

    if (edition === "total") {
      stats = { participantes: 0, doacoes: 0, atendidos: 0, valor: 0 };
      alimentos = {};
      times = {};

      for (const key in data) {
        const ed = data[key];
        stats.participantes += ed.stats.participantes;
        stats.doacoes += ed.stats.doacoes;
        stats.atendidos += ed.stats.atendidos;
        stats.valor += ed.stats.valor;

        ed.alimentos.forEach((item) => {
          alimentos[item.nome] = (alimentos[item.nome] || 0) + item.quantidade;
        });

        ed.times.forEach((item) => {
          times[item.nome] = (times[item.nome] || 0) + item.quantidade;
        });
      }

      alimentos = Object.entries(alimentos).map(([nome, quantidade]) => ({
        nome,
        quantidade,
      }));
      times = Object.entries(times).map(([nome, quantidade]) => ({
        nome,
        quantidade,
      }));
    } else {
      stats = data[edition].stats;
      alimentos = data[edition].alimentos;
      times = data[edition].times;
    }

    // Atualizar stats
    const statCards = document.querySelectorAll(".stat-card p");
    if (statCards.length === 4) {
      statCards[0].textContent = stats.participantes;
      statCards[1].textContent = stats.doacoes;
      statCards[2].textContent = stats.atendidos;
      statCards[3].textContent = stats.valor;
    }

    // Atualizar tabela de alimentos
    const alimentosTbody = document
      .querySelectorAll(".ranking-table")[0]
      ?.querySelector("tbody");
    if (alimentosTbody) {
      alimentosTbody.innerHTML = "";
      alimentos.forEach((item, index) => {
        alimentosTbody.innerHTML += `<tr><td>${index + 1}</td><td>${
          item.nome
        }</td><td>${item.quantidade}</td></tr>`;
      });
    }

    // Atualizar tabela de times
    const timesTbody = document
      .querySelectorAll(".ranking-table")[1]
      ?.querySelector("tbody");
    if (timesTbody) {
      timesTbody.innerHTML = "";
      times.forEach((item, index) => {
        timesTbody.innerHTML += `<tr><td>${index + 1}</td><td>${
          item.nome
        }</td><td>${item.quantidade}</td></tr>`;
      });
    }
  }

  editionFilter.addEventListener("change", (e) => {
    updateDashboard(e.target.value);
  });

  // Inicializa com a edição 7
  updateDashboard("edicao7");
}

// --- Buscar dados do usuário logado para atualizar a foto do perfil ---
(async () => {
  try {
    const token = localStorage.getItem("token"); // token do login
    if (!token) return;

    // Requisição para pegar os dados do usuário logado
    const res = await fetch("http://localhost:8081/perfil/me", {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!res.ok) throw new Error("Não foi possível buscar dados do usuário");

    const user = await res.json();

    // Atualiza imagem do perfil
    const profileImg = document.querySelector(".profile img");
    if (user.foto && profileImg) {
      // Aqui o backend deve servir a imagem corretamente
      profileImg.src = `http://localhost:8081/${user.foto}`;
    }
  } catch (err) {
    console.error(err);
  }
})();
console.log("Foto do usuário:", user.foto);
if (profileImg) {
  profileImg.src = user.foto
    ? `http://localhost:8081/${user.foto}`
    : "perfil.png"; // imagem padrão caso não tenha foto
}



