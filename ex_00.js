function myFetch() {
  fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=12528")
    .then((reponse) => reponse.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Erreur:", error));
}

myFetch();
