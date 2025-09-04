
export function verificarAdm(req, res, next) {

    let {tipoUser} = req.body;

    if(tipoUser === "admin") {
        res.status(201).json("Rota permitida")
        next()
    }

    return res.status(401).json("Função não permitida a este usuario!")
}