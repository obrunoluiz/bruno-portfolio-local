(() => {
  const clean = (value) => value.replace(/\s+/g, " ").trim();

  const setWidget = (id, html) => {
    const widget = document.querySelector(`[data-id="${id}"] .elementor-widget-container`);
    if (widget) widget.innerHTML = html;
  };

  const replaceText = (replacements) => {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);

    nodes.forEach((node) => {
      const current = clean(node.nodeValue);
      if (replacements.has(current)) {
        node.nodeValue = node.nodeValue.replace(node.nodeValue.trim(), replacements.get(current));
      }
    });
  };

  const text = new Map([
    ["Curso mais completo de WebDesign", "POR QUE APLICAR TRÁFEGO PAGO NO SEU NEGÓCIO"],
    ["Aprenda do Zero", "RECONHECIMENTO, NÃO SÓ VENDA PONTUAL"],
    ["O Mercado Mais Bem Pago do Design", "O CANAL QUE MAIS CONVERTE HOJE"],
    ["Zero programação", "RECONHECIMENTO LOCAL"],
    ["O seu próximo passo", "FUNIL COMPLETO"],
    ["Do design à página publicada", "DO ANÚNCIO À VENDA"],
    ["NUNCA CRIOU UMA PÁGINA NA VIDA", "ESTRATÉGIA"],
    ["Já é designer e quer dar o próximo passo", "OTIMIZAÇÃO"],
    ["QUER ENTRAR NO MERCADO MAIS BEM PAGO DO DESIGN", "COMPROMISSO COM O RESULTADO"],
    ["Dá pra ganhar dinheiro com Landing Pages?", "POSSO CONFIAR EM VOCÊ?"],
    ["A resposta é sim — e os dados da Kiwify e Hotmart comprovam.", "A resposta é sim — além de ter gerenciado mais de R$ 100 mil em anúncios, sou certificado por grandes agências e pelo maior curso de tráfego pago do Brasil."],
    ["Olha tudo que você vai ter acesso:", "DESIGN. MARKETING. IMPLEMENTAÇÃO."],
    ["Suporte para dúvidas", "Planejamento Estratégico"],
    ["Atualizações & Novas Aulas", "Design de Conversão"],
    ["Comunidade de Alunos", "Desenvolvimento Web"],
    ["I.A Para criação de COPY", "Publicação e Deploy"],
    ["Modelos de Páginas", "Otimização Contínua"],
    ["Bônus Exclusivos", "Tecnologia & IA"],
    ["BÔNUS EXCLUSIVOS", "O QUE ME DIFERENCIA"],
    ["pack de páginas Exclusivas", "VISÃO DE NEGÓCIO"],
    ["arsenal de códigos", "TECNOLOGIA & IA"],
    ["curso design agora 2.0", "EXECUÇÃO COMPLETA"],
    ["ACESSO VITALÍCIO", "IMPACTO ESTRATÉGICO"],
    ["6 Meses de acesso", "PROCESSOS OTIMIZADOS"],
    ["O mercado paga {muito} bem", "MARKETING & POSICIONAMENTO"],
    ["Poucos sabem fazer direito", "EXPERIÊNCIA & CONVERSÃO"],
    ["Você se torna completo", "TECNOLOGIA & INTELIGÊNCIA ARTIFICIAL"],
    ["Curso Completo {No Code Pages}", "BRUNO LUIZ"],
    ["Acesso vitalício", "Landing Pages"],
    ["Certificado Web Designer", "Websites"],
    ["Suporte Individual", "Design Estratégico"],
    ["Bônus Exclusivos", "Desenvolvimento Web"],
    ["POR 12X", "DESIGNER ESTRATÉGICO"],
    ["R$ 51,40", "WEB DESIGNER"],
    ["OU 497,00 Á VISTA", "MARKETING DIGITAL"],
    ["Entre sem medo e decida depois.", "VAMOS CONSTRUIR SEU PRÓXIMO PROJETO?"],
    ["Olá, prazer", "POR TRÁS DE CADA PROJETO"],
    ["Sou o Gustavo Hirt", "EXISTE UMA ESTRATÉGIA"],
    ["Certificado de Conclusão", "O QUE DIZEM SOBRE O MEU TRABALHO"],
    ["Ficou com alguma dúvida?", "FAQ"],
    ["Relaxa, a gente resolve agora!", "DÚVIDAS SOBRE SERVIÇOS E PROJETOS"],
    ["WhatsApp", "Fale comigo"],
    ["Mandar mensagem", "Solicitar orçamento"],
    ["Copyright © 2025. Gustavo Hirt Todos direitos reservados CNPJ 40.725.105/0001-22", "Copyright © 2026. Bruno Luiz. Todos os direitos reservados."]
  ]);

  const paragraphs = new Map([
    ["Não importa se nunca abriu o Figma, Photoshop ou Elementor. A gente pega na sua mão e te leva do básico até publicar sua primeira página.", "Não importa se você nunca rodou um anúncio. A estrutura que eu monto leva sua marca do zero até aparecer para quem decide comprar — seja na sua região ou em qualquer lugar onde está o seu cliente ideal."],
    ["Toda empresa, lançamento e marca precisa de alguém que crie sites bonitos e que funcionam. E aqui tá o ponto: é um dos setores que mais pagam dentro do design. Enquanto muita gente ainda se prende a post de Instagram, você aprende a criar algo que gera resultado real e é muito mais valorizado.", "Enquanto a concorrência depende só do orgânico, você usa o canal mais rastreável do marketing. Cada real investido é medido, ajustado e aproxima você do próximo cliente — sem depender de sorte."],
    ["Chega de achar que precisa ser programador. Você vai aprender a criar páginas fodas sem escrever uma única linha de código.", "Apareça para quem está na sua cidade ou bairro, exatamente quando está procurando o que você vende."],
    ["Se você é da área do Design (ou quer entrar) o Web Design é o melhor caminho: menos concorrência, mais valor e os projetos mais bem pagos do mercado.", "Da primeira impressão até a decisão de compra — cada etapa pensada para conduzir o cliente até você."],
    ["Aqui você aprende todo o processo de Web Designer: Desde a criação do Layout até a implementação da página online. Nada de ficar perdido entre mil tutoriais é o caminho direto pra virar Web Designer completo.", "Estratégia, criativo e otimização — tudo administrado para transformar clique em cliente pagante."],
    ["Mesmo que você nunca tenha aberto o Figma, o Photoshop ou o Elementor, o NoCode Pages te ensina do zero a criar páginas completas, profissionais e simplesmente F#DAS.", "Estratégias de tráfego pago personalizadas de acordo com o objetivo do seu negócio."],
    ["Chega de achar que Design é só criar Posts, carrosséis para o Instagram... Aqui você vai aprender a criar Páginas, Sites, Landing Pages, sem programar e agregando muito mais valor pros seus projetos e clientes.", "Otimização frequente das campanhas para melhorar resultado e performance."],
    ["O Web Design é uma das áreas mais valorizadas hoje. Aqui você aprende a se destacar, cobrar mais e entregar projetos que chamam atenção de verdade.", "Relatórios e diagnósticos claros sobre o que foi investido e quanto retorno foi obtido."],
    ["Projetos completos: design + implementação, tudo detalhado passo a passo pra você criar páginas de alto nível.", "Cada projeto foi desenvolvido considerando necessidades específicas, metas comerciais e desafios reais."],
    ["Criar páginas é uma das habilidades mais valorizadas no design. Empresas, Infoprodutores, Profissionais... pagam muito bem para criação de Páginas Profissionais e poucos dominam isso de verdade.", "Construção de experiências alinhadas aos objetivos da marca."],
    ["A maioria dos designers ainda vive de posts e identidade visual. Poucos entendem o mercado de páginas, acham que é difícil, ou que precisa programar. o NO CODE PAGES vai mudar isso.)", "Páginas pensadas para facilitar decisões e aumentar resultados."],
    ["Sabe os clientes que você já tem? Muitos deles precisam de sites e páginas, e você pode ser quem entrega tudo isso. Chega de deixar dinheiro na mesa", "Fluxos modernos que permitem mais eficiência, velocidade e qualidade na entrega."],
    ["Nossa garantia é simples: você tem 7 dias inteiros pra explorar o curso, assistir às aulas e testar o conteúdo. Se nesse período você sentir que o No Code Pages não é pra você, devolvemos 100% do seu investimento, sem burocracia, sem perguntas.", "Se você procura um profissional que combine design, marketing e tecnologia para desenvolver uma presença digital mais estratégica, vamos conversar."],
    ["Finalize o curso e receba um certificado oficial comprovando suas habilidades. Um reconhecimento que você pode mostrar em portfólios, LinkedIn e clientes para destacar seu nível profissional.", "Resultados reais de clientes que confiaram seus projetos e suas marcas ao meu processo. Seu depoimento pode aparecer aqui."],
    ["Se não encontrar sua resposta aqui, é só chamar no WhatsApp que a gente te ajuda rapidinho.", "Não encontrou sua resposta? Entre em contato e vamos conversar sobre o seu projeto."]
  ]);

  setWidget("d53e663", '<div class="hero-name">HEITOR <span>LUCAS</span></div>');
  setWidget("5fe03de9", '<h2 class="elementor-heading-title elementor-size-default">GESTÃO DE TRÁFEGO PAGO QUE COLOCA SUA MARCA NA FRENTE DE <span class="gradienteidv">QUEM REALMENTE COMPRA</span></h2>');
  setWidget("1ce18d7", '<h2 class="elementor-heading-title elementor-size-default">Mais de 3 anos no tráfego pago, experiência em lançamentos, infoprodutos e reconhecimento de marca ou negócio, com mais de R$ 100 mil em anúncios gerenciados e +10 milhões de pessoas alcançadas.<br><small>Google Ads • TikTok Ads • Meta Ads</small></h2>');
  setWidget("2b43020f", '<h2 class="elementor-heading-title elementor-size-default">POR QUE APLICAR TRÁFEGO PAGO NO SEU NEGÓCIO</h2>');
  setWidget("2f0b990", '<h2 class="elementor-heading-title elementor-size-default">COMIGO VOCÊ <span class="gradienteidvv2">VAI TER:</span></h2>');
  setWidget("9933918", '<h2 class="elementor-heading-title elementor-size-default">POSSO CONFIAR EM VOCÊ?</h2>');
  setWidget("30fa68f0", '<h2 class="elementor-heading-title elementor-size-default">A resposta é sim — além de ter gerenciado mais de R$ 100 mil em anúncios, sou certificado por grandes agências e pelo maior curso de tráfego pago do Brasil.</h2><p class="trust-next">Fechando comigo você vai ter:</p>');
  setWidget("1ba0e33e", '<h2 class="elementor-heading-title elementor-size-default">PROJETOS EM <span class="gradienteidvv2">DESTAQUE</span></h2>');
  setWidget("ed1d824", '<h2 class="elementor-heading-title elementor-size-default">UMA SELEÇÃO DE SITES COM DIFERENTES OBJETIVOS E SEGMENTOS</h2>');
  setWidget("b61b0ab", '<h2 class="elementor-heading-title elementor-size-default">DESIGN COM <span class="gradienteidvv2">VISÃO DE NEGÓCIO</span></h2>');

  replaceText(text);
  replaceText(paragraphs);

  ["34994949", "62b8d710", "4c87b8c3", "771290f0", "594a4a3b"].forEach((id) => {
    const icon = document.querySelector(`[data-id="${id}"] img`);
    if (!icon) return;

    icon.src = "/pen-tool.png";
    icon.dataset.src = "/pen-tool.png";
    icon.removeAttribute("srcset");
    icon.removeAttribute("data-srcset");
    icon.removeAttribute("sizes");
    icon.removeAttribute("data-sizes");
    icon.alt = "";
  });

  ["7721c95", "43d225a", "48b0044", "2dc9f3a"].forEach((id) => {
    document.querySelector(`[data-id="${id}"]`)?.remove();
  });

  const saturnImage = document.querySelector('[data-id="eb4d5eb"] img');
  if (saturnImage) {
    saturnImage.src = "/no-code-pages-saturn.png";
    saturnImage.dataset.src = "/no-code-pages-saturn.png";
    saturnImage.removeAttribute("srcset");
    saturnImage.removeAttribute("data-srcset");
    saturnImage.removeAttribute("sizes");
    saturnImage.removeAttribute("data-sizes");
    saturnImage.alt = "Bruno Luiz";
  }

  const verticalLogo = document.querySelector('[data-id="43fd208d"] img');
  if (verticalLogo) {
    verticalLogo.src = "/logo-bruno-motion.png";
    verticalLogo.dataset.src = "/logo-bruno-motion.png";
    verticalLogo.removeAttribute("srcset");
    verticalLogo.removeAttribute("data-srcset");
    verticalLogo.removeAttribute("sizes");
    verticalLogo.removeAttribute("data-sizes");
    verticalLogo.alt = "Bruno Luiz";
  }

  const footerLogo = document.querySelector('[data-id="7cce0aa2"] .elementor-icon');
  if (footerLogo) {
    footerLogo.innerHTML = '<img class="footer-logo-bruno" src="/logo-de-cria.png" alt="Bruno Luiz">';
  }

  const aboutImage = document.querySelector('[data-id="5a4069ca"] img');
  if (aboutImage) {
    aboutImage.src = "/bruno-expert.png";
    aboutImage.dataset.src = "/bruno-expert.png";
    aboutImage.removeAttribute("srcset");
    aboutImage.removeAttribute("data-srcset");
    aboutImage.removeAttribute("sizes");
    aboutImage.removeAttribute("data-sizes");
    aboutImage.alt = "Bruno Luiz e projetos de design";
  }

  document.querySelector('[data-id="4f9480c"]')?.remove();
  document.querySelector('[data-id="46029a7"]')?.remove();
  document.querySelector('[data-id="5114a589"]')?.remove();

  const workAccordionItems = [
    ["Descoberta e Diagnóstico", "Entendimento dos objetivos do negócio, público, concorrência e oportunidades para construir uma solução alinhada às metas da marca."],
    ["Estratégia e Estrutura", "Planejamento da arquitetura da página, organização das informações e definição da jornada do usuário."],
    ["Wireframe e Planejamento Visual", "Estruturação da página antes do design final, garantindo clareza, hierarquia e foco nos objetivos do projeto."],
    ["Design no Photoshop", "Criação visual profissional utilizando Photoshop para desenvolver interfaces modernas, alinhadas ao posicionamento da marca."],
    ["Experiência e Conversão", "Aplicação de princípios de UX, marketing e design de conversão para melhorar a experiência do usuário e aumentar resultados."],
    ["Desenvolvimento com VS Code + Codex", "Transformação do layout em uma página funcional utilizando VS Code e Codex, permitindo maior flexibilidade, performance e personalização."],
    ["Responsividade", "Adaptação completa para desktop, tablet e smartphone, garantindo uma experiência consistente em qualquer dispositivo."],
    ["Integrações e Funcionalidades", "Configuração de formulários, WhatsApp, ferramentas de marketing, automações e demais recursos necessários."],
    ["Performance e Otimização", "Melhorias de carregamento, estrutura técnica e boas práticas para garantir velocidade e eficiência."],
    ["GitHub e Versionamento", "Organização profissional do projeto utilizando GitHub para controle de versões e gerenciamento do desenvolvimento."],
    ["Deploy e Publicação", "Publicação do projeto utilizando Vercel, configuração de domínio e apontamentos DNS."],
    ["Inteligência Artificial Aplicada", "Utilização estratégica de IA para acelerar processos criativos, desenvolvimento, pesquisa e validação de soluções."],
    ["Suporte e Evolução", "Acompanhamento pós-entrega para ajustes, melhorias e futuras evoluções do projeto."],
    ["Mercado e Estratégia Digital", "Experiência aplicada ao marketing digital para desenvolver páginas alinhadas aos objetivos de negócio e geração de oportunidades."]
  ];
  const workAccordion = document.querySelector('[data-id="b4b53d3"]');
  if (workAccordion) {
    const workTitles = workAccordion.querySelectorAll(".e-n-accordion-item-title-text");
    const workContents = workAccordion.querySelectorAll('.e-n-accordion-item > div[role="region"]');

    workAccordionItems.forEach(([title, description], index) => {
      if (workTitles[index]) workTitles[index].textContent = title;
      const content = workContents[index]?.querySelector(".elementor-widget-container");
      if (content) content.innerHTML = `<p>${description}</p>`;
    });
  }

  document.querySelectorAll(".elementor-button-text").forEach((button) => {
    button.textContent = "FALAR COM HEITOR";
  });

  const whatsappUrl = "https://wa.me/5522999761278?text=Ol%C3%A1%20bruno%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20sobre%20meu%20projeto%21";

  ["9f76fb7", "05d6821"].forEach((id) => {
    const element = document.querySelector(`[data-id="${id}"]`);
    const link = element?.matches("a") ? element : element?.querySelector("a");

    if (link) {
      link.href = whatsappUrl;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }
  });

  setWidget("07439a3", '<img class="offer-card-logo" src="/offer-logo-bruno.png" alt="Bruno Luiz">');
  setWidget("849abe5", '<h2 class="elementor-heading-title elementor-size-default">Photoshop e Illustrator</h2>');
  document.querySelector('[data-id="18e95cf"]')?.remove();

  const specialties = [
    "Google Ads",
    "TikTok Ads",
    "Meta Ads"
  ];
  document.querySelectorAll('[data-id="30ca4738"] .swiper-slide-inner').forEach((slide, index) => {
    slide.dataset.specialty = specialties[index % specialties.length];
    slide.classList.add("portfolio-specialty");
  });

  ["36e356e7", "1edba248", "3686c29a", "2fe12819", "4d121917"].forEach((id) => {
    document.querySelector(`[data-id="${id}"]`)?.remove();
  });

  const portfolioImages = [
    ["/project-nickson.png", "Projeto Nickson Resende"],
    ["/project-mariana-links.png", "Projeto Mariana Torres"],
    ["/project-ia-de-verdade.png", "Comunidade IA de Verdade"],
    ["/project-wing.png", "Imersão WING"],
    ["/project-x32.png", "Imersão X32"]
  ];
  document.querySelectorAll('[data-id="f8fa23f"] .swiper-slide-image').forEach((image, index) => {
    const project = portfolioImages[index % portfolioImages.length];
    image.src = project[0];
    image.dataset.src = project[0];
    image.removeAttribute("srcset");
    image.removeAttribute("data-srcset");
    image.removeAttribute("sizes");
    image.removeAttribute("data-sizes");
    image.alt = project[1];
  });
  const portfolioCarousel = document.querySelector('[data-id="f8fa23f"]');
  if (portfolioCarousel) {
    portfolioCarousel.id = "projetos";
    if (window.location.hash === "#projetos") {
      requestAnimationFrame(() => portfolioCarousel.scrollIntoView({ block: "center" }));
    }
  }

  const tuneMobileSwipers = () => {
    if (!window.matchMedia("(max-width: 767px)").matches) return;

    ["30ca4738", "f8fa23f"].forEach((id) => {
      const swiperElement = document.querySelector(`[data-id="${id}"] .swiper`);
      const swiper = swiperElement?.swiper;
      if (!swiper || swiperElement.mobileSwipeInstance === swiper) return;

      swiperElement.mobileSwipeInstance = swiper;
      swiperElement.style.touchAction = "pan-y";
      swiper.allowTouchMove = true;
      swiper.params.allowTouchMove = true;
      swiper.params.followFinger = true;
      swiper.params.shortSwipes = true;
      swiper.params.longSwipes = true;
      swiper.params.longSwipesRatio = 0.2;
      swiper.params.threshold = 6;
      swiper.params.touchAngle = 35;
      swiper.params.resistance = true;
      swiper.params.resistanceRatio = 0.65;
      swiper.params.preventInteractionOnTransition = false;

      const automaticSpeed = swiper.params.speed;
      let resumeTimer;

      swiper.on("touchStart", () => {
        clearTimeout(resumeTimer);
        swiper.autoplay?.stop();
        swiper.params.speed = 380;
      });

      swiper.on("touchEnd", () => {
        clearTimeout(resumeTimer);
        resumeTimer = setTimeout(() => {
          swiper.params.speed = automaticSpeed;
          swiper.autoplay?.start();
        }, 1400);
      });
    });
  };

  let swiperSetupAttempts = 0;
  const waitForMobileSwipers = () => {
    tuneMobileSwipers();
    swiperSetupAttempts += 1;
    if (swiperSetupAttempts < 20) setTimeout(waitForMobileSwipers, 250);
  };
  waitForMobileSwipers();
  document.addEventListener("DOMContentLiteSpeedLoaded", tuneMobileSwipers);
  document.addEventListener("pointerdown", tuneMobileSwipers, { capture: true, passive: true });
  window.addEventListener("load", tuneMobileSwipers);
  window.addEventListener("orientationchange", () => setTimeout(tuneMobileSwipers, 250));

  const carouselAssets = [
    ...Array.from({ length: 9 }, (_, index) => `/carousel-${String(index + 1).padStart(2, "0")}.gif`),
    ...Array.from({ length: 9 }, (_, index) => `/carousel-${String(index + 10).padStart(2, "0")}.png`)
  ];
  const carouselSection = document.createElement("section");
  carouselSection.className = "portfolio-carousel-section";
  carouselSection.id = "carrosseis";
  carouselSection.innerHTML = `
    <div class="portfolio-carousel-heading">
      <h2>CARROSSÉIS DE SUCESSO</h2>
    </div>
    <div class="portfolio-carousel-shell">
      <button class="portfolio-carousel-arrow portfolio-carousel-prev" type="button" aria-label="Slide anterior">‹</button>
      <div class="portfolio-carousel-viewport">
        <div class="portfolio-carousel-track">
          ${carouselAssets.map((src, index) => `
            <figure class="portfolio-carousel-slide">
              <img src="${src}" alt="Projeto de carrossel ${index + 1}" loading="lazy" decoding="async">
            </figure>
          `).join("")}
        </div>
      </div>
      <button class="portfolio-carousel-arrow portfolio-carousel-next" type="button" aria-label="Próximo slide">›</button>
    </div>
    <div class="portfolio-carousel-dots" aria-label="Navegação do carrossel"></div>
  `;

  const portfolioSection = portfolioCarousel?.closest(".e-con.e-parent");
  if (portfolioSection) portfolioSection.insertAdjacentElement("afterend", carouselSection);

  const track = carouselSection.querySelector(".portfolio-carousel-track");
  const viewport = carouselSection.querySelector(".portfolio-carousel-viewport");
  const dots = carouselSection.querySelector(".portfolio-carousel-dots");
  const originalSlides = [...track.children];
  let activeSlide = 0;
  let cloneCount = 0;
  let offset = 0;
  let animationFrame;
  let previousFrame;
  let isDragging = false;
  let dragStartX = 0;
  let dragStartOffset = 0;
  let resumeAt = 0;

  const visibleSlides = () => window.matchMedia("(max-width: 767px)").matches ? 1 : 4;
  const slideWidth = () => viewport.clientWidth / visibleSlides();
  const updateDots = () => {
    dots.querySelectorAll("button").forEach((dot, index) => {
      dot.classList.toggle("is-active", index === activeSlide);
    });
  };

  const normalizeOffset = () => {
    const width = slideWidth();
    const loopWidth = carouselAssets.length * width;
    const loopStart = cloneCount * width;
    while (offset >= loopStart + loopWidth) offset -= loopWidth;
    while (offset < loopStart) offset += loopWidth;
  };

  const positionTrack = () => {
    normalizeOffset();
    const relativeIndex = Math.floor((offset - cloneCount * slideWidth()) / slideWidth());
    activeSlide = (relativeIndex + carouselAssets.length) % carouselAssets.length;
    track.style.transform = `translate3d(${-offset}px, 0, 0)`;
    updateDots();
  };

  const setupInfiniteLoop = () => {
    track.querySelectorAll("[data-carousel-clone]").forEach((slide) => slide.remove());
    cloneCount = Math.min(visibleSlides(), originalSlides.length);

    originalSlides.forEach((slide) => {
      slide.style.flexBasis = `${slideWidth()}px`;
      slide.style.width = `${slideWidth()}px`;
    });

    const before = originalSlides.slice(-cloneCount).map((slide) => {
      const clone = slide.cloneNode(true);
      clone.dataset.carouselClone = "true";
      return clone;
    });
    const after = originalSlides.slice(0, cloneCount).map((slide) => {
      const clone = slide.cloneNode(true);
      clone.dataset.carouselClone = "true";
      return clone;
    });

    before.reverse().forEach((clone) => track.prepend(clone));
    after.forEach((clone) => track.append(clone));
    [...track.children].forEach((slide) => {
      slide.style.flexBasis = `${slideWidth()}px`;
      slide.style.width = `${slideWidth()}px`;
    });

    offset = (cloneCount + activeSlide) * slideWidth();
    positionTrack();
  };

  const buildDots = () => {
    dots.innerHTML = "";
    for (let index = 0; index < carouselAssets.length; index += 1) {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.ariaLabel = `Ir para o slide ${index + 1}`;
      dot.addEventListener("click", () => {
        activeSlide = index;
        offset = (cloneCount + activeSlide) * slideWidth();
        positionTrack();
      });
      dots.appendChild(dot);
    }
    setupInfiniteLoop();
  };

  const moveCarousel = (direction) => {
    offset += direction * slideWidth();
    positionTrack();
  };

  const runContinuousScroll = (timestamp) => {
    if (previousFrame === undefined) previousFrame = timestamp;
    const elapsed = Math.min(timestamp - previousFrame, 50);
    previousFrame = timestamp;
    if (!isDragging && timestamp >= resumeAt) {
      const pixelsPerSecond = window.matchMedia("(max-width: 767px)").matches ? 26 : 38;
      offset += pixelsPerSecond * elapsed / 1000;
      positionTrack();
    }
    animationFrame = requestAnimationFrame(runContinuousScroll);
  };

  carouselSection.querySelector(".portfolio-carousel-prev").addEventListener("click", () => {
    moveCarousel(-1);
  });
  carouselSection.querySelector(".portfolio-carousel-next").addEventListener("click", () => {
    moveCarousel(1);
  });
  const finishDrag = (event) => {
    if (!isDragging) return;

    isDragging = false;
    viewport.classList.remove("is-dragging");
    if (viewport.hasPointerCapture?.(event.pointerId)) {
      viewport.releasePointerCapture(event.pointerId);
    }

    const width = slideWidth();
    offset = Math.round(offset / width) * width;
    resumeAt = performance.now() + 1400;
    positionTrack();
  };

  viewport.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;

    isDragging = true;
    dragStartX = event.clientX;
    dragStartOffset = offset;
    viewport.classList.add("is-dragging");
    viewport.setPointerCapture?.(event.pointerId);
  });

  viewport.addEventListener("pointermove", (event) => {
    if (!isDragging) return;

    offset = dragStartOffset + (dragStartX - event.clientX);
    positionTrack();
  });

  viewport.addEventListener("pointerup", finishDrag);
  viewport.addEventListener("pointercancel", finishDrag);

  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      setupInfiniteLoop();
    }, 150);
  });
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) previousFrame = undefined;
  });
  buildDots();
  cancelAnimationFrame(animationFrame);
  animationFrame = requestAnimationFrame(runContinuousScroll);

  const about = document.querySelector('[data-id="13a5f852"] .elementor-widget-container');
  if (about) {
    about.innerHTML = "<p>Acredito que design não é apenas aparência.</p><p>Meu trabalho consiste em entender objetivos, identificar oportunidades e criar soluções digitais que contribuam para o crescimento de negócios e marcas.</p><p>Cada projeto é desenvolvido considerando posicionamento, experiência do usuário, comunicação e resultados.</p>";
  }

  const faq = [
    ["Você desenvolve o site completo?", "Sim. Desde o planejamento visual até a publicação final."],
    ["Você trabalha apenas com design?", "Trabalho a 8 anos como Designer mas também sou WebDesigner com IA."],
    ["Quanto tempo leva um projeto?", "Depende da complexidade, mas cada projeto recebe um cronograma personalizado."],
    ["Você trabalha com landing pages?", "Sim. Landing pages são uma das minhas principais especialidades."]
  ];
  const faqRoot = document.querySelector('[data-id="eda9f8e"]')?.parentElement || document;
  const titles = faqRoot.querySelectorAll(".elementor-tab-title, .e-n-accordion-item-title-text");
  const contents = faqRoot.querySelectorAll(".elementor-tab-content, .e-n-accordion-item > div[role='region']");
  faq.forEach(([question, answer], index) => {
    if (titles[index]) titles[index].textContent = question;
    if (contents[index]) contents[index].innerHTML = `<p>${answer}</p>`;
  });
  Array.from(titles).slice(faq.length).forEach((title) => {
    title.closest(".e-n-accordion-item, .elementor-accordion-item")?.remove();
  });

  document.querySelector('[data-id="ab1e8fd"]')?.remove();
  document.title = "Heitor Lucas | Gestor de Tráfego Pago";
})();
