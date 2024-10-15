async function check_route() {
  let reponse = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=12528"
  );
  if (reponse.status >= 200 && reponse.status < 300)
    console.log("all is good ");
  else {
    console.log("shit happens");
  }
}

check_route();
