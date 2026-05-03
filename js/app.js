window.courseData = window.courseData || [];

const curriculumModules = [
    'js/modules/module-00.js',
    'js/modules/module-01.js',
    'js/modules/module-02.js',
    'js/modules/module-03.js',
    'js/modules/module-04.js',
    'js/modules/module-05.js',
    'js/modules/module-06.js',
    'js/modules/module-07.js',
    'js/modules/module-08.js',
    'js/modules/module-09.js',
    'js/modules/module-10.js',
    'js/modules/module-11.js',
    'js/modules/module-12.js',
    'js/modules/module-13.js',
    'js/modules/module-14.js',
    'js/modules/module-15.js',
    'js/modules/module-16.js',
    'js/modules/module-17.js',
    'js/modules/module-18.js',
    'js/modules/module-19.js'
];

// Carregamento dinâmico dos módulos
Promise.all(curriculumModules.map(src => {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
    });
})).then(() => {
    // Ordena para garantir que a interface fique na ordem correta
    window.courseData.sort((a, b) => a.id - b.id);
    
    // Inicializa a interface apenas após carregar os dados
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
}).catch(err => {
    console.error("Erro ao carregar os módulos do currículo", err);
});


// ─── STATE ───────────────────────────────────────────────────────────────────

let completedResources = JSON.parse(localStorage.getItem('completedResources')) || [];

// ─── INIT ────────────────────────────────────────────────────────────────────

function init() {
    if (document.getElementById('levels-nav')) {
        renderSidebar();
        renderLevel('intro');
        updateProgress();
    }
}

// ─── SIDEBAR ─────────────────────────────────────────────────────────────────

function renderSidebar() {
    const nav = document.getElementById('levels-nav');
    if (!nav) return;

    let html = `
        <div class="nav-item active" id="nav-intro" onclick="window.selectLevel('intro')">
            <span class="level-num"><i data-lucide="home" style="width: 16px; height: 16px;"></i></span>
            <span class="level-name">Início</span>
        </div>
        <div class="nav-item" id="nav-extras" onclick="window.selectLevel('extras')">
            <span class="level-num"><i data-lucide="folder-plus" style="width: 16px; height: 16px;"></i></span>
            <span class="level-name">Conteúdos Extras</span>
        </div>
    `;

    html += courseData.map((level, index) => `
        <div class="nav-item" id="nav-${level.id}" onclick="window.selectLevel(${level.id})">
            <span class="level-num">${String(level.id + 1).padStart(2, '0')}</span>
            <span class="level-name">${level.title}</span>
        </div>
    `).join('');

    nav.innerHTML = html;

    if (window.lucide) lucide.createIcons();
}

// ─── RENDER LEVEL ────────────────────────────────────────────────────────────

