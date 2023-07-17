import { Sequelize } from "sequelize";
import db from "../db.js";

export default db.define("form", {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    nome_completo: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    data_nascimento: {
        type: Sequelize.DATEONLY,
        allowNull: false,
    },
    sexo: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    estado_civil: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    nacionalidade: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    uf_nascimento: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    cidade_nascimento: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    telefone_fixo: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    telefone_celular: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    cns: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    profissao: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    id_profissional: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    codigo_postal: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    endereco: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    numero_casa: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    bairro: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    complemento: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    uf_endereco: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    cidade_endereco: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    json_informacao: {
        type: Sequelize.STRING,
        allowNull: false
    }
});
