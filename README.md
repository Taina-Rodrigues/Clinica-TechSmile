# TechSmile – Sistema Monolítico em Camadas

## Descrição do Projeto
O **TechSmile** é um sistema web desenvolvido para o gerenciamento de uma clínica odontológica, contemplando funcionalidades como controle de pacientes, agenda de consultas, prontuário, financeiro e autenticação de usuários.

O sistema foi desenvolvido utilizando **HTML, CSS e JavaScript puro**, seguindo o modelo de **arquitetura monolítica**, onde toda a aplicação está concentrada em um único projeto, porém organizada de forma lógica em **camadas bem definidas**.

---

## Arquitetura Utilizada

O projeto segue o modelo de **Sistema Monolítico em Camadas**, no qual todas as funcionalidades estão integradas em uma única aplicação, mas separadas conceitualmente para facilitar a manutenção, leitura e entendimento do código.

### 🔹 Camadas do Sistema

#### Camada de Apresentação (Interface)
Responsável pela interação com o usuário.

- Estrutura HTML das páginas (Login, Dashboard, Pacientes, Agenda e Financeiro)
- Estilização com CSS embutido
- Componentes visuais como tabelas, formulários, botões e modais

**Exemplos no código:**
- `<header>`, `<main>`, `<section>`, `<footer>`
- Formulários de login, cadastro de pacientes e agendamentos
- Tabelas de listagem e relatórios

---

#### Camada de Lógica de Aplicação (Negócio)
Responsável pelas regras do sistema e pelo comportamento da aplicação.

- Controle de login e sessão
- Regras de cadastro, edição e exclusão
- Agendamentos e registros financeiros
- Prontuário do paciente
- Navegação entre telas (roteamento por hash)

**Exemplos no código:**
- Funções como `savePatient()`, `saveAppointment()`, `savePayment()`
- Função `router()` para controle das páginas
- Validações de dados antes de salvar informações

---

#### Camada de Persistência de Dados
Responsável pelo armazenamento e recuperação das informações.

- Utilização do **localStorage** como banco de dados local
- Dados persistidos mesmo após recarregar a página

**Dados armazenados:**
- Usuários
- Pacientes
- Agendamentos
- Pagamentos
- Sessão do usuário
- Anotações

**Exemplos no código:**
```js
localStorage.setItem(key, JSON.stringify(valor));
localStorage.getItem(key);