function renderLevel(levelId) {
    const display = document.getElementById('level-display');
    if (!display) return;

    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    const activeNav = document.getElementById(`nav-${levelId}`);
    if (activeNav) activeNav.classList.add('active');

    if (levelId === 'intro') {
        window.currentLevel = null;
        display.innerHTML = `
            <!-- HERO BANNER -->
            <div style="
                background: linear-gradient(135deg, #0c0e1a 0%, #1a1d3a 60%, #0f1627 100%);
                border-radius: var(--radius-xl);
                padding: 3rem;
                margin-bottom: 2rem;
                position: relative;
                overflow: hidden;
                border: 1px solid rgba(67,83,255,0.2);
            ">
                <!-- Glow decoration -->
                <div style="position:absolute;top:-60px;right:-60px;width:260px;height:260px;background:radial-gradient(circle,rgba(67,83,255,0.18) 0%,transparent 70%);pointer-events:none;"></div>
                <div style="position:absolute;bottom:-40px;left:10%;width:200px;height:200px;background:radial-gradient(circle,rgba(67,83,255,0.1) 0%,transparent 70%);pointer-events:none;"></div>

                <div style="position:relative;z-index:1;">
                    <div style="display:inline-flex;align-items:center;gap:0.5rem;background:rgba(67,83,255,0.15);border:1px solid rgba(67,83,255,0.3);border-radius:99px;padding:0.35rem 1rem;margin-bottom:1.5rem;">
                        <i data-lucide="shield" style="width:14px;height:14px;color:#7c87ff;"></i>
                        <span style="font-family:var(--font-mono);font-size:0.65rem;font-weight:700;color:#a5b4fc;letter-spacing:0.1em;text-transform:uppercase;">Plataforma Gratuita de Cibersegurança</span>
                    </div>

                    <h1 style="font-size:2.6rem;font-weight:900;color:#ffffff;letter-spacing:-1.5px;line-height:1.15;margin-bottom:1rem;">
                        Sua trilha para o<br><span style="background:linear-gradient(90deg,#7c87ff,#a5b4fc);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">mercado de segurança</span>
                    </h1>
                    <p style="font-size:1rem;color:#8892b0;line-height:1.7;max-width:560px;margin-bottom:2rem;">
                        Um currículo estruturado e curado pela comunidade, cobrindo desde os fundamentos de hardware e redes até técnicas avançadas de pentest, forense e cloud security.
                    </p>

                    <!-- Stats row -->
                    <div style="display:flex;gap:2.5rem;flex-wrap:wrap;">
                        <div>
                            <div style="font-size:1.8rem;font-weight:900;color:#fff;letter-spacing:-1px;font-family:var(--font-mono);">20</div>
                            <div style="font-size:0.72rem;color:#8892b0;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;">Módulos</div>
                        </div>
                        <div style="width:1px;background:rgba(255,255,255,0.08);"></div>
                        <div>
                            <div style="font-size:1.8rem;font-weight:900;color:#fff;letter-spacing:-1px;font-family:var(--font-mono);">100%</div>
                            <div style="font-size:0.72rem;color:#8892b0;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;">Gratuito</div>
                        </div>
                        <div style="width:1px;background:rgba(255,255,255,0.08);"></div>
                        <div>
                            <div style="font-size:1.8rem;font-weight:900;color:#fff;letter-spacing:-1px;font-family:var(--font-mono);">+80</div>
                            <div style="font-size:0.72rem;color:#8892b0;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;">Atividades Práticas</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- FEATURE CARDS -->
            <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:1.25rem;margin-bottom:2rem;">

                <div style="background:white;border:1px solid var(--border);border-radius:var(--radius-lg);padding:1.75rem;">
                    <div style="width:42px;height:42px;background:var(--indigo-light);border-radius:10px;display:flex;align-items:center;justify-content:center;margin-bottom:1rem;">
                        <i data-lucide="map" style="width:20px;height:20px;color:var(--indigo);"></i>
                    </div>
                    <h3 style="font-size:1rem;font-weight:800;color:var(--ink);margin-bottom:0.5rem;">Trilha Estruturada</h3>
                    <p style="font-size:0.85rem;color:var(--ink-3);line-height:1.6;">O menu lateral organiza 20 módulos em sequência lógica — de Fundamentos a Especialização — para que você nunca fique sem saber o próximo passo.</p>
                </div>

                <div style="background:white;border:1px solid var(--border);border-radius:var(--radius-lg);padding:1.75rem;">
                    <div style="width:42px;height:42px;background:#fff1f2;border-radius:10px;display:flex;align-items:center;justify-content:center;margin-bottom:1rem;">
                        <i data-lucide="zap" style="width:20px;height:20px;color:#ef4444;"></i>
                    </div>
                    <h3 style="font-size:1rem;font-weight:800;color:var(--ink);margin-bottom:0.5rem;">Atividades Práticas</h3>
                    <p style="font-size:0.85rem;color:var(--ink-3);line-height:1.6;">Cada módulo possui desafios que simulam cenários corporativos reais. Sem entregas para professor — o resultado vai direto para o seu portfólio profissional.</p>
                </div>

                <div style="background:white;border:1px solid var(--border);border-radius:var(--radius-lg);padding:1.75rem;">
                    <div style="width:42px;height:42px;background:#f0fdf4;border-radius:10px;display:flex;align-items:center;justify-content:center;margin-bottom:1rem;">
                        <i data-lucide="graduation-cap" style="width:20px;height:20px;color:#10b981;"></i>
                    </div>
                    <h3 style="font-size:1rem;font-weight:800;color:var(--ink);margin-bottom:0.5rem;">Conteúdo Curado</h3>
                    <p style="font-size:0.85rem;color:var(--ink-3);line-height:1.6;">Playlists, vídeos e cursos estruturados selecionados da comunidade — nada de links quebrados ou conteúdo genérico. Só o que realmente prepara para o mercado.</p>
                </div>

                <div style="background:white;border:1px solid var(--border);border-radius:var(--radius-lg);padding:1.75rem;">
                    <div style="width:42px;height:42px;background:#fefce8;border-radius:10px;display:flex;align-items:center;justify-content:center;margin-bottom:1rem;">
                        <i data-lucide="bot" style="width:20px;height:20px;color:#ca8a04;"></i>
                    </div>
                    <h3 style="font-size:1rem;font-weight:800;color:var(--ink);margin-bottom:0.5rem;">IA como Aceleradora</h3>
                    <p style="font-size:0.85rem;color:var(--ink-3);line-height:1.6;">Incentivamos o uso de ferramentas de Inteligência Artificial para sanar dúvidas, depurar projetos e elevar a qualidade das suas entregas a um nível superior.</p>
                </div>
            </div>

            <!-- QUOTE BLOCK -->
            <div style="background:var(--indigo-light);border-left:4px solid var(--indigo);border-radius:0 var(--radius-md) var(--radius-md) 0;padding:1.5rem 2rem;display:flex;align-items:flex-start;gap:1rem;">
                <i data-lucide="quote" style="width:20px;height:20px;color:var(--indigo);flex-shrink:0;margin-top:2px;"></i>
                <p style="color:var(--indigo-dark);font-weight:600;font-size:0.95rem;line-height:1.6;margin:0;">
                    O caminho é longo e o conteúdo é vasto, mas a comunidade preza pela curiosidade. Se não sabe algo, pesquise, construa o seu laboratório e tente de novo.
                </p>
            </div>
        `;
        if (window.lucide) lucide.createIcons();
        return;
    }

    if (levelId === 'extras') {
        window.currentLevel = null;
        const extraResources = [
            { id: "sec10", title: "Colaborações Técnicas", channel: "Guia Anônima", desc: "Projetos colaborativos e conteúdos produzidos em parceria com a comunidade.", url: "https://youtube.com/playlist?list=PL41yJfzZogTSnmto5Tet_MMvzd3Ps1piT" },
            { id: "sec11", title: "Aulões Especiais", channel: "Guia Anônima", desc: "Masterclasses técnicas aprofundadas sobre temas específicos de segurança.", url: "https://youtube.com/playlist?list=PL41yJfzZogTS4aU_3p-DX_KD8JrIJZ7gH" },
            { id: "sec15b", title: "Aulas Abertas", channel: "Guia Anônima", desc: "Conteúdos diversos e aulas transmitidas ao vivo para a comunidade.", url: "https://youtube.com/playlist?list=PL41yJfzZogTSSwhvQV-AyopPpIraw2FeK" },
            { id: "sec16b", title: "Conferências GA", channel: "Guia Anônima", desc: "Palestras e eventos gravados com especialistas da área.", url: "https://youtube.com/playlist?list=PL41yJfzZogTSapZ-X0x1bBMCSu-ADPYX2" },
            { id: "sec17", title: "Podcast CTRL+SHIFT+N", channel: "Guia Anônima", desc: "Notícias e debates semanais sobre o cenário de segurança e tecnologia.", url: "https://youtube.com/playlist?list=PL41yJfzZogTQATpk3nOo3rJJbR6wpJ_Vt" },
            { id: "sec17b", title: "Papo de Hacker", channel: "Guia Anônima", desc: "Debates técnicos profundos com profissionais do mercado de segurança.", url: "https://youtube.com/playlist?list=PL41yJfzZogTTYLBnaF-7C73DD8IR1-nlA" },
            { id: "sec18", title: "Entrevistas com Hackers", channel: "Guia Anônima", desc: "Experiências reais de profissionais que atuam na área de cibersegurança.", url: "https://youtube.com/playlist?list=PL41yJfzZogTS5St1EwH_QaXf_fcjnYazC" },
            { id: "sec17c", title: "Podcast Segurança Legal", channel: "Guia Anônima", desc: "Aspectos jurídicos, éticos e regulatórios de segurança digital discutidos por especialistas.", url: "https://youtube.com/playlist?list=PL41yJfzZogTTYLBnaF-7C73DD8IR1-nlA" },
            { id: "sec19_extra", title: "Dicas de Carreira", channel: "Douglas Lockshield", desc: "Conselhos práticos de carreira, cultura hacker e posicionamento profissional.", url: "https://youtube.com/playlist?list=PLKXxjimG9Fo3RPGXjIJsALz4LHp3lhxCK" }
        ];
        display.innerHTML = `
            <!-- HERO BANNER EXTRAS -->
            <div style="
                background: linear-gradient(135deg, #0c0e1a 0%, #0f1a2e 60%, #0c0e1a 100%);
                border-radius: var(--radius-xl);
                padding: 2.5rem 3rem;
                margin-bottom: 2rem;
                position: relative;
                overflow: hidden;
                border: 1px solid rgba(16,185,129,0.2);
            ">
                <div style="position:absolute;top:-60px;right:-40px;width:220px;height:220px;background:radial-gradient(circle,rgba(16,185,129,0.12) 0%,transparent 70%);pointer-events:none;"></div>
                <div style="position:relative;z-index:1;">
                    <div style="display:inline-flex;align-items:center;gap:0.5rem;background:rgba(16,185,129,0.12);border:1px solid rgba(16,185,129,0.25);border-radius:99px;padding:0.35rem 1rem;margin-bottom:1.25rem;">
                        <i data-lucide="folder-open" style="width:14px;height:14px;color:#34d399;"></i>
                        <span style="font-family:var(--font-mono);font-size:0.65rem;font-weight:700;color:#6ee7b7;letter-spacing:0.1em;text-transform:uppercase;">Biblioteca Complementar</span>
                    </div>
                    <h1 style="font-size:2rem;font-weight:900;color:#ffffff;letter-spacing:-1px;line-height:1.2;margin-bottom:0.75rem;">
                        Conteúdos Extras &<br><span style="background:linear-gradient(90deg,#34d399,#6ee7b7);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">Comunidade</span>
                    </h1>
                    <p style="font-size:0.9rem;color:#8892b0;line-height:1.6;max-width:520px;margin:0;">
                        Masterclasses, podcasts, conferências e projetos colaborativos que complementam as trilhas e aprofundam sua cultura técnica.
                    </p>
                </div>
            </div>

            <div class="section">
                <h3 class="section-title"><i data-lucide="play-circle"></i> Materiais Adicionais</h3>
                <div class="resource-grid">
                    ${extraResources.map(res => {
                        const isCompleted = completedResources.includes(res.id);
                        return `
                            <div class="resource-card ${isCompleted ? 'completed' : ''}" id="card-${res.id}">
                                <div class="card-top">
                                    <span class="channel-tag">${res.channel}</span>
                                </div>
                                <h4>${res.title}</h4>
                                <p>${res.desc}</p>
                                <div class="card-footer">
                                    <a href="${res.url}" target="_blank" class="btn-primary">Acessar</a>
                                    <label class="checkbox-wrap">
                                        <input type="checkbox" ${isCompleted ? 'checked' : ''} onchange="window.toggleComplete('${res.id}')">
                                        <span>Concluído</span>
                                    </label>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
        if (window.lucide) lucide.createIcons();
        return;
    }

    const level = courseData.find(l => l.id === levelId);
    if (!level) return;

    // Set current level reference for the modal
    window.currentLevel = level;

    display.innerHTML = `
        <!-- MODULE HERO BANNER -->
        <div style="
            background: linear-gradient(135deg, #0c0e1a 0%, #1a1d3a 60%, #0f1627 100%);
            border-radius: var(--radius-xl);
            padding: 2.5rem 3rem;
            margin-bottom: 2rem;
            position: relative;
            overflow: hidden;
            border: 1px solid rgba(67,83,255,0.2);
        ">
            <div style="position:absolute;top:-60px;right:-60px;width:240px;height:240px;background:radial-gradient(circle,rgba(67,83,255,0.15) 0%,transparent 70%);pointer-events:none;"></div>
            <div style="position:relative;z-index:1;">
                <div style="display:inline-flex;align-items:center;gap:0.5rem;background:rgba(67,83,255,0.15);border:1px solid rgba(67,83,255,0.3);border-radius:99px;padding:0.35rem 1rem;margin-bottom:1.25rem;">
                    <i data-lucide="layers" style="width:13px;height:13px;color:#7c87ff;"></i>
                    <span style="font-family:var(--font-mono);font-size:0.65rem;font-weight:700;color:#a5b4fc;letter-spacing:0.1em;text-transform:uppercase;">Módulo ${String(level.id + 1).padStart(2, '0')}</span>
                </div>
                <h1 style="font-size:2.2rem;font-weight:900;color:#ffffff;letter-spacing:-1.5px;line-height:1.15;margin-bottom:0.75rem;">${level.title}</h1>
                <p style="font-size:0.95rem;color:#8892b0;line-height:1.6;max-width:600px;margin:0;">${level.objective}</p>
            </div>
        </div>

        ${level.usefulLinks && level.usefulLinks.length > 0 ? `
            <div class="section useful-links-section">
                <h3 class="section-title"><i data-lucide="link"></i> Links Úteis & Ferramentas</h3>
                <div class="links-inline-grid">
                    ${level.usefulLinks.map(link => `
                        <a href="${link.url}" target="_blank" class="useful-link-card">
                            <div class="link-content">
                                <strong>${link.title}</strong>
                                <span>${link.desc}</span>
                            </div>
                            <i data-lucide="external-link"></i>
                        </a>
                    `).join('')}
                </div>
            </div>
        ` : ''}
        ${(level.sections || []).map(section => `
            <div class="section">
                <h3 class="section-title"><i data-lucide="${section.icon || 'book-open'}"></i> ${section.name}</h3>
                <div class="resource-grid">
                    ${section.resources.map(res => {
        const isCompleted = completedResources.includes(res.id);
        return `
                            <div class="resource-card ${isCompleted ? 'completed' : ''}" id="card-${res.id}">
                                <div class="card-top">
                                    <span class="channel-tag">${res.channel}</span>
                                </div>
                                <h4>${res.title}</h4>
                                <p>${res.desc}</p>
                                <div class="card-footer">
                                    <a href="${res.url}" target="_blank" class="btn-primary">Acessar ↗</a>
                                    <label class="checkbox-wrap">
                                        <input type="checkbox" ${isCompleted ? 'checked' : ''} onchange="window.toggleComplete('${res.id}')">
                                        <span>Concluído</span>
                                    </label>
                                </div>
                            </div>
                        `;
    }).join('')}
                </div>
            </div>
        `).join('')}

        ${level.challenges && level.challenges.length > 0 ? `
            <div class="section challenge-section">
                <h3 class="section-title"><i data-lucide="zap"></i> Atividades Práticas</h3>
                <div class="resource-grid">
                    ${level.challenges.map(res => {
        const isCompleted = completedResources.includes(res.id);
        return `
                            <div class="resource-card challenge-card ${isCompleted ? 'completed' : ''}" id="card-${res.id}">
                                <div class="card-top">
                                    <span class="channel-tag challenge-tag">ATIVIDADE</span>
                                </div>
                                <h4>${res.title}</h4>
                                <p>${res.desc}</p>
                                <div class="card-footer">
                                    <button onclick="window.openChallenge('${res.id}')" class="btn-primary">Abrir Atividade</button>
                                    <label class="checkbox-wrap">
                                        <input type="checkbox" ${isCompleted ? 'checked' : ''} onchange="window.toggleComplete('${res.id}')">
                                        <span>Concluído</span>
                                    </label>
                                </div>
                            </div>
                        `;
    }).join('')}
                </div>
            </div>
        ` : ''}
    `;

    if (window.lucide) lucide.createIcons();
}

