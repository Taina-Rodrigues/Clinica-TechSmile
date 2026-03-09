TechSmile – Sistema Monolítico em Camadas
Descrição Geral do Sistema

O TechSmile é um sistema web desenvolvido para auxiliar no gerenciamento de uma clínica odontológica. A aplicação permite controlar pacientes, organizar agendamentos de consultas, registrar informações financeiras e manter o prontuário dos pacientes.
O sistema foi desenvolvido utilizando HTML, CSS e JavaScript puro, sendo executado diretamente no navegador. A aplicação segue o modelo de arquitetura monolítica organizada em camadas, onde todas as funcionalidades estão em um único projeto, mas separadas conceitualmente para facilitar a manutenção e compreensão do código.

Requisitos Funcionais
O sistema deve permitir:
Realizar login no sistema.
Exibir um painel inicial (dashboard) com resumo das informações.
Cadastrar novos pacientes.
Editar dados de pacientes.
Excluir pacientes.
Visualizar prontuário do paciente.
Registrar evoluções no prontuário.
Agendar consultas.
Cancelar consultas agendadas.
Registrar pagamentos realizados pelos pacientes.
Visualizar movimentações financeiras.
Gerar relatório financeiro simples.
Registrar anotações administrativas.

Requisitos Não Funcionais
O sistema deve funcionar diretamente em navegadores web modernos.
A interface deve ser simples e intuitiva.
O sistema deve possuir organização lógica em camadas.
Os dados devem ser armazenados localmente no navegador utilizando localStorage.
O sistema deve possuir fácil manutenção e compreensão do código.
O sistema deve funcionar em navegadores como Chrome, Edge ou Firefox.

Arquitetura do Sistema
O projeto segue o modelo de Sistema Monolítico em Camadas, no qual todas as funcionalidades estão integradas em uma única aplicação, porém organizadas conceitualmente em três camadas principais:

Camada de Apresentação
Camada de Lógica de Aplicação
Camada de Persistência de Dados

Essa organização permite que cada parte do sistema tenha uma responsabilidade específica.

Justificativa da Arquitetura em Camadas
A arquitetura em camadas foi adotada para organizar o sistema de forma mais estruturada, separando as responsabilidades da aplicação.
Com essa abordagem:
A camada de apresentação é responsável pela interface com o usuário.
A camada de lógica de aplicação controla as regras do sistema e o comportamento das funcionalidades.
A camada de persistência de dados realiza o armazenamento e recuperação das informações.
Essa separação facilita a manutenção do código, melhora a legibilidade do projeto e permite futuras melhorias ou expansões no sistema.

Camadas do Sistema
Camada de Apresentação (Interface)
Responsável pela interação com o usuário.
Componentes principais:
Estrutura HTML das páginas
Estilização com CSS
Elementos visuais como tabelas, formulários, botões e modais
Exemplos presentes no código:
<header>
<main>
<section>
<footer>
Formulários de login
Cadastro de pacientes
Tabelas de listagem
Interface de agenda e financeiro

Camada de Lógica de Aplicação (Negócio)
Responsável pelas regras e funcionamento do sistema.
Principais responsabilidades:
Controle de login e sessão de usuários
Regras de cadastro, edição e exclusão de pacientes
Gerenciamento de agendamentos
Registro de pagamentos
Controle de prontuário do paciente
Navegação entre páginas do sistema
Exemplos de funções no código:
savePatient()
saveAppointment()
savePayment()
router()
renderAll()

Essas funções controlam o comportamento e as operações do sistema.

Camada de Persistência de Dados
Responsável pelo armazenamento e recuperação das informações.
O sistema utiliza localStorage, que é um mecanismo de armazenamento local do navegador.
Os dados são mantidos mesmo após atualizar ou fechar a página.

Dados armazenados:
Usuários
Pacientes
Agendamentos
Pagamentos
Sessão do usuário
Anotações
Exemplos de uso no código:
localStorage.setItem(key, JSON.stringify(valor));
localStorage.getItem(key);

Diagrama Simples da Arquitetura

+----------------------------+
| Camada de Apresentação     |
| (HTML + CSS)               |
| Interface do usuário       |
+------------↓---------------+


+----------------------------+
| Camada de Lógica           |
| (JavaScript)               |
| Regras e funcionalidades   |
+------------↓---------------+


+----------------------------+
| Camada de Persistência     |
| (LocalStorage)             |
| Armazenamento de dados     |
+----------------------------+

Tecnologias Utilizadas
As tecnologias utilizadas no desenvolvimento do sistema foram:
HTML5
CSS3
JavaScript
LocalStorage (armazenamento local do navegador)

Estrutura de Pastas
Estrutura atual do projeto:
Clínica-TechSmile
index.html
logo_techsmile.png
README.md
Diagrama TechSmile.drawio.png
Atividade_Arquitetura_de_Sistemas___Atividade_1.pdf

Instruções para Execução do Projeto
Para executar o sistema localmente:
Baixar ou clonar o repositório do projeto.
Abrir a pasta do projeto.
Abrir o arquivo index.html em um navegador web.
O sistema será carregado automaticamente.
Usuário padrão para acesso:
Usuário: admin
Senha: 123

Identificação dos Autores
Projeto desenvolvido por:
Tainá Rodrigues
Curso:
Análise e Desenvolvimento de Sistemas

Instituição:
IFCE – Instituto Federal do Ceará



## Containerização com Docker
Para atender à atividade de containerização, o projeto agora possui configuração para executar frontend e backend com Docker.

### Arquivos adicionados
- `backend/Dockerfile`: cria a imagem do servidor Node.js da aplicação.
- `frontend/Dockerfile`: cria a imagem do frontend usando Nginx para servir os arquivos estáticos.
- `docker-compose.yml`: orquestra os dois serviços (`frontend` e `backend`).
- `.dockerignore`: evita envio de arquivos desnecessários para o contexto de build.

### Como executar com Docker
1. Na raiz do projeto, execute:
   ```bash
   docker compose up --build
   ```
2. Acesse os serviços:
   - Frontend: `http://localhost:8080`
   - Backend: `http://localhost:3000`

### Como parar os containers
```bash
docker compose down
```
