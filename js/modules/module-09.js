window.courseData = window.courseData || [];
window.courseData.push({
        id: 9,
        title: "SOC & SIEM",
        objective: "Monitorar, detectar e responder a incidentes em tempo real usando SIEMs como Wazuh, Splunk e Elastic.",
        challenges: [
            {
                id: "chal-soc-0",
                title: "Engenharia de Detecção: Regras Sigma",
                desc: "Crie regras de detecção agnósticas de SIEM baseadas em táticas do Mitre ATT&CK.",
                content: `<p><strong>Atividade:</strong> Criação de Assinaturas com Sigma</p>
<p><strong>Cenário:</strong> Um bom analista de SOC não apenas olha painéis, ele cria as regras lógicas que geram os alertas.</p>
<h3>Tarefas:</h3>
<ul>
    <li>Estude o formato padrão <strong>Sigma</strong> de criação de regras para SIEM.</li>
    <li>Escolha uma técnica do MITRE ATT&CK (ex: T1003 - OS Credential Dumping via Mimikatz).</li>
    <li>Escreva uma regra Sigma no formato YAML que detecte a execução dessa ferramenta (procurando pelos nomes originais do binário, argumentos de linha de comando ou hashes conhecidos no log do Sysmon).</li>
    <li>Utilize o compilador <code>Sigmac</code> (ou Uncoder.io) para converter sua regra para o formato do ElasticSearch ou Wazuh.</li>
</ul>
<h3>Validação:</h3>
<p>Guarde sua regra YAML no portfólio. Engenharia de detecção prova sua capacidade de traduzir o comportamento do atacante em lógica de máquina.</p>`
            },
            {
                id: "chal-soc-1",
                title: "Automação SOAR com Enriquecimento de IoCs",
                desc: "Crie um playbook que consulta APIs externas para classificar IPs antes de gerar alertas.",
                content: `<p><strong>Atividade:</strong> Orquestração e Enriquecimento de Dados (SOAR)</p>
<p><strong>Cenário:</strong> O SOC recebe 1000 alertas de "Login suspeito" por dia. O analista perde tempo verificando manualmente se o IP é de um servidor VPN legítimo ou de um atacante conhecido.</p>
<h3>Tarefas:</h3>
<ul>
    <li>No <strong>Shuffle</strong> (ferramenta SOAR), crie um Workflow que recebe alertas via Webhook contendo um Endereço IP suspeito.</li>
    <li>Adicione um nó (app) que pegue esse IP e consulte a API pública do <strong>AbuseIPDB</strong> ou <strong>VirusTotal</strong>.</li>
    <li>Crie um nó lógico (IF/Condition): Se o IP tiver pontuação de risco alta (malicioso), envie uma mensagem formatada e URGENTE para um canal do Discord/Slack.</li>
    <li>Se o IP for limpo (score baixo), o SOAR deve fechar o caso silenciosamente, poupando o analista.</li>
</ul>
<h3>Validação:</h3>
<p>Execute o fluxo mandando um IP malicioso conhecido e depois um IP do Google (8.8.8.8) para testar os dois caminhos lógicos da automação.</p>`
            },
            {
                id: "chal-soc-2",
                title: "Threat Hunting Hipótese-Orientado",
                desc: "Processe arquivos PCAP e analise telemetria de rede (Zeek) em busca de Beacons C2.",
                content: `<p><strong>Atividade:</strong> Caça a Ameaças (Proactive Threat Hunting)</p>
<p><strong>Cenário:</strong> O antivírus não detectou nada, mas a equipe suspeita que uma máquina interna está comprometida e se comunicando com o atacante (C2 Beaconing).</p>
<h3>Tarefas:</h3>
<ul>
    <li>Baixe um arquivo PCAP público contendo tráfego de malware (ex: repositório <a href="https://www.malware-traffic-analysis.net/" target="_blank">Malware-Traffic-Analysis</a>).</li>
    <li>Processe o PCAP utilizando o <strong>Zeek</strong> para extrair os arquivos de log isolados (ex: <code>conn.log</code> e <code>http.log</code>).</li>
    <li>Abra os logs usando linha de comando (awk/grep), Python (Pandas) ou importe para o ElasticStack.</li>
    <li>Busque ativamente pela hipótese: "Um IP interno fazendo requisições do mesmo tamanho de payload para o mesmo IP externo em intervalos de tempo constantes (Baixo Jitter)".</li>
</ul>
<h3>Validação:</h3>
<p>Extraia o IP do atacante (Command and Control) e documente como você o encontrou manipulando dados brutos de rede. Hunting é a elite do Blue Team.</p>`
            },
            {
                id: "chal-soc-3",
                title: "Integração Completa: Wazuh, Sysmon e DFIR Iris",
                desc: "Construa um pipeline de resposta a incidentes integrando coleta de endpoint avançada com uma plataforma de gestão de casos.",
                content: `<p><strong>Atividade:</strong> Arquitetura de SOC Open-Source</p>
<p><strong>Cenário:</strong> Um SOC moderno não pode operar em silos. Quando o Sysmon detecta algo no Windows, o Wazuh deve gerar o alerta, e o caso deve ser aberto automaticamente para os analistas na plataforma de Incident Response.</p>
<h3>Tarefas:</h3>
<ul>
    <li>Assista ao <a href="https://youtu.be/mgU_q1rJveg" target="_blank">vídeo de referência</a> listado na seção de vídeos.</li>
    <li>Instale o <strong>Sysmon</strong> em uma VM Windows (utilize uma configuração da comunidade como a do SwiftOnSecurity) para habilitar logs profundos (Event ID 1 - Process Creation, Event ID 3 - Network Connection).</li>
    <li>Configure o Wazuh Agent para ingerir os eventos da pasta "Microsoft/Windows/Sysmon/Operational" e enviá-los ao Wazuh Manager.</li>
    <li>Integre o Wazuh à plataforma open-source <strong>DFIR Iris</strong> (pode ser via script nativo <code>integrations</code> do Wazuh ou via webhook usando o Shuffle) para que alertas críticos criem automaticamente um "Case" (Incidente).</li>
</ul>
<h3>Validação:</h3>
<p>Simule um ataque rodando um comando ofuscado ou um dump do LSASS na VM Windows. Apresente um print da tela do DFIR Iris contendo o novo incidente recém-aberto, demonstrando o pipeline de SecOps completo.</p>`
            }
        ],
        usefulLinks: [
            { title: "Wazuh Docs", url: "https://documentation.wazuh.com/", desc: "Documentação oficial do Wazuh" },
            { title: "Elastic SIEM", url: "https://www.elastic.co/security", desc: "Stack ELK para SOC" },
            { title: "DFIR Iris", url: "https://dfir-iris.org/", desc: "Plataforma de Incident Response" },
            { title: "Sigma Rules", url: "https://github.com/SigmaHQ/sigma", desc: "Formato genérico de assinaturas para SIEM" },
            { title: "Shuffle", url: "https://shuffler.io/", desc: "Plataforma Open Source de orquestração (SOAR)" }
        ],
        sections: [
            {
                name: "Vídeos e Playlists",
                icon: "play-circle",
                resources: [
                    { id: "sec07", title: "Wazuh SIEM", channel: "Carlos Silva", desc: "Monitoramento open source", url: "https://youtube.com/playlist?list=PLALjBisXuYJc15J1wWbxXwBLZcCSCjmUJ" },
                    { id: "sec08", title: "SOAR com Shuffle", channel: "Carlos Silva", desc: "Automação de respostas", url: "https://youtube.com/playlist?list=PLALjBisXuYJeM7wa7YkTsi_JOr9Cbu1bC" },
                    { id: "sec09", title: "SOC Lab", channel: "Carlos Silva", desc: "Centro de operações", url: "https://youtube.com/playlist?list=PLALjBisXuYJdavQDEeB0JcgqSRKSDhGPu" },
                    { id: "sec09b", title: "Integração Wazuh + Iris + Sysmon", channel: "Case Prático", desc: "Pipeline completo de SecOps", url: "https://youtu.be/mgU_q1rJveg" }
                ]
            }
        ]
    });
