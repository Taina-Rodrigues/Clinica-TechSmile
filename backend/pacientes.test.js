const request = require('supertest');
const { app, resetPacientes } = require('./app');

describe('Rota /pacientes', () => {
  beforeEach(() => {
    resetPacientes();
  });

  it('CT-01: cadastra paciente com dados válidos (201)', async () => {
    const payload = {
      nome: 'Maria Silva',
      telefone: '(85) 99999-1111',
      cpf: '123.456.789-00',
      nascimento: '1980-02-10',
      endereco: 'Rua A, 123'
    };

    const res = await request(app).post('/pacientes').send(payload);
    expect(res.status).toBe(201);
    expect(res.body.nome).toBe('Maria Silva');
    expect(res.body).toHaveProperty('id');

    const lista = await request(app).get('/pacientes');
    expect(lista.status).toBe(200);
    expect(lista.body).toHaveLength(1);
  });

  it('CT-02: bloqueia cadastro sem nome (400)', async () => {
    const res = await request(app)
      .post('/pacientes')
      .send({ telefone: '(85) 99999-1111', cpf: '123.456.789-00' });

    expect(res.status).toBe(400);
    expect(res.body.erro).toBe('Nome obrigatório');

    const lista = await request(app).get('/pacientes');
    expect(lista.body).toHaveLength(0);
  });

  it('CT-03: bloqueia nome só com espaços (400)', async () => {
    const res = await request(app).post('/pacientes').send({ nome: '   ' });
    expect(res.status).toBe(400);
  });
});