

const URL = 'https://thesimpsonsquoteapi.glitch.me/quotes?count=20' 

export async function getSimpsonsPhrases () {
        const response = await fetch(URL);
        const phrases = await response.json();
        return phrases;
   
}