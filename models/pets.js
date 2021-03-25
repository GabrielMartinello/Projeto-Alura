const conexao = require('../infraestrutura/conexao');
const uploadDeArquivos = require('../infraestrutura/arquivos/uploadDeArquivos');

class Pet {
    adicionaPet(pet, res) {
        const query = 'INSERT INTO PETS SET ?';

        uploadDeArquivos(pet.imagem, pet.nome, (erro,novoCaminho) => {
            if(erro) {
                res.status(400).json({erro});
            }else {
                const novoPet = { nome: pet.nome, imagem: novoCaminho }
                conexao.query(query, novoPet, (erro) => {
                    if(erro) {
                        res.status(400).json(erro);
                    }else {
                        res.status(200).json(novoPet);
                    }
                });
            }
        });
    }   
}

module.exports = new Pet();