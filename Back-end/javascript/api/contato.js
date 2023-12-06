export class Contato{
    id;
    desc;
    preco;
    qtd;
    categoria;

    constructor(id, desc, preco, qtd,categoria){
        this.id = id;
        this.desc = desc;
        this.preco = preco;
        this.qtd = qtd;
        this.categoria = categoria;
    }
}
