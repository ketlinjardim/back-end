fetch("http://localhost:3000/produtos")
.then((resposta)=>{
    if(resposta.status == 200){
        resposta.json().then((dados)=>{
            //dados é a lista de objetos que vem da api
            const div = document.querySelector("#get");
            dados.map((contato)=>{
                const card = document.createElement("tr")
                card.id = contato.id
                const desc = document.createElement("th")
                desc.innerText = contato.desc
                const preco = document.createElement("th")
                preco.innerText = contato.preco
                const qtd = document.createElement("th")
                qtd.innerText = contato.qtd
                const categoria = document.createElement("th")
                categoria.innerText = contato.categoria
                const edit = document.createElement("a")
                edit.className = "bi bi-pencil-fill"
               edit.href = `./formulario.html?id=${contato.id}&desc=${contato.desc}&preco=${contato.preco}&qtd=${contato.qtd}&categoria=${contato.categoria}`



                const del = document.createElement("button")
                del.className = "delete bi bi-trash3-fill"
                del.addEventListener("click",()=>{
                        fetch(`http://localhost:3000/produtos/excluir/${contato.id}`,{
                            method: 'DELETE',
                            headers: {
                                'Content-Type' : 'application/json'
                            },
                            }).then((resposta)=>{
                                if(resposta.status != 200){
                                    console.log(resposta.json())
                            }

                            location.reload();

                        })
                    })

                    
                card.append(desc, preco, qtd, categoria, edit, del)
                div.append(card)
            })
        })
    }
})