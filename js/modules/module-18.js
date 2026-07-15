window.courseData = window.courseData || [];
window.courseData.push(// ─── ESPECIALIZAÇÃO ──────────────────────────────────────────────────────────
    {
        id: 17,
        title: "Cloud Security",
        objective: "Entender riscos, IAM, configuração segura e auditoria de infraestrutura em AWS, Azure e GCP.",
        challenges: [
            {
                id: "chal-cloud-0",
                title: "Auditoria de Nuvem (IaC Scanning)",
                desc: "Descubra falhas de segurança antes mesmo da infraestrutura ir para o ar utilizando varredura estática.",
                content: `<p><strong>Atividade:</strong> Shift-Left Security com Checkov</p>
<p><strong>Cenário:</strong> Usar o "Free Tier" da AWS com cartão de crédito é perigoso para estudantes. A forma moderna (e totalmente segura e gratuita) de auditar nuvem é validar o código (Infra as Code) localmente.</p>
<h3>Tarefas:</h3>
<ul>
    <li>Faça o download do repositório vulnerável <a href="https://github.com/bridgecrewio/terragoat" target="_blank">TerraGoat</a> (um projeto Terraform feito propositalmente com dezenas de falhas de segurança de cloud).</li>
    <li>Instale a ferramenta open-source <a href="https://github.com/bridgecrewio/checkov" target="_blank">Checkov</a> no seu terminal local (Linux ou Windows via Python).</li>
    <li>Execute uma varredura completa offline na pasta do repositório: <code>checkov -d terragoat/</code>.</li>
    <li>Analise o relatório gerado. Encontre falhas críticas reais como "S3 bucket não tem criptografia" ou "Banco de dados RDS aberto para a internet".</li>
</ul>
<h3>Validação:</h3>
<p>Comprove como ferramentas de DevSecOps encontram falhas arquiteturais massivas localmente, sem nenhum risco de cobrança e sem precisar criar contas reais na nuvem.</p>`
            },
            {
                id: "chal-cloud-1",
                title: "Governança IAM (Privilégio Mínimo)",
                desc: "Escreva políticas de acesso em JSON restritas sem depender da interface gráfica.",
                content: `<p><strong>Atividade:</strong> Design de Políticas AWS IAM (Local)</p>
<p><strong>Cenário:</strong> Desenvolvedores costumam usar <code>"Action": "*"</code> para fazer tudo funcionar rápido, abrindo brechas enormes. Você precisa modelar uma política JSON segura em ambiente offline.</p>
<h3>Tarefas:</h3>
<ul>
    <li>Utilize um editor de texto (VS Code) para criar um arquivo <code>policy.json</code> do zero, sem entrar na plataforma AWS.</li>
    <li>Escreva um "Policy Document" da AWS que permita apenas as ações de leitura <code>s3:GetObject</code> e <code>s3:ListBucket</code> em um recurso específico (ex: <code>arn:aws:s3:::meu-bucket-seguro/*</code>).</li>
    <li>Adicione um bloco complexo de <code>Condition</code> (Condição) estipulando que essa política só terá efeito se o IP de origem da requisição (<code>aws:SourceIp</code>) for exclusivamente o IP do escritório da sua empresa.</li>
</ul>
<h3>Validação:</h3>
<p>Modelar IAM offline e compreender visceralmente a sintaxe de <code>Effect, Action, Resource e Condition</code> é o coração defensivo de qualquer ambiente Cloud, sem gastar 1 centavo.</p>`
            },
            {
                id: "chal-cloud-2",
                title: "Emulação Local e Abuso de S3",
                desc: "Simule uma infraestrutura AWS completa offline utilizando o LocalStack via Docker.",
                content: `<p><strong>Atividade:</strong> Hardening de Armazenamento com LocalStack</p>
<p><strong>Cenário:</strong> Para evitar completamente inserir cartões de crédito na AWS, testaremos vulnerabilidades de S3 e IAM em um emulador AWS rodando inteiramente isolado na sua máquina.</p>
<h3>Tarefas:</h3>
<ul>
    <li>Utilize o Docker para rodar o <a href="https://localstack.cloud/" target="_blank">LocalStack</a> na sua máquina local (<code>docker run --rm -it -p 4566:4566 localstack/localstack</code>).</li>
    <li>Instale o <code>awslocal</code> (um invólucro para o AWS CLI) no seu terminal para não precisar configurar credenciais reais.</li>
    <li>Crie um bucket S3 falso na sua nuvem local e faça upload de um arquivo de texto confidencial usando comandos de terminal.</li>
    <li>Aplique um <code>Bucket Policy</code> via CLI local que bloqueie categoricamente o acesso público anônimo (<code>Principal: "*"</code>) ao arquivo recém criado.</li>
</ul>
<h3>Validação:</h3>
<p>O LocalStack é o laboratório supremo e 100% gratuito para Engenheiros Cloud. Demonstre que o arquivo antes acessível pelo emulador agora retorna o clássico erro "Access Denied" (Erro 403).</p>`
            }
        ],
        usefulLinks: [
            { title: "AWS Security Hub", url: "https://aws.amazon.com/security-hub/", desc: "Central de segurança AWS" },
            { title: "Prowler", url: "https://github.com/prowler-cloud/prowler", desc: "Auditor open source de cloud" }
        ],
        sections: [
            {
                name: "Vídeos e Playlists",
                icon: "play-circle",
                resources: [
                    { id: "cloud_yt_01", title: "Cloud Security Overview", channel: "Guia Anônima", desc: "Uma visão abrangente sobre os riscos e defesas em ambientes de nuvem AWS.", url: "https://youtu.be/KRu-u47kcmw" },
                    { id: "cloud_yt_02", title: "Playlist: Dominando AWS", channel: "Guia Anônima", desc: "Série técnica detalhando a configuração e segurança de serviços na Amazon Web Services.", url: "https://youtube.com/playlist?list=PLtL97Owd1gkQ0dfqGW8OtJ-155Gs67Ecz" }
                ]
            },
            {
                name: "Cursos Estruturados",
                icon: "graduation-cap",
                resources: [
                    { id: "cert_cloud_01", title: "AWS Cloud Practitioner Essentials", channel: "AWS Skill Builder", desc: "Treinamento oficial gratuito da Amazon focado em infraestrutura, governança e responsabilidade compartilhada (com certificado).", url: "https://explore.skillbuilder.aws/learn/course/external/view/elearning/134/aws-cloud-practitioner-essentials" },
                    { id: "cert_cloud_02", title: "Azure Security, Compliance, and Identity", channel: "Microsoft Learn", desc: "Trilha SC-900 oficial ensinando os conceitos de Zero Trust e governança na nuvem da Microsoft.", url: "https://learn.microsoft.com/pt-br/training/paths/describe-concepts-of-security-compliance-identity/" },
                    { id: "cert_cloud_03_azure", title: "Serverless & Microserviços (C# & Azure)", channel: "freeCodeCamp", desc: "Curso completo em vídeo abordando a criação de microsserviços seguros e serverless no Microsoft Azure usando C#. Nota: Em inglês (tradução automática disponível).", url: "https://www.freecodecamp.org/news/serverless-and-microservices-with-c-and-azure/" }
                ]
            },
            {
                name: "Artigos e Leituras (DevSecOps & CI/CD)",
                icon: "book-open",
                resources: [
                    { id: "devsecops_art_01", title: "DevSecOps usando ações do GitHub", channel: "Medium", desc: "Building Secure CI/CD Pipelines.", url: "https://medium.com/@rahulsharan512/devsecops-using-github-actions-building-secure-ci-cd-pipelines-5b6d59acab32" },
                    { id: "devsecops_art_02", title: "Endurecimento da Segurança de CI/CD", channel: "SpectralOps", desc: "6 etapas para o sucesso com o endurecimento da segurança de CI/CD.", url: "https://spectralops.io/blog/ci-cd-security-hardening/" },
                    { id: "devsecops_art_03", title: "GitLab CI/CD - Laboratório prático", channel: "GitLab", desc: "Protegendo a varredura em pipelines de CI/CD.", url: "https://handbook.gitlab.com/handbook/customer-success/professional-services-engineering/education-services/gitlabcicdhandsonlab9/" },
                    { id: "devsecops_art_04", title: "Solução de problemas em Nuvem", channel: "LinkedIn", desc: "Como se manter atualizado com as mais recentes técnicas de solução de problemas em computação em nuvem.", url: "https://www.linkedin.com/advice/1/how-can-you-stay-current-latest-problem-solving-msk5e" }
                ]
            }
        ]
    });

