window.courseData = window.courseData || [];
window.courseData.push(// ─── DEFENSIVA ───────────────────────────────────────────────────────────────
    {
        id: 7,
        title: "Fundamentos de Segurança",
        objective: "Compreender a Tríade CIA, modelos de ameaça, gestão de riscos e os principais frameworks da indústria.",
        challenges: [
            {
                id: "chal-def-0",
                title: "Arquitetura Zero Trust e IAM",
                desc: "Abandone o perímetro físico. Projete um modelo de acesso baseado no Princípio do Privilégio Mínimo.",
                content: `<p><strong>Atividade:</strong> Design de Identidade e Acesso (IAM)</p>
<p><strong>Cenário:</strong> VPNs tradicionais dão acesso amplo à rede, facilitando ataques de ransomware. A abordagem moderna exige que nenhuma máquina, nem mesmo interna, seja confiável por padrão.</p>
<h3>Tarefas:</h3>
<ul>
    <li>Pesquise os fundamentos da arquitetura <strong>Zero Trust</strong> (Nunca Confie, Sempre Verifique).</li>
    <li>Projete um fluxo de autenticação para um funcionário remoto que precisa acessar um sistema financeiro da empresa.</li>
    <li>O diagrama deve obrigatoriamente incluir: <strong>MFA (Múltiplo Fator)</strong>, verificação da integridade do dispositivo (Postura do Endpoint) e acesso condicional baseado em papel (RBAC).</li>
</ul>
<h3>Validação:</h3>
<p>Apresente o seu modelo arquitetural. Defender não é apenas bloquear portas, é gerenciar identidades (Identity is the new perimeter).</p>`
            },
            {
                id: "chal-def-1",
                title: "Modelagem de Ameaças (STRIDE)",
                desc: "Modele a arquitetura de um sistema e identifique falhas de design antes do código ser escrito.",
                content: `<p><strong>Atividade:</strong> Threat Modeling com STRIDE</p>
<p><strong>Cenário:</strong> A tríade CIA é a teoria básica. Na prática corporativa, usamos Modelagem de Ameaças para criar sistemas seguros by-design.</p>
<h3>Tarefas:</h3>
<ul>
    <li>Desenhe um Data Flow Diagram (DFD) simples de um aplicativo de entregas (Usuário -> App Mobile -> API Backend -> Banco de Dados).</li>
    <li>Aplique a metodologia <strong>STRIDE</strong> da Microsoft para identificar pelo menos uma ameaça para cada categoria: Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service e Elevation of Privilege.</li>
    <li>Para cada ameaça identificada, proponha um controle mitigatório (ex: "Para Tampering nos dados em trânsito, usaremos TLS 1.3").</li>
</ul>
<h3>Validação:</h3>
<p>Exporte o diagrama e a tabela de mitigação. Modelagem de ameaças é uma habilidade de nível Pleno/Sênior muito procurada em AppSec.</p>`
            },
            {
                id: "chal-def-2",
                title: "Modelagem Centrada no Risco (PASTA)",
                desc: "Avalie ameaças baseando-se no impacto direto aos negócios usando o framework PASTA.",
                content: `<p><strong>Atividade:</strong> Process of Attack Simulation and Threat Analysis</p>
<p><strong>Cenário:</strong> O STRIDE foca no software, mas o framework PASTA foca no impacto real para os negócios. Se a aplicação cair, a empresa perde dinheiro? O PASTA alinha os objetivos técnicos com os executivos.</p>
<h3>Tarefas:</h3>
<ul>
    <li>Estude as 7 etapas do framework <strong>PASTA</strong>.</li>
    <li>Defina os <strong>Objetivos de Negócio</strong> (Etapa 1) para um sistema hospitalar fictício (ex: "Disponibilidade contínua para prontuários de pacientes").</li>
    <li>Realize a <strong>Simulação de Ataque</strong> (Etapa 6): Liste 2 vetores de ataque plausíveis que violam esses objetivos de negócio (ex: Ransomware ou DDoS).</li>
    <li>Elabore uma <strong>Análise de Risco e Impacto</strong> (Etapa 7) mostrando como a falha técnica se traduz em perda financeira ou risco à vida.</li>
</ul>
<h3>Validação:</h3>
<p>Apresente o relatório final justificando que o investimento em segurança no sistema hospitalar não é técnico, mas vitalício e estratégico.</p>`
            },
            {
                id: "chal-def-3",
                title: "Auditoria de Permissões (Trike)",
                desc: "Crie uma matriz de requisitos de segurança baseada em permissões e privilégios utilizando a metodologia Trike.",
                content: `<p><strong>Atividade:</strong> Modelagem de Ameaças Defensiva (Trike)</p>
<p><strong>Cenário:</strong> Enquanto o STRIDE olha do ponto de vista do atacante, o <strong>Trike</strong> é uma metodologia defensiva focada primariamente em Permissões, Casos de Uso e Autorização aceitável de risco.</p>
<h3>Tarefas:</h3>
<ul>
    <li>Para um aplicativo de sistema escolar (Professores, Alunos, Coordenadores), construa uma <strong>Matriz de Requisitos de Segurança</strong> (Security Requirements Matrix).</li>
    <li>Mapeie os atores e liste permissões baseadas no modelo CRUD (Create, Read, Update, Delete) para o recurso "Notas de Prova".</li>
    <li>Identifique um risco de elevação de privilégio se o CRUD for implementado incorretamente e estabeleça uma regra estrita no modelo.</li>
</ul>
<h3>Validação:</h3>
<p>Crie e exporte a matriz de requisitos mostrando que o framework Trike protege aplicações através de controle estrito e detalhado de permissões e casos de uso esperados.</p>`
            },
            {
                id: "chal-def-4",
                title: "Modelagem Ágil DevSecOps (VAST)",
                desc: "Integre a modelagem de ameaças de forma visual e ágil em um ciclo rápido de desenvolvimento.",
                content: `<p><strong>Atividade:</strong> Visual, Agile and Simple Threat (VAST)</p>
<p><strong>Cenário:</strong> Equipes de desenvolvimento Ágil (Scrum/Kanban) não têm tempo para longas auditorias documentais. O VAST foca na escalabilidade e na integração prática da modelagem de ameaças (usado em ferramentas como ThreatModeler).</p>
<h3>Tarefas:</h3>
<ul>
    <li>Diferencie os dois modelos principais do VAST: o Modelo de Ameaça da Aplicação (usado por desenvolvedores) e o Modelo de Ameaça Operacional (usado por infraestrutura).</li>
    <li>Crie um diagrama simples focando em pontos finais de comunicação (Endpoints) e não apenas no fluxo de dados.</li>
    <li>Transforme uma ameaça identificada (ex: injeção de código na API) em um <strong>User Story</strong> (ex: "Como dev, devo usar prepared statements para evitar SQLi, a fim de proteger o banco").</li>
</ul>
<h3>Validação:</h3>
<p>Demonstre como a segurança foi incorporada no Backlog do time de desenvolvimento, validando a integração de Modelagem de Ameaças em metodologias ágeis.</p>`
            },
            {
                id: "chal-def-5",
                title: "Análise de Risco Quantitativa",
                desc: "Calcule a Expectativa Anual de Perda (ALE) para justificar orçamentos de segurança.",
                content: `<p><strong>Atividade:</strong> Gestão de Risco e Orçamento (Business Justification)</p>
<p><strong>Cenário:</strong> Você precisa convencer a diretoria a comprar um Firewall de R$ 50.000. Se você disser apenas "é para nossa segurança", eles vão negar. Você precisa falar em números.</p>
<h3>Tarefas:</h3>
<ul>
    <li>Estude os conceitos de SLE (Single Loss Expectancy) e ARO (Annualized Rate of Occurrence).</li>
    <li>Simule o seguinte cenário: Um ataque de Ransomware que paralise as vendas custaria R$ 200.000 em lucros cessantes (SLE). A chance disso acontecer sem o firewall é de 1 vez a cada 2 anos (ARO = 0.5).</li>
    <li>Calcule o ALE (Annualized Loss Expectancy) atual (ALE = SLE * ARO).</li>
    <li>Se o Firewall reduz a chance do ataque para 1 vez a cada 10 anos (ARO = 0.1), qual é o novo ALE? A economia gerada justifica a compra da ferramenta?</li>
</ul>
<h3>Validação:</h3>
<p>Documente o racional matemático. Executivos aprovam segurança baseados em Retorno sobre Investimento (ROI), não em medo.</p>`
            }
        ],
        usefulLinks: [
            { title: "Mitre ATT&CK", url: "https://attack.mitre.org/", desc: "Táticas e técnicas de adversários" },
            { title: "OWASP Top 10", url: "https://owasp.org/www-project-top-ten/", desc: "Principais vulnerabilidades web" },
            { title: "NIST CSF", url: "https://www.nist.gov/cyberframework", desc: "Framework global de gestão de riscos" },
            { title: "Threat Modeling Manifesto", url: "https://www.threatmodelingmanifesto.org/", desc: "Metodologias sobre modelagem de ameaças (STRIDE, etc)" }
        ],
        sections: [
            {
                name: "Vídeos e Playlists",
                icon: "play-circle",
                resources: [
                    { id: "sec15", title: "Cybersecurity Teoria e Prática", channel: "Daniel Donda", desc: "Base teórica sólida", url: "https://youtube.com/playlist?list=PLPIvFl3fAVReKTbM4pxgbX7fLSx5RcN12" },
                    { id: "sec16_hrb", title: "Segurança com Prática - Módulo 1", channel: "Hardware Redes Brasil", desc: "Fundamentos práticos de segurança da informação e redes.", url: "https://youtube.com/playlist?list=PLAp37wMSBouB70jGTeT0JjW_LNC_JBHCo&si=aSYrqKUZKc-urDL9" },
                    { id: "sec17_hrb", title: "Segurança com Prática - Módulo 2", channel: "Hardware Redes Brasil", desc: "Continuação avançada das práticas de segurança e defesa de redes.", url: "https://youtube.com/playlist?list=PLAp37wMSBouAr6SdCgSTbAeesW91a201L&si=IYeC1PL1-NFH2NeC" },
                    { id: "sec18_boson", title: "Segurança e Criptografia", channel: "Bóson Treinamentos", desc: "Conceitos teóricos e algoritmos de criptografia essenciais para segurança.", url: "https://youtube.com/playlist?list=PLucm8g_ezqNred_fII4GzZxMi91PKbney&si=AuT5mBOS1fUQsjvb" }
                ]
            },
            {
                name: "Cursos Estruturados",
                icon: "graduation-cap",
                resources: [
                    { id: "secc01", title: "Introdução à Cibersegurança", channel: "Cisco NetAcad", desc: "Visão geral da área", url: "https://www.netacad.com/pt/courses/introduction-to-cybersecurity" },
                    { id: "secc03", title: "Cybersecurity Essentials", channel: "Cisco NetAcad", desc: "Fundamentos proteção", url: "https://www.netacad.com/pt/courses/cybersecurity-essentials" }
                ]
            }
        ]
    });

