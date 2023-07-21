import formRepository from "../Models/formModels.js";

function findAll(req, res) {
    formRepository.findAll().then((result) => {
        if (result.length === 0) {
            res.status(404).json({ message: "Nenhum resgitro encontrado" });
        }
        else {
            res.json(result);
        }
    });
};

function findForm(req, res) {
    formRepository.findByPk(req.params.id).then((result) => {
        if (result){
            res.json(result);
        } else {
            res.status(404).json({ message: "ID do formulário não encontrado." });
        }
    });
};

function addForm(req, res) {
    formRepository.create({
        nome_completo    : req.body.nome_completo,
        data_nascimento  : req.body.data_nascimento,
        sexo             : req.body.sexo,
        estado_civil     : req.body.estado_civil,
        nacionalidade    : req.body.nacionalidade,
        uf_nascimento    : req.body.uf_nascimento,
        cidade_nascimento: req.body.cidade_nascimento,
        cpf              : req.body.cpf,
        telefone_fixo    : req.body.telefone_fixo,
        telefone_celular : req.body.telefone_celular,
        profissao        : req.body.profissao,
        codigo_postal    : req.body.codigo_postal,
        endereco         : req.body.endereco,
        numero_casa      : req.body.numero_casa,
        bairro           : req.body.bairro,
        complemento      : req.body.complemento,
        uf_endereco      : req.body.uf_endereco,
        cidade_endereco  : req.body.cidade_endereco,
        json_informacao  : req.body.json_informacao
    }).then((result) => res.json(result));
};

async function updateForm(req, res) {
    await formRepository.update(
        {
            nome_completo    : req.body.nome_completo,
            data_nascimento  : req.body.data_nascimento,
            sexo             : req.body.sexo,
            estado_civil     : req.body.estado_civil,
            nacionalidade    : req.body.nacionalidade,
            uf_nascimento    : req.body.uf_nascimento,
            cidade_nascimento: req.body.cidade_nascimento,
            cpf              : req.body.cpf,
            telefone_fixo    : req.body.telefone_fixo,
            telefone_celular : req.body.telefone_celular,
            profissao        : req.body.profissao,
            codigo_postal    : req.body.codigo_postal,
            endereco         : req.body.endereco,
            numero_casa      : req.body.numero_casa,
            bairro           : req.body.bairro,
            complemento      : req.body.complemento,
            uf_endereco      : req.body.uf_endereco,
            cidade_endereco  : req.body.cidade_endereco,
            json_informacao  : req.body.json_informacao
        },
        {
            where: {
                id: req.params.id,
            },
        }
    );
    formRepository.findByPk(req.params.id).then((result) => res.json(result));
}

async function deleteForm(req, res) {
    try { 
        await formRepository.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.json({ message: "Formulário deletado com sucesso!" });
    } catch (error) {
        res.status(500).json({ error: "Erro ao deletar o formulário." });
    }
}


export default { findAll, findForm, addForm, updateForm, deleteForm };