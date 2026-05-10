window.courseData = window.courseData || [];
window.courseData.push({
        id: 18,
        title: "Governança & GRC",
        objective: "Aplicar LGPD, ISO 27001, NIST CSF e CIS Controls para transformar requisitos regulatórios em controles técnicos.",
        challenges: [
            {
                id: "chal-comp-0",
                title: "Gap Analysis (NIST CSF 2.0)",
                desc: "Audite uma empresa baseando-se no Framework Internacional de Cibersegurança.",
                content: `<p><strong>Atividade:</strong> Auditoria de Conformidade</p>
<p><strong>Cenário:</strong> O NIST atualizou seu framework para a versão 2.0 adicionando a função 'Govern' (Governança). Você precisa realizar o diagnóstico inicial da sua empresa.</p>
<h3>Tarefas:</h3>
<ul>
    <li>Baixe a planilha oficial do <strong>NIST CSF 2.0</strong>.</li>
    <li>Avalie criticamente o ambiente em que você trabalha (ou um fictício) nas funções: Govern, Identify, Protect, Detect, Respond e Recover.</li>
    <li>Identifique 3 Subcategorias que estão completamente ausentes (ex: "Testes de Resposta a Incidentes não são executados").</li>
    <li>Crie um plano de ação (Roadmap) de 6 meses para sanar esses 3 gaps principais, estimando esforço de equipe e custo em ferramentas.</li>
</ul>
<h3>Validação:</h3>
<p>Documente o seu Roadmap de Maturidade. Profissionais de GRC (Governance, Risk and Compliance) são os arquitetos que definem para onde vai o dinheiro da segurança.</p>`
            },
            {
                id: "chal-comp-1",
                title: "Privacy by Design e Data Mapping",
                desc: "Execute o processo de Mapeamento de Dados exigido pela LGPD/GDPR.",
                content: `<p><strong>Atividade:</strong> Classificação de Dados e Privacidade</p>
<p><strong>Cenário:</strong> A nova aplicação de RH solicita dados sensíveis (biometria e raça) sem justificativa clara. O DPO (Data Protection Officer) reprovou o projeto.</p>
<h3>Tarefas:</h3>
<ul>
    <li>Crie uma matriz de Mapeamento de Dados (Data Mapping).</li>
    <li>Analise o formulário de admissão. Identifique quais dados são "Pessoais" e quais são "Pessoais Sensíveis" perante a lei.</li>
    <li>Aplique o princípio da Minimização: Qual é a base legal real para coletar a religião de um candidato no Brasil? (Resposta: Nenhuma, logo deve ser removida).</li>
    <li>Defina os tempos de retenção adequados (ex: CVs de candidatos não contratados devem ser deletados após 6 meses).</li>
</ul>
<h3>Validação:</h3>
<p>O resultado deve ser o Registro de Operações de Tratamento de Dados (ROPA). Segurança hoje caminha de mãos dadas com Privacidade.</p>`
            },
            {
                id: "chal-comp-2",
                title: "Tabletop Exercise (Simulação de Crise)",
                desc: "Facilite uma simulação executiva de ataque de Ransomware com a diretoria.",
                content: `<p><strong>Atividade:</strong> Gestão de Crises e Playbooks</p>
<p><strong>Cenário:</strong> A maioria das empresas só descobre que o Plano de Resposta a Incidentes (PRI) é ruim durante uma invasão real. É necessário treinar os executivos antes.</p>
<h3>Tarefas:</h3>
<ul>
    <li>Escreva um roteiro (Tabletop) de 3 páginas de um cenário de Ransomware que sequestrou o Active Directory na sexta-feira à noite.</li>
    <li>Defina as "Injeções de Cenário" a cada 15 minutos (ex: "A imprensa vazou o ataque no Twitter", "O Procon está exigindo respostas em 24h").</li>
    <li>Para cada cenário, exija que o Comitê de Crise responda: "Paga-se o resgate?", "O backup foi testado?", "Quem assina a nota oficial para a imprensa?".</li>
</ul>
<h3>Validação:</h3>
<p>Apresente o seu roteiro de Tabletop Exercise. Gerenciar o pânico do C-Level durante um ataque é uma competência altamente estratégica.</p>`
            },
            {
                id: "chal-comp-3",
                title: "Política de Segurança da Informação (PSI)",
                desc: "Escreva o documento mestre (amplo e detalhado) que rege o comportamento de todos os funcionários da corporação.",
                content: `<p><strong>Atividade:</strong> Criação de Política Corporativa Abrangente</p>
<p><strong>Cenário:</strong> Uma PSI real não é um resumo; é um documento robusto (muitas vezes com dezenas de páginas) que protege juridicamente a empresa. Ela cobre desde a senha até o comportamento do funcionário no escritório.</p>
<h3>Tarefas:</h3>
<ul>
    <li>Crie a <strong>Estrutura (Índice)</strong> de uma PSI completa, baseando-se na ISO 27001 e ISO 27002. Contemple capítulos como: Classificação da Informação, Clean Desk/Clear Screen, Criptografia, BYOD e Resposta a Incidentes.</li>
    <li>Escolha 3 desses capítulos e redija-os detalhadamente (em linguagem formal, mas acessível ao funcionário comum).</li>
    <li>Escreva de forma obrigatória o capítulo de <strong>Sanções Disciplinares</strong>: defina progressão de penalidades (advertência, suspensão e demissão por justa causa).</li>
</ul>
<h3>Validação:</h3>
<p>Sem uma PSI sólida e assinada (Termo de Aceite), a empresa não possui amparo legal contra o mau uso da TI. Esse documento é o verdadeiro firewall corporativo humano.</p>`
            },
            {
                id: "chal-comp-4",
                title: "BIA e Plano de Continuidade de Negócios",
                desc: "Analise o impacto financeiro e garanta que a empresa sobreviva a um desastre completo.",
                content: `<p><strong>Atividade:</strong> Análise de Impacto (BIA) e PCN</p>
<p><strong>Cenário:</strong> O datacenter principal pegou fogo. A diretoria e os acionistas querem saber: em quantas horas o e-commerce e o faturamento voltarão ao normal?</p>
<h3>Tarefas:</h3>
<ul>
    <li>Realize uma <strong>Business Impact Analysis (BIA)</strong> teórica: Escolha os 3 sistemas mais críticos da sua empresa (ex: ERP, Banco de Dados e Sistema de Folha de Pagamento).</li>
    <li>Defina as métricas críticas de desastre: <strong>RTO (Recovery Time Objective)</strong> e <strong>RPO (Recovery Point Objective)</strong> para cada um desses sistemas.</li>
    <li>Escreva as diretrizes de um <strong>Plano de Continuidade de Negócios (PCN) / Disaster Recovery Plan (DRP)</strong>. Descreva o procedimento exato de failover (virada) para um ambiente de nuvem reserva.</li>
</ul>
<h3>Validação:</h3>
<p>Compliance não é sobre TI, é sobre garantir que a empresa sobreviva a grandes impactos. Apresente essa documentação estratégica simulando um Report para a Diretoria Executiva.</p>`
            }
        ],
        usefulLinks: [
            { title: "NIST CSF", url: "https://www.nist.gov/cyberframework", desc: "Framework de segurança NIST" },
            { title: "LGPD", url: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm", desc: "Lei Geral de Proteção de Dados" },
            { title: "NIST SP 800-63B", url: "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-63b.pdf", desc: "Diretrizes de Autenticação Digital" }
        ],
        sections: [
            {
                name: "Vídeos e Playlists",
                icon: "play-circle",
                resources: [
                    { id: "sec16", title: "Proteção de Dados e LGPD", channel: "Coach de Osasco", desc: "LGPD e privacidade", url: "https://youtube.com/playlist?list=PLUKKAhdBKPE__OmJC0QE__aY47yUops5l" }
                ]
            }
        ]
    });

