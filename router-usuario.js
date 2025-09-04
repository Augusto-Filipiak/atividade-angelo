import Router from "express";
import { chamarApi} from "./middleware.js";
import { listarUsuarios, criarUsuario } from "./controller-usuario.js";
import { verificarAdm } from "./auth.js";
const routerUsers = Router();
routerUsers.use(chamarApi);


routerUsers.get("/", (req, res) => {  
    listarUsuarios(req, res)
})

routerUsers.post("/", verificarAdm, (req, res) => {
    criarUsuario(req, res)
})


export default routerUsers;