async function buscarPais() {

    const nome = document.getElementById("pais").value.trim();
    const resultado = document.getElementById("resultado");
    const mensagem = document.getElementById("mensagem");

    if (nome === "") {
        mensagem.textContent = "Digite o nome de um país.";
        resultado.innerHTML = "";
        return;
    }

    try {

        mensagem.textContent = "🔎 Pesquisando...";
        resultado.innerHTML = "";

        // Busca os países na API
        const resposta = await fetch(
            "https://countries.dev/countries"
        );

        if (!resposta.ok) {
            throw new Error("Erro na API");
        }

        // Converte para JSON
        const paises = await resposta.json();

        // Procura o país
        const pais = paises.find(p => 
            p.name.toLowerCase() === nome.toLowerCase()
        );

        if (!pais) {
            throw new Error("País não encontrado");
        }

        // Mostra o país
        resultado.innerHTML = `
            <div class="card">

                <img 
                    src="${pais.flags.svg}"
                    alt="Bandeira de ${pais.name}"
                >

                <h2>${pais.name}</h2>

                <p>
                    <strong>🏛️ Capital:</strong>
                    ${pais.capital || "Não informada"}
                </p>

                <p>
                    <strong>🌎 Região:</strong>
                    ${pais.region || "Não informada"}
                </p>

                <p>
                    <strong>👥 População:</strong>
                    ${pais.population.toLocaleString("pt-BR")}
                </p>

            </div>
        `;

        mensagem.textContent = "";

    } catch (erro) {

        console.error(erro);

        resultado.innerHTML = "";

        mensagem.textContent = "❌ País não encontrado.";
    }
}