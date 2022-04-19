



// GERAR UM MODEL PARA CRIAR TABELA

// POSTAGEM
// const Postagem = sequelize.define('postagens', {
//      titulo: {
//          type: Sequelize.STRING
//      },
//      conteudo: {
//          type: Sequelize.TEXT // TEXT é ilimitado
//      }
//  })

 // INSERINDO DADOS NA TABELA POSTAGEM
//  Postagem.create({
//      titulo: "TESTANDO",
//      conteudo: "TESTANDO MYSQL NO NODE.JS"
//  })



 // USUARIO
// const Usuario = sequelize.define('usuarios', {
//     nome: {
//         type: Sequelize.STRING
//     },
//     sobrenome: {
//         type: Sequelize.STRING
//     },
//     idade: {
//         type: Sequelize.INTEGER
//     },
//     email: {
//         type: Sequelize.STRING
//     }
// });


// Usuario.create({
//     nome: "Pedro",
//     sobrenome: "Alves",
//     email: "pedro.silva@gmail.com",
//     idade: 17
// })

// GERAR UM MODEL NO MYSQL
// Postagem.sync({force: true}) // SINCRONIZAR O MODEL COM O MYSQL
// Usuario.sync({force: true})







// TESTANDO A CONEXÃO
// sequelize.authenticate().then(function(){
//     console.log("Conectado com sucesso")
// }).catch(function(erro){
//     console.log("Falha ao se conectar" + erro)
// })