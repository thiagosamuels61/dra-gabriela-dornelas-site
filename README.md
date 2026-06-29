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
  assets/       # hero-gabriela.webp, logo-gabriela.png
```

## Itens para personalizar antes do go-live

- **WhatsApp/agendamento real:** `whatsappUrl` em `src/data/content.ts` (placeholder `https://wa.me/55`).
- **Fotos reais:** blocos `PhotoFrame` marcados com `data-replace="foto"` (Sobre, Tratamentos, Clínica).
- **Endereço/mapa:** seção de contato (placeholder — apenas "Brasília/DF").
- **Depoimentos:** textos ilustrativos em `content.ts` (substituir por reais com consentimento).

---

Desenvolvido como peça de prospecção. Design system, copy e ícones fiéis à identidade da marca.
