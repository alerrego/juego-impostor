const footballers = [
    // === Estrellas Mundiales (Actuales y Muy Recientes) ===
    "Lionel Messi",
    "Cristiano Ronaldo",
    "Neymar Jr",
    "Kylian Mbappé",
    "Erling Haaland",
    "Robert Lewandowski",
    "Kevin De Bruyne",
    "Mohamed Salah",
    "Karim Benzema",
    "Luka Modrić",
    "Vinícius Júnior",
    "Harry Kane",
    "Antoine Griezmann",
    "Heung-min Son (Sonny)",
    "Jude Bellingham",
    "Federico Valverde",

    // === Leyendas Mundiales (Iconos 80s en adelante) ===
    "Pelé",
    "Diego Maradona",
    "Johan Cruyff",
    "Zinedine Zidane",
    "Ronaldo Nazário",
    "Ronaldinho",
    "Andrés Iniesta",
    "Xavi Hernández",
    "Thierry Henry",
    "Paolo Maldini",
    "Roberto Baggio",
    "Romário",
    "Marco van Basten",
    "Michel Platini",
    "Lothar Matthäus",
    "Roberto Carlos",
    "Cafu",
    "Sergio Ramos",
    "Steven Gerrard",
    "Frank Lampard",
    "Didier Drogba",
    "Samuel Eto'o",
    "Dennis Bergkamp",
    "Andriy Shevchenko",

    // === Porteros Legendarios (80s en adelante) ===
    "Gianluigi Buffon",
    "Iker Casillas",
    "Oliver Kahn",
    "Manuel Neuer",

    // === Selección Argentina (Actuales y Conocidos) ===
    "Ángel Di María (Fideo)",
    "Emiliano Martínez (Dibu)",
    "Julian Álvarez (La Araña)",
    "Enzo Fernández",
    "Paulo Dybala (La Joya)",
    "Lautaro Martínez (El Toro)",
    "Lisandro Martínez (Licha)",
    "Cristian Romero (Cuti)",
    "Leandro Paredes",
    "Rodrigo De Paul (Motorcito)",
    "Alexis Mac Allister",
    "Nicolás Otamendi (General)",

    // === Leyendas Argentinas (80s en adelante) ===
    "Gabriel Batistuta (Batigol)",
    "Juan Román Riquelme",
    "Sergio Agüero (Kun)",
    "Carlos Tevez (El Apache)",
    "Hernán Crespo (Valdanito)",
    "Claudio Caniggia (El Pájaro)",
    "Ariel Ortega (El Burrito)",
    "Javier Zanetti (Pupi)",
    "Juan Sebastián Verón (La Brujita)",
    "Fernando Redondo (El Príncipe)",
    "Oscar Ruggeri (El Cabezón)",
    "Diego Simeone (Cholo)",
    "Gonzalo Higuaín (Pipa)",
    "Javier Pastore (El Flaco)",
    "Ezequiel Lavezzi (Pocho)",
    "Javier Mascherano (El Jefecito)",
    "Walter Samuel (El Muro)",
    "Juan Pablo Sorín (Juampi)",

    // === Ídolos de Clubes (80s en adelante) ===

    // Boca Juniors
    "Martín Palermo (El Titán)",
    "Guillermo Barros Schelotto (El Melli)",
    "Roberto Abbondanzieri (Pato)",
    "Carlos Navarro Montoya (El Mono)",
    "Hugo Ibarra (Negro)",
    "Gary Medel (El Pitbull)",
    "Pablo Pérez",
    "Santiago Silva (El Tanque)",
    "Oscar Córdoba",
    "Marcelo Delgado (Chelo)",
    "Mauricio Serna (Chicho)",
    "Juan Ramírez",
    "Cristian Pavón (Kichan)",
    "Darío Benedetto (Pipa)",
    "Nahitan Nández",
    "Exequiel Zeballos (Changuito)",
    "Miguel Merentiel (La Bestia)",
    "Edinson Cavani (El Matador)",
    "Frank Fabra",
    "Jorge Bermúdez (El Patrón)",
    "Sebastián Battaglia (Seba)",
    "Rodolfo Arruabarrena (El Vasco)",
    "Antonio Barijho (Chipi)",
    "Rodrigo Palacio (La JoyA)",
    "Rolando Schiavi (El Flaco)",
    "Cristian Medina",
    "Marcos Rojo",
    "Sergio Romero (Chiquito)",
    "Ezequiel Fernández (Equi)",
    "Luis Advíncula (Rayo)", // [NUEVO]
    "Clemente Rodríguez", // [NUEVO]

    // River Plate
    "Enzo Francescoli (El Príncipe)",
    "Juan Fernando Quintero (Juanfer)",
    "Franco Armani",
    "Radamel Falcao (El Tigre)",
    "Alexis Sánchez (Niño Maravilla)",
    "Marcelo Gallardo (El Muñeco)",
    "Pablo Aimar (El Payaso)",
    "Javier Saviola (El Conejito)", // *** CORRECCIÓN 1: Se quitó el '*'
    "Marcelo Salas (El Matador)",
    "Ramiro Funes Mori (El Melli)",
    "Leonardo Ponzio (El León)",
    "Leonardo Astrada (El Jefe)",
    "Norberto Alonso (Beto)",
    "Fernando Cavenaghi (Cavegol)",
    "Matías Almeyda (Pelado)",
    "Enzo Pérez",
    "Ramón Díaz (El Pelado)",
    "Germán Burgos (El Mono)",
    "Ignacio Fernández (Nacho)",
    "Miguel Borja (El Colibrí)",
    "Claudio Echeverri (Diablito)",
    "Nacho Scocco", // [NUEVO]

    // Estudiantes de La Plata
    "José Luis Brown (Tata)",
    "Mauro Boselli",
    "Leandro Desábato (Chavo)",
    "Mariano Andújar",
    "Alejandro Sabella (Pachorra)",
    "Ernesto Farías (Tecla)",
    "Benjamín Rollheiser",
    "Guido Carrillo",
    "Gerónimo Rulli",
    "José Sosa (El Principito)",
    "Jonatan Schunke (El Vikingo)",
    "Santiago Ascacíbar (Rusito)",
    "Edwin Cetré",
    "Gastón Fernández (La Gata)",
    "Marcos Rojo", // (Ídolo acá también)
    "José Luis Calderón (Caldera)",
    "Mariano Pavone (El Tanque)",
    "Leandro Benítez (Chino)",

    // Gimnasia y Esprima La Plata
    "Pedro Troglio",
    "Ignacio Fernández (Nacho)", // (Ídolo acá también)
    "Maximiliano Meza",
    "Fernando Monetti (Mono)",
    "Facundo Oreja",
    "Cristian Tarragona",
    "Benjamín Domínguez",
    "Brahian Alemán (Oveja)",
    "Franco Niell (El Enano)",
    "Fabián Rinaudo (Fito)",
    "Lucas Licht (Bochi)",
    "Sebastián Romero (Chirola)",
    // *** CORRECCIÓN 2: Se quitó el backtick (`) que estaba acá
    
    // Racing Club [NUEVO]
    "Diego Milito (El Príncipe)", // [NUEVO]
    "Lisandro López (Licha)", // [NUEVO]
    "Gustavo Bou (La Pantera)", // [NUEVO]
    "Turco Garcia (falopa)", // [NUEVO]
    "Adrián Maravilla Martínez", // [NUEVO - Actual]

    // Independiente [NUEVO]
    "Ricardo Bochini (El Bocha)", // [NUEVO]
    "Daniel Montenegro (Rolfi)", // [NUEVO]
    "Gabriel Milito (Gabi)", // [NUEVO]
    "Federico Mancuello", // [NUEVO - Actual]

    // San Lorenzo [NUEVO]
    "Leandro Romagnoli (Pipi)", // [NUEVO]
    "Néstor Ortigoza (Gordo)", // [NUEVO]
    "Sebastián Torrico (Cóndor)", // [NUEVO]
    "Adam Bareiro", // [NUEVO - Actual]
    // *** CORRECCIÓN 3: Se quitó el backtick (`) que estaba acá

    // Vélez Sarsfield [NUEVO]
    "José Luis Chilavert (Chila)", // [NUEVO]
    "Omar Asad (El Turco)", // [NUEVO]
    "Fabián Cubero (Poroto)", // [NUEVO]

    "Pablo Vegetti","Illolaiy (vsc)","Fede Slezack (vsc)","Colocca (vsc)","Pulga Rodriguez","Bichi Fuertes"
    // *** CORRECCIÓN 4: Se quitó el backtick (`) que estaba acá
];

