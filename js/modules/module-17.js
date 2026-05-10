window.courseData = window.courseData || [];
window.courseData.push({
        id: 8,
        title: "Engenharia Social",
        objective: "Compreender e simular ataques de manipulação humana: phishing, pretexting e campanhas de conscientização.",
        challenges: [
            {
                id: "chal-es-0",
                title: "Spear Phishing Controlado com Infra",
                desc: "Suba uma infraestrutura completa e analise métricas avançadas de campanhas.",
                content: `<p><strong>Atividade:</strong> Treinamento e Red Team (Phishing)</p>
<p><strong>Cenário:</strong> A maior vulnerabilidade continua sendo o clique humano. Um Red Team profissional forja infraestruturas inteiras (domínios, servidores, certificados) para ludibriar o alvo.</p>
<h3>Tarefas:</h3>
<ul>
    <li>Crie um laboratório com a ferramenta <a href="https://getgophish.com/" target="_blank">GoPhish</a>.</li>
    <li>Crie um e-mail persuasivo que simule o RH da empresa (Ex: "Atualização de Plano de Saúde 2025") com uma página (Landing Page) falsa clonada interceptando as credenciais.</li>
    <li>Envie a campanha para e-mails de teste seus e de colegas (com autorização explícita prévia) e monitore no dashboard as estatísticas: E-mails abertos, links clicados, e senhas capturadas.</li>
</ul>
<h3>Validação:</h3>
<p>Avaliar a taxa de cliques (Click Rate) é fundamental para moldar o orçamento em treinamento de conscientização (Security Awareness).</p>`
            },
            {
                id: "chal-es-1",
                title: "Pretexting e Vishing Estratégico",
                desc: "Crie perfis psicológicos profundos e narrativas para ataques direcionados.",
                content: `<p><strong>Atividade:</strong> Ataque Social Estruturado</p>
<p><strong>Cenário:</strong> Executivos C-Level recebem muito spam. Um atacante de estado-nação liga pelo telefone fingindo ser da Receita Federal (Vishing).</p>
<h3>Tarefas:</h3>
<ul>
    <li>Crie uma persona alvo baseada em dados públicos do LinkedIn e Instagram (ex: um Diretor Financeiro que gosta de vinhos caros).</li>
    <li>Escreva um roteiro telefônico (Vishing Script) explorando a tática do "Pretexting". A narrativa deve aplicar gatilhos psicológicos como <strong>Urgência</strong> ("Sua conta bancária será bloqueada"), <strong>Autoridade</strong> ou <strong>Confiança</strong>.</li>
    <li>Injete as informações do OSINT no meio do script para quebrar a desconfiança inicial.</li>
</ul>
<h3>Validação:</h3>
<p>Táticas avançadas de SE provam que se o fator humano falhar, todo o investimento em firewalls bilionários cai por terra.</p>`
            },
            {
                id: "chal-es-2",
                title: "Segurança Física e Bypass de Controles",
                desc: "Vulnerabilize edifícios corporativos teóricos através de Tailgating e BadUSB.",
                content: `<p><strong>Atividade:</strong> Engajamento Físico de Red Team</p>
<p><strong>Cenário:</strong> A empresa é uma fortaleza na nuvem, mas o acesso físico aos servidores ou computadores da recepção é desprotegido.</p>
<h3>Tarefas:</h3>
<ul>
    <li>Estude o conceito de <strong>Tailgating</strong> (ou Piggybacking) e o uso de dispositivos <strong>BadUSB / Rubber Ducky</strong>.</li>
    <li>Crie o plano de ataque: "Vou entrar no prédio usando crachá falso, me passar por técnico da impressora, espetar um BadUSB na máquina da secretária, e ele digitará uma reverse shell via PowerShell em 5 segundos".</li>
    <li>Identifique 3 mitigações físicas que a empresa deve adotar para impedir o plano (Catracas "anti-passback", bloqueio de portas USB via GPO, etc).</li>
</ul>
<h3>Validação:</h3>
<p>Segurança da Informação envolve segurança patrimonial. Entregar este relatório para a Diretoria muda o escopo da defesa da empresa de forma global.</p>`
            }
        ],
        usefulLinks: [
            { title: "GoPhish", url: "https://getgophish.com/", desc: "Framework de phishing para treinamento" },
            { title: "SET Toolkit", url: "https://github.com/trustedsec/social-engineer-toolkit", desc: "Social Engineer Toolkit" },
            { title: "Scamwatch", url: "https://www.scamwatch.gov.au/", desc: "Informações sobre golpes e proteção" },
            { title: "SANS OUCH!", url: "https://www.sans.org/newsletters/ouch", desc: "Newsletter de conscientização em segurança" },
            { title: "Google Phishing Quiz", url: "https://phishingquiz.withgoogle.com/", desc: "Teste prático para identificar Phishing" },
            { title: "KnowBe4", url: "https://www.knowbe4.com/", desc: "Treinamento em conscientização de segurança" },
            { title: "APWG", url: "https://apwg.org/", desc: "Anti-Phishing Working Group" },
            { title: "CISA - USB Drives", url: "https://www.cisa.gov/news-events/news/using-caution-usb-drives", desc: "Guia de cautela no uso de pen drives" },
            { title: "Digital Defense", url: "https://digital-defense.io/", desc: "O checklist definitivo para segurança pessoal digital" }
        ],
        sections: [
            {
                name: "Vídeos e Playlists",
                icon: "play-circle",
                resources: [
                    { id: "es_yt_02", title: "Pyphisher na Prática (Phishing)", channel: "Anderson Furlaneto", desc: "Demonstração técnica de como ataques de Phishing são estruturados usando a ferramenta Pyphisher.", url: "https://youtu.be/V3VOsESaOa0" },
                    { id: "es_yt_03", title: "O INSTAGRAM Pode ser HACKEADO Assim!", channel: "Douglas Lockshield", desc: "Análise profunda de como perfis reais de Instagram são comprometidos por engenharia social.", url: "https://youtu.be/088lQzdwYkk" },
                    { id: "es_yt_04", title: "Engenharia Social no TikTok e Instagram", channel: "Solyd Offensive Security", desc: "Veja o processo mental e técnico utilizado por atacantes para fisgar credenciais em redes sociais.", url: "https://youtu.be/s7z5Lo30lOM" }
                ]
            }
        ]
    });

