window.courseData = window.courseData || [];
window.courseData.push({
        id: 4,
        title: "Virtualização",
        objective: "Criar e gerenciar ambientes isolados com hypervisors (VMware, VirtualBox, Hyper-V) para laboratórios seguros.",
        challenges: [
            {
                id: "chal-7",
                title: "Comunicação entre Máquinas Virtuais",
                desc: "Configurar duas máquinas virtuais Linux (somente terminal) e validar a comunicação entre elas através do comando ping.",
                content: `<p><strong>Atividade:</strong> Infraestrutura com VirtualBox: NAT, Host-Only e Port Forwarding</p>
<h3>Objetivo</h3>
<p>Entender na prática como os hipervisores emulam redes físicas e como fazer roteamento entre redes virtuais e o mundo externo.</p>
<p>Descrição da Atividade</p>
<h3>1. Topologia com duas VMs</h3>
<p>Crie <strong>VM-1 (Gateway)</strong>: Em vez de um Linux comum, utilize uma distribuição Open-Source específica para roteamento e firewall (ex: <strong>pfSense, OPNsense, OpenWrt ou VyOS</strong>). Adicione duas placas de rede virtuais a ela: uma em modo NAT (para acessar a internet) e outra em modo Rede Interna (Internal Network) chamada "dmz".</p>
<p>Crie <strong>VM-2 (Servidor)</strong>: Adicione apenas uma placa de rede no modo Rede Interna ligada à "dmz". Instale um servidor web Nginx nela.</p>
<h3>2. Roteamento e Acesso</h3>
<p>A VM-2 estará isolada sem internet. Configure a VM-1 (seu novo roteador open-source) através de sua interface de administração para atuar como Gateway. Você precisará configurar regras de NAT (Outbound) para dar internet à VM-2.</p>
<h3>3. Port Forwarding</h3>
<p>Você não consegue acessar o site da VM-2 pelo navegador do seu PC físico. Configure uma regra de Redirecionamento de Portas (Port Forwarding) no painel do seu roteador open-source (e no VirtualBox) encaminhando a porta 8080 do PC físico até a porta 80 da VM-2.</p>
<p>Validação: Abra o navegador no seu Windows/Mac físico e acesse <code>localhost:8080</code>. A requisição deverá atravessar o VirtualBox, passar pela VM-1, ser roteada para a VM-2, e mostrar a página do Nginx.</p>`,
                url: "https://docs.google.com/document/d/1C5XvASkGa0AsVLX4nRtLU5MCJPpBFq2uXGHPoF_VIlw/edit?usp=sharing"
            },
            {
                id: "chal-8",
                title: "Subindo um Serviço com Docker",
                desc: "Aprender a executar um serviço simples utilizando Docker.",
                content: `<p><strong>Atividade:</strong> Orquestração de Microserviços com Docker Compose</p>
<h3>Objetivo</h3>
<p>Substituir a simples execução de um container solto pela criação de uma stack de serviços interconectados, persistentes e gerenciáveis.</p>
<p>Descrição da Atividade</p>
<h3>1. Criando o Docker Compose</h3>
<p>Em vez de rodar comandos manuais, crie um arquivo <code>docker-compose.yml</code>. Ele deve orquestrar a subida de um sistema WordPress completo. O arquivo deve conter:</p>
<ul>
    <li>Um serviço de banco de dados (ex: MySQL ou MariaDB) usando variáveis de ambiente para definir as senhas iniciais.</li>
    <li>Um serviço de aplicação Web (WordPress) dependendo do banco de dados (<code>depends_on</code>).</li>
</ul>
<h3>2. Redes e Persistência de Dados (Volumes)</h3>
<p>No mesmo arquivo, defina uma "Network" customizada do tipo Bridge, e coloque os dois serviços conversando dentro dela.</p>
<p>Defina dois "Volumes" Docker nomeados: um para salvar os dados do MySQL (<code>/var/lib/mysql</code>) e outro para salvar os arquivos do site WordPress (<code>/var/www/html</code>). Sem volumes, todo o site será perdido se os containers reiniciarem.</p>
<p>Validação: Suba a estrutura com <code>docker-compose up -d</code>. Entre no painel do WordPress, crie uma postagem. Destrua os containers usando <code>docker-compose down</code>. Suba de novo e certifique-se de que sua postagem ainda está lá porque você usou Volumes persistentes corretamente.</p>`,
                url: "https://docs.google.com/document/d/190S3hVXMLKFyPWP5zy_61YZCl70iJ5RpheqpDIiqP9I/edit?usp=sharing"
            }
        ],
        usefulLinks: [
            { title: "VirtualBox", url: "https://www.virtualbox.org/", desc: "Hypervisor gratuito" },
            { title: "Docker", url: "https://www.docker.com/", desc: "Containerização de aplicações e serviços" },
            { title: "Play with Docker", url: "https://labs.play-with-docker.com/", desc: "Laboratório Docker gratuito no navegador" },
            { title: "Proxmox VE", url: "https://www.proxmox.com/en/proxmox-virtual-environment/overview", desc: "Plataforma de virtualização Open Source nível enterprise" }
        ],
        sections: [
            {
                name: "Vídeos e Playlists",
                icon: "play-circle",
                resources: [
                    { id: "virt01", title: "Virtualização Completa", channel: "Hardware Redes Brasil", desc: "VMs e ambientes isolados", url: "https://youtube.com/playlist?list=PLAp37wMSBouCqJnY-Qck_XDwplEud3ELc" },
                    { id: "virt02", title: "Docker Para Iniciantes", channel: "Diolinux", desc: "Containerização de aplicações e serviços", url: "https://youtu.be/ntbpIfS44Gw?t" },
                    { id: "virt03_k8s", title: "Curso Certified Kubernetes Administrator (CKA)", channel: "freeCodeCamp", desc: "Curso completo em vídeo cobrindo a administração e orquestração de containers com Kubernetes. Nota: Em inglês (tradução automática disponível).", url: "https://www.freecodecamp.org/news/prepare-for-the-kubernetes-administrator-certification-and-pass/" }
                ]
            }
        ]
    });

