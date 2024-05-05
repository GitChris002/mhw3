function cambiaScopri() {
    const scopri = document.querySelector('.Scopri');
    scopri.removeEventListener('click', cambiaScopri);
    
    const immaginePrima = document.querySelector('.Immagine2');
    const immagineDopo = document.querySelector('#Immagine4');
    const testoNascosto = document.querySelector('.testo-extra');
    const indietrobordo = document.querySelector('#indietro');
    const indietro = document.querySelector('#indietro p');
    const h3 = document.querySelectorAll('#htre');
    const contenuto2Extra = document.querySelector('#contenuto2-extra');
    const testodopo=document.querySelector('#testodopo');
    const back=document.querySelector('#back');
    const scelta=document.querySelector('.scelta');
    const fitness=document.querySelector('.fitness');
    const scheda=document.querySelector('#scheda p');
    const petto=document.querySelector('#petto h2');
    const pettotesto=document.querySelector('#pettotesto');
    const pettotesto2=document.querySelector('#pettotesto2');
    const spalle=document.querySelector('#spalle h2');
    const spalletesto=document.querySelector('#spalletesto');
    const spalletesto2=document.querySelector('#spalletesto2');
    const gambe=document.querySelector('#gambe h2');
    const gambetesto=document.querySelector('#gambetesto');
    const gambetesto2=document.querySelector('#gambetesto2');
    
    
  
  
  
    scopri.classList.add('hidden');
    immaginePrima.classList.add('hidden');
    scelta.classList.add('hidden');
    fitness.classList.add('hidden');
    immagineDopo.classList.remove('hidden');
    scheda.classList.remove('hidden');
    testoNascosto.classList.remove('hidden');
    indietro.classList.remove('hidden');
    indietrobordo.classList.remove('hidden');
    testodopo.classList.remove('hidden');
    contenuto2Extra.classList.remove('hidden');
    back.classList.remove('hidden');
    petto.classList.remove('hidden');
    pettotesto.classList.remove('hidden');
    pettotesto2.classList.remove('hidden');
    spalle.classList.remove('hidden');
    spalletesto.classList.remove('hidden');
    spalletesto2.classList.remove('hidden');
    gambe.classList.remove('hidden');
    gambetesto.classList.remove('hidden');
    gambetesto2.classList.remove('hidden');
  
  
    h3.forEach(element => {
      element.classList.remove('hidden');
    });
    
  
  
    indietro.addEventListener('click', tornaIndietro);
  }
  
  function tornaIndietro() {
    const scopri = document.querySelector('.Scopri');
    scopri.addEventListener('click', cambiaScopri);
    
    const immaginePrima = document.querySelector('.Immagine2');
    const immagineDopo = document.querySelector('#Immagine4');
    const testoNascosto = document.querySelector('.testo-extra');
    const indietrobordo = document.querySelector('#indietro');
    const indietro = document.querySelector('#indietro p');
    const h3 = document.querySelectorAll('#htre');
    const contenuto2Extra = document.querySelector('#contenuto2-extra');
    const testodopo=document.querySelector('#testodopo p');
    const back=document.querySelector('#back');
    const scelta=document.querySelector('.scelta');
    const fitness=document.querySelector('.fitness');
    const scheda=document.querySelector('#scheda p');
    const petto=document.querySelector('#petto h2');
    const pettotesto=document.querySelector('#pettotesto');
    const pettotesto2=document.querySelector('#pettotesto2');
    const spalle=document.querySelector('#spalle h2');
    const spalletesto=document.querySelector('#spalletesto');
    const spalletesto2=document.querySelector('#spalletesto2');
    const gambe=document.querySelector('#gambe h2');
    const gambetesto=document.querySelector('#gambetesto');
    const gambetesto2=document.querySelector('#gambetesto2');
    
  
  
  
  
    scopri.classList.remove('hidden');
    immaginePrima.classList.remove('hidden');
    scelta.classList.remove('hidden');
    fitness.classList.remove('hidden');
    immagineDopo.classList.add('hidden');
    testoNascosto.classList.add('hidden');
    indietro.classList.add('hidden');
    indietrobordo.classList.add('hidden');
    testodopo.classList.add('hidden');
    back.classList.add('hidden');
    scheda.classList.add('hidden');
    contenuto2Extra.classList.add('hidden');
    petto.classList.add('hidden');
    pettotesto.classList.add('hidden');
    pettotesto2.classList.add('hidden');
    spalle.classList.add('hidden');
    spalletesto.classList.add('hidden');
    spalletesto2.classList.add('hidden');
    gambe.classList.add('hidden');
    gambetesto.classList.add('hidden');
    gambetesto2.classList.add('hidden');
  
  
    h3.forEach(element => {
      element.classList.add('hidden');
    });
    
  
    indietro.removeEventListener('click', tornaIndietro);
  }
  
  const scopri = document.querySelector('.Scopri');
  scopri.addEventListener('click', cambiaScopri);
  
    

