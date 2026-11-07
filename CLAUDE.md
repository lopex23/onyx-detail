# Onyx Detail — contexto del proyecto

## Qué es
Página web (landing) de **Onyx Detail**, un negocio de detailing automotriz en Medellín, Colombia.
Dueño/desarrollador: Sebas (estudiante). Responde siempre en **español**, con explicaciones claras y paso a paso.

Objetivo de la página: que el visitante entienda los servicios, calcule un precio estimado y **cotice por WhatsApp**.

## Stack
- HTML + CSS + JavaScript puro (sin frameworks, sin build, sin npm).
- Se prueba con la extensión **Live Server** de VS Code.
- Repositorio privado en GitHub: `lopex23/onyx-detail` (rama `main`).

## Estructura
```
index.html       Estructura de la página (header, hero, servicios, proceso, cotizador, FAQ, footer)
css/styles.css   Estilos. Tokens de color y fuentes en :root (tema oscuro por defecto + tema claro)
js/main.js       Configuración del negocio y cotizador
img/             Fotos (por ahora de referencia, de Pexels)
```

## Identidad visual
- Estilo: oscuro premium. Grafito frío (ónix) con acento dorado tipo cera de carnauba.
- Colores (en `:root` de styles.css): `--bg #0b1118`, `--surface #111a24`, `--fg #e9eef4`, `--muted #8e9db0`, `--accent #e2a64b`.
  Hay versión clara bajo `prefers-color-scheme: light`. Si cambias un color, cámbialo en los tres bloques de tokens.
- Fuentes (Google Fonts): **Archivo** expandida (títulos, `--f-display`), **Instrument Sans** (texto, `--f-body`), **JetBrains Mono** (datos y etiquetas, `--f-mono`).
- Usa siempre los tokens CSS (`var(--accent)` etc.), nunca colores sueltos.

## Secciones actuales
1. **Hero**: titular "Tu pintura vuelve a reflejar." + foto de un carro con espuma (Pexels, de referencia).
2. **Servicios**: 6 tarjetas basadas en lo que incluyen los paquetes; cada una indica en qué paquete viene.
3. **Proceso**: 6 pasos del paquete VIP (lavado → entrega).
4. **Cotizador**: tipo de vehículo × paquete (+ adicionales si hay) → precio en COP y mensaje prellenado para WhatsApp (`wa.me`).

## Paquetes reales (precios en COP: sedán / SUV 5 pasajeros / SUV 7 pasajeros, 4x4 o pick-up)
- **Básico** 40.000 / 50.000 / 65.000: lavado con espuma, secado, aspirado, alfombras plásticas, vidrios, dash y puertas con UV, llantas.
- **Intermedio** 120.000 / 150.000 / 180.000: lo del básico + limpieza de asientos, encerado con UV y repelencia, motor, plásticos externos, llantas y guardabarros, aroma.
- **VIP** 350.000 / 400.000 / 450.000: tapicería completa (asientos, alfombra, cinturones, cielo raso), encerado, motor, plásticos externos, llantas y guardabarros. **La polichada NO se ofrece por ahora** (aunque salga en la imagen original del VIP).
- Tiempos: Básico 1 h a 1 h 30 min · Intermedio 3 a 4 h · VIP 5 a 6 h. **Todos los servicios son a domicilio** en Medellín, Área Metropolitana y Oriente antioqueño. El cliente solo pone la luz (toma eléctrica); Onyx lleva agua, productos y equipo.
- Fotos en `img/`: de Pexels (licencia libre, uso comercial), solo como ambiente, con crédito "Fotos de referencia: Pexels" en el footer. Hero: `hero-espuma.jpg`; franja de servicios: `lavado-pincel.jpg`, `tapiceria.jpg`, `llantas.jpg`.
- **Nunca** usar fotos antes/después de otros talleres: un antes/después solo con trabajos reales de Onyx. (El comparador en canvas se quitó; rehacerlo con `<img>` cuando haya fotos propias.)
- No hay adicionales con precio todavía (`PRECIOS.extras` vacío oculta esa sección).
5. **Preguntas frecuentes** (`<details>`).

## Configuración del negocio (js/main.js, al inicio)
- `NEGOCIO.nombre` y `NEGOCIO.whatsapp` (formato `57XXXXXXXXXX`). Número real: 573142187349.
- `PRECIOS.tamanos` (tipos de vehículo), `PRECIOS.paquetes` (cada uno con `precios` fijos por id de tamaño), `PRECIOS.extras`.
- Los precios se redondean a múltiplos de $5.000 COP.

## Reglas
- No inventar testimonios, reseñas, clientes ni cifras presentadas como reales. Si hacen falta, dejar un espacio marcado como pendiente.
- Mantener la página responsive (debe verse bien a 375px de ancho) y accesible (foco visible, `alt` en imágenes, `prefers-reduced-motion`).
- Mantener todo en español (Colombia), tono cercano y profesional.
- Cambios pequeños y explicados; no reescribir archivos completos sin necesidad.
- Antes de hacer commit, preguntar a Sebas.

## Pendientes
- [x] Número real de WhatsApp y precios reales
- [ ] Precios de adicionales (si los hay) y horario de atención
- [ ] Logo de Onyx Detail
- [ ] Fotos reales antes/después para reemplazar la simulación
- [ ] Galería de trabajos
- [ ] Redes sociales (Instagram) en el footer
- [ ] Publicar la página (GitHub Pages, Netlify o Vercel) y conseguir dominio
