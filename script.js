
            // Lista de futbolistas
    const footballers = [
        // Jugadores actuales top (ampliado)
        "Lionel Messi", "Cristiano Ronaldo", "Neymar Jr", 
        "Kylian Mbappé", "Robert Lewandowski", "Kevin De Bruyne",
        "Mohamed Salah", "Erling Haaland", "Karim Benzema",
        "Luka Modrić", "Virgil van Dijk", "Sadio Mané",
        "Harry Kane", "Son Heung-min", "Jude Bellingham",
        "Vinícius Júnior", "Rodri", "Bernardo Silva",
        "Toni Kroos", "Thibaut Courtois", "Ederson",
        "Alisson Becker", "Rúben Dias", "Phil Foden",
        "Bukayo Saka", "Jamal Musiala", "Pedri",
        "Gavi", "Federico Valverde", "Lautaro Martínez",
        "Romelu Lukaku", "Victor Osimhen", "Khvicha Kvaratskhelia",
        
        // Jugadores de la Liga Argentina (actuales y recientes)
        "Enzo Fernández", "Julian Álvarez", "Exequiel Palacios",
        "Giovani Lo Celso", "Papu Gómez", "Paulo Dybala",
        "Leandro Paredes", "Nicolás Otamendi", "Lisandro Martínez",
        "Emiliano Martínez", "Cristian Romero", "Nicolás Tagliafico",
        "Marcos Acuña", "Ángel Di María", "Gonzalo Montiel",
        "Germán Pezzella", "Guido Rodríguez", "Thiago Almada",
        "Ezequiel Barco", "Alan Varela", "Facundo Medina",
        "Lucas Martínez Quarta", "Lucas Ocampos", "Joelinton",
        
        // Leyendas del fútbol (históricos)
        "Diego Maradona", "Pelé", "Johan Cruyff",
        "Alfredo Di Stéfano", "Ferenc Puskás", "Franz Beckenbauer",
        "Gerd Müller", "Zinedine Zidane", "Ronaldo Nazário",
        "Ronaldinho", "Andrés Iniesta", "Xavi Hernández",
        "Thierry Henry", "Paolo Maldini", "Franco Baresi",
        "Roberto Baggio", "Gabriel Batistuta", "Romário",
        "Hristo Stoichkov", "George Best", "Eusébio",
        "Marco van Basten", "Ruud Gullit", "Michel Platini",
        "Lothar Matthäus", "Carlos Valderrama", "Alessandro Del Piero",
        "Francesco Totti", "Raúl González", "Iker Casillas",
        "Ryan Giggs", "Paul Scholes", "Steven Gerrard",
        "Frank Lampard", "Didier Drogba", "Samuel Eto'o",
        
        // Leyendas argentinas
        "Juan Román Riquelme", "Gabriel Omar Batistuta",
        "Mario Kempes", "Daniel Passarella", "Oscar Ruggeri",
        "Jorge Valdano", "Claudio Caniggia", "Fernando Redondo",
        "Ariel Ortega", "Sergio Agüero", "Carlos Tevez",
        "Javier Zanetti", "Juan Sebastián Verón", "Esteban Cambiasso",
        "Walter Samuel", "Hernán Crespo", "Diego Simeone",
        "Ubaldo Fillol", "Amadeo Carrizo", "René Houseman",
        
        // Porteros destacados
        "Manuel Neuer", "Gianluigi Buffon", "Oliver Kahn",
        "Peter Schmeichel", "Edwin van der Sar", "Iker Casillas",
        "Dino Zoff", "Gordon Banks", "Lev Yashin",
        
        // Defensores legendarios
        "Fabio Cannavaro", "Alessandro Nesta", "Jaap Stam",
        "Marcel Desailly", "Lilian Thuram", "Roberto Carlos",
        "Cafu", "Dani Alves", "Sergio Ramos",
        
        // Más jugadores actuales destacados
        "Frenkie de Jong", "Matthijs de Ligt", "Joshua Kimmich",
        "Serge Gnabry", "Leroy Sané", "Kingsley Coman",
        "Marquinhos", "Neymar", "Casemiro",
        "Antoine Griezmann", "Ousmane Dembélé", "Achraf Hakimi",
        "João Félix", "Rafael Leão", "Dušan Vlahović",
        "Christopher Nkunku", "Declan Rice", "Jack Grealish",
        "Mason Mount", "Reece James", "Trent Alexander-Arnold",
        "Andrew Robertson", "Virgil van Dijk", "Darwin Núñez",
        "Cody Gakpo", "Marcus Rashford", "Bruno Fernandes",
        "Martin Ødegaard", "Gabriel Jesus", "William Saliba"
    ];

        // Variables del juego
        let players = [];
        let impostorIndexes = [];
        let currentPlayerIndex = 0;
        let randomFootballer = footballers[Math.floor(Math.random() * footballers.length)];

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
            impostorCount = parseInt(impostorCountInput.value);
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
            assignedFootballers = new Map();
            
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
                // Asignar futbolista único por jugador
                let availableFootballers = footballers.filter(f => !Array.from(assignedFootballers.values()).includes(f));
                if (availableFootballers.length === 0) {
                    availableFootballers = [...footballers]; // Reset si se acaban
                }
                
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
            }else{
                restartGame();
            }
        }


        // Reiniciar el juego
        function restartGame() {
            currentPlayerIndex = 0;
            setupScreen.style.display = "block";
            endScreen.style.display = "none";
            impostorIndexes = [];
            randomFootballer = footballers[Math.floor(Math.random() * footballers.length)];
        }