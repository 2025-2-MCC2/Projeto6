
---

## 📘 1. Introdução
O presente documento apresenta a **modelagem parcial e implementação inicial** do banco de dados relacional utilizado no sistema **Lideranças Empáticas**, uma aplicação web para gerenciamento de equipes, atividades e resultados de projetos sociais.  

Esta entrega contempla a **implementação de duas tabelas** essenciais para o funcionamento do sistema, definindo **chaves primárias, estrangeiras, tipos de dados e relacionamentos** conforme as boas práticas de modelagem relacional.

---

## 🧱 2. Estrutura do Banco de Dados

### 🔹 Tabela 1 – `usuarios`
A tabela `usuarios` armazena todos os perfis do sistema, incluindo **alunos, mentores e administradores**, responsáveis por acessar e gerenciar o ambiente web.  

| Campo           | Tipo de Dado        | Restrições / Regras                      | Descrição |
|-----------------|--------------------|------------------------------------------|------------|
| id_usuario      | INT AUTO_INCREMENT | PRIMARY KEY                              | Identificador único do usuário |
| nome            | VARCHAR(100)       | NOT NULL                                | Nome completo do usuário |
| email           | VARCHAR(120)       | UNIQUE, NOT NULL                        | E-mail usado para autenticação |
| senha           | VARCHAR(255)       | NOT NULL                                | Senha criptografada (bcrypt) |
| perfil          | ENUM('aluno','mentor','admin') | NOT NULL | Define o tipo de acesso do usuário |
| data_cadastro   | DATETIME           | DEFAULT CURRENT_TIMESTAMP                | Data e hora do registro |

#### 💬 Observações:
- A tabela segue o **padrão de autenticação segura**, com uso de **hash** na senha.
- O campo `perfil` garante controle de acesso diferenciado por função.

---

### 🔹 Tabela 2 – `equipes`
A tabela `equipes` representa os grupos formados pelos alunos, cada um orientado por um mentor.

| Campo          | Tipo de Dado        | Restrições / Regras                      | Descrição |
|----------------|--------------------|------------------------------------------|------------|
| id_equipe      | INT AUTO_INCREMENT | PRIMARY KEY                              | Identificador único da equipe |
| nome_equipe    | VARCHAR(100)       | NOT NULL                                | Nome da equipe |
| id_mentor      | INT                | FOREIGN KEY (usuarios.id_usuario)        | Relaciona o mentor responsável |
| semestre       | VARCHAR(10)        | NOT NULL                                | Indica o semestre/edição do projeto |
| data_criacao   | DATETIME           | DEFAULT CURRENT_TIMESTAMP                | Data de criação do registro |

#### 💬 Observações:
- Cada equipe está vinculada a um **mentor (usuário)**.
- O relacionamento entre `equipes` e `usuarios` é de **1:N (um mentor pode orientar várias equipes)**.

---

## 🔗 3. Relacionamento entre as Tabelas
O diagrama abaixo representa o vínculo entre as entidades criadas:

```
┌───────────────┐           ┌───────────────┐
│   usuarios    │1         N│    equipes    │
│───────────────│───────────│───────────────│
│ id_usuario PK │◄──────────│ id_mentor FK  │
│ nome          │           │ nome_equipe   │
│ email         │           │ semestre      │
│ perfil        │           │ data_criacao  │
└───────────────┘           └───────────────┘
```

---

## 💾 4. Scripts SQL de Criação

```sql
-- Criação da Tabela de Usuários
CREATE TABLE usuarios (
  id_usuario INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(120) NOT NULL UNIQUE,
  senha VARCHAR(255) NOT NULL,
  perfil ENUM('aluno','mentor','admin') NOT NULL,
  data_cadastro DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Criação da Tabela de Equipes
CREATE TABLE equipes (
  id_equipe INT AUTO_INCREMENT PRIMARY KEY,
  nome_equipe VARCHAR(100) NOT NULL,
  id_mentor INT,
  semestre VARCHAR(10) NOT NULL,
  data_criacao DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (id_mentor) REFERENCES usuarios(id_usuario)
);
```

---

## 🧩 5. Expansão Planejada
Nas próximas etapas do projeto, o banco de dados será expandido com:
- **Tabela `atividades`**: registro das ações realizadas por cada equipe (arrecadações, metas, valores, etc.);
- **Tabela `participantes_equipes`**: tabela intermediária ligando alunos a equipes;
- **Tabela `relatorios`**: geração de relatórios de desempenho por equipe e período.

Essas expansões garantirão **integridade referencial**, **normalização** e **desempenho** adequados ao sistema completo.

---

## 📎 6. Referência no README principal
No arquivo principal do repositório, incluir:
```markdown
## 📂 Banco de Dados
A documentação da modelagem e scripts do banco estão disponíveis em  
👉 [`/BD/README.md`](./BD/README.md)
```

---

## 🏁 7. Conclusão
Com esta modelagem parcial, o projeto “Lideranças Empáticas” possui uma base sólida e escalável para armazenamento de dados, garantindo **segurança, integridade e organização** das informações dos usuários e equipes.  
A estrutura proposta segue boas práticas de **modelagem relacional e desenvolvimento full stack**, atendendo integralmente aos critérios da **Entrega 2 de Banco de Dados**.

---

