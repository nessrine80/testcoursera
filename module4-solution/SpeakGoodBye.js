( fonction ( fenêtre ) {
   var byeSpeaker = {};
   byeSpeaker . speakWord  =  " Au revoir " ;

// ÉTAPE 8: Réécrivez la fonction 'speak' de telle sorte qu'elle soit attachée à la
// objet byeSpeaker au lieu d'être une fonction autonome.
// Voir leçon 52, partie 2
   byeSpeaker . speak  =  fonction ( nom ) {
    console . log ( byeSpeaker . speakWord  +  "  "  + nom);
  }
  fenêtre . byeSpeaker  = byeSpeaker;
}) ( fenêtre );
