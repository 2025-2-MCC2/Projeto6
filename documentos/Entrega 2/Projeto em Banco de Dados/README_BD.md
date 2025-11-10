### 🧱 Estrutura do Banco de Dados  

#### 🔹 Tabela `usuarios`  
Armazena os perfis cadastrados (alunos, mentores e administradores).  

| Campo | Tipo | Restrições | Descrição |
|--------|------|-------------|------------|
| id_usuario | INT AUTO_INCREMENT | PRIMARY KEY | Identificador único |
| nome | VARCHAR(100) | NOT NULL | Nome completo |
| email | VARCHAR(120) | UNIQUE, NOT NULL | E-mail de login |
| senha | VARCHAR(255) | NOT NULL | Senha criptografada |
| perfil | ENUM('aluno','mentor','admin') | NOT NULL | Tipo de usuário |
| data_cadastro | DATETIME | DEFAULT CURRENT_TIMESTAMP | Data do cadastro |

---

#### 🔹 Tabela `equipes`  
Representa os grupos de alunos orientados por mentores.  

| Campo | Tipo | Restrições | Descrição |
|--------|------|-------------|------------|
| id_equipe | INT AUTO_INCREMENT | PRIMARY KEY | Identificador único da equipe |
| nome_equipe | VARCHAR(100) | NOT NULL | Nome da equipe |
| id_mentor | INT | FOREIGN KEY → usuarios(id_usuario) | Mentor responsável |
| semestre | VARCHAR(10) | NOT NULL | Edição do projeto |
| data_criacao | DATETIME | DEFAULT CURRENT_TIMESTAMP | Data de criação |

---

### 🔗 Relacionamento entre as tabelas

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

### 💾 Scripts SQL

```sql
-- Criação da tabela de usuários
CREATE TABLE usuarios (
  id_usuario INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(120) NOT NULL UNIQUE,
  senha VARCHAR(255) NOT NULL,
  perfil ENUM('aluno','mentor','admin') NOT NULL,
  data_cadastro DATETIME DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Criação da tabela de equipes
CREATE TABLE equipes (
  id_equipe INT AUTO_INCREMENT PRIMARY KEY,
  nome_equipe VARCHAR(100) NOT NULL,
  id_mentor INT,
  semestre VARCHAR(10) NOT NULL,
  data_criacao DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (id_mentor) REFERENCES usuarios(id_usuario)
    ON DELETE SET NULL
    ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Inserindo dados de exemplo
INSERT INTO usuarios (nome, email, senha, perfil)
VALUES
('Ana Souza', 'ana@exemplo.com', 'hash123', 'mentor'),
('Lucas Lima', 'lucas@exemplo.com', 'hash456', 'aluno');

INSERT INTO equipes (nome_equipe, id_mentor, semestre)
VALUES ('Equipe Empatia', 1, '2025/2');
```
