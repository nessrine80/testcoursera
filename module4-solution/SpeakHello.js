( fonction ( fenêtre ) {
var helloSpeaker = {};
helloSpeaker . speakWord  =  " Bonjour " ;

// ÉTAPE 4: Réécrivez la fonction 'speak' de telle sorte qu'elle soit attachée à la
// objet helloSpeaker au lieu d'être une fonction autonome.
// Voir leçon 52, partie 2
helloSpeaker . speak  =  fonction ( nom ) {
  console . log ( helloSpeaker . speakWord  +  "  "  + nom);
  }
fenêtre . helloSpeaker  = helloSpeaker;
}) ( fenêtre );
