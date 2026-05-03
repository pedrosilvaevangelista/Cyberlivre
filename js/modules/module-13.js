window.courseData = window.courseData || [];
window.courseData.push(// ─── OFENSIVA ────────────────────────────────────────────────────────────────
    {
        id: 13,
        title: "Recon & OSINT",
        objective: "Coletar inteligência sobre alvos usando fontes abertas: Shodan, Maltego, TheHarvester e Google Dorks.",
        challenges: [
            {
                id: "chal-recon-0",
                title: "Attack Surface Management (ASM)",
                desc: "Realize o mapeamento completo de ativos expostos da organização (Reconhecimento Ativo/Passivo).",
                content: `<p><strong>Atividade:</strong> Gestão e Enumeração de Superfície de Ataque</p>
<p><strong>Cenário:</strong> A maior vulnerabilidade das empresas não está no sistema que elas cuidam, mas nos subdomínios esquecidos e na Shadow IT.</p>
<h3>Tarefas:</h3>
<ul>
    <li>Escolha um alvo válido que possua programa público de Bug Bounty (ex: HackerOne/Bugcrowd).</li>
    <li>Utilize ferramentas como <code>Amass</code>, <code>Sublist3r</code> ou <code>crt.sh</code> (Certificate Transparency) para enumerar subdomínios.</li>
    <li>Use o <strong>Shodan</strong>, <strong>Censys</strong> ou <strong>Nmap</strong> para identificar as portas, serviços e tecnologias web rodando nesses subdomínios descobertos.</li>
    <li>Utilize ferramentas como o <code>Nuclei</code> ou <code>httpx</code> para verificar rapidamente o status HTTP das páginas.</li>
</ul>
<h3>Validação:</h3>
<p>Estruture um documento de Inteligência enumerando o máximo de vetores possíveis. Reconhecimento eficiente consome 70% do tempo de um Red Team profissional.</p>`
            },
            {
                id: "chal-recon-1",
                title: "Auditoria de Repositórios (Gitleaks)",
                desc: "Crie um laboratório local simulando um vazamento e utilize automação para detectar a chave secreta.",
                content: `<p><strong>Atividade:</strong> Automação de Secret Detection</p>
<p><strong>Cenário:</strong> Depender da sorte para achar vazamentos na internet não ensina a técnica real. Vamos auditar um repositório 100% controlado usando ferramentas padrão da indústria.</p>
<h3>Tarefas:</h3>
<ul>
    <li>Crie um repositório Git local usando o terminal (<code>git init</code>). Crie um arquivo <code>config.php</code> e insira uma chave fictícia da AWS (ex: <code>AKIAIOSFODNN7EXAMPLE</code>).</li>
    <li>Faça o <em>commit</em> desse arquivo. Em seguida, apague a chave do arquivo e faça um segundo <em>commit</em>.</li>
    <li>Instale a ferramenta livre <a href="https://github.com/gitleaks/gitleaks" target="_blank">Gitleaks</a>.</li>
    <li>Rode o Gitleaks apontando para o seu diretório local: <code>gitleaks detect -v</code>.</li>
</ul>
<h3>Validação:</h3>
<p>A ferramenta deve acusar o vazamento no histórico do Git (pois deletar o arquivo no segundo commit não o remove da árvore antiga). Essa é a prova prática e garantida de como vazamentos ocorrem no mundo real.</p>`
            },
            {
                id: "chal-recon-2",
                title: "Inteligência de Ameaças (CTI Pessoal)",
                desc: "Descubra em quais grandes violações da internet as suas próprias senhas e dados vazaram.",
                content: `<p><strong>Atividade:</strong> Cyber Threat Intelligence Pessoal</p>
<p><strong>Cenário:</strong> Hackers compram bancos de dados antigos (LinkedIn, Canva, MySpace) e usam essas senhas para atacar contas atuais (Password Reuse Attack). Vamos medir a sua própria exposição.</p>
<h3>Tarefas:</h3>
<ul>
    <li>Acesse a plataforma <a href="https://haveibeenpwned.com/" target="_blank">HaveIBeenPwned</a> e consulte todos os seus e-mails pessoais e antigos.</li>
    <li>Anote em quais "Data Breaches" o seu e-mail estava presente e o ano exato de cada incidente.</li>
    <li>(Opcional Avançado): Utilize plataformas públicas de indexação (como DeHashed, LeakCheck ou fóruns abertos) para tentar localizar a senha exata em texto claro que você utilizava na época do vazamento.</li>
</ul>
<h3>Validação:</h3>
<p>Se você encontrou um e-mail seu vazado e ainda usa aquela mesma senha hoje em qualquer outro site, mude-a imediatamente. Threat Intelligence corporativo começa ao entendermos a nossa própria superfície de ataque.</p>`
            },
            {
                id: "chal-recon-3",
                title: "Reconhecimento de Rede (Nmap)",
                desc: "Mapeie a topologia da sua rede local e identifique sistemas ativos e portas abertas.",
                content: `<p><strong>Atividade:</strong> Enumeração de Hosts e Serviços</p>
<p><strong>Cenário:</strong> Antes de atacar, é preciso saber o que existe na rede. O Nmap é o canivete suíço para descobrir quais máquinas estão vivas e quais portas estão abertas.</p>
<h3>Tarefas:</h3>
<ul>
    <li>Descubra o IP da sua própria máquina e a faixa da sua rede local (ex: <code>192.168.0.0/24</code>).</li>
    <li>Execute um <strong>Ping Sweep</strong> com o Nmap para descobrir quais dispositivos (celulares, TVs, PCs) estão conectados no seu Wi-Fi (ex: <code>nmap -sn 192.168.0.0/24</code>).</li>
    <li>Escolha um alvo seguro (como o IP do seu roteador ou uma VM local) e faça um <strong>Scan Completo</strong> detectando versões de serviço e sistema operacional (ex: <code>nmap -sV -O &lt;ip-alvo&gt;</code>).</li>
</ul>
<h3>Validação:</h3>
<p>Mapear uma rede interna com precisão é a habilidade primária de um atacante pós-exploração. Documente o IP e as portas abertas do dispositivo analisado.</p>`
            },
            {
                id: "chal-recon-4",
                title: "Coleta de Banners (Banner Grabbing)",
                desc: "Interaja diretamente com portas abertas usando Netcat para extrair a versão dos servidores.",
                content: `<p><strong>Atividade:</strong> Interação Manual de Rede</p>
<p><strong>Cenário:</strong> Scanners automáticos (como o Nmap) podem ser bloqueados por firewalls. O analista ofensivo deve saber "conversar" manualmente com o servidor para descobrir qual software ele está rodando.</p>
<h3>Tarefas:</h3>
<ul>
    <li>Escolha um alvo legalmente autorizado para varredura, como o laboratório público oficial do Nmap: <a href="https://scanme.nmap.org/" target="_blank">scanme.nmap.org</a>.</li>
    <li>Abra o terminal e utilize a ferramenta <strong>Netcat (nc)</strong> para conectar-se à porta SSH (22) do alvo: <code>nc scanme.nmap.org 22</code>.</li>
    <li>Para portas web (como a 80), conecte-se e envie uma requisição HTTP bruta manualmente digitando <code>HEAD / HTTP/1.0</code> seguido de dois ENTERS.</li>
    <li>Observe o texto "cru" devolvido pelo servidor (o Banner). Ele revelará exatamente a marca e versão do serviço (ex: OpenSSH 6.6.1p1 ou Apache/2.4.7).</li>
</ul>
<h3>Validação:</h3>
<p>Tire um print (screenshot) do banner capturado no terminal. É com o nome exato da versão coletada no banner que pesquisamos por falhas críticas no Exploit-DB.</p>`
            }
        ],
        usefulLinks: [
            { title: "OSINT Framework", url: "https://osintframework.com/", desc: "Mapa de ferramentas OSINT" },
            { title: "Shodan", url: "https://www.shodan.io/", desc: "Busca de dispositivos conectados" },
            { title: "Exploit-DB (GHDB)", url: "https://www.exploit-db.com/google-hacking-database", desc: "Google Hacking Database (Dorks)" },
            { title: "Have I Been Pwned", url: "https://haveibeenpwned.com/", desc: "Consulta de vazamento de dados" }
        ],
        sections: [
            {
                name: "Vídeos e Playlists",
                icon: "play-circle",
                resources: [
                    { id: "sec02", title: "Guia Anônima - Base", channel: "Guia Anônima", desc: "Fundamentos de hacking e recon", url: "https://youtube.com/playlist?list=PL41yJfzZogTTjujd-d2WNXTLgfk3HcJ7-" },
                    { id: "sec15c", title: "OS para Hackers", channel: "Guia Anônima", desc: "Sistemas especializados", url: "https://youtube.com/playlist?list=PL41yJfzZogTT4rlCNSdHP5ixv3sQxedKA" }
                ]
            }
        ]
    });
