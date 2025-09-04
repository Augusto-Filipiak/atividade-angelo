import express from "express";    
import  routerUsers  from "./router-usuario.js"

const app = express();

app.use(express.json());

app.use("/usuarios", routerUsers)

app.listen(3000);