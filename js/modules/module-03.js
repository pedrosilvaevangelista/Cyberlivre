window.courseData = window.courseData || [];
window.courseData.push({
        id: 3,
        title: "Redes",
        objective: "Dominar o modelo OSI, TCP/IP, protocolos essenciais e análise de tráfego com Wireshark.",
        challenges: [
            {
                id: "chal-redes-0",
                title: "Projeto de Infraestrutura de Rede Local (LAN)",
                desc: "Você é o analista de redes responsável por especificar o hardware e o desenho da rede.",
                content: `<p><strong>Atividade:</strong> Subnetting Avançado com VLSM (Variable Length Subnet Mask)</p>
<p><strong>Cenário:</strong> Uma grande empresa comprou o bloco IP de classe B privado <strong>172.16.0.0/16</strong> e contratou você para dividir essa rede com a máxima eficiência, evitando desperdício de IPs.</p>
<p><strong>Objetivo:</strong> Projetar a tabela de endereçamento IP utilizando VLSM para alocar exatamente as necessidades da matriz e suas filiais.</p>
<h3>1. Requisitos de Host por Sub-rede</h3>
<ul>
    <li>Filial São Paulo (Matriz): 1000 hosts</li>
    <li>Filial Rio de Janeiro: 400 hosts</li>
    <li>Filial Curitiba: 120 hosts</li>
    <li>Filial Salvador: 50 hosts</li>
    <li>3 Links de Roteamento Ponto a Ponto (Conectando as filiais à Matriz): 2 hosts cada link.</li>
</ul>
<h3>2. Cálculos VLSM</h3>
<ul>
    <li>Ordene as redes da maior necessidade de hosts para a menor.</li>
    <li>Para cada rede, calcule a máscara de sub-rede mais justa (CIDR ideal: /22, /23, /24, /30 etc).</li>
    <li>Anote o Endereço de Rede, Primeiro IP Útil, Último IP Útil, Endereço de Broadcast e a Máscara (em notação decimal e CIDR).</li>
</ul>
<h3>3. Segurança Lógica</h3>
<ul>
    <li>Responda por que não poderíamos simplesmente colocar todos os 1570 computadores na mesma grande rede <code>/16</code>. O que aconteceria com os domínios de broadcast (tempestades de broadcast) e qual a vantagem de segmentar?</li>
</ul>
<h3>5. Conclusão</h3>
<p>Reúna o diagrama e o documento de texto com a lista de hardwares, cálculo de IP e política de segurança para o seu portfólio de estudos.</p>`
            },
            {
                id: "chal-redes-1",
                title: "Simulação de Redes com Packet Tracer",
                desc: "Monte uma topologia funcional de redes simulando filiais.",
                content: `<p><strong>Atividade:</strong> Configuração de VLANs e Router-on-a-Stick no Packet Tracer</p>
<p><strong>Cenário:</strong> Uma empresa possui os departamentos Administrativo, RH e Operacional. Eles dividem os mesmos switches físicos, mas precisam de total isolamento de broadcast por segurança lógica.</p>
<h3>Tarefas:</h3>
<ul>
    <li>No Cisco Packet Tracer, insira 1 Roteador, 2 Switches Interligados e 6 PCs (2 para cada departamento).</li>
    <li>Crie as VLAN 10 (Admin), VLAN 20 (RH) e VLAN 30 (Operacional) nos Switches. Atribua as portas dos PCs corretos no modo "Access" para cada VLAN.</li>
    <li>Configure o link entre os Switches e o link para o Roteador como modo "Trunk" (IEEE 802.1Q).</li>
    <li>No Roteador, configure "Router on a Stick", criando sub-interfaces para atuar como Default Gateway para cada uma das 3 VLANs.</li>
    <li>(Opcional Avançado): Configure um servidor DHCP no Roteador (pools IP) para entregar endereços IP dinâmicos para cada VLAN automaticamente.</li>
</ul>
<h3>Validação:</h3>
<p>Verifique se a topologia está verde (comunicação ativa) e observe no terminal do PC o Ping bem-sucedido.</p>`
            },
            {
                id: "chal-redes-2",
                title: "Configuração de Firewall e ACLs",
                desc: "Configure listas de controle de acesso (ACLs) para restringir tráfego inter-VLANs.",
                content: `<p><strong>Atividade:</strong> Implementação de Firewall de Rede Básico com Access Control Lists (ACLs)</p>
<p><strong>Cenário:</strong> Sua infraestrutura de VLANs está funcionando e todo mundo pinga em todo mundo. Mas por segurança, as permissões devem ser restritas com regras no Roteador.</p>
<h3>Tarefas:</h3>
<ul>
    <li>Usando a topologia da atividade anterior (VLANs), conecte um "Servidor Central" à rede em uma VLAN 99 dedicada a Servidores.</li>
    <li>O Roteador deve atuar como firewall de estado usando Extended ACLs do Cisco IOS.</li>
    <li><strong>Regra 1:</strong> A VLAN 10 (Admin) tem acesso a qualquer lugar da rede.</li>
    <li><strong>Regra 2:</strong> A VLAN 20 (RH) pode acessar apenas a Porta 80 (HTTP) e Porta 443 (HTTPS) do Servidor Central. Qualquer comunicação Ping (ICMP) ou para outras portas deve ser bloqueada.</li>
    <li><strong>Regra 3:</strong> A VLAN 30 (Operacional) tem permissão bloqueada para o Servidor Central e para a VLAN RH, podendo apenas acessar a internet (caso houvesse um roteador de borda).</li>
</ul>
<h3>Validação:</h3>
<p>Teste as políticas a partir dos computadores: um ping do RH para o Servidor deve falhar (Destination Unreachable), mas o acesso pelo navegador do PC do RH (HTTP) ao Servidor deve abrir a página com sucesso. Isso comprova o domínio sobre segurança na camada 3 e 4 OSI.</p>`
            }
        ],
        usefulLinks: [
            { title: "Calculadora de subredes IPv4", url: "https://www.site24x7.com/es/tools/ipv4-subredes-calculadora.html", desc: "Cálculo de IPs" },
            { title: "Ping.eu", url: "https://ping.eu", desc: "ping, traceroute, DNS lookup, WHOIS, verificação de portas, tudo em um" },
            
        ],
        sections: [
            {
                name: "Vídeos e Playlists",
                icon: "play-circle",
                resources: [
                    { id: "n01", title: "Fundamentos de Redes", channel: "Hardware Redes Brasil", desc: "Conceitos essenciais", url: "https://youtube.com/playlist?list=PLAp37wMSBouDdpuuYhZfEK9oH0qk0IANb" },
                    { id: "n02", title: "Redes Completo", channel: "Fabricio Breve", desc: "Protocolos e arquiteturas", url: "https://youtube.com/playlist?list=PLvHXLbw-JSPfKp65psX5C9tyNLHHC4uoR" },
                    { id: "n03", title: "Redes na Prática", channel: "Hardware Redes Brasil", desc: "Laboratórios hands-on", url: "https://youtube.com/playlist?list=PLAp37wMSBouBnNup2tD-mC36JT96vHBZy" },
                    { id: "n04", title: "CCNA ao CCIE", channel: "CK Training IT", desc: "Certificações profissionais", url: "https://youtube.com/playlist?list=PLQ0wGj6HHA6ZPywJlTpwaU1YjiL9AKSft" },
                    { id: "n05", title: "Cisco Packet Tracer", channel: "Hardware Redes Brasil", desc: "Simulação de redes", url: "https://youtube.com/playlist?list=PLAp37wMSBouDeR3lBP2SsEe6GC5YW2UIg" }
                ]
            },
            {
                name: "Cursos Estruturados",
                icon: "graduation-cap",
                resources: [
                    { id: "nc01", title: "Trilha Técnico em Redes", channel: "Cisco NetAcad", desc: "Redes de computadores", url: "https://www.netacad.com/pt/career-paths/network-technician?courseLang=pt-BR" },
                    { id: "nc02", title: "Packet Tracer Official", channel: "Cisco NetAcad", desc: "Simulador oficial", url: "https://www.netacad.com/pt/courses/getting-started-cisco-packet-tracer" }
                ]
            }
        ]
    });
