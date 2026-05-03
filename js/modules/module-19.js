window.courseData = window.courseData || [];
window.courseData.push({
        id: 19,
        category: "Especialização",
        title: "Currículo & Portfólio",
        objective: "Construir um portfólio técnico irrefutável e um currículo otimizado para ATS que posiciona você no mercado.",
        challenges: [
            {
                id: "chal-carr-0",
                title: "Laboratório Prático (O Showcase Técnico)",
                desc: "A falta de experiência profissional se combate com a construção de laboratórios complexos e documentados.",
                content: `<p><strong>Atividade:</strong> Criação de Ambiente de Defesa/Ataque</p>
<p><strong>Cenário:</strong> Recrutadores querem ver o que você sabe FAZER, não apenas o que você leu. Um projeto prático bem executado vale muito mais que dezenas de certificados introdutórios.</p>
<h3>Tarefas:</h3>
<ul>
    <li>Construa um laboratório virtual em sua máquina. Exemplos de alto impacto: Um SOC local com <strong>Wazuh/ELK</strong> monitorando um Windows, ou uma rede <strong>Active Directory</strong> com um servidor vulnerável.</li>
    <li>Execute um ataque (ex: força bruta, Kerberoasting ou exploit MS17-010) e colete os logs de detecção no seu sistema de defesa.</li>
    <li>Gere um relatório técnico contendo: Topologia da rede (use o draw.io), vetor de ataque passo a passo, logs gerados e processo de mitigação.</li>
</ul>
<h3>Validação:</h3>
<p>Este não é um exercício teórico. Publicar este projeto estruturado em formato de artigo comprova sua capacidade de arquitetar, atacar e defender ambientes reais.</p>`
            },
            {
                id: "chal-carr-1",
                title: "O Portfólio de Evidências (GitHub)",
                desc: "Seu código e seus relatórios são o seu verdadeiro currículo para líderes técnicos.",
                content: `<p><strong>Atividade:</strong> Repositório 'My-Security-Labs'</p>
<p><strong>Cenário:</strong> Um líder de equipe (seu futuro chefe) quer ver sua capacidade analítica. A primeira coisa que ele vai olhar é o seu GitHub ou Blog.</p>
<h3>Tarefas:</h3>
<ul>
    <li>Crie um repositório profissional no GitHub. O <code>README.md</code> deve ser impecável (utilize a linguagem Markdown, adicione shields/badges das suas linguagens e descreva seu foco atual).</li>
    <li>Suba os relatórios (Write-ups) dos desafios que você resolver no Cyberlivre, HackTheBox ou TryHackMe.</li>
    <li>Faça upload de scripts próprios de automação (ex: um script Python simples que você criou para automatizar buscas do Nmap ou analisar logs de firewall).</li>
</ul>
<h3>Validação:</h3>
<p>Um repositório ativo e bem documentado em Markdown é o grande diferencial que separa candidatos teóricos de engenheiros práticos no mercado atual.</p>`
            },
            {
                id: "chal-carr-2",
                title: "Currículo Soberano (Auditoria ATS e EVM)",
                desc: "Vença os robôs de recrutamento (ATS) e o filtro humano de 6 segundos com mapeamento de valor.",
                content: `<p><strong>Atividade:</strong> Engenharia Reversa de Recrutamento</p>
<p><strong>Cenário:</strong> Modelos super visuais (feitos no Canva, com colunas e gráficos radiais) quebram em sistemas de leitura automática (ATS - Applicant Tracking Systems). Seu currículo é descartado antes de chegar a um humano.</p>
<h3>Tarefas:</h3>
<ul>
    <li><strong>Teste do Notepad:</strong> Copie todo o texto do seu CV atual e cole no Bloco de Notas. Se a leitura ficar confusa, o ATS também vai falhar.</li>
    <li><strong>Migração de Layout:</strong> Utilize um template linear, de coluna única e focado em texto (recomendação absoluta: <em>Jake's Resume</em> via LaTeX/Overleaf).</li>
    <li><strong>EVM (Economic Value Mapping):</strong> Pare de escrever "Conhecimento em Python". Substitua por métricas: <em>"Desenvolvi scripts em Python para varredura de rede, reduzindo tempo de análise em 40%"</em>.</li>
    <li><strong>Regra 3X de Keywords:</strong> Garanta que as palavras-chave da vaga alvo (ex: SOC, Pentest, SIEM, AWS) apareçam de forma orgânica pelo menos 3 vezes no seu currículo.</li>
</ul>
<h3>Validação:</h3>
<p>Passe seu currículo finalizado em uma ferramenta de scanner ATS gratuita (como o Resume Worded). Se a pontuação for menor que 70, continue ajustando as keywords.</p>`
            },
            {
                id: "chal-carr-3",
                title: "LinkedIn Inbound (O Imã de Vagas)",
                desc: "Otimize seu perfil para que recrutadores e algoritmos encontrem você de forma passiva.",
                content: `<p><strong>Atividade:</strong> Hardening de Perfil Profissional</p>
<p><strong>Cenário:</strong> Cibersegurança é uma área onde as vagas caçam os profissionais qualificados. Mas os algoritmos precisam saber exatamente quem você é.</p>
<h3>Tarefas:</h3>
<ul>
    <li><strong>Headline de Elite:</strong> Remova imediatamente "Estudante/Buscando Recolocação" do seu título. Use seu alvo técnico real: <code>Analista de Segurança | Blue Team | SOC | Monitoramento</code>.</li>
    <li><strong>Prova Social e Geração de Conteúdo:</strong> Faça um post técnico (não motivacional) detalhando a resolução do seu laboratório prático com prints reais do seu terminal ou Dashboard do SIEM.</li>
    <li><strong>Networking Ativo:</strong> Conecte-se com líderes técnicos (CISO, Coordenador de SOC) e recrutadores tech das empresas que você deseja, e comente de forma construtiva nas postagens deles.</li>
</ul>
<h3>Validação:</h3>
<p>O link direto para o seu GitHub de Write-ups deve estar na seção de "Destaques". A primeira abordagem passiva de um recrutador validará o sucesso dessa estratégia.</p>`
            },
            {
                id: "chal-carr-4",
                title: "O Artigo 'How-To' (Medium / Dev.to)",
                desc: "Desenvolva a habilidade de explicar conceitos complexos escrevendo artigos técnicos.",
                content: `<p><strong>Atividade:</strong> Publicação de Artigo Técnico</p>
<p><strong>Cenário:</strong> Profissionais seniores sabem comunicar. Mostrar que você consegue explicar uma vulnerabilidade ou a configuração de uma ferramenta é uma prova de maturidade.</p>
<h3>Tarefas:</h3>
<ul>
    <li>Escolha uma ferramenta que você aprendeu nas trilhas (ex: Nmap, Wireshark, Burp Suite).</li>
    <li>Escreva um artigo detalhado com o título: "Como utilizar o [Ferramenta] para [Objetivo] em 5 passos práticos".</li>
    <li>Publique no Medium, TabNews ou Dev.to e compartilhe o link no seu LinkedIn.</li>
</ul>
<h3>Validação:</h3>
<p>O artigo deve conter imagens dos seus próprios testes e códigos formatados. Não copie tutoriais, explique com suas palavras e demonstre o <em>seu</em> laboratório.</p>`
            },
            {
                id: "chal-carr-5",
                title: "Automação de Segurança (Scripting)",
                desc: "Prove que você entende o funcionamento interno das ferramentas criando a sua própria.",
                content: `<p><strong>Atividade:</strong> Criação de Ferramenta em Python/Bash</p>
<p><strong>Cenário:</strong> Apertar botões em ferramentas prontas é o nível 1. O nível profissional exige que você crie automações para ganhar escala.</p>
<h3>Tarefas:</h3>
<ul>
    <li>Desenvolva um script útil para o dia a dia de segurança (ex: Um Port Scanner em Python usando a biblioteca Socket, ou um script Bash de backup seguro).</li>
    <li>Faça o upload do código no seu GitHub.</li>
    <li>Crie um README detalhando: Como instalar, como usar (com exemplos de comandos) e qual problema ele resolve.</li>
</ul>
<h3>Validação:</h3>
<p>Seu script não precisa ser o próximo Nmap, mas deve funcionar sem erros. Ter código próprio no GitHub é um ativo brutal para entrevistas.</p>`
            },
            {
                id: "chal-carr-6",
                title: "Simulação de Entrega (Relatório Executivo)",
                desc: "Simule a entrega de um trabalho profissional gerando um relatório formal.",
                content: `<p><strong>Atividade:</strong> Escrita de Relatório de Pentest/Auditoria</p>
<p><strong>Cenário:</strong> No mundo real, o cliente não vê você hackeando, ele vê o PDF que você entrega no final do projeto.</p>
<h3>Tarefas:</h3>
<ul>
    <li>Ataque uma máquina intencionalmente vulnerável (VulnHub, HackTheBox) ou audite uma infraestrutura em nuvem fictícia.</li>
    <li>Não faça apenas um Write-up. Crie um <strong>Relatório Executivo</strong> formal (em PDF) contendo: Resumo Executivo (para diretores), Escopo, Metodologia, Detalhes Técnicos das Vulnerabilidades (com CVEs) e, o mais importante, as <strong>Recomendações de Correção</strong>.</li>
</ul>
<h3>Validação:</h3>
<p>Anexe este PDF ao seu portfólio. Durante uma entrevista, você pode dizer: "Aqui está o padrão de documentação que eu entrego para os clientes".</p>`
            },
            {
                id: "chal-carr-7",
                title: "Participação em CTF (Capture The Flag)",
                desc: "Aumente sua exposição na comunidade e treine sob pressão resolvendo desafios reais.",
                content: `<p><strong>Atividade:</strong> Inscrição e Resolução de CTFs</p>
<p><strong>Cenário:</strong> CTFs provam que você consegue pensar de forma criativa e resolver problemas não documentados.</p>
<h3>Tarefas:</h3>
<ul>
    <li>Cadastre-se na plataforma CTF Time e encontre um evento voltado para iniciantes (ou use o PicoCTF).</li>
    <li>Participe da competição (sozinho ou em equipe) e resolva pelo menos 1 ou 2 desafios das categorias Web, Forense ou Criptografia.</li>
    <li>Escreva o Write-up da solução que você encontrou e publique.</li>
</ul>
<h3>Validação:</h3>
<p>A pontuação no CTF importa menos do que a evidência de que você participa ativamente da comunidade e se desafia constantemente.</p>`
            }
        ],
        usefulLinks: [
            { title: "Jake's Resume (Overleaf)", url: "https://www.overleaf.com/latex/templates/jakes-resume/syzfjbndbwxc", desc: "O template padrão-ouro para passar em ATS." },
            { title: "Resume Worded", url: "https://resumeworded.com/", desc: "Scanner de ATS gratuito alimentado por IA." },
            { title: "Dev.to", url: "https://dev.to/", desc: "Plataforma excelente para publicar seus Write-ups." },
            { title: "Markdown Guide", url: "https://www.markdownguide.org/", desc: "Aprenda a formatar o README.md do seu GitHub." }
        ],
        sections: [
            {
                name: "Vídeos e Playlists",
                icon: "play-circle",
                resources: [
                    { id: "cv_yt_01", title: "Dicas Para Iniciar em Cibersegurança", channel: "Douglas Lockshield", desc: "Playlist completa com conselhos práticos de carreira, currículo e direcionamento profissional focados em iniciantes.", url: "https://youtube.com/playlist?list=PLKXxjimG9Fo2XtDT_gcGAE9f_mhc-bekx" }
                ]
            },
            {
                name: "Cursos Estruturados",
                icon: "graduation-cap",
                resources: [
                    { id: "cert_carreira_01", title: "Certified in Cybersecurity (CC)", channel: "(ISC)²", desc: "O melhor ponto de partida global: Treinamento e exame gratuitos pela iniciativa '1 Million Certified in Cybersecurity'.", url: "https://www.isc2.org/1mcc" }
                ]
            }
        ]
    });
