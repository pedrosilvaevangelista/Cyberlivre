window.courseData = window.courseData || [];
window.courseData.push({
        id: 12,
        title: "Pentest Interno & AD",
        objective: "Entender, explorar e defender ambientes corporativos Windows com Active Directory e Kerberos.",
        challenges: [
            {
                id: "chal-ad-0",
                title: "Enumeração Estratégica (BloodHound)",
                desc: "Mapeie graficamente o caminho mais curto até o controle total do domínio (Domain Admin).",
                content: `<p><strong>Atividade:</strong> Graph-based AD Enumeration</p>
<p><strong>Cenário:</strong> O Red Team invadiu a máquina da recepção. Qual o caminho exato de privilégios entre essa máquina e os Controladores de Domínio?</p>
<h3>Tarefas:</h3>
<ul>
    <li>Em um laboratório com Active Directory (como o <a href="https://tryhackme.com/room/attacktivedirectory" target="_blank">Attacktive Directory do TryHackMe</a>), rode o coletor <strong>SharpHound</strong> (via PowerShell ou binário na memória) para extrair o JSON de relacionamento (ACLs, Sessões, Grupos Locais).</li>
    <li>Importe os arquivos JSON na interface gráfica do <strong>BloodHound</strong> rodando com banco Neo4J.</li>
    <li>Execute a query predefinida: "Find Shortest Path to Domain Admins".</li>
    <li>Estude os nós de ataque apontados pelo grafo (ex: "User A has GenericAll over Group B").</li>
</ul>
<h3>Validação:</h3>
<p>Essa ferramenta transformou ataques de força bruta cega em cirurgia de precisão. Apresente o diagrama gráfico do caminho de ataque.</p>`
            },
            {
                id: "chal-ad-1",
                title: "Envenenamento de Rede Interna (Responder)",
                desc: "Capture hashes NTLMv2 na rede local respondendo a requisições de DNS falhas.",
                content: `<p><strong>Atividade:</strong> LLMNR/NBT-NS Poisoning</p>
<p><strong>Cenário:</strong> Quando um usuário do Windows digita o nome de um servidor errado (ex: <code>\\\\servidor-de-arqivos</code>), o Windows "grita" na rede local perguntando quem é esse servidor. O analista ofensivo pode mentir e dizer "Sou eu, me mande sua credencial!".</p>
<h3>Tarefas:</h3>
<ul>
    <li>Em um ambiente de laboratório isolado (VM Windows e VM Kali Linux na mesma rede host-only), inicie a ferramenta <a href="https://github.com/lgandx/Responder" target="_blank">Responder</a> na interface de rede correta (ex: <code>sudo responder -I eth0 -dw</code>).</li>
    <li>Na máquina Windows, abra o Explorador de Arquivos e tente acessar um compartilhamento de rede inexistente (ex: <code>\\\\teste1234</code>).</li>
    <li>Volte ao terminal do Kali Linux. O Responder terá capturado um hash <strong>NTLMv2</strong> contendo a tentativa de login do usuário Windows.</li>
    <li>Salve esse hash em um arquivo de texto e utilize o <strong>Hashcat</strong> para tentar quebrá-lo offline.</li>
</ul>
<h3>Validação:</h3>
<p>Este é o vetor de entrada número 1 em Red Teams de rede interna corporativa. Documente a captura do hash; isso prova que a rede carece de segmentação e bloqueio de protocolos legados (LLMNR).</p>`
            },
            {
                id: "chal-ad-2",
                title: "Abuso de Protocolos Kerberos",
                desc: "Solicite tickets de autenticação criptografados fracos e quebre-os offline (Kerberoasting).",
                content: `<p><strong>Atividade:</strong> Exploração de Falhas Arquiteturais do AD</p>
<p><strong>Cenário:</strong> Contas de serviço (Service Accounts) frequentemente têm senhas antigas que nunca expiram e rodam sob privilégios altos.</p>
<h3>Tarefas:</h3>
<ul>
    <li>Atuando como um usuário comum logado no domínio, utilize a ferramenta <strong>Rubeus</strong> (Windows) ou <strong>GetUserSPNs.py</strong> (Impacket/Linux) para solicitar tickets TGS para contas com SPN (Service Principal Name) registrado.</li>
    <li>O Controlador de Domínio enviará o ticket encriptado com a hash da senha da conta de serviço (o ataque: Kerberoasting).</li>
    <li>Extraia esse ticket criptografado e leve para a sua máquina potente off-line com Hashcat.</li>
    <li>Quebre o ticket para revelar a senha em plain-text da conta de serviço.</li>
</ul>
<h3>Validação:</h3>
<p>Essa é uma das táticas mais difíceis de se detectar no SOC. Relate os eventos do Windows gerados (ex: Event ID 4769) e como a Blue Team faria essa detecção.</p>`
            }
        ],
        usefulLinks: [
            { title: "BloodHound", url: "https://github.com/BloodHoundAD/BloodHound", desc: "Mapeamento de AD" },
            { title: "MITRE ATT&CK", url: "https://attack.mitre.org/", desc: "Táticas e técnicas" }
        ],
        sections: [
            {
                name: "Vídeos e Playlists",
                icon: "play-circle",
                resources: [
                    { id: "sec01", title: "Hacking e Pentest", channel: "Daniel Donda", desc: "Testes éticos", url: "https://youtube.com/playlist?list=PLPIvFl3fAVRfEw11E3AcK9yfDayk0Q81v" },
                    { id: "sec05", title: "Active Directory Security", channel: "Daniel Donda", desc: "Proteção e ataque em infra AD", url: "https://youtube.com/playlist?list=PLPIvFl3fAVRffHoVXrGd714YsuDQLk3Zt" }
                ]
            }
        ]
    });

