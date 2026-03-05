const express = require("express");
const app = express();

app.get("/:guilherme", (req, res) => {
    const { guilherme } = req.params;

    res.status(200).json({
        mensagem: `Seja bem vindo ${guilherme}`
    });
});

app.listen(3015, () => {
    console.log("Servidor on junior junior (guilherme almeida)");
});