// Variables del juego
let players = [];
let impostorIndexes = [];
let currentPlayerIndex = 0;
let randomFootballer = footballers[Math.floor(Math.random() * footballers.length)];
// let assignedFootballers; // *** CORRECCIÓN 5: No necesitamos esta variable, la comentamos.

// Elementos del DOM
const setupScreen = document.getElementById("setupScreen");
const roleScreen = document.getElementById("roleScreen");
const waitingScreen = document.getElementById("waitingScreen");
const endScreen = document.getElementById("endScreen");
const playersContainer = document.getElementById("playersContainer");

const startBtn = document.getElementById("startBtn");
const continueBtn = document.getElementById("continueBtn");
const nextPlayerBtn = document.getElementById("nextPlayerBtn");
const restartBtn = document.getElementById("restartBtn");
const addPlayerBtn = document.getElementById("addPlayerBtn");
const removePlayerBtn = document.getElementById("removePlayerBtn");
const impostorCountInput = document.getElementById("impostorCount");

const currentPlayerEl = document.getElementById("currentPlayer");
const currentRoleEl = document.getElementById("currentRole");
const impostorRevealEl = document.getElementById("impostorReveal");

// Event listeners
startBtn.addEventListener("click", startGame);
continueBtn.addEventListener("click", showWaitingScreen);
nextPlayerBtn.addEventListener("click", showNextPlayer);
restartBtn.addEventListener("click", restartGame);
addPlayerBtn.addEventListener("click", addPlayerInput);
removePlayerBtn.addEventListener("click", removePlayerInput);
impostorCountInput.addEventListener("change", validateImpostorCount);

