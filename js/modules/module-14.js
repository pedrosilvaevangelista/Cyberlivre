window.courseData = window.courseData || [];
window.courseData.push({
        id: 11,
        title: "Pentest Web",
        objective: "Identificar e explorar vulnerabilidades web (OWASP Top 10) com Burp Suite, FFUF e técnicas manuais.",
        challenges: [
            {
                id: "chal-web-0",
                title: "Quebra de Controle de Acesso (IDOR)",
                desc: "Explore a vulnerabilidade número 1 do OWASP Top 10 manipulando referências diretas a objetos.",
                content: `<p><strong>Atividade:</strong> Insecure Direct Object Reference</p>
<p><strong>Cenário:</strong> Desenvolvedores frequentemente assumem que se não há um link na tela, o usuário não pode acessar uma página ou dado de outro usuário.</p>
<h3>Tarefas:</h3>
<ul>
    <li>Na <a href="https://portswigger.net/web-security/access-control/idor" target="_blank">PortSwigger Academy</a> ou <a href="https://github.com/digininja/DVWA" target="_blank">DVWA</a>, intercepte uma requisição autenticada de visualização de perfil (ex: <code>/profile?id=105</code>).</li>
    <li>Modifique o ID na requisição para tentar acessar o perfil de outro usuário (ex: <code>id=106</code>) sem ter as credenciais dele.</li>
    <li>Tente também manipulação de privilégios (Privilege Escalation), adicionando parâmetros escondidos no POST como <code>"role":"admin"</code>.</li>
</ul>
<h3>Validação:</h3>
<p>Documente como a aplicação falhou em validar a autorização no backend e explique o conceito de Controle de Acesso Baseado em Sessão vs Variáveis Inseguras.</p>`
            },
            {
                id: "chal-web-1",
                title: "Extração de Dados via SQL Injection (Manual)",
                desc: "Abuse de falhas de sanitização para extrair tabelas e senhas do banco de dados sem usar ferramentas automáticas.",
                content: `<p><strong>Atividade:</strong> Injeção de SQL Baseada em UNION</p>
<p><strong>Cenário:</strong> Ferramentas como o SQLmap automatizam o ataque, mas um analista ofensivo precisa saber construir a query maliciosa à mão para conseguir evadir WAFs (Web Application Firewalls).</p>
<h3>Tarefas:</h3>
<ul>
    <li>Em um laboratório como o <a href="https://github.com/digininja/DVWA" target="_blank">DVWA</a> ou <a href="https://portswigger.net/web-security/sql-injection" target="_blank">PortSwigger Academy</a>, acesse uma página vulnerável que filtre produtos ou perfis por ID (ex: <code>?id=1</code>).</li>
    <li>Insira o caractere de aspas simples (<code>'</code>) no parâmetro para quebrar a sintaxe e observe se a aplicação retorna um erro de banco de dados.</li>
    <li>Utilize o comando <code>ORDER BY 1, 2, 3...</code> para descobrir o número exato de colunas que a consulta original utiliza.</li>
    <li>Use <code>UNION SELECT</code> para mesclar os dados da página com a tabela de metadados do banco (ex: <code>information_schema.tables</code>) e descubra o nome da tabela de usuários.</li>
</ul>
<h3>Validação:</h3>
<p>Extraia os logins e hashes de senha da tabela de administração. Documente passo a passo o payload SQL final que você inseriu na barra de endereço (URL) para concretizar o vazamento.</p>`
            },
            {
                id: "chal-web-2",
                title: "Roubo de Sessão via Cross-Site Scripting (XSS)",
                desc: "Vá além do alert(1). Crie um payload Javascript para sequestrar silenciosamente a conta de outro usuário.",
                content: `<p><strong>Atividade:</strong> Exploração de XSS Armazenado (Stored XSS)</p>
<p><strong>Cenário:</strong> Pentesters iniciantes costumam parar a exploração ao exibir um simples popup na tela (o clássico <code>alert('XSS')</code>). Para convencer a diretoria do perigo, você precisa demonstrar um roubo real de identidade.</p>
<h3>Tarefas:</h3>
<ul>
    <li>Em um laboratório seguro (como a <a href="https://portswigger.net/web-security/cross-site-scripting" target="_blank">PortSwigger Academy</a> ou DVWA), encontre um campo de entrada vulnerável a XSS Armazenado (ex: um fórum ou livro de visitas).</li>
    <li>Em vez do payload de alerta, escreva um script JavaScript malicioso que capture o cookie de quem visitar a página (usando <code>document.cookie</code>).</li>
    <li>Faça com que seu script envie esse cookie automaticamente, via requisição GET ou imagem escondida, para um servidor controlado por você (crie uma URL temporária no <a href="https://webhook.site/" target="_blank">Webhook.site</a>).</li>
</ul>
<h3>Validação:</h3>
<p>Simule um usuário comum acessando a página de comentários infectada. Demonstre o Session ID da vítima chegando em tempo real no painel do seu Webhook.</p>`
            }
        ],
        usefulLinks: [
            { title: "OWASP Top 10", url: "https://owasp.org/www-project-top-ten/", desc: "Principais vulnerabilidades web" },
            { title: "PortSwigger Labs", url: "https://portswigger.net/web-security", desc: "Labs gratuitos focados em Web AppSec" },
            { title: "HackTheBox", url: "https://www.hackthebox.com/", desc: "Laboratórios práticos de pentest e CTF" },
            { title: "TryHackMe", url: "https://tryhackme.com/", desc: "Plataforma amigável para aprender cibersegurança" },
            { title: "OWASP WSTG - SQLi", url: "https://owasp.org/www-project-web-security-testing-guide/latest/4-Web_Application_Security_Testing/07-Input_Validation_Testing/05-Testing_for_SQL_Injection", desc: "Guia oficial de testes de injeção SQL da OWASP" }
        ],
        sections: [
            {
                name: "Vídeos e Playlists",
                icon: "play-circle",
                resources: [
                    { id: "sec03", title: "Vulnerabilidades Web", channel: "Guia Anônima", desc: "Exploração de falhas", url: "https://youtube.com/playlist?list=PL41yJfzZogTT3oxNQAJCt-UHWRvUhlyLn" },
                    { id: "sec04", title: "Ferramentas de Pentest", channel: "Guia Anônima", desc: "Arsenal do pentester", url: "https://youtube.com/playlist?list=PL41yJfzZogTSAr0-7XPFv-XvKoxCsEz9Y" },
                    { id: "solyd_pentest", title: "Introdução ao Hacking e Pentest 2.0", channel: "Solyd Offensive Security", desc: "Curso abordando a mentalidade ofensiva e os fundamentos de exploração.", url: "https://youtube.com/playlist?list=PLp95aw034Wn8Wi0NViVF58hOpX-m00jyg&si=BdaJyGqCrVqpSNOV" },
                    { id: "ctf_guia_anonima", title: "Laboratórios CTF - TryHackMe", channel: "Guia Anônima", desc: "Resoluções guiadas de máquinas do TryHackMe, focadas na exploração prática.", url: "https://youtube.com/playlist?list=PLzJijuF5TMYQ23lzOOKR2VPV9wVmD8Z7h&si=1Gt0kvjCP_agZ9id" }
                ]
            },
            {
                name: "Cursos Estruturados",
                icon: "graduation-cap",
                resources: [
                    { id: "secc02", title: "Ethical Hacker", channel: "Cisco NetAcad", desc: "Hacking profissional", url: "https://www.netacad.com/pt/courses/ethical-hacker" }
                ]
            }
        ]
    });

