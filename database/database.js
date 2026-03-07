let pacientes = [];

function adicionarPaciente(nome, idade, procedimento) {
    const paciente = {
        nome: nome,
        idade: idade,
        procedimento: procedimento
    };

    pacientes.push(paciente);
}

function listarPacientes() {
    return pacientes;
}

module.exports = {
    adicionarPaciente,
    listarPacientes
};