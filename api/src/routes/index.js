const { Router } = require("express");
const { express } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const Videogames = require("./videogames.js");
const Videogame = require("./videogame.js");
const Genre = require("./genre.js");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/videogames', Videogames);
//router.use('/videogame', Videogame);
//router.use('/genre', Genre);



module.exports = router;
