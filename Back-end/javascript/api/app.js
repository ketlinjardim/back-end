import express  from 'express'
import cors from 'cors'
import { Contato } from './contato.js';

export let listaContato = [
    
    new Contato(1, "Tenis", 150, 10, "Calçados"),
    new Contato(2, "Sofa", 1550, 5, "Moveis"),
    new Contato(3, "Camisa", 100, 100, "Roupas"),
    new Contato(4, "Calça", 75, 100, "Roupas"),
]

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended : true}));

app.get("/produtos",(req, res)=>{
    return res.status(200).json(listaContato)
})

app.post("/login", (req, res) =>{
    const {user, pass} = req.body;

    if(user != null && pass != null){

        if(user == "Farina" && pass == 123){
            console.log(user, pass);
    
            return res.status(200).json("ok")
        }

        else{
            return res.status(401).json("usuario ou senha incorretos")
        }
    }
    return res.status(401).json("os campos nao podem ser vazios")
})

app.post("/produtos/novo", (req, res)=>{
    const { desc, preco, qtd, categoria } = req.body;
    listaContato.push(new Contato(listaContato.length + 1, desc, preco, qtd, categoria));
    return res.status(200).json("Cadastrado com sucesso!");
})

app.put("/produtos/alterar/:id", (req,res)=>{
    const { id } = req.params;
    const { desc, preco, qtd, categoria } = req.body;
    let contato = listaContato.find(p => p.id == id)
    contato.desc = desc;
    contato.preco = preco;
    contato.qtd = qtd;
    contato.categoria = categoria;
    return res.status(200).json("Alterado!")
})

app.delete("/produtos/excluir/:id", (req,res)=>{
    let { id } = req.params;
    listaContato = listaContato.filter(p => p.id != id)
    return res.status(200).json("Deletado!")
})

app.listen(3000,()=>{
    console.log("Running!")
})