// Función para agregar un nuevo campo de jugador
function addPlayerInput() {
    const playerCount = playersContainer.children.length;
    if (playerCount >= 10) {
        alert("Máximo 10 jugadores permitidos");
        return;
    }
    
    const playerId = `player${playerCount + 1}`;
    const div = document.createElement('div');
    div.className = 'player-input';
    div.innerHTML = `
        <label for="${playerId}">Jugador ${playerCount + 1}:</label>
        <input type="text" id="${playerId}" placeholder="Nombre del jugador">
    `;
    playersContainer.appendChild(div);
    
    // Actualizar el máximo de impostores posible
    validateImpostorCount();
}

// Función para eliminar el último campo de jugador
function removePlayerInput() {
    if (playersContainer.children.length > 2) {
        playersContainer.removeChild(playersContainer.lastChild);
        validateImpostorCount();
    } else {
        alert("Debe haber al menos 2 jugadores");
    }
}

// Validar que el número de impostores no exceda el número de jugadores
function validateImpostorCount() {
    const playerCount = playersContainer.children.length;
    const maxImpostors = Math.max(1, playerCount - 1);
    
    if (impostorCountInput.value > maxImpostors) {
        impostorCountInput.value = maxImpostors;
    }
    impostorCountInput.max = maxImpostors;
}

