let usuarios = []
let idUsuario = 1

function listarUsuarios(req, res) {
    res.status(200).json(usuarios)
}

function criarUsuario(req, res) {
    const {nome, email} = req.body;

    if(!nome || !email) {
        return res.status(400).json({mensagem: "O campo nome/email deve ser preenchido!"})
    }

    let usuario = {
        nome: nome,
        email: email,
        id: idUsuario++
    }

    usuarios.push(usuario)
    
}

export {listarUsuarios, criarUsuario}