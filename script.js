 
// Fonction pour ajouter un pays sans doublon
 
    function AjouterPays() {
        // Récupération des éléments
        let select = document.getElementById("lepays");
        let input = document.getElementById("c5").value.trim();

        // Vérification si l'entrée est vide
        if (input === "") {
            alert("Veuillez entrer un nom de pays !");
            return;
        }

        // Vérification si le pays est déjà dans la liste
        let exists = Array.from(select.options).some(option => option.text.toLowerCase() === input.toLowerCase());

        // let exists = false;
        // for (let i = 0; i < select.options.length; i++) {
        //     if (select.options[i].text.toLowerCase() === input.toLowerCase()) {
        //         exists = true;
        //         break; // Stoppe la boucle dès qu'un match est trouvé
        //     }

        if (!exists) {
            // Création et ajout d'un nouvel élément dans la liste
            let newOption = document.createElement("option");
            newOption.text = input;
            select.add(newOption);
            alert("Pays ajouté avec succès !");
        } else {
            alert("Ce pays existe deja !");
        }

        // Réinitialisation du champ texte
        document.getElementById("c5").value = "";
    }
// verification du formulaire
function VerifierFormulaire() {
    let nom = document.getElementById("c1");
    let adresse = document.getElementById("c2");
    let codePostal = document.getElementById("c3");
    let localite = document.getElementById("c4");

    let erreurNom = document.getElementById("t2");
    let erreurAdresse = document.getElementById("t3");
    let erreurPostal = document.getElementById("t4");

    let erreurs = [];

    // Réinitialiser les messages d'erreur
    erreurNom.innerHTML = "";
    erreurAdresse.innerHTML = "";
    erreurPostal.innerHTML = "";

    // Vérification du nom et prénom
    if (nom.value.length < 8 || nom.value.length > 20) {
        erreurs.push("Le champ 'Nom et Prénom' doit contenir entre 8 et 20 caractères.");
        erreurNom.innerHTML = "<span style='color:red;'>Le nom doit avoir entre 8 et 20 caractères.</span>";
        nom.style.color = "red";
    } else {
        nom.style.color = "black";
    }

    // Vérification de l'adresse
    if (adresse.value.length < 20) {
        erreurs.push("L'adresse doit contenir au moins 20 caractères.");
        erreurAdresse.innerHTML = "<span style='color:red;'>L'adresse doit contenir au moins 20 caractères.</span>";
        adresse.style.color = "red";
    } else {
        adresse.style.color = "black";
    }

    // Vérification du code postal
    let postalValue = parseInt(codePostal.value);
    if (postalValue !== 3000 && postalValue !== 4000) {
        erreurs.push("Le code postal doit être 3000 ou 4000.");
        erreurPostal.innerHTML = "<span style='color:red;'>Code postal invalide (3000 ou 4000).</span>";
        codePostal.style.color = "red";
    } else {
        codePostal.style.color = "black";
        localite.value = (postalValue === 3000) ? "Ville 1" : "Ville 2";
    }

    // Affichage des erreurs ou message de succès
    if (erreurs.length > 0) {
        alert("Erreurs trouvées :\n\n" + erreurs.join("\n"));
    } else {
        alert("Le formulaire est correct !");
    }
}


// fonction pour afficher des message d'alert