window.courseData = window.courseData || [];
window.courseData.push({
        id: 6,
        title: "Cultura Hacker",
        objective: "Desenvolver comunicação técnica, redação de relatórios e posicionamento profissional em cibersegurança.",
        challenges: [
            {
                id: "chal-soft-0",
                title: "Gestão de Crise e Comunicação Executiva",
                desc: "Escreva um Relatório de Incidente (Post-Mortem) adaptando a linguagem técnica para a Diretoria.",
                content: `<p><strong>Atividade:</strong> Comunicação Adaptativa (Tech vs. Business)</p>
<p><strong>Cenário:</strong> O banco de dados principal de vendas da sua empresa caiu por 2 horas devido a um erro humano (um UPDATE sem WHERE feito por um júnior). Você precisa reportar isso.</p>
<h3>Tarefas:</h3>
<p>Escreva um documento com duas seções distintas:</p>
<ul>
    <li><strong>1. Resumo Executivo (Para o CEO/Diretoria):</strong> Explique o que aconteceu, qual foi o impacto nos negócios (lucro/clientes) e o que foi feito para resolver, <strong>sem usar nenhum jargão técnico</strong> complexo.</li>
    <li><strong>2. Root Cause Analysis (Para a Engenharia):</strong> Explique tecnicamente a falha, detalhe o comando que causou o problema e proponha uma solução sistêmica (ex: controle de acesso, backups point-in-time) para que não se repita.</li>
</ul>
<h3>Validação:</h3>
<p>Peça para alguém de fora da área de TI ler a primeira seção e pergunte se a pessoa entendeu a gravidade e a solução. A capacidade de traduzir tecnologia para negócios é o que define líderes na área técnica.</p>`
            },
            {
                id: "chal-soft-1",
                title: "Gestão Ágil e Estimativa de Esforço",
                desc: "Mapeie um projeto, estime horas de execução e confronte com a realidade.",
                content: `<p><strong>Atividade:</strong> Autogerenciamento e Identificação de Gargalos</p>
<p><strong>Cenário:</strong> Um dos maiores problemas de profissionais juniores é a incapacidade de estimar quanto tempo uma tarefa vai levar, gerando atrasos em cascata na equipe.</p>
<h3>Tarefas:</h3>
<ul>
    <li>Crie um quadro Kanban (Trello, Jira ou Notion).</li>
    <li>Escolha um mini-projeto técnico (ex: configurar um laboratório de Pentest ou fazer um script de automação) e quebre-o em pelo menos 5 micro-tarefas.</li>
    <li>Anote no card a <strong>Estimativa de Tempo</strong> de cada tarefa antes de começar.</li>
    <li>Execute o projeto cronometrando o tempo real gasto em cada card.</li>
</ul>
<h3>Validação:</h3>
<p>Escreva uma <strong>Retrospectiva</strong>. Compare o tempo estimado vs o tempo real. Se uma tarefa levou o triplo do tempo, analise o porquê (Falta de conhecimento prévio? Documentação ruim da ferramenta?). Entender sua própria velocidade é essencial para trabalhar em equipe.</p>`
            },
            {
                id: "chal-soft-2",
                title: "Geração de Valor e Open-Source",
                desc: "Construa networking real contribuindo publicamente para a comunidade.",
                content: `<p><strong>Atividade:</strong> Contribuição Desinteressada e Peer Review</p>
<p><strong>Cenário:</strong> O verdadeiro networking na área de tecnologia não é pedir indicação no LinkedIn, mas sim gerar valor provando sua capacidade técnica e colaborativa em público.</p>
<h3>Tarefas:</h3>
<ul>
    <li>Encontre um projeto open-source no GitHub que você utilize (uma ferramenta, um framework ou mesmo um repositório de documentação/estudos).</li>
    <li>Identifique um ponto de melhoria: pode ser a tradução de um README para português, a correção de um bug simples ou a adição de um comentário explicativo no código.</li>
    <li>Faça um Fork, implemente a melhoria e abra um <strong>Pull Request (PR)</strong>.</li>
    <li>Escreva a descrição do PR de forma clara, educada e detalhando o motivo daquela mudança beneficiar o projeto.</li>
</ul>
<h3>Validação:</h3>
<p>O PR em si (mesmo que ainda não aprovado) serve como a prova definitiva de que você sabe trabalhar em equipe de forma assíncrona, sabe usar Git e tem iniciativa. Adicione esse link ao seu portfólio.</p>`
            }
        ],
        usefulLinks: [
            { title: "Manifesto Hacker", url: "http://phrack.org/issues/7/3.html", desc: "A filosofia base da cultura hacker" }
        ],
        sections: [
            {
                name: "Vídeos e Playlists",
                icon: "play-circle",
                resources: [
                    { id: "s04", title: "Comunicação e Oratória", channel: "El Professor da Oratória", desc: "Desenvolvimento da comunicação verbal", url: "https://youtube.com/playlist?list=PLF0WnKFaIjV2s2-vU2up7-cqpOACSx73v" },
                    { id: "s05", title: "Networking Profissional", channel: "Jovens de Negócios", desc: "Relacionamentos estratégicos", url: "https://youtu.be/jr8rv8JCcI0" },
                    { id: "s06", title: "Construção da Identidade", channel: "Projeto Cão Pastor", desc: "Autoconhecimento e desenvolvimento", url: "https://youtube.com/playlist?list=PLwinAdFkfTrVLsK1yBMkmf8SkTg-aR7r-" },
                    { id: "s07", title: "Performance e Foco", channel: "Projeto Cão Pastor", desc: "Disciplina e alta performance", url: "https://youtube.com/playlist?list=PLwinAdFkfTrU2l2iQuvw6U-n2xTdDWUZZ" },
                ]
            },
            {
                name: "Cursos Estruturados",
                icon: "graduation-cap",
                resources: [
                    { id: "sk02", title: "Escrita Criativa", channel: "Kultivi", desc: "Melhore sua comunicação escrita", url: "https://kultivi.com/cursos/negocios/curso-escrita-criativa" },
                    { id: "sk03", title: "Networking Estratégico", channel: "Kultivi", desc: "Relacionamentos eficazes", url: "https://kultivi.com/cursos/negocios/conexoes-estrategicas-e-networking-intencional" },
                    { id: "sk06", title: "Oratória de Alta Performance", channel: "Kultivi", desc: "Técnicas avançadas de apresentação", url: "https://kultivi.com/cursos/negocios/oratoria-de-alta-performance" },
                    { id: "sk07", title: "Gestão de Tempo", channel: "Kultivi", desc: "Produtividade e organização", url: "https://kultivi.com/cursos/negocios/gestao-de-tempo-e-produtividade" }
                ]
            }
        ]
    });
