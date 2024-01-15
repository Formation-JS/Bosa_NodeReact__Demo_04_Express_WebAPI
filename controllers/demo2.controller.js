
//! Création les méthodes du controller "Demo"
export const getMessage = (req, res) => {
    //? Envoie du message contenu dans le fichier .env
    res.json({
        message: process.env.MESSAGE
    });
};

export const getByName = (req, res) => {
    //? Récuperation du parametre "name" dans la route "/demo/:name"
    const name = req.params.name;

    //? Envoie du resultat json
    res.json({
        message: `Bonjour ${name}`
    });
};

export const getById = (req, res) => {
    //? Récuperation du parametre "id" dans la route "/demo/:id([0-9]+)"
    const id = req.params.id;

    //? Envoie du resultat json
    res.json({
        message: `L'id est ${id}.`
    });
};