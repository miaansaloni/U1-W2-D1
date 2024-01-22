let farina = 200;
let latte = 250;
let uova = 2;
let zucchero = 30;
let lievitoPerDolci = 10;
let burro = 30;
let solidi = farina + zucchero + lievitoPerDolci;
let liquidi = latte + uova + burro;
let pesoTotale = solidi + liquidi;
let porzioneS = pesoTotale / 8;
let laMiaPorzione = porzioneS * 3;
console.log(
  "Per fare i pancakes prima unire in una terrina gli ingredienti solidi: " +
    "farina " +
    farina +
    " gr, zucchero " +
    zucchero +
    " gr e lievito per dolci " +
    lievitoPerDolci +
    " gr, per un totale di " +
    solidi +
    " gr. Mescolare bene in un'altra terrina gli ingredienti liquidi, partendo dalle " +
    uova +
    " uova, aggiungendo poi " +
    latte +
    " gr di latte e infine " +
    burro +
    " gr di burro fuso, per un totale di " +
    liquidi +
    " gr. Unire il contenuto della seconda ciotola a filo nella prima, mescolando accuratamente per evitare i grumi. L'impasto conta la riuscita di 8 pancackes, per un totale di " +
    pesoTotale +
    " gr, se state attenti alla linea una porzione di " +
    porzioneS +
    " gr vi basterà, se invece come me non ne avete mai abbastanza, vi anticipo che il peso di tre pancackes si aggira intorno ai " +
    laMiaPorzione +
    " gr."
);
