module.exports = {

    add(req, res, next){
        
        console.table({

            nome: req.body.nome,
            data: req.body.data,
            hora: req.body.hora
      
        })
        res.send("Inserido na Agenda com sucesso!")

        
        /*.then(function(){
            res.send("Inserido na Agenda com sucesso!")
            console.log(titulo,conteudo,nome);
            }).catch(function(erro){
                res.send("Houve um erro: "+erro)
            })
    }*/
}

}

     

