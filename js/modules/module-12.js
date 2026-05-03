window.courseData = window.courseData || [];
window.courseData.push({
        id: 12,
        title: "Criptografia Básica",
        objective: "Entender criptografia simétrica, assimétrica, hashing, TLS e PKI aplicados à proteção de dados.",
        challenges: [
            {
                id: "chal-crip-0",
                title: "Criptografia Assimétrica e PKI",
                desc: "Garanta confidencialidade e não-repúdio através da gestão de chaves públicas/privadas (PGP/GPG).",
                content: `<p><strong>Atividade:</strong> Comunicação Segura Fim-a-Fim</p>
<p><strong>Cenário:</strong> Você precisa transmitir um arquivo com senhas de produção para o Arquiteto de Nuvem. O e-mail corporativo não é seguro o suficiente, pois os administradores do Office365 podem ler.</p>
<h3>Tarefas:</h3>
<ul>
    <li>Utilize o <strong>GnuPG (GPG)</strong> via terminal (Linux/Mac) ou Kleopatra (Windows).</li>
    <li>Gere seu par de chaves (RSA 4096). Troque a <strong>Chave Pública</strong> com um colega.</li>
    <li>Cifre o arquivo direcionando especificamente para a chave do seu colega, e assine-o criptograficamente com a sua <strong>Chave Privada</strong>.</li>
    <li>O destinatário deve comprovar que o arquivo foi descriptografado com sucesso e que a Assinatura (prova de não-repúdio) bateu com a sua identidade.</li>
</ul>
<h3>Validação:</h3>
<p>O conceito de PKI (Infraestrutura de Chaves Públicas) é o coração de todos os acessos SSH modernos e da confiança na internet.</p>`
            },
            {
                id: "chal-crip-1",
                title: "Gestão de Segredos e Chaves (Vault)",
                desc: "Pare de chumbar senhas no código. Implemente um cofre criptográfico centralizado para proteger chaves de API e banco de dados.",
                content: `<p><strong>Atividade:</strong> Implementação de Secret Management</p>
<p><strong>Cenário:</strong> Desenvolvedores da sua empresa costumam colocar chaves de nuvem e senhas de banco de dados diretamente no GitHub (hardcoded) porque "é mais fácil para a aplicação ler". O vazamento dessas chaves é fatal.</p>
<h3>Tarefas:</h3>
<ul>
    <li>Suba uma instância local do <strong>HashiCorp Vault</strong> (via Docker) ou utilize um serviço em nuvem como o AWS Secrets Manager.</li>
    <li>Configure o cofre para armazenar um segredo do tipo Key-Value (Chave-Valor) contendo uma string de conexão fictícia de Banco de Dados.</li>
    <li>Escreva um pequeno script (em Python, Bash ou Node.js) que, em vez de ter a senha escrita no código, faça uma chamada de API autenticada ao Vault e recupere a senha dinamicamente.</li>
</ul>
<h3>Validação:</h3>
<p>Proteção de chaves (Key Management) é o verdadeiro calcanhar de Aquiles da criptografia moderna. Demonstre o seu script buscando o segredo na memória sem tocar no disco.</p>`
            },
            {
                id: "chal-crip-2",
                title: "Cracking Avançado e Salted Hashes",
                desc: "Entenda na prática por que hashes simples (MD5/SHA1) são inúteis, e como atacar algoritmos fortes.",
                content: `<p><strong>Atividade:</strong> Password Cracking e KDFs</p>
<p><strong>Cenário:</strong> Desenvolvedores continuam salvando senhas com MD5 achando que estão seguros. Você precisa provar que não estão.</p>
<h3>Tarefas:</h3>
<ul>
    <li>Gere um hash MD5 da palavra "Brasil2024". Utilize o <strong>Hashcat</strong> aliado à wordlist <code>rockyou.txt</code> e veja que é quebrado em milissegundos.</li>
    <li>Modifique o processo gerando um hash <strong>Bcrypt</strong> ou <strong>Argon2id</strong> da mesma senha.</li>
    <li>Tente quebrar esse hash forte usando o Hashcat. Acompanhe a métrica de "Hashes per second (H/s)". A queda de performance drástica prova o conceito de Key Derivation Functions (KDFs).</li>
    <li>Pesquise sobre como "Salts" e algoritmos lentos (work factor/cost) frustram ataques de Rainbow Tables.</li>
</ul>
<h3>Validação:</h3>
<p>Ao documentar a queda de performance no Hashcat, você prova definitivamente o impacto do design criptográfico na segurança da aplicação.</p>`
            }
        ],
        usefulLinks: [
            { title: "CyberChef", url: "https://gchq.github.io/CyberChef/", desc: "Ferramenta de criptografia e encoding" },
            { title: "CryptoPals", url: "https://cryptopals.com/", desc: "Desafios práticos de criptografia" }
        ],
        sections: [
            {
                name: "Vídeos e Playlists",
                icon: "play-circle",
                resources: [
                    { id: "crypt01", title: "Criptografia para Segurança", channel: "Daniel Donda", desc: "Fundamentos e aplicações práticas", url: "https://youtube.com/playlist?list=PLPIvFl3fAVReKTbM4pxgbX7fLSx5RcN12" }
                ]
            }
        ]
    });