// ─── MODAL DE DESAFIO ────────────────────────────────────────────────────────

window.openChallenge = (chalId) => {
    const modal = document.getElementById('challenge-modal');
    const titleEl = document.getElementById('modal-title');
    const contentEl = document.getElementById('modal-content');
    const btnComplete = document.getElementById('btn-complete-challenge');

    if (!window.currentLevel) return;
    const chal = window.currentLevel.challenges.find(c => c.id === chalId);
    if (!chal) return;

    titleEl.innerText = chal.title;

    // Se o conteúdo HTML direto existir no objeto, renderizamos. 
    // Caso contrário, fazemos um fallback elegante para o link antigo do Google Docs.
    if (chal.content) {
        contentEl.innerHTML = chal.content;
    } else {
        contentEl.innerHTML = `
            <p>${chal.desc}</p>
            <br>
            <div style="background: var(--indigo-light); padding: 1.5rem; border-radius: var(--radius-md); border: 1px solid var(--indigo-mid);">
                <h3 style="color: var(--indigo-dark); margin-top: 0;">Link Externo</h3>
                <p>Este desafio ainda não foi migrado completamente para dentro da plataforma.</p>
                <a href="${chal.url}" target="_blank" class="btn-primary" style="display: inline-block; margin-top: 1rem;">Abrir Documento Original ↗</a>
            </div>
        `;
    }

    const isCompleted = completedResources.includes(chalId);
    btnComplete.innerText = isCompleted ? "Desmarcar Concluído" : "Marcar como Concluído";
    btnComplete.onclick = () => {
        window.toggleComplete(chalId);
        window.closeChallenge();
        renderLevel(window.currentLevel.id); // re-render to update UI
    };

    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Impede rolagem do fundo
};

