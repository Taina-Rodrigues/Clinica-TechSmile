TechSmile: Planejamento e Automação de Testes

Atividade 04 da disciplina TQS (Tecnologia em Análise e Desenvolvimento de Sistemas, IFCE). Professor: Wesnei de Paiva Batista

Alunos: Tainá Rodrigues dos Santos
José Ailton Carneiro Alves Júnior
Papéis: Analista de QA: Tainá| Desenvolvedor: Ailton

1. Objetivo
Aplicar conceitos de Qualidade de Software, indo do planejamento documentado de uma regra de negócio até a automação dos testes com Jest e Supertest.

2. Regra de negócio testada
No sistema TechSmile, a função savePatient() (em index.html) bloqueia o cadastro de um paciente quando o nome não é informado ("Nome obrigatório").
Para permitir a automação com Supertest, essa mesma regra foi levada para o backend, na rota:

POST /pacientes
Por que esta regra é crítica? O paciente é a base de todo o sistema: prontuário, agenda e financeiro dependem dele. Um cadastro sem nome gera registros sem identificação, compromete o histórico clínico e a cobrança.
O que poderia acontecer sem o teste? Uma alteração futura poderia remover a validação sem ninguém perceber, e registros inválidos passariam a ser salvos, deixando agendamentos e pagamentos órfãos.

3. Contrato de Teste (Etapa 1: QA)
Cenário 1: Caminho Feliz
Campo	Descrição
Identificação	CT-01: Cadastro de paciente com dados válidos via POST /pacientes
Pré-condições	API em execução. Lista de pacientes vazia. Payload JSON completo: { "nome": "Maria Silva", "telefone": "(85) 99999-1111", "cpf": "123.456.789-00", "nascimento": "1980-02-10", "endereco": "Rua A, 123" }
Ação (Passos)	1. Enviar POST /pacientes com o payload e Content-Type: application/json. 2. Enviar GET /pacientes para conferir a listagem.
Resultado Esperado	Status HTTP 201 (Created). O corpo retorna o paciente com id gerado e nome igual a "Maria Silva". O GET /pacientes retorna status 200 com 1 paciente.
Cenário 2: Caminho Triste
Campo	Descrição
Identificação	CT-02: Bloqueio de cadastro sem nome via POST /pacientes
Pré-condições	API em execução. Lista de pacientes vazia. Payload JSON incompleto: { "telefone": "(85) 99999-1111", "cpf": "123.456.789-00" } (sem nome)
Ação (Passos)	1. Enviar POST /pacientes com o payload sem nome. 2. Enviar GET /pacientes para conferir que nada foi salvo.
Resultado Esperado	Status HTTP 400 (Bad Request). O corpo retorna { "erro": "Nome obrigatório" }. O GET /pacientes continua retornando lista vazia.
Cenário extra
Campo	Descrição
Identificação	CT-03: Bloqueio de cadastro com nome contendo apenas espaços
Pré-condições	API em execução. Payload: { "nome": "   " }
Ação (Passos)	Enviar POST /pacientes com o payload.
Resultado Esperado	Status HTTP 400 (Bad Request), pois o nome é validado após trim().

4. Automação (Etapa 2: Dev)
Tecnologias: Node.js, Express, Jest, Supertest
Arquivos (pasta backend/):
Arquivo	Função
app.js	Define o app Express e as rotas POST /pacientes e GET /pacientes
server.js	Sobe o servidor na porta 3000
pacientes.test.js	Testes automatizados (CT-01, CT-02 e CT-03)
Como executar
bash
cd backend
npm install
npm test

Para subir a API manualmente:
bash
node server.js

5. Validação conjunta (Etapa 3: QA x Dev)
Execução com a regra ativa
 PASS  ./pacientes.test.js
  Rota /pacientes
    √ CT-01: cadastra paciente com dados válidos (201)
    √ CT-02: bloqueia cadastro sem nome (400)
    √ CT-03: bloqueia nome só com espaços (400)

Tests:       3 passed, 3 total
Verificação contra falso positivo

Para garantir que os testes realmente protegem a regra, a validação do nome foi desativada temporariamente em app.js. Resultado:

 FAIL  ./pacientes.test.js
    √ CT-01
    × CT-02   Expected: 400, Received: 201
    × CT-03   Expected: 400, Received: 201

Tests:       2 failed, 1 passed, 3 total

Com a validação restaurada, os 3 testes voltaram a passar. Isso comprova que o CT-02 e o CT-03 detectam a quebra da regra de negócio.

(Inserir aqui os prints do terminal vermelho e do terminal verde.)

6. Rastreabilidade: documentação x código
Contrato	Teste automatizado (pacientes.test.js)	Status esperado
CT-01	it('CT-01: cadastra paciente com dados válidos (201)')	201
CT-02	it('CT-02: bloqueia cadastro sem nome (400)')	400
CT-03	it('CT-03: bloqueia nome só com espaços (400)')