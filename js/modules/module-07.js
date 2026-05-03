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
                    { id: "sec15", title: "Cybersecurity Teoria e Prática", channel: "Daniel Donda", desc: "Base teórica sólida", url: "https://youtube.com/playlist?list=PLPIvFl3fAVReKTbM4pxgbX7fLSx5RcN12" }
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