window.closeChallenge = () => {
    const modal = document.getElementById('challenge-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
};

// ─── EVENTS ──────────────────────────────────────────────────────────────────

window.selectLevel = (id) => {
    renderLevel(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

window.toggleComplete = (id) => {
    const isNowComplete = !completedResources.includes(id);

    if (isNowComplete) {
        completedResources.push(id);
    } else {
        completedResources = completedResources.filter(item => item !== id);
    }

    localStorage.setItem('completedResources', JSON.stringify(completedResources));
    updateProgress();

    // Atualiza o card imediatamente no DOM sem precisar re-renderizar a página
    const card = document.getElementById(`card-${id}`);
    if (card) {
        if (isNowComplete) {
            card.classList.add('completed');
        } else {
            card.classList.remove('completed');
        }
    }
};

function updateProgress() {
    let totalResources = 0;
    courseData.forEach(level => {
        if (level.sections) {
            totalResources += level.sections.reduce((sAcc, section) => sAcc + section.resources.length, 0);
        }
        if (level.challenges) totalResources += level.challenges.length;
    });

    const done = completedResources.length;
    const progress = totalResources > 0 ? Math.round((done / totalResources) * 100) : 0;

    const pctEl  = document.getElementById('progress-pct');
    const subEl  = document.getElementById('progress-sub');
    const fillEl = document.getElementById('progress-fill');

    if (pctEl)  pctEl.innerText  = `${progress}%`;
    if (subEl)  subEl.innerText  = `${done} de ${totalResources} itens concluídos`;
    if (fillEl) {
        fillEl.style.width = `${progress}%`;
        fillEl.style.background = progress >= 100
            ? 'linear-gradient(90deg, #10b981, #34d399)'
            : 'linear-gradient(90deg, #4353ff, #818cf8)';
    }
}
// Fim do App