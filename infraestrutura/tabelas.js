class Tabelas {
    init(conexao) {
        this.conexao = conexao;
        this.criarAtendimentos();
        this.criarClientes();
        this.criarPets();
    }

    criarAtendimentos() {
        const sql = 'CREATE TABLE IF NOT EXISTS ATENDIMENTOS (id int NOT NULL AUTO_INCREMENT, CLIENTE VARCHAR(11) NOT NULL, PET VARCHAR(20), SERVICO VARCHAR(20) NOT NULL,DATA DATETIME NOT NULL, DATACRIACAO DATETIME NOT NULL, STATUS VARCHAR(20)NOT NULL, OBSERVACOES TEXT, PRIMARY KEY(id))'
        this.conexao.query(sql, (erro) => {
            if(erro) {
                console.log(erro);
            }else {
                console.log('Tabela atendimentos criada com sucesso');
            }
        });
    }

    criarClientes() {
        const sql = 'CREATE TABLE IF NOT EXISTS CLIENTE(id INT NOT NULL AUTO_INCREMENT, NOME VARCHAR(100) NOT NULL, CPF VARCHAR(11) NOT NULL, ENDERECO VARCHAR(150) ,PRIMARY KEY(id))';
        this.conexao.query(sql, (erro) => {
            if(erro) {
                console.log(erro);
            }else {
                console.log('Tabela clientes criada com sucesso;')
            }
    
        });
    }

    criarPets() {
        const query = 'CREATE TABLE IF NOT EXISTS PETS (ID INT NOT NULL AUTO_INCREMENT, NOME VARCHAR(100), IMAGEM VARCHAR(300), PRIMARY KEY(ID))'
        this.conexao.query(query, (erro) => {
            if(erro) {
                console.log(erro)
            }else {
                console.log("Tabela PETS criadacom sucesso")
            }
            
        })
    }

}
module.exports = new Tabelas;