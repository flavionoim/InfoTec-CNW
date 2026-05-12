const pages = {
    home: `
        <h2 class="section-title">Inovação e Desenvolvimento Web</h2>
       
        
        <div class="text-block">
            <p>O <strong>Técnico em Informática para Internet</strong> é um curso focado no processo de criação de sites e o de desenvolvimento de programas que podem ser utilizados em páginas na internet. Para programar, o aluno vai estudar raciocínio lógico e linguagens de programação, que utiliza comandos para desenvolver funcionalidades e dar forma a um site.</p>
            <p>Além disso, o estudante aprenderá um pouco de design com o objetivo de tornar a página mais agradável e fácil de ser utilizada. O aluno aprenderá ainda como criar e alterar bancos de dados que vão alimentar os sites. Noções de marketing digital para a web e de empreendedorismo também serão ensinadas ao longo do curso.</p>
        </div>

        <div class="grid-cards">
            <div class="card">
                <h3>Desenvolvimento Front-End</h3>
                <p>Criação de interfaces responsivas utilizando as tecnologias mais recentes do mercado, garantindo que o site funcione em computadores, tablets e celulares.</p>
            </div>
            <div class="card">
                <h3>Lógica e Programação</h3>
                <p>Domínio de linguagens que permitem ao site processar dados, validar formulários e interagir com o usuário de forma dinâmica e inteligente.</p>
            </div>
            <div class="card">
                <h3>Design e UX</h3>
                <p>Foco na experiência do usuário (User Experience), aplicando conceitos de cores, tipografia e usabilidade para reter visitantes.</p>
            </div>
        </div>
    `,
    materias: `
        <h2 class="section-title">Grade Curricular Detalhada</h2>
        <div class="text-block">
            <p>A grade curricular foi desenhada para abranger desde a base científica e humana até as competências técnicas mais exigidas pelo mercado de tecnologia atual.</p>
        </div>
       
        <div class="grid-cards">
            ${[
                { n: 'BANCO DE DADOS', p: 'Cintia Pinho', d: 'O coração de qualquer sistema web. Aqui você aprende a estruturar informações de forma segura.' },
                { n: 'BIOLOGIA', p: 'Everaldo', d: 'Análise crítica sobre ética, biotecnologia e sustentabilidade no mundo digital.' },
                { n: 'COMPUTAÇÃO EM NUVEM I', p: 'Edilma Bindá', d: 'Aprenda a hospedar sites em servidores globais como AWS e Azure.' },
                { n: 'DEV. DISPOSITIVOS MÓVEIS I', p: 'Suely', d: 'Programação voltada para a criação de aplicativos que rodam na palma da mão.' },
                { n: 'INTERFACES WEB II', p: 'Bruno Zolotareff', d: 'Avançando no HTML5, CSS3 e frameworks modernos para layouts complexos.' },
                { n: 'SISTEMAS WEB II', p: 'Letícia', d: 'Integração entre o que o usuário vê e o processamento pesado no servidor.' },
                { n: 'MATEMÁTICA', p: 'Douglas Lima', d: 'A base do raciocínio algorítmico e estatística para análise de dados.' },
                { n: 'LÍNGUA INGLESA', p: 'Kelly Ceola', d: 'Leitura técnica e interpretação de documentações oficiais de linguagens.' }
            ].map(item => `
                <div class="card">
                    <h3>${item.n}</h3>
                    <p>${item.d}</p>
                    <span>Prof: ${item.p}</span>
                </div>
            `).join('')}
        </div>
    `,
    sobre: `
        <h2 class="section-title">Sobre o Curso e a Instituição</h2>
        <div class="text-block">
            <p>O curso técnico da ETEC prepara o aluno para o <strong>Eixo Tecnológico de Informação e Comunicação</strong>. Mais do que apenas escrever código, o estudante é capacitado para ser um solucionador de problemas reais através da tecnologia.</p>
            
            <h3>Competências Profissionais</h3>
            <ul>
                <li>Identificar e interpretar diretrizes do planejamento estratégico de projetos.</li>
                <li>Desenvolver interfaces baseadas em critérios de usabilidade e acessibilidade.</li>
                <li>Executar a manutenção de sistemas web e bancos de dados.</li>
                <li>Aplicar princípios de marketing digital para promover produtos e serviços online.</li>
            </ul>

            <h3 style="margin-top:20px;">Infraestrutura</h3>
            <p>Nossos laboratórios são equipados com softwares de última geração, permitindo que a teoria de sala de aula seja aplicada instantaneamente em projetos práticos, simulando o ambiente de trabalho das grandes empresas de tecnologia.</p>
        </div>
        
        <div class="card" style="margin-top: 30px; background: #fff9e6; border-color: #ffba08;">
            <p><strong>Certificação:</strong> Ao concluir o curso, o aluno recebe o diploma de Técnico em Informática para Internet, reconhecido em todo o território nacional.</p>
        </div>
    `,
    localizacao: `
        <h2 class="section-title">Onde Estamos</h2>
        <div class="text-block">
            <p>Nossa unidade conta com infraestrutura completa para o ensino técnico. Venha nos visitar e conhecer nossos laboratórios de informática.</p>
        </div>
        <div class="map-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.2153137232494!2d-46.416657023628034!3d-23.704003866850258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce6cf6b9a660b5%3A0xb470d63bf1a2159e!2sEtec%20de%20Ribeir%C3%A3o%20Pires!5e0!3m2!1spt-BR!2sbr!4v1778558179389!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div class="info-box">
            <p><strong>Endereço:</strong> ETEC Professora Maria Cristina Medeiros</p>
            <p><strong>Horário de Funcionamento:</strong> Segunda a Sexta, das 07h às 23h.</p>
        </div>
    `,
    localizacao: `
        <h2 class="section-title">Onde Estamos</h2>
        <div class="text-block">
            <p>Nossa unidade conta com infraestrutura completa para o ensino técnico. Venha nos visitar e conhecer nossos laboratórios de informática.</p>
        </div>
        <div class="map-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.2153137232494!2d-46.416657023628034!3d-23.704003866850258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce6cf6b9a660b5%3A0xb470d63bf1a2159e!2sEtec%20de%20Ribeir%C3%A3o%20Pires!5e0!3m2!1spt-BR!2sbr!4v1778558179389!5m2!1spt-BR!2sbr" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div class="info-box" style="margin-top: 20px; padding: 20px; background: #f9f9f9; border-left: 5px solid var(--primary-red); border-radius: 8px;">
            <p><strong>Endereço:</strong> ETEC Professora Maria Cristina Medeiros</p>
            <p><strong>Horário de Funcionamento:</strong> Segunda a Sexta, das 07h às 23h.</p>
        </div>
    `
};

const app = {
    init() {
        this.container = document.getElementById('content-area');
        this.links = document.querySelectorAll('.nav-links a');
        this.setupNav();
        this.loadPage('home');
    },
    setupNav() {
        this.links.forEach(l => {
            l.addEventListener('click', (e) => {
                e.preventDefault();
                const page = e.target.dataset.page;
                this.loadPage(page);
                this.links.forEach(link => link.classList.remove('active'));
                e.target.classList.add('active');
            });
        });
    },
    loadPage(name) {
        this.container.classList.remove('fade-in');
        void this.container.offsetWidth; 
        this.container.innerHTML = pages[name];
        this.container.classList.add('fade-in');
        window.scrollTo(0, 0);
    }
};

document.addEventListener('DOMContentLoaded', () => app.init());