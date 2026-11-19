const express = require('express');
const app = express();
app.use(express.json());

let pacientes = [];
let proximoId = 1;

function resetPacientes() {
  pacientes = [];
  proximoId = 1;
}

app.get('/', (req, res) => {
  res.status(200).send('Servidor TechSmile funcionando!');
});

app.post('/pacientes', (req, res) => {
  const { nome, telefone, cpf, nascimento, endereco } = req.body || {};

  if (typeof nome !== 'string' || nome.trim() === '') {
    return res.status(400).json({ erro: 'Nome obrigatório' });
  }

  const paciente = {
    id: proximoId++,
    nome: nome.trim(),
    telefone: telefone || '',
    cpf: cpf || '',
    nascimento: nascimento || '',
    endereco: endereco || ''
  };
  pacientes.push(paciente);
  res.status(201).json(paciente);
});

app.get('/pacientes', (req, res) => {
  res.status(200).json(pacientes);
});

module.exports = { app, resetPacientes };