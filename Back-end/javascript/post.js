
    document.querySelector("#add").addEventListener("click",()=>{
        fetch("http://localhost:3000/produtos/novo",{
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },            
            body: JSON.stringify({
                "desc" : document.querySelector("#desc").value,
                "preco": document.querySelector("#preco").value,
                "qtd": document.querySelector("#qtd").value,
                "categoria": document.querySelector("#categoria").value,
            })
            }).then((resposta)=>{
                if(resposta.status != 200){
                    console.log(resposta.json())
            }
            else{
                location.reload();
                }
        })
    })