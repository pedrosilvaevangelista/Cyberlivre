window.courseData = window.courseData || [];
window.courseData.push({
        id: 16,
        category: "Ofensiva",
        title: "Análise de Malware",
        objective: "Analisar comportamentos maliciosos via análise estática (PE headers, strings) e dinâmica (sandboxing, ProcMon).",
        challenges: [
            {
                id: "chal-mal-0",
                title: "Triage e Análise Dinâmica",
                desc: "Faça a triagem comportamental de artefatos maliciosos em ambiente controlado (Sandbox).",
                content: `<p><strong>Atividade:</strong> Behavioral Analysis e Extração de IoCs</p>
<p><strong>Cenário:</strong> Um executivo recebeu um boleto suspeito. Antes de bloquear coisas na rede, você precisa saber o que esse arquivo faz quando aberto.</p>
<h3>Tarefas:</h3>
<ul>
    <li>Baixe uma amostra bloqueada em ZIP com senha ("infected") do <a href="https://bazaar.abuse.ch/" target="_blank">MalwareBazaar</a> em uma máquina virtual estritamente isolada.</li>
    <li>Em vez de executar, submeta a amostra a um sandbox interativo online como o <a href="https://any.run/" target="_blank">Any.run</a> ou Triage.</li>
    <li>Extraia do relatório de execução: as Chaves de Registro (Regedit) que o malware criou para garantir persistência, e a lista de IPs de Command and Control (C2) com os quais ele tentou se comunicar.</li>
</ul>
<h3>Validação:</h3>
<p>Entregue uma lista de Indicadores de Comprometimento (IoCs) prontos para serem adicionados às regras de bloqueio do Firewall e EDR.</p>`
            },
            {
                id: "chal-mal-1",
                title: "Engenharia Reversa Estática",
                desc: "Desmonte o código de binários compilados usando Ghidra ou IDA Pro.",
                content: `<p><strong>Atividade:</strong> Reverse Engineering de Binários (Assembly)</p>
<p><strong>Cenário:</strong> O malware não executa na sandbox porque detectou a virtualização. Precisamos abrir o "motor" e ver as instruções puras.</p>
<h3>Tarefas:</h3>
<ul>
    <li>Instale a ferramenta open-source da NSA, o <a href="https://ghidra-sre.org/" target="_blank">Ghidra</a>.</li>
    <li>Importe um binário malicioso simples (ou desafios de CrackMe como os do crackmes.one).</li>
    <li>Navegue até o ponto de entrada principal (função <code>main</code>) e utilize a janela do descompilador (Decompile) para transformar as instruções em Assembly legível para um pseudocódigo C.</li>
    <li>Identifique funções suspeitas de evasão ou de injeção de processos (Process Hollowing).</li>
</ul>
<h3>Validação:</h3>
<p>A engenharia reversa permite desvendar as intenções completas do autor do malware, até mesmo a sua lógica condicional escondida.</p>`
            },
            {
                id: "chal-mal-2",
                title: "Desofuscação Avançada de Scripts",
                desc: "Limpe scripts Powershell/VBS carregados em memória antes de eles detonarem a carga principal.",
                content: `<p><strong>Atividade:</strong> Script Deobfuscation</p>
<p><strong>Cenário:</strong> Ameaças modernas não baixam .EXE; elas usam macros do Office que rodam gigantescos scripts do PowerShell altamente ofuscados em Base64 e XOR.</p>
<h3>Tarefas:</h3>
<ul>
    <li>Pesquise por amostras ou exemplos didáticos de "Emotet PowerShell obfuscation".</li>
    <li>Utilize o CyberChef para remover camadas de ofuscação sucessivas (Decode Base64 -> Remove Null Bytes -> XOR Brute Force).</li>
    <li>Utilize ferramentas nativas como renomear e "dar Print" nas variáveis maliciosas (dump variables) num ambiente seguro ao invés de deixá-las executarem a função <code>Invoke-Expression (IEX)</code>.</li>
</ul>
<h3>Validação:</h3>
<p>Encontre a URL final escondida dentro da ofuscação, que faria o download do segundo estágio da infecção (dropper). O poder de um analista reside na capacidade de decifrar as táticas de evasão.</p>`
            }
        ],
        usefulLinks: [
            { title: "MalwareBazaar", url: "https://bazaar.abuse.ch/", desc: "Repositório de amostras" },
            { title: "Any.run", url: "https://any.run/", desc: "Sandbox interativa online" }
        ],
        sections: [
            {
                name: "Vídeos e Playlists",
                icon: "play-circle",
                resources: [
                    { id: "sec14", title: "Malwares e Afins", channel: "Douglas Lockshield", desc: "Análise de ameaças", url: "https://youtube.com/playlist?list=PLKXxjimG9Fo3MhbfVE5nsuWznK4oUiSrz" }
                ]
            }
        ]
    });
