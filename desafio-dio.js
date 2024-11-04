
// Função para classificar o nível da heroína
function classificarHeroi(nome, experiencia) {
    let nivel;

    // Estrutura de decisão para determinar o nível com base na XP
    if (experiencia < 1000) {
        nivel = "Ferro";
    } else if (experiencia >= 1001 && experiencia <= 2000) {
        nivel = "Bronze";
    } else if (experiencia >= 2001 && experiencia <= 5000) {
        nivel = "Prata";
    } else if (experiencia >= 5001 && experiencia <= 7000) {
        nivel = "Ouro";
    } else if (experiencia >= 7001 && experiencia <= 8000) {
        nivel = "Platina";
    } else if (experiencia >= 8001 && experiencia <= 9000) {
        nivel = "Ascendente";
    } else if (experiencia >= 9001 && experiencia <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    // Exibindo a mensagem final
    console.log(`A Heroína de nome ${nome} está no nível de ${nivel}`);
}

// Exemplo de uso da função
let nomeHeroina = "Juliana"; // Nome da heroína
let experienciaHeroina = 7500; // Altere este valor para testar diferentes níveis
classificarHeroi(nomeHeroina, experienciaHeroina);
