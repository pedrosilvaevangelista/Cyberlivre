window.courseData = window.courseData || [];
window.courseData.push({
        id: 0,
        title: "Hardware",
        objective: "Dominar a base física dos sistemas: escolha de CPU, GPU, RAM, armazenamento e fontes para cada tipo de workstation.",
        challenges: [
            {
                id: "chal-0",
                title: "Configuração de Hardware",
                desc: "Selecione os componentes para a montagem de 3 computadores conforme os cenários descritos.",
                content: `<p>Selecione os componentes para a montagem de 3 computadores conforme os cenários abaixo. O objetivo é a máxima eficiência técnica, evitando gargalos (bottlenecks) e garantindo longevidade.</p>
                
<h3>️ Cenários</h3>
<ul>
    <li><strong>Workstation de IA e Render:</strong> Máquina voltada para treinamento de modelos locais e renderização pesada em 3D. Exige alto processamento multi-core e VRAM extensa.</li>
    <li><strong>Servidor de Arquivos (NAS) Doméstico:</strong> Focado em armazenamento redundante (RAID 1 ou 5), baixo consumo de energia (eficiência 80 Plus) e operação silenciosa. Sem necessidade de GPU dedicada.</li>
    <li><strong>Computador Gamer Competitivo:</strong> Foco extremo em altas taxas de quadros (240Hz/1080p). Exige processador com alto IPC (Instruções por Clock) e memória RAM com baixa latência, configurada estritamente em Dual-Channel.</li>
</ul>

<h3> Requisitos de Arquitetura</h3>
<ul>
    <li><strong>Análise de Gargalo:</strong> Para a Workstation e o PC Gamer, justifique como a escolha da Placa-Mãe (linhas PCIe) não limitará a GPU ou os SSDs NVMe.</li>
    <li><strong>Energia:</strong> Calcule o TDP total de cada máquina e especifique uma fonte de alimentação com a folga e certificação adequadas.</li>
    <li><strong>Armazenamento:</strong> Especifique topologias (ex: NVMe para SO/Cache + HDD para massa no NAS).</li>
</ul>

<div style="background: var(--indigo-light); padding: 1.5rem; border-radius: var(--radius-md); border: 1px solid var(--indigo-mid); margin-top: 1.5rem;">
    <h3 style="color: var(--indigo-dark); margin-top: 0;">Ferramenta Sugerida</h3>
    <p style="margin-bottom: 0;">Valide suas configurações e compatibilidade através da ferramenta: <a href="https://meupc.net/build" target="_blank" style="color: var(--indigo); font-weight: bold;">https://meupc.net/build</a> e sites como <a href="https://pc-bottleneck.com/pt/" target="_blank">pc-bottleneck</a>.</p>
</div>`,
                url: "https://docs.google.com/document/d/11z9mHPGJq74RPr39kk0xeXGx5KNl7azEbbyXfOkcFm8/edit?usp=sharing"
            },
            {
                id: "chal-1",
                title: "Montagem de computadores",
                desc: "Monte as configurações para os 8 computadores do escritório, garantindo que cada colaborador consiga executar suas ferramentas sem travamentos.",
                content: `<p><strong>Atividade:</strong> Hardware para Escritório de Design e Arquitetura</p>
<p><strong>Cenário:</strong> Você foi contratado para montar o hardware de um escritório de arquitetura e design de interiores chamado "Espaço & Traço". O escritório possui 3 setores distintos que exigem máquinas com capacidades diferentes.</p>
<p><strong>Objetivo:</strong> Monte as configurações para os 8 computadores do escritório, garantindo que cada colaborador consiga executar suas ferramentas sem travamentos.</p>
<h3>1. Setores e Máquinas</h3>
<h3>A - Estações de Renderização e Modelagem 3D (3 Máquinas)</h3>
<p><strong>O que será rodado:</strong> AutoCAD (projetos complexos), SketchUp com V-Ray (renderização pesada de imagens) e Lumion (renderização de vídeo em tempo real).</p>
<p><strong>Foco de Hardware:</strong> Placa de vídeo dedicada (GPU) potente, muita memória RAM e processadores com alto desempenho multi-core.</p>
<h3>B - Estações de Design Gráfico e Edição (3 Máquinas)</h3>
<p><strong>O que será rodado:</strong> Pacote Adobe (Photoshop, Illustrator e InDesign).</p>
<p><strong>Foco de Hardware:</strong> Processadores com clock alto (single-core rápido), boa quantidade de memória RAM para arquivos pesados e telas com fidelidade de cor (embora o foco aqui seja a torre/PC).</p>
<h3>C - Estação Administrativa e Recepção (2 Máquinas)</h3>
<p><strong>O que será rodado:</strong> Sistemas de gestão (ERP), navegadores com muitas abas abertas, Excel e softwares de comunicação (Slack/Teams).</p>
<p><strong>Foco de Hardware:</strong> Estabilidade e rapidez na abertura de programas. Foco total em SSD e processadores de entrada/intermediários com vídeo integrado.</p>
<h3>2. Observações Técnicas</h3>
<p><strong>Sistema Operacional:</strong> Todos devem possuir Windows 11 Pro (versão para empresas).</p>
<p><strong>Forma de Compra:</strong> Você pode optar por montar as peças ou escolher modelos prontos de marcas como Dell, HP ou Lenovo (ex: linha OptiPlex ou Precision).</p>
<p><strong>Orçamento:</strong> Não há limites, mas as escolhas devem ser justificadas pela necessidade do software.</p>
<p><strong>Periféricos:</strong> Não são necessários nesta atividade.</p>
<h3>3. Conclusão</h3>
<p>Para cada um dos 3 perfis acima, crie uma lista de componentes ou o modelo pronto escolhido como exercício prático.</p>
<p><strong>Dica:</strong> Para as máquinas que decidir montar peça por peça, utilize o site: https://meupc.net/build</p>`,
                url: "https://docs.google.com/document/d/18H5Udsehur2udOWYno_xEqG21qHfm5qsd_GMr3kKiRU/edit?usp=sharing"
            },
            {
                id: "chal-2",
                title: "manutenção de computador",
                desc: "resolva os problemas de hardware do computador de um cliente.",
                content: `<p>Atividade de Hardware: “Meu PC liga, mas desliga depois de um tempo”</p>
<p>Descrição do problema:</p>
<p>Um cliente traz um computador desktop com a seguinte reclamação:</p>
<p>“Ligo o PC normal, ele entra no Windows, consigo usar por uns 10 a 30 minutos. Mas depois ele simplesmente desliga do nada, como se tivesse perdido a energia. Não aparece mensagem de erro, não desliga de forma ordenada. Depois que esfria um pouco, liga de novo e funciona mais uns minutos.”</p>
<p>Informações adicionais:</p>
<p>O problema acontece tanto em jogos quanto em tarefas leves (navegar na web), mas é mais rápido em jogos.</p>
<p>Já foi testada outra tomada e outro cabo de força, o problema persiste.</p>
<p>Não há bipes ou sons de alarme.</p>
<p>As ventoinhas giram normalmente no início.</p>
<p>O cliente já formatou o PC e instalou Windows novamente – o problema continua, então não é software.</p>
<p>Tarefa do aluno:</p>
<p>1 - Liste pelo menos 3 possíveis causas para um computador desligar sozinho após algum tempo de uso.</p>
<p>2 - Qual é a causa mais provável nesse caso, considerando que o problema piora sob carga (jogos) e melhora quando o PC esfria? Justifique.</p>
<p>3 - Descreva o passo a passo do diagnóstico que você faria para confirmar a causa principal. Inclua:</p>
<ul>
    <li>Ferramentas que vai usar (ex.: software, multímetro, termômetro infravermelho...).</li>
    <li>Testes práticos (como abrir o gabinete, observar componentes, fazer medições).</li>
</ul>
<p>4 - Após identificar o componente defeituoso, explique o conserto:</p>
<ul>
    <li>Se for possível reparar sem trocar peça, como fazer?</li>
    <li>Se precisar trocar, qual peça substituir?</li>
    <li>Há alguma solução temporária para o cliente usar o PC até o conserto definitivo?</li>
</ul>
<p>5 - O que o cliente poderia fazer para evitar que esse problema aconteça novamente no futuro?</p>`,
                url: "https://docs.google.com/document/d/1Rmt7m_J5OhLBM-qs1RB7T4Frm3Wy1rFwWhvpBrGfnT0/edit?usp=sharing"
            },
            {
                id: "chal-3",
                title: "manutenção de computador 2",
                desc: "resolva os problemas de hardware do computador de um cliente.",
                content: `<p>Atividade de Hardware: “Meu PC reinicia em loop antes de carregar o Windows”</p>
<p>Descrição do problema:</p>
<p>Um cliente traz um computador desktop com a seguinte reclamação:</p>
<p>“Quando ligo o PC, ele mostra a tela inicial da placa-mãe (logo da marca), mas antes de aparecer o círculo do Windows carregando, o computador desliga e reinicia sozinho. Isso se repete infinitamente. Às vezes chega a mostrar ‘Preparando reparo automático’, mas reinicia de novo no meio. Já tentei ligar várias vezes e o comportamento é sempre o mesmo.”</p>
<p>Informações adicionais:</p>
<p>O problema começou depois que o cliente desligou o PC à força (segurando o botão power) porque o sistema travou.</p>
<p>O cliente já tentou ligar sem nenhum pendrive ou disco externo.</p>
<p>As ventoinhas da CPU e do gabinete giram normalmente durante o breve período em que o PC fica ligado.</p>
<p>Não há bips sonoros (ou a placa-mãe não tem speaker interno).</p>
<p>O cliente tem conhecimentos básicos e já resetou a BIOS tirando a bateria por alguns minutos – o problema persiste.</p>
<p>Tarefa:</p>
<p>1 - Liste pelo menos 4 possíveis causas para um computador reiniciar em loop antes de carregar o sistema operacional, considerando que o problema começou após um desligamento forçado.</p>
<p>2 - Qual(is) dessas causas você investigaria primeiro? Justifique sua prioridade com base nos sintomas.</p>
<p>3 - Descreva o passo a passo do diagnóstico que você faria para isolar o defeito. Inclua:</p>
<ul>
    <li>Procedimentos iniciais (sem precisar de ferramentas especiais).</li>
    <li>Como testar cada componente suspeito.</li>
    <li>Qual a ordem lógica dos testes (do mais simples ao mais complexo).</li>
</ul>
<p>4 - Após identificar a causa provável, explique como consertar. Se houver mais de uma possibilidade, indique a solução para cada uma.</p>
<p>5 - Qual foi o erro do cliente que pode ter desencadeado o problema? Como ele deveria ter agido corretamente?</p>`,
                url: "https://docs.google.com/document/d/18vWXOVBCJEzPMS26F25aWuSLlYLurY6pIJpMrMP_Ufs/edit?usp=sharing"
            }
        ],
        usefulLinks: [
            { title: "Calculadora de fonte de alimentação", url: "https://br.msi.com/power-supply-calculator", desc: "Escolher a fonte de alimentação ideal para o seu PC" },
            { title: "Calculadora de gargalo", url: "https://pc-bottleneck.com/pt/", desc: "Verificar se a placa de vídeo é compatível com o processador" },
            { title: "Monte seu PC", url: "https://meupc.net/build", desc: "Monte seu PC Completo" },
        ],
        sections: [
            {
                name: "Vídeos e Playlists",
                icon: "play-circle",
                resources: [
                    { id: "h01", title: "Curso Completo de Hardware", channel: "Curso em Vídeo", desc: "Fundamentos estruturados", url: "https://youtube.com/playlist?list=PLHz_AreHm4dn1JHgN9wpbIUhzZmycYQXW" },
                    { id: "h02", title: "Curso Montagem e Manutenção", channel: "Hardware Redes Brasil", desc: "Montagem e manutenção", url: "https://youtube.com/playlist?list=PLAp37wMSBouCBS51KUcd_yNBOzSd4Rby4&si=ocaud6wQHru7F-Yu" },
                    { id: "h03", title: "Hardware na Prática", channel: "MW Informática", desc: "Videos Práticos de Hardware", url: "https://youtube.com/playlist?list=PL968TMGoACSuEiD44jNGIbvQfJo4Lwf3-" },
                    { id: "h04", title: "Hardware Hacking", channel: "penegui", desc: "Videos sobre hardware hacking", url: "https://youtube.com/playlist?list=PLfka6izM9ttCfWU8cFSLw7nMp_X7E4m7T&si=3HKchCC2wSBbzv8R" },
                    { id: "h05", title: "Mais sobre Hardware Hacking", channel: "Hardware Hacking", desc: "Mais vídeos sobre hardware hacking", url: "https://youtube.com/playlist?list=PLmuhNadVlssg1fkJsQ5m2-gkv6TuRiXsY&si=bS1Rj00qcuh1bqK7" }
                ]
            },
            {
                name: "Cursos Estruturados",
                icon: "graduation-cap",
                resources: [
                    { id: "hc01", title: "Fundamentos de TI", channel: "Fundação Bradesco", desc: "Introdução ao hardware e software", url: "https://www.ev.org.br/cursos/fundamentos-de-ti-hardware-e-software" },
                    { id: "hc02", title: "Hardware Basics", channel: "Cisco NetAcad", desc: "Componentes e arquitetura técnica", url: "https://www.netacad.com/pt/courses/computer-hardware-basics" }
                ]
            }
        ]
    });
