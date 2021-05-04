const alunos = [];

class HackathonRepository {

    inserir(hackathon) {
        alunos.push(hackathon);
    }

    listar() {
        return alunos;

    }
}

export default new HackathonRepository()