function atualizarBarraPorDistancia() {
    const sec3 = document.querySelector('.Sec3');
    const barra = document.getElementById('barra-dinamica');

    if (!sec3 || !barra) return;

    // Obtém as dimensões da seção de Habilidades
    const rect = sec3.getBoundingClientRect();
    
    // Posição do centro da tela (viewport)
    const viewportCenter = window.innerHeight / 2;
    
    // Posição do centro da seção em relação à tela
    const elementCenter = rect.top + (rect.height / 2);

    // Calcula a distância entre o centro da tela e o centro da seção
    const distancia = Math.abs(viewportCenter - elementCenter);

    // Distância máxima a partir da qual a barra zera totalmente
    const distanciaMaxima = (window.innerHeight / 2) + (rect.height / 2);

    // Fator de escala: 1 quando no centro exato, 0 quando longe da tela
    let fator = 1 - (distancia / distanciaMaxima);

    // Mantém o valor entre 0 e 1
    fator = Math.max(0, Math.min(1, fator));

    // Aplica a escala vertical e opacidade
    barra.style.transform = `scaleY(${fator})`;
    barra.style.opacity = fator;
}

// Ouve o evento de rolagem e de redimensionamento da janela
window.addEventListener('scroll', atualizarBarraPorDistancia);
window.addEventListener('resize', atualizarBarraPorDistancia);

// Executa a primeira vez ao carregar a página
document.addEventListener('DOMContentLoaded', atualizarBarraPorDistancia);