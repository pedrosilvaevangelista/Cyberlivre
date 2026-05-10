window.courseData = window.courseData || [];
window.courseData.push({
        id: 3,
        title: "Sistemas Operacionais",
        objective: "Administrar Windows e Linux no nível do kernel: processos, permissões, logs e automação via shell.",
        challenges: [
            {
                id: "chal-4",
                title: "Instale uma distro Linux",
                desc: "Instalar e configurar duas máquinas virtuais Linux, sendo uma com interface gráfica e outra baseada apenas em terminal.",
                content: `<p><strong>Atividade:</strong> Implantação de Servidor Linux com Particionamento LVM e Rede Estática</p>
<h3>Objetivo</h3>
<p>Instalar um servidor Linux de forma profissional, segmentando os discos lógicos para segurança e configurando a rede manualmente sem depender de DHCP.</p>
<p>Descrição da Atividade</p>
<h3>1. Particionamento LVM (Logical Volume Manager)</h3>
<p>Durante a instalação do Ubuntu Server (ou Debian), não use a instalação padrão automática. Configure manualmente o particionamento em LVM com a seguinte estrutura lógica:</p>
<ul>
    <li><code>/boot</code> (padrão) fora do LVM</li>
    <li>Volume Lógico (LV) para o <code>/</code> (Root) com 15GB</li>
    <li>Volume Lógico (LV) para o <code>/home</code> com 5GB</li>
    <li>Volume Lógico (LV) para o <code>/var</code> (para logs) com 5GB</li>
</ul>
<h3>2. Rede Estática</h3>
<p>Após instalar, desative a obtenção de IP via DHCP. Acesse a configuração de rede (Netplan no Ubuntu) e atribua:</p>
<ul>
    <li>Um IP fixo (ex: 192.168.1.150/24)</li>
    <li>Gateway do seu roteador</li>
    <li>Servidores DNS do Google ou Cloudflare (8.8.8.8, 1.1.1.1)</li>
</ul>
<h3>3. Acesso Remoto Seguro</h3>
<p>Gere um par de chaves SSH (<code>ssh-keygen</code>) no seu sistema host (Windows/Mac). Configure o servidor Linux para aceitar conexões SSH <strong>apenas via chave criptográfica</strong>, desabilitando o login por senha editando o arquivo <code>/etc/ssh/sshd_config</code> (PasswordAuthentication no).</p>
<p>Validação: Você deve conseguir reiniciar o servidor, conectar via SSH sem digitar senha, e verificar seu particionamento através do comando <code>lsblk</code> e a rede usando <code>ip a</code>.</p>`,
                url: "https://docs.google.com/document/d/1eHk0vWz3uRcIvhb1WWy8qoWP9thpZErAcw5wIuto6b4/edit?usp=sharing"
            },
            {
                id: "chal-5",
                title: "Gerenciamento de Usuários, Grupos e Permissões no Linux",
                desc: "Praticar a criação de usuários, grupos e controle de permissões em um sistema Linux.",
                content: `<p><strong>Atividade:</strong> Permissões Especiais (Sticky Bit, SGID) e Privilégios Customizados (Sudoers)</p>
<h3>Objetivo</h3>
<p>Dominar os aspectos avançados de permissões do Linux que são fundamentais em servidores corporativos e entender o princípio do menor privilégio.</p>
<p>Descrição da Atividade</p>
<h3>1. Diretório Compartilhado com Sticky Bit</h3>
<p>Crie um grupo chamado <code>devs</code> e adicione dois usuários (<code>alice</code> e <code>bob</code>) a ele. Crie um diretório <code>/var/www/projeto</code>.</p>
<p>Configure as permissões (SetGID) para que <strong>todo arquivo criado lá dentro pertença automaticamente ao grupo devs</strong>.</p>
<p>Adicione o <strong>Sticky Bit</strong> para que <code>alice</code> não consiga apagar um arquivo que foi criado pelo <code>bob</code>, mesmo que ambos tenham permissão de escrita na pasta.</p>
<h3>2. Delegação de Sudo Específico</h3>
<p>O administrador do sistema não deve dar permissão de "sudo" total para qualquer um. Você precisa dar permissão para o usuário <code>alice</code> <strong>apenas</strong> para reiniciar o serviço do Apache ou Nginx (ex: <code>systemctl restart nginx</code>).</p>
<p>Edite o arquivo visudo (<code>sudo visudo</code>) e crie uma regra garantindo que <code>alice</code> possa rodar ESSE comando específico sem precisar digitar senha, mas que ela não possa rodar nada além disso como root.</p>
<p>Validação: Teste as permissões criando e apagando arquivos cruzados entre alice e bob, e depois tente usar o sudo com a alice para reiniciar o serviço e para rodar um comando não autorizado (como <code>sudo su</code>).</p>`,
                url: "https://docs.google.com/document/d/1YRDQTmqzmNMwDoGFPdnyik7VyHwLygv8I3XvRjTWxos/edit?usp=sharing"
            },
            {
                id: "chal-6",
                title: "Gerenciamento de Processos e Monitoramento no Linux",
                desc: "Aprender a identificar, monitorar e controlar processos no sistema Linux utilizando o terminal.",
                content: `<p><strong>Atividade:</strong> Automação com Cron e Criação de Serviços via Systemd</p>
<h3>Objetivo</h3>
<p>Deixar de operar o Linux manualmente e passar a entender como o sistema gerencia tarefas agendadas e serviços em background independentes do usuário.</p>
<p>Descrição da Atividade</p>
<h3>1. O Script de Backup (Crontab)</h3>
<p>Crie um script Bash simples (ex: <code>backup.sh</code>) que copie todo o conteúdo de <code>/etc</code> para um arquivo tar.gz dentro da pasta <code>/backups</code>. Adicione logs ao script informando o sucesso.</p>
<p>Utilize o <code>crontab</code> do root para agendar a execução desse script <strong>todos os dias à 1:00 da manhã</strong>.</p>
<h3>2. Criando o seu próprio Serviço Systemd</h3>
<p>Crie um pequeno script em Python, Node ou até Bash que inicie um pequeno servidor web (ex: <code>python3 -m http.server 8080</code>).</p>
<p>Você deve transformar isso em um serviço do sistema operacional. Crie um arquivo <code>meuservidor.service</code> no diretório <code>/etc/systemd/system/</code>.</p>
<p>Configure o arquivo para que:</p>
<ul>
    <li>O serviço inicie automaticamente junto com o boot do sistema (WantedBy=multi-user.target).</li>
    <li>O serviço rode com o seu usuário não-root (User=seuusuario).</li>
    <li>O serviço reinicie automaticamente caso sofra um crash (Restart=on-failure).</li>
</ul>
<p>Validação: Inicie o serviço com <code>systemctl start meuservidor</code>, mate o processo manualmente com <code>kill -9</code> e verifique com <code>systemctl status</code> se o Systemd subiu ele automaticamente de novo.</p>`,
                url: "https://docs.google.com/document/d/11MGL14x8S4sDxF_wgk4E-Ld9mHSIZy5TT8mkq3_pYVs/edit?usp=sharing"
            }
        ],
        usefulLinks: [
            { title: "Linux Journey", url: "https://linuxjourney.com/", desc: "Guia interativo de Linux" },
            { title: "ExplainShell", url: "https://explainshell.com/", desc: "Entenda comandos de terminal" },
            { title: "Foca Linux", url: "https://guiafoca.org/", desc: "Guia completo de Linux" },
            { title: "OverTheWire: Bandit", url: "https://overthewire.org/wargames/bandit/", desc: "Aprenda comandos de Linux jogando (Wargame clássico)" }
        ],
        sections: [
            {
                name: "Vídeos e Playlists",
                icon: "play-circle",
                resources: [
                    { id: "os01", title: "Curso Windows 11", channel: "TechTodos", desc: "Panorama completo sobre Windows 11", url: "https://youtube.com/playlist?list=PLhNntNZaA1Vs_ohkxEp5QifFCAPvHTESH&si=Blsp4aVqXoecdR5R" },
                    { id: "os02", title: "Linux para Iniciantes", channel: "Diolinux", desc: "Conceitos e apresentação do Linux", url: "https://youtube.com/playlist?list=PLZsjaJhVZaxX9xCXhZDJnhFcIL4ncLjVj" },
                    { id: "os03", title: "Curso Linux", channel: "Matheus Battisti", desc: "Linux do básico ao avançado", url: "https://youtube.com/playlist?list=PLnDvRpP8BnezDTtL8lm6C-UOJZn-xzALH&si=NC0HCGsat6By1VOK" },
                    { id: "os04", title: "Windows Server", channel: "Julio Battisti", desc: "Instalação e gerenciamento do Windows Server", url: "https://youtube.com/playlist?list=PLqjSTsK75fSeuSEVCmiP5MkdcNBFRujge" },
                    { id: "os05", title: "Linux for Hackers (conteudo em inglês)", channel: "NetworkChuck", desc: "Linux Voltado para o hacking", url: "https://youtube.com/playlist?list=PLIhvC56v63IJIujb5cyE13oLuyORZpdkL&si=MgpPbx8JIHSse7iU" }
                ]
            },
            {
                name: "Cursos Estruturados",
                icon: "graduation-cap",
                resources: [
                    { id: "osc01", title: "Operating Systems Basics", channel: "Cisco NetAcad", desc: "Fundamentos de SO", url: "https://www.netacad.com/pt/courses/operating-systems-basics" },
                    { id: "osc02", title: "Linux Unhatched", channel: "Cisco NetAcad", desc: "Primeira experiência com Linux", url: "https://www.netacad.com/pt/courses/linux-unhatched" },
                    { id: "osc03", title: "Fundamentos de Linux", channel: "Cisco NetAcad", desc: "Administração essencial", url: "https://www.netacad.com/pt/courses/fundamentos-de-linux" },
                    { id: "osc04", title: "Computer & Mobile Devices", channel: "Cisco NetAcad", desc: "Dispositivos e integração", url: "https://www.netacad.com/pt/courses/computer-mobile-devices" }
                ]
            }
        ]
    });