// Funzione per inviare una richiesta alle API di OpenAI
async function sendOpenAIRequest(prompt) {
    const apiKey = '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'; // Inserisci la tua chiave API qui

    const data = {
        prompt: prompt,
        model: "gpt-3.5-turbo",
        temperature: 0.7,
        max_tokens: 150,
    };

    const settings = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`, // Inserisci la tua chiave API qui
        },
        body: JSON.stringify(data),
    };

    try {
        const response = await fetch('https://api.openai.com/v1/completions', settings);
        if (!response.ok) {
            throw new Error(`Errore HTTP ${response.status}: ${response.statusText}`);
        }
        const jsonData = await response.json();
        return jsonData.choices[0].text.trim();
    } catch (error) {
        console.error('Errore durante la richiesta alle API di OpenAI:', error);
        return 'Si è verificato un errore durante la richiesta. Riprova più tardi.';
    }
}


// Funzione per creare un assistente
async function createAssistant() {
    const apiKey = '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'; // Inserisci la tua chiave API qui

    const data = {
        name: "Gym Tutor",
        instructions: "You are a personal gym tutor. Write and run code to answer math questions.",
        tools: [{ type: "code_interpreter" }],
        model: "gpt-3.5-turbo",
       
    };

    const settings = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`, // Inserisci la tua chiave API qui
            'OpenAI-Beta': 'assistants=v2'
        },
        body: JSON.stringify(data),
    };

    try {
        const response = await fetch('https://api.openai.com/v1/assistants', settings);
        if (!response.ok) {
            throw new Error(`Errore HTTP ${response.status}: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Errore durante la creazione dell\'assistente:', error);
        throw error;
    }
}

// Funzione principale asincrona
async function main() {
    try {
        // Creazione dell'assistente
        const assistant = await createAssistant();
        console.log(assistant);
    } catch (error) {
        console.error('Errore durante la creazione dell\'assistente:', error);
    }
}

// Chiamata alla funzione principale
main();

  

const chat = document.getElementById('chat');
const indietroButton = document.getElementById('IndietroButton');
const inputUtente = document.getElementById('inputUtente');
const inviaMessaggioButton = document.getElementById('inviaMessaggioButton');

chat.classList.add('hidden');
indietroButton.classList.add('hidden');

// Aggiungi un gestore di eventi al bottone "Avvia la chat"
const avviaChatButton = document.getElementById('avviaChatButton');

avviaChatButton.addEventListener('click', function() {
    avviaChat();
});

indietroButton.addEventListener('click', function() {
    nascondiChat();
});

inviaMessaggioButton.addEventListener('click', function() {
    inviaMessaggioUtente();
});

function avviaChat() {
    // Nascondi il pulsante "Avvia Chat" e mostra il pulsante "Indietro"
    avviaChatButton.classList.add('hidden');
    chat.style.animation='slideFromBottom 0.5s ease';
    mostraIndietroButton();
    // Mostra il blocco della chat
    chat.classList.remove('hidden');
    // Qui puoi aggiungere il codice per avviare la chat, se necessario
}

function nascondiChat() {
    // Mostra il pulsante "Avvia Chat" e nascondi il pulsante "Indietro"
    avviaChatButton.classList.remove('hidden');
    nascondiIndietroButton();
    // Nascondi il blocco della chat
    chat.classList.add('hidden');
}

function mostraIndietroButton() {
    indietroButton.classList.remove('hidden');
}

function nascondiIndietroButton() {
    indietroButton.classList.add('hidden');
}

function inviaMessaggioUtente() {
    const messaggioUtente = inputUtente.value;
    // Visualizza il messaggio dell'utente nella chat
    visualizzaMessaggioUtente(messaggioUtente);
    // Invia il messaggio alle API di OpenAI e visualizza la risposta
    inviaMessaggioAI(messaggioUtente);
    // Svuota l'inputUtente dopo l'invio del messaggio
    inputUtente.value = '';
}


function visualizzaMessaggioUtente(messaggio) {
    // Crea un elemento per visualizzare il messaggio dell'utente
    const messaggioUtenteElement = document.createElement('div');
    messaggioUtenteElement.textContent = messaggio;
    messaggioUtenteElement.classList.add('messaggio-utente');
    chat.appendChild(messaggioUtenteElement);
}

async function inviaMessaggioAI(messaggioUtente) {
    try {
        // Effettua una richiesta alle API di OpenAI per ottenere la risposta
        const rispostaAI = await sendOpenAIRequest(messaggioUtente);
        // Visualizza la risposta AI nella chat
        visualizzaMessaggioAI(rispostaAI);
    } catch (error) {
        console.error('Errore durante l\'invio del messaggio AI:', error);
        // Gestione degli errori
    }
}

function visualizzaMessaggioAI(risposta) {
    // Crea un elemento per visualizzare la risposta AI
    const messaggioAIElement = document.createElement('div');
    messaggioAIElement.textContent = risposta;
    messaggioAIElement.classList.add('messaggio-ai');
    chat.appendChild(messaggioAIElement);
}

// Aggiungi un gestore di eventi per l'evento "keydown" sull'elemento di inputUtente
inputUtente.addEventListener('keydown', function(event) {
    // Verifica se il tasto premuto è "Invio" (codice 13)
    if (event.keyCode === 13) {
        // Evita il comportamento predefinito di "Invio" (ad esempio, invio di un modulo)
        event.preventDefault();
        // Invia il messaggio utente
        inviaMessaggioUtente();
    }
});


const spotifyButton = document.getElementById('spotifyButton');
spotifyButton.addEventListener('click', apriModale);

let token;

function search(event) {
  if (event) {
    event.preventDefault();
  }
  const playlist_id = '5cZv2PLCsr6lcZ8AC6zO73?si=6d5d82105d254ac3'; // Inserisci qui l'ID della playlist della McFit su Spotify
  fetch(`https://api.spotify.com/v1/playlists/${playlist_id}`, {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
    .then(onResponse)
    .then(onJson)
    .catch(error => {
      console.error('Errore nella ricerca della playlist:', error);
    });
}

function onResponse(response) {
  return response.json();
}

function onJson(json) {
  console.log('JSON ricevuto', json);
  const albumInfoContainer = document.querySelector('#album-info');
  albumInfoContainer.innerHTML = '';
  const tracks = json.tracks.items;
  tracks.forEach(track => {
    const trackElement = document.createElement('div');
    trackElement.classList.add('song');

    // Titolo della canzone
    const titleElement = document.createElement('div');
    titleElement.classList.add('song-title');
    titleElement.textContent = track.track.name;
    trackElement.appendChild(titleElement);

    // Artisti della canzone
    const artistsElement = document.createElement('div');
    artistsElement.classList.add('song-artist');
    artistsElement.textContent = track.track.artists.map(artist => artist.name).join(', ');
    trackElement.appendChild(artistsElement);

    // Durata della canzone
    const durationElement = document.createElement('div');
    durationElement.classList.add('song-duration');
    const duration_ms = track.track.duration_ms;
    const durationMinutes = Math.floor(duration_ms / 60000);
    const durationSeconds = ((duration_ms % 60000) / 1000).toFixed(0);
    const durationString = durationMinutes + ':' + (durationSeconds < 10 ? '0' : '') + durationSeconds;
    durationElement.textContent = durationString;
    trackElement.appendChild(durationElement);

    albumInfoContainer.appendChild(trackElement);
  });
}

function onTokenJson(json) {
  token = json.access_token;
}

function onTokenResponse(response) {
  return response.json();
}
const playlist=document.querySelector('#playlist');
function apriModale() {
  
    spotifyButton.classList.add('hidden');
    playlist.classList.add('hidden');

  fetch("https://accounts.spotify.com/api/token", {
      method: "post",
      body: 'grant_type=client_credentials',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret)
      }
    })
    .then(onTokenResponse)
    .then(onTokenJson)
    .then(() => {
      const modale = document.getElementById('myModal');
      modale.style.display = 'block';
      search(event); // Passa l'evento corrente
    })
    .catch(error => {
      console.error('Errore nel recupero del token:', error);
    });
}

const closeButton = document.querySelector('.close');
closeButton.addEventListener('click', chiudiModale);

function chiudiModale() {
  const modale = document.getElementById('myModal');
  modale.style.display = 'none';
  spotifyButton.classList.remove('hidden');
  playlist.classList.remove('hidden');
}
 

const client_id = '6d20aad5d19e41b3a1ef45375f2e1d43';
const client_secret = '1d6300216d3042bab29a1508641a9cb0';

