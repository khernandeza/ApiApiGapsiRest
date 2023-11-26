const { Router } = require('express');
const router = Router();

//Raiz
router.get('/', (req, res) => {    
    res.json(
        {
            "welcome": "Bienvenido Candidato 01",
            "version": "1.0.0"
        }
    );
})

module.exports = router;