// Función para iniciar el juego
function startGame() {
    // Obtener nombres de jugadores
    players = [];
    const inputs = playersContainer.querySelectorAll('input[type="text"]');
    inputs.forEach(input => {
        const name = input.value.trim() || `Jugador ${players.length + 1}`;
        players.push(name);
    });

    // Validar que haya al menos 2 jugadores
    if (players.length < 2) {
        alert("Debe haber al menos 2 jugadores");
        return;
    }

    // Obtener número de impostores
    let impostorCount = parseInt(impostorCountInput.value);
    const maxImpostors = players.length - 1;
    
    if (impostorCount < 1 || impostorCount > maxImpostors) {
        alert(`Debe haber entre 1 y ${maxImpostors} impostores`);
        return;
    }

    // Elegir impostores al azar
    impostorIndexes = [];
    const availableIndexes = [...Array(players.length).keys()];
    
    for (let i = 0; i < impostorCount; i++) {
        const randomPos = Math.floor(Math.random() * availableIndexes.length);
        impostorIndexes.push(availableIndexes[randomPos]);
        availableIndexes.splice(randomPos, 1);
    }

    // Reiniciar asignaciones de futbolistas
    // assignedFootballers = new Map(); // *** CORRECCIÓN 6: Esta línea causaba error y no se usa.
    
    // Ocultar pantalla de inicio y mostrar primer jugador
    setupScreen.style.display = "none";
    currentPlayerIndex = 0;
    showPlayerRole();
}

// Mostrar rol del jugador actual
function showPlayerRole() {
    roleScreen.style.display = "block";
    waitingScreen.style.display = "none";
    endScreen.style.display = "none";

    const player = players[currentPlayerIndex];
    currentPlayerEl.textContent = player;

    if (impostorIndexes.includes(currentPlayerIndex)) {
        currentRoleEl.innerHTML = '<span class="impostor">¡Tú eres el IMPOSTOR!</span>' + 
                                  '<p>Tu objetivo es hacer creer que sabes de fútbol sin ser descubierto.</p>';
    } else {
        // *** CORRECCIÓN 7: Se borraron las líneas que usaban 'assignedFootballers' y causaban error.
        // let availableFootballers = footballers.filter(f => !Array.from(assignedFootballers.values()).includes(f));
        // if (availableFootballers.length === 0) {
        //     availableFootballers = [...footballers]; // Reset si se acaban
        // }
        
        // Esta línea es la correcta, ya que usa el futbolista elegido para la ronda.
        currentRoleEl.innerHTML = `<span class="footballer">Tu futbolista es:<br><strong>${randomFootballer}</strong></span>` +
                                  `<p>Tu objetivo es descubrir quién no conoce realmente de fútbol.</p>`;
    }
}

// Mostrar pantalla de espera
function showWaitingScreen() {
    roleScreen.style.display = "none";
    waitingScreen.style.display = "block";
}

// Mostrar siguiente jugador o finalizar
function showNextPlayer() {
    currentPlayerIndex++;
    if (currentPlayerIndex < players.length) {
        showPlayerRole();
    } else {
        // *** CORRECCIÓN 8: En lugar de reiniciar, mostramos la pantalla final.
        showEndScreen();
    }
}

// *** CORRECCIÓN 9: Nueva función para mostrar la pantalla final
function showEndScreen() {
    roleScreen.style.display = "none";
    waitingScreen.style.display = "none";
    endScreen.style.display = "block";

    // Revelar quiénes eran los impostores
    const impostorNames = impostorIndexes.map(index => players[index]);
    
    impostorRevealEl.innerHTML = `<h3>¡Todos vieron su rol!</h3>` +
                                 `<p>Es hora de debatir y votar.</p>` +
                                 `<hr>` +
                                 `<p style="font-size: 0.9em; color: #555;">(Info para verificar después):</p>` +
                                 `<p style="font-size: 0.9em; color: #555;">Los impostores eran: <strong>${impostorNames.join(", ")}</strong></p>` +
                                 `<p style="font-size: 0.9em; color: #555;">El futbolista era: <strong>${randomFootballer}</strong></p>`;
}


// Reiniciar el juego
function restartGame() {
    currentPlayerIndex = 0;
    setupScreen.style.display = "block";
    endScreen.style.display = "none"; // Asegurarse de ocultar la pantalla final
    impostorIndexes = [];
    // Elegir un NUEVO futbolista para la próxima ronda
    randomFootballer = footballers[Math.floor(Math.random() * footballers.length)];
}
