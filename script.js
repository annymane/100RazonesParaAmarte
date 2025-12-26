// ===== Las 100 razones =====
const reasons = {
    1: "Tus ojos, me encantan esos ojitos chinitos",
    2: "Me haces sentir amada, sin importar lo que pase",
    3: "Tu sonrisa, me encanta verte feliz",
    4: "El tiempo cuando estamos juntos no se siente suficiente",
    5: "Porque eres mi hogar, sin importar la distancia",
    6: "Eres esa luz para mis días malos",
    7: "Eres paz, amor y alegría en mi vida",
    8: "Me inspiras a ser una mejor persona cada día",
    9: "Tratas de entenderme incluso cuando no me entiendo a mí misma",
    10: "Siempre te precupas por nuestra relación aunque a veces no ponga de mi parte",
    11: "Me gustan tus labios, besas muy rico",
    12: "Me gusta tu lunar rojo, el que está abajo de tu ojito",
    13: "Eres un hombre increíble, de corazón noble",
    14: "Tu voz me encanta, me gusta escucharte hablar",
    15: "Cuando me ves te pones super feliz y eso me hace sentir especial",
    16: "Siempre haces el esfuerzo de pasar tiempo conmigo",
    17: "Haces que me sienta segura y protegida",
    18: "Siempre me ayudas cuando lo necesito, espero también poder ayudarte",
    19: "Me encanta tu sentido del humor, siempre me haces reír",
    20: "Me encanta tu risa, siempre se ponen mas chiquitos tus ojitos",
};

// ===== ELEMENTOS DEL DOM =====
const searchBtn = document.getElementById('searchBtn');
const starInput = document.getElementById('starNumber');
const resultDiv = document.getElementById('result');
const searchBox = document.getElementById('searchBox');
const errorMsg = document.getElementById('error');
const restartBtn = document.getElementById('restartBtn');

// ===== GENERAR ESTRELLAS DE FONDO =====
function createStars() {
    const starsContainer = document.getElementById('starsBackground');
    const numberOfStars = 200;

    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Variar tamaño de estrellas
        const sizeClass = Math.random() < 0.7 ? 'small' : Math.random() < 0.9 ? 'medium' : 'large';
        star.classList.add(sizeClass);
        
        // Posición aleatoria
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        
        // Delay de animación aleatorio
        star.style.animationDelay = Math.random() * 3 + 's';
        star.style.animationDuration = (2 + Math.random() * 3) + 's';
        
        starsContainer.appendChild(star);
    }
}

// ===== MOSTRAR RAZÓN =====
function showReason() {
    const number = parseInt(starInput.value);
    
    // Ocultar mensajes previos
    errorMsg.classList.remove('show');
    
    // Validar número
    if (!number || number < 1 || number > 100) {
        errorMsg.textContent = 'Por favor mi amor ingresa un número válido del 1 al 100';
        errorMsg.classList.add('show');
        return;
    }

    // Verificar si existe la razón
    if (reasons[number]) {
        // Ocultar búsqueda con animación
        searchBox.style.animation = 'fadeOut 0.4s ease-out';
        
        setTimeout(() => {
            searchBox.style.display = 'none';
            
            // Mostrar resultado
            document.getElementById('displayNumber').textContent = `Estrellita ${number}`;
            document.getElementById('displayReason').textContent = reasons[number];
            resultDiv.classList.add('show');
            
            // Resetear animación
            searchBox.style.animation = '';
        }, 400);
    } else {
        errorMsg.textContent = 'Esta estrella aún no ha sido agregada ✨';
        errorMsg.classList.add('show');
    }
}

// ===== REINICIAR =====
function restart() {
    // Ocultar resultado con animación
    resultDiv.style.animation = 'fadeOut 0.4s ease-out';
    
    setTimeout(() => {
        resultDiv.classList.remove('show');
        resultDiv.style.animation = '';
        
        // Mostrar búsqueda
        searchBox.style.display = 'block';
        searchBox.style.animation = 'fadeIn 0.6s ease-out';
        
        // Limpiar input
        starInput.value = '';
        errorMsg.classList.remove('show');
        
        // setTimeout(() => {
        //     searchBox.style.animation = '';
        // }, 600);
    }, 400);
}

// ===== ANIMACIÓN DE FADEOUT =====
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        from { opacity: 1; transform: translateY(0); }
        to { opacity: 0; transform: translateY(-20px); }
    }
`;
document.head.appendChild(style);

// ===== EVENT LISTENERS =====
searchBtn.addEventListener('click', showReason);
restartBtn.addEventListener('click', restart);

starInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        showReason();
    }
});

// ===== INICIALIZAR =====
window.addEventListener('load', () => {
    createStars();
    createShootingStars();
});
