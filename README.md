# Dra. Gabriela Dornelas — Landing institucional

Landing page de prospecção para a **Dra. Gabriela Dornelas** (Ginecologia Íntima · Brasília/DF).
Posicionamento: *Saúde íntima, equilíbrio hormonal e autoestima.*

## Stack

- **[Astro](https://astro.build)** — HTML estático, alto desempenho.
- **[Lenis](https://lenis.darkroom.engineering/)** — scroll suave.
- **[GSAP + ScrollTrigger](https://gsap.com/)** — reveals, parallax, contadores e timeline.
- **[Swiper](https://swiperjs.com/)** — carrossel de depoimentos.
- Fontes via **@fontsource**: Cormorant Garamond, Manrope, Cinzel.

Tudo respeita `prefers-reduced-motion`.

## Comandos

```bash
npm install        # instala dependências
npm run dev        # servidor de desenvolvimento (localhost:4321)
npm run build      # gera o site estático em dist/
npm run preview    # serve o build de produção
```

## Estrutura

```
src/
  components/   # seções da página (Hero, Pilares, Tratamentos, FAQ, ...)
  layouts/      # Base.astro (head, fontes, motion)
  styles/       # tokens.css (design system) + global.css
  scripts/      # motion.ts (Lenis + GSAP + acordeões + nav)
  icons/        # SVGs recriados (ícones de serviço + emblema)
  data/         # content.ts (toda a copy)
  assets/       # hero-gabriela.webp, fotos reais da clínica, retrato e imagens de tratamento
```

## Dados reais já integrados

- **WhatsApp:** `+55 61 99692-5550` (`api.whatsapp.com`) em todos os CTAs.
- **Instagram:** `@dragabrieladornelass`. **Doctoralia:** botão "Avaliar atendimento".
- **Clínica:** Clínica Soul Essence — Asa Sul, Brasília/DF.
- **Fotos:** fotos reais da clínica na seção "A clínica"; retrato real no "Sobre".

## Itens para evoluir (opcional)

- **Mapa real:** a seção de contato usa um bloco visual de localização; pode receber um mapa incorporado.
- **Imagens de tratamento:** `src/assets/trat-*.webp` são ilustrativas — substituíveis por fotos próprias.
- **TikTok / Facebook:** adicionar URLs reais para ligar esses ícones de rede.

---

Desenvolvido como peça de prospecção. Design system, copy e ícones fiéis à identidade da marca.
