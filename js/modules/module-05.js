window.courseData = window.courseData || [];
window.courseData.push({
        id: 6,
        title: "Programação",
        objective: "Desenvolver automação e ferramentas de segurança com Python e Bash para escalar operações.",
        challenges: [
            {
                id: "chal-prog-0",
                title: "Automação de Segurança (Parse de Logs)",
                desc: "Escreva um script que leia logs de sistema e identifique ataques de força bruta usando Expressões Regulares.",
                content: `<p><strong>Atividade:</strong> Desenvolvimento de Ferramentas Defensivas</p>
<p><strong>Cenário:</strong> Um servidor Linux está sofrendo ataques constantes via SSH. Você precisa automatizar a descoberta dos IPs maliciosos.</p>
<h3>Tarefas:</h3>
<ul>
    <li>Crie um arquivo de texto simulando um log do sistema (ex: <code>auth.log</code>) contendo dezenas de linhas. Insira linhas de tentativas de login falhas contendo "Failed password for root from IP_X port 22" e algumas de sucesso.</li>
    <li>Escreva um script em Python usando Expressões Regulares (Regex - biblioteca <code>re</code>) que leia este arquivo linha por linha.</li>
    <li>O script deve contar as ocorrências de cada IP e extrair todos os endereços que tiveram mais de 5 falhas de login.</li>
    <li>O script deve gerar um arquivo <code>bloquear_ips.txt</code> contendo apenas a lista única de IPs maliciosos que devem ser banidos no Firewall.</li>
</ul>
<h3>Validação:</h3>
<p>Rode o script e verifique a precisão do arquivo de saída. Scripts de extração e automação como esse separam os profissionais que operam ferramentas daqueles que criam suas próprias defesas.</p>`
            },
            {
                id: "chal-prog-1",
                title: "Integração via APIs Autenticadas",
                desc: "Crie um programa que faça requisições HTTP seguras, manipule JSON e trate dados.",
                content: `<p><strong>Atividade:</strong> Consumo e Tratamento de Dados via API</p>
<p><strong>Cenário:</strong> APIs são o motor da internet. Como profissional de tecnologia, você precisa saber conversar com outros sistemas programaticamente e com segurança.</p>
<h3>Tarefas:</h3>
<ul>
    <li>Crie um Personal Access Token na sua conta do GitHub.</li>
    <li>Escreva um script (Python, Node.js, etc.) que utilize uma biblioteca de requisições HTTP (ex: <code>requests</code> ou <code>axios</code>) passando o token via Cabeçalho (Header) de Autenticação.</li>
    <li>Consuma a API do GitHub para listar todos os seus repositórios.</li>
    <li>O script deve ignorar repositórios vazios e exibir no terminal, para cada repositório válido: o Nome, a Linguagem principal e a Quantidade de Estrelas.</li>
</ul>
<h3>Validação:</h3>
<p>Verifique no código se o Token de Acesso NÃO está inserido direto no script (hardcoded). Use variáveis de ambiente (ex: <code>.env</code> ou <code>os.getenv</code>) para garantir que você não vazaria sua credencial se subisse o código na internet.</p>`
            },
            {
                id: "chal-prog-2",
                title: "Fluxo Avançado de Git e Git Hooks",
                desc: "Resolva conflitos de merge e automatize validações pré-commit para evitar vazamento de senhas.",
                content: `<p><strong>Atividade:</strong> Controle de Versão Corporativo e Segurança Shift-Left</p>
<p><strong>Cenário:</strong> Em times grandes, lidar com conflitos no código e evitar incidentes (como commitar chaves secretas no GitHub) é obrigação diária.</p>
<h3>Tarefas:</h3>
<ul>
    <li><strong>Conflito Manual:</strong> Crie um repositório Git local. Em duas branches diferentes, edite a mesma linha do mesmo arquivo de texto. Tente fazer o <code>git merge</code>, force o estado de Conflito, e resolva manualmente abrindo o arquivo, arrumando a linha e finalizando o commit.</li>
    <li><strong>Git Hook de Segurança:</strong> Navegue até a pasta oculta <code>.git/hooks/</code> do seu projeto.</li>
    <li>Crie/edite o arquivo <code>pre-commit</code> com um pequeno script bash que busque (usando <code>grep</code>) pela palavra "password=" ou "API_KEY" nos arquivos que estão sendo commitados.</li>
    <li>Se a palavra for encontrada, o script deve interromper o processo (usando <code>exit 1</code>), impedindo o commit de ser concluído.</li>
</ul>
<h3>Validação:</h3>
<p>Tente commitar um arquivo com uma senha em texto claro no seu repositório. O Git deverá rejeitar imediatamente sua ação graças ao Hook que você desenvolveu. Isso é aplicar segurança desde o princípio (Shift-Left).</p>`
            }
        ],
        usefulLinks: [
            { title: "Python Cheatsheet", url: "https://www.pythoncheatsheet.org/", desc: "Referência rápida" },
            { title: "Stack Overflow", url: "https://stackoverflow.com/", desc: "Fórum para dúvidas" },
            { title: "Codewars", url: "https://www.codewars.com/", desc: "Desafios de lógica gamificados" },
            { title: "Regex101", url: "https://regex101.com/", desc: "Crie, teste e entenda Expressões Regulares (Regex)" }
        ],
        sections: [
            {
                name: "Python e Automação",
                icon: "terminal",
                resources: [
                    { id: "p01", title: "Python para Iniciantes", channel: "Dev Aprender", desc: "Base sólida em Python", url: "https://youtube.com/playlist?list=PLnNURxKyyLIKX73U7hISjIY7T5KiNNLu_" },
                    { id: "p02", title: "Python Descomplicado", channel: "Lan Code", desc: "Curso intensivo e prático", url: "https://youtu.be/QA1S4wCNvEE" },
                    { id: "p03", title: "Automação com Python", channel: "Hashtag Programação", desc: "Tarefas repetitivas", url: "https://youtu.be/RqTDtsITYSM" },
                    { id: "p04", title: "Automações Avançadas", channel: "Hashtag Programação", desc: "Projetos práticos", url: "https://youtube.com/playlist?list=PLpdAy0tYrnKyjrY1Fr72DhmrRmeWI_5C8" },
                    { id: "p05", title: "Projetos Python", channel: "Dev Aprender", desc: "Portfólio de projetos", url: "https://youtube.com/playlist?list=PLnNURxKyyLIIBGBjTU8MQ2JodP7KxBxji" },
                    { id: "p06", title: "Bots e Automação Total", channel: "Dev Aprender", desc: "Desenvolvimento de bots", url: "https://youtube.com/playlist?list=PLnNURxKyyLIL9yBZjOU6PFf8NgxdM2iK2" }
                ]
            },
            {
                name: "Scripts",
                icon: "terminal",
                resources: [
                    { id: "p07", title: "Shell Scripting", channel: "Bóson Treinamentos", desc: "Automação Linux", url: "https://youtube.com/playlist?list=PLlucm8g_ezqNrYgjXC8_CgbvHbvI7dDfhs" },
                    { id: "p08", title: "PowerShell Fundamentos", channel: "Instituto de Script's", desc: "Automação Windows", url: "https://youtube.com/playlist?list=PLO_mlVzHgDw3EIKrT5rma_rmC4Lcc7ihT" },
                    { id: "p11", title: "Git e GitHub", channel: "Dev Aprender", desc: "Controle de versão", url: "https://youtu.be/kB5e-gTAl_s" }
                ]
            },
            {
                name: "Cursos Estruturados",
                icon: "graduation-cap",
                resources: [
                    { id: "pc01", title: "Python Essentials 1", channel: "Cisco NetAcad", desc: "Fundamentos da linguagem", url: "https://www.netacad.com/pt/courses/python-essentials-1" },
                    { id: "pc02", title: "JavaScript Essentials 1", channel: "Cisco NetAcad", desc: "Fundamentos JS", url: "https://www.netacad.com/pt/courses/javascript-essentials-1" },
                    { id: "pc03", title: "HTML Essentials", channel: "Cisco NetAcad", desc: "Estruturação de páginas", url: "https://www.netacad.com/pt/courses/html-essentials" },
                    { id: "pc04", title: "CSS Essentials", channel: "Cisco NetAcad", desc: "Estilização web", url: "https://www.netacad.com/pt/courses/css-essentials" }
                ]
            }
        ]
    });

