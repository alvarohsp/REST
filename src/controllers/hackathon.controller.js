import Hackathon from "../models/hackathons.model";
import HackathonRepository from "../repositories/hackathon.repository";
import { Validador } from '../utils/validador.util';

export default class HackathonController {
    async incluir(hackathon) {
        const { nome, nota, isAprovado } = hackathon;

        Validador.validarParametro([{ nome }])

        const aluno = new Hackathon(nome, nota, isAprovado);
        HackathonRepository.inserir(aluno);
        return { mensagem: 'Aluno inserido com sucesso', id: aluno.id };
    }

    alterar() {}

    excluir() {}

    obter() {}

    async listar() {
        return HackathonRepository.listar();
    }
}