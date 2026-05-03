window.courseData = window.courseData || [];
window.courseData.push({
        id: 10,
        title: "Forense Digital",
        objective: "Coletar e analisar evidências digitais de incidentes com integridade forense e cadeia de custódia.",
        challenges: [
            {
                id: "chal-for-0",
                title: "Análise de Memória RAM (Volatility)",
                desc: "Investigue malwares furtivos que operam apenas na memória volátil.",
                content: `<p><strong>Atividade:</strong> Forense em Memória (Memory Forensics)</p>
<p><strong>Cenário:</strong> Um malware fileless (sem arquivo) comprometeu um servidor crítico. Ele não deixou rastros no disco, mas os artefatos estão na RAM.</p>
<h3>Tarefas:</h3>
<ul>
    <li>Instale o framework <a href="https://github.com/volatilityfoundation/volatility3" target="_blank">Volatility 3</a> em sua máquina Linux.</li>
    <li>Baixe um dump de memória infectado (ex: dos laboratórios do <a href="https://cyberdefenders.org/blueteam-ctf-challenges/" target="_blank">CyberDefenders</a> ou Stuxnet samples).</li>
    <li>Utilize os plugins de listagem de processos (<code>windows.pslist</code>, <code>windows.psscan</code>, <code>windows.pstree</code>) para identificar o processo pai suspeito.</li>
    <li>Faça o dump do executável injetado na memória para análise posterior.</li>
</ul>
<h3>Validação:</h3>
<p>Documente o Process ID (PID) malicioso e envie o executável extraído para o VirusTotal para comprovar a ameaça.</p>`
            },
            {
                id: "chal-for-1",
                title: "Timeline Analysis (Artefatos Windows)",
                desc: "Reconstrua os passos do atacante explorando MFT e Prefetch.",
                content: `<p><strong>Atividade:</strong> Reconstrução Histórica (Timeline)</p>
<p><strong>Cenário:</strong> O atacante deletou os logs do Windows, mas o sistema operacional possui artefatos ocultos que provam a execução de binários.</p>
<h3>Tarefas:</h3>
<ul>
    <li>Extraia de uma máquina Windows a Master File Table (<code>$MFT</code>) e a pasta <code>C:\\Windows\\Prefetch</code>.</li>
    <li>Utilize ferramentas como o <code>PECmd</code> (Eric Zimmerman Tools) para parsear os arquivos Prefetch.</li>
    <li>Analise o CSV de saída para determinar exatamente que dia, hora e quantas vezes um binário malicioso (ex: cmd.exe rodando da pasta Temp) foi executado.</li>
</ul>
<h3>Validação:</h3>
<p>Crie uma "Super Timeline" cronológica provando os minutos exatos da invasão. O tribunal exige precisão nos artefatos.</p>`
            },
            {
                id: "chal-for-2",
                title: "Resposta a Incidentes em Redes (PCAP)",
                desc: "Extraia arquivos maliciosos ocultos no tráfego de rede capturado.",
                content: `<p><strong>Atividade:</strong> Network Forensics</p>
<p><strong>Cenário:</strong> Um alerta do IDS avisou que um payload foi baixado via HTTP, mas o antivírus local falhou em detê-lo.</p>
<h3>Tarefas:</h3>
<ul>
    <li>Abra um arquivo PCAP de um ataque conhecido (ex: Emotet ou Trickbot) utilizando o <strong>Wireshark</strong>.</li>
    <li>Filtre o tráfego por requisições <code>http.request.method == "GET"</code> ou filtre portas não-padrão.</li>
    <li>Siga o "TCP Stream" para visualizar o arquivo binário sendo transferido.</li>
    <li>Utilize a função "Export Objects -> HTTP" do Wireshark para salvar o binário (ex: payload.exe) ou documento do Word malicioso em seu computador seguro.</li>
</ul>
<h3>Validação:</h3>
<p>A extração do payload permite à equipe de Malware realizar a engenharia reversa. Tire o hash do arquivo extraído para anexar ao relatório.</p>`
            }
        ],
        usefulLinks: [
            { title: "Autopsy", url: "https://www.autopsy.com/", desc: "Ferramenta de análise forense open-source" },
            { title: "Volatility", url: "https://volatilityfoundation.org/", desc: "Framework para forense de memória RAM" },
            { title: "SANS DFIR", url: "https://www.sans.org/posters/", desc: "Cheat sheets essenciais para Resposta a Incidentes" }
        ],
        sections: [
            {
                name: "Vídeos e Playlists",
                icon: "play-circle",
                resources: [
                    { id: "for01", title: "Workshops e Masterclasses", channel: "Academia de Forense Digital", desc: "Aulas focadas puramente em perícia forense", url: "https://youtube.com/playlist?list=PLscBKgf46Ju4lPqCcYpsekS7Bs2gI3ZPA&si=f37N_nugSw76NMrm" },
                ]
            }
        ]
    });
