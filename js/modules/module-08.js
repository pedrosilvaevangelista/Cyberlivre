window.courseData = window.courseData || [];
window.courseData.push({
        id: 13,
        title: "Hardening & Defesa",
        objective: "Proteger dispositivos Windows e Linux com hardening, EDR, gestão de patches e controle de aplicações.",
        challenges: [
            {
                id: "chal-hard-0",
                title: "Hardening em Larga Escala via Automação",
                desc: "Aplique o CIS Benchmarks utilizando scripts de automação (Ansible ou PowerShell).",
                content: `<p><strong>Atividade:</strong> Automação de Compliance e Hardening</p>
<p><strong>Cenário:</strong> O CIS Benchmarks exige centenas de configurações. Fazer isso na mão em 1 servidor é fácil; em 500 servidores é impossível.</p>
<h3>Tarefas:</h3>
<ul>
    <li>Estude o documento CIS Benchmarks Level 1 para Ubuntu ou Windows Server.</li>
    <li>Escreva um playbook do <strong>Ansible</strong> (para Linux) ou um script <strong>PowerShell</strong> (para Windows) que automatize a aplicação de 10 regras de segurança (ex: desativar root SSH, impor tamanho de senha, desativar serviços legados).</li>
    <li>Execute o script em uma máquina virtual limpa e comprove que as configurações foram aplicadas.</li>
</ul>
<h3>Validação:</h3>
<p>Suba seu script de automação para o GitHub. Infraestrutura Imutável e Security as Code (SaC) são os padrões modernos de defesa corporativa.</p>`
            },
            {
                id: "chal-hard-1",
                title: "Controle de Execução e Telemetria (AppLocker + Sysmon)",
                desc: "Implemente controles avançados de endpoint para bloquear malwares e gerar logs detalhados.",
                content: `<p><strong>Atividade:</strong> EDR "Caseiro" com Ferramentas Nativas</p>
<p><strong>Cenário:</strong> Políticas de senha não impedem o usuário de executar um ransomware que chegou por e-mail. Precisamos controlar o que pode rodar na máquina.</p>
<h3>Tarefas:</h3>
<ul>
    <li>Em uma VM Windows, configure o <strong>AppLocker</strong> através da Política de Segurança Local (secpol.msc).</li>
    <li>Crie uma regra de negação (Deny) bloqueando a execução de qualquer script <code>.ps1</code> ou arquivo <code>.exe</code> que esteja rodando a partir da pasta Downloads ou Temp.</li>
    <li>Instale o <strong>Sysmon (System Monitor)</strong> da suíte Sysinternals para gerar logs profundos de criação de processos (Event ID 1).</li>
    <li>Tente executar um payload simulado e verifique se o AppLocker bloqueou e se o Sysmon registrou o Evento no Visualizador de Eventos.</li>
</ul>
<h3>Validação:</h3>
<p>Exporte o log do Windows comprovando o bloqueio. Esse nível de telemetria é o que alimenta o SOC na vida real.</p>`
            },
            {
                id: "chal-hard-2",
                title: "Gestão de Vulnerabilidades (Patch Management)",
                desc: "Mapeie vulnerabilidades CVE com scanners, priorize os riscos e aplique os patches.",
                content: `<p><strong>Atividade:</strong> Vulnerability Management Completo</p>
<p><strong>Cenário:</strong> O scanner reportou 50 vulnerabilidades, mas você só tem janela de manutenção para corrigir 5. Qual corrigir primeiro?</p>
<h3>Tarefas:</h3>
<ul>
    <li>Instale um servidor Linux vulnerável antigo (ex: Metasploitable ou um Ubuntu desatualizado) em uma VM isolada.</li>
    <li>Execute uma varredura autenticada usando o <strong>OpenSCAP</strong> ou <strong>Nessus Essentials</strong>.</li>
    <li>Pegue o relatório, filtre as vulnerabilidades Críticas (CVSS > 9.0) que possuam exploits públicos conhecidos (ex: verifique no Exploit-DB).</li>
    <li>Aja como administrador: aplique a mitigação (atualize o pacote via <code>apt-get</code> ou altere o arquivo de configuração) e rode o scan novamente para comprovar o "Fix".</li>
</ul>
<h3>Validação:</h3>
<p>Documente o relatório de "Antes" e "Depois". Corrigir bugs silenciosamente é o trabalho mais crucial da equipe de Blue Team.</p>`
            },
            {
                id: "chal-hard-3",
                title: "Auditoria Automatizada e Hardening no Linux com Lynis",
                desc: "Avalie o índice de segurança de uma máquina Linux e aplique contramedidas reais para elevar o Hardening Index.",
                content: `<p><strong>Atividade:</strong> Auditoria Contínua e Linha de Base no Linux</p>
<p><strong>Cenário:</strong> Um novo servidor Ubuntu/Debian foi configurado na empresa. Antes de liberar o acesso em produção, a equipe de segurança deve rodar uma auditoria completa de conformidade e aplicar correções de blindagem.</p>
<h3>Tarefas:</h3>
<ul>
    <li>Em uma VM Linux, baixe e instale a ferramenta de auditoria open-source <strong>Lynis</strong> (<a href="https://cisofy.com/lynis/" target="_blank">cisofy.com/lynis</a>).</li>
    <li>Execute uma varredura completa do sistema como root: <code>sudo lynis audit system</code>.</li>
    <li>Localize no final do relatório o <strong>Hardening Index</strong> inicial (geralmente entre 50 e 65) e revise a seção de <em>Suggestions</em> e <em>Warnings</em> registradas no log <code>/var/log/lynis.log</code>.</li>
    <li>Aplique pelo menos 4 correções manuais recomendadas pelo relatório:
        <ul>
            <li>Desative o suporte a montagem de sistemas de arquivos legados ou desnecessários (ex: cramfs, freevxfs, jffs2) criando um arquivo de restrição em <code>/etc/modprobe.d/</code>.</li>
            <li>Ajuste as permissões de arquivos sensíveis do sistema (ex: <code>chmod 600 /etc/shadow</code> e <code>chmod 600 /etc/ssh/sshd_config</code>).</li>
            <li>No arquivo <code>/etc/ssh/sshd_config</code>, desative o login direto do root (<code>PermitRootLogin no</code>) e defina um limite máximo de tentativas de autenticação (<code>MaxAuthTries 3</code>).</li>
            <li>Ative e configure o firewall padrão <code>ufw</code> para bloquear todo o tráfego de entrada e permitir apenas a porta de gerenciamento SSH.</li>
        </ul>
    </li>
    <li>Execute o comando <code>sudo lynis audit system</code> novamente.</li>
</ul>
<h3>Validação:</h3>
<p>Compare os dois relatórios no terminal e documente o aumento percentual do seu <strong>Hardening Index</strong> (ex: de 60 para 80+). Documentar o "Antes e Depois" com as ações de remediação é exatamente a rotina de um Analista de Segurança Defensiva.</p>`
            }
        ],
        usefulLinks: [
            { title: "CIS Benchmarks", url: "https://www.cisecurity.org/cis-benchmarks/", desc: "Guias de hardening por SO" },
            { title: "Lynis", url: "https://cisofy.com/lynis/", desc: "Auditor de segurança Linux" },
            { title: "nessus", url: "https://pt-br.tenable.com/products/nessus", desc: "Auditoria de vulnerabilidades" },
            { title: "NVD (NIST)", url: "https://nvd.nist.gov/", desc: "National Vulnerability Database" },
            { title: "CISA - Patches & Updates", url: "https://www.cisa.gov/news-events/news/understanding-patches-and-software-updates", desc: "Guia sobre a importância de atualizações de software" }
        ],
        sections: [
            {
                name: "Vídeos e Playlists",
                icon: "play-circle",
                resources: [
                    { id: "sec06", title: "Microsoft Hardening", channel: "Daniel Donda", desc: "Endurecimento de sistemas Windows", url: "https://youtube.com/playlist?list=PLPIvFl3fAVRewZ_x2wupte4HIrMgfACFC" }
                ]
            },
            {
                name: "Cursos Estruturados",
                icon: "graduation-cap",
                resources: [
                    { id: "secc04", title: "Endpoint Security", channel: "Cisco NetAcad", desc: "Proteção de dispositivos", url: "https://www.netacad.com/pt/courses/endpoint-security" },
                    { id: "secc05", title: "Network Defense", channel: "Cisco NetAcad", desc: "Defesa de redes", url: "https://www.netacad.com/pt/courses/network-defense" },                ]
            }
        ]
    });

