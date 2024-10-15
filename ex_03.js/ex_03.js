fetch("https://swapi.dev/api/planets/1/")
  .then(function (reponse) {
    return reponse.json();
  })
  .then(function (donnees) {
    afficherInfosPlanete(donnees);
  })
  .catch(function (erreur) {
    console.error("Erreur lors de la récupération des données :", erreur);
  });
