window.courseData = window.courseData || [];
window.courseData.push({
        id: 4,
        title: "Banco de Dados",
        objective: "Estruturar, consultar e proteger bancos SQL e NoSQL, entendendo controle de acesso e vulnerabilidades como SQL Injection.",
        challenges: [
            {
                id: "chal-bd-0",
                title: "Modelagem e Consultas Avançadas (CTEs e JOINs)",
                desc: "Construa um banco normalizado (3NF) e extraia relatórios complexos usando CTEs e agregações.",
                content: `<p><strong>Atividade:</strong> Engenharia de Dados: E-commerce Normalizado</p>
<p><strong>Cenário:</strong> O sistema de vendas da empresa está lento e os relatórios gerenciais não batem. Você precisa recriar a estrutura do zero.</p>
<h3>Tarefas:</h3>
<ul>
    <li>Modele e crie (DDL) 4 tabelas relacionais em um banco de dados (ex: PostgreSQL ou MySQL via Docker): <code>Clientes</code>, <code>Pedidos</code>, <code>Produtos</code> e <code>Itens_Pedido</code>. Garanta que o modelo respeite a 3ª Forma Normal (3NF).</li>
    <li>Insira massa de dados simulada (pelo menos 10 registros por tabela).</li>
    <li>Escreva uma consulta analítica usando <strong>CTE (WITH)</strong> e <strong>JOINs</strong> complexos que responda: <em>"Quais são os 3 clientes que mais gastaram no sistema, e qual foi o ticket médio de cada um?"</em></li>
</ul>
<h3>Validação:</h3>
<p>Execute sua query analítica e verifique se o cálculo de agregações (SUM, AVG, GROUP BY) retorna os resultados esperados com precisão.</p>`
            },
            {
                id: "chal-bd-1",
                title: "Performance e Otimização de Consultas",
                desc: "Identifique gargalos de performance usando planos de execução e resolva com Índices.",
                content: `<p><strong>Atividade:</strong> Otimização de Banco de Dados e Índices B-Tree</p>
<p><strong>Cenário:</strong> Uma query de busca de usuários por e-mail está derrubando a CPU do servidor sempre que o sistema tem pico de acessos. O CTO pediu para você analisar a situação.</p>
<h3>Tarefas:</h3>
<ul>
    <li>No seu banco de dados local, crie uma tabela <code>Usuarios</code> e injete milhares de registros falsos (você pode fazer um loop com um script Python ou procedure).</li>
    <li>Execute uma busca pelo campo e-mail usando o comando <code>EXPLAIN ANALYZE</code> (ou equivalente do seu SGDB) e observe o tempo de execução e o "Seq Scan" (Full Table Scan).</li>
    <li>Crie um Índice B-Tree (<code>CREATE INDEX</code>) na coluna e-mail.</li>
    <li>Rode o <code>EXPLAIN ANALYZE</code> novamente e compare a diferença de tempo e o custo da operação (agora usando "Index Scan").</li>
</ul>
<h3>Validação:</h3>
<p>Documente o antes e depois da execução. A redução drástica no custo da operação comprova que você sabe otimizar sistemas em escala.</p>`
            },
            {
                id: "chal-bd-2",
                title: "Administração de Acessos (Grants e Roles)",
                desc: "Implemente o Princípio do Menor Privilégio criando usuários limitados para ferramentas de BI.",
                content: `<p><strong>Atividade:</strong> Segurança de Banco de Dados e Controle de Acesso</p>
<p><strong>Cenário:</strong> A equipe de Inteligência de Negócios (BI) pediu acesso direto ao banco de dados de produção para gerar gráficos. Dar a senha do usuário "root" seria uma falha gravíssima de segurança.</p>
<h3>Tarefas:</h3>
<ul>
    <li>Crie um novo usuário no banco de dados chamado <code>usuario_bi</code>.</li>
    <li>Conceda a esse usuário <strong>apenas</strong> permissões de leitura (<code>GRANT SELECT</code>) nas tabelas de <code>Pedidos</code> e <code>Produtos</code>.</li>
    <li>Garanta que ele não tenha permissões de <code>INSERT</code>, <code>UPDATE</code> ou <code>DELETE</code>, e não consiga ler a tabela <code>Clientes</code> (onde ficam dados sensíveis como senhas e cartões).</li>
</ul>
<h3>Validação:</h3>
<p>Conecte-se ao banco de dados utilizando as credenciais do <code>usuario_bi</code> e tente executar um comando <code>DROP TABLE Pedidos</code> ou um <code>SELECT</code> na tabela proibida. O banco deve retornar um erro de permissão negada (Access Denied).</p>`
            }
        ],
        usefulLinks: [
            { title: "SQLZoo", url: "https://sqlzoo.net/", desc: "Exercícios interativos de SQL" }
        ],
        sections: [
            {
                name: "Vídeos e Playlists",
                icon: "play-circle",
                resources: [
                    { id: "db01", title: "Bancos de Dados Simplificado", channel: "Lan Code", desc: "Conceitos fundamentais", url: "https://youtu.be/VbNDTOGjt4o" },
                    { id: "db02", title: "SQL Descomplicado", channel: "Lan Code", desc: "Consultas e manipulação", url: "https://youtu.be/WTWMPMndJVs" },
                    { id: "db03", title: "Relacionamentos em SQL", channel: "Lan Code", desc: "Joins e relacionamentos", url: "https://youtu.be/kRSykGdHv48" },
                    { id: "db04", title: "SQL Completo", channel: "Dev Aprender", desc: "Do básico ao avançado", url: "https://youtube.com/playlist?list=PLnNURxKyyLIInBfeGiJ8L314AD015mHkv" }
                ]
            }
        ]
    });
