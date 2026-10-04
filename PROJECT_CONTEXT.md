# 📌 CONTEXTO DE PROYECTO: VULPIARE APP

> **Documento de Handover y Contexto para Agentes Antigravity / LLMs**  
> Este documento contiene el resumen técnico, arquitectónico y de negocio completo para retomar el desarrollo del proyecto sin perder ningún avance ni requerimiento.

---

## 🏛️ 1. INFORMACIÓN GENERAL DEL PROYECTO

- **Nombre del Proyecto**: Vulpiare App (`vulpiare-app`)
- **Tipo de Negocio**: Academia de Acrobacias en Tela
- **Directora e Instructora Principal**: **María Victoria Benetto** — Campeona Sudamericana Nivel Premium
- **Repositorio GitHub**: `https://github.com/victoria-benetto/vulpiare-app.git` (Rama principal: `main`)
- **Despliegue Target**: Vercel / v0

---

## 🛠️ 2. STACK TECNOLÓGICO ESTRICTO

- **Frontend**: React 18 (TypeScript 5)
- **Bundler & Dev Server**: Vite 6
- **Estilos & UI**: Tailwind CSS 3, PostCSS, Autoprefixer
- **Iconografía**: Lucide React (`lucide-react`)
- **CI/CD**: GitHub Actions Workflow (`.github/workflows/ci.yml`)

---

## 🎨 3. IDENTIDAD VISUAL Y PALETA CROMÁTICA

### Paleta Oficial de Colores (Configurada en `frontend/tailwind.config.ts`)
| Nombre | Código Hex | Uso en UI | Variable Tailwind |
| :--- | :--- | :--- | :--- |
| **Primario / Oscuro** | `#9F6DAF` | Encabezados, botones principales, textos destacados, branding | `bg-vulpiare-dark`, `text-vulpiare-dark` |
| **Medio** | `#D9A6E8` | Acentos, bordes decorativos, degradados, destellos | `bg-vulpiare-medium`, `border-vulpiare-medium` |
| **Claro / Fondo** | `#E9D4EF` | Fondos de sección soft, badges, estados hover | `bg-vulpiare-light` |

### Assets e Imágenes de la Marca
- **Logo Oficial**: Isotipo circular con acrobata en telas rojas y salpicadura en acuarela morada.
  - Archivos: `frontend/public/logo.png`, `frontend/public/favicon.png`, `frontend/src/assets/images/logo.png`
- **Fotografías Oficiales de María Victoria Benetto**:
  - `src/assets/images/victoria-pose.jpg`: Pose acrobática de equilibrio en telas rojas (Usada en **Hero Section**).
  - `src/assets/images/victoria-split.jpg`: Apertura de piernas aérea en telas rojas (Usada en **Tarjeta Adultos**).
  - `src/assets/images/victoria-stretch.jpg`: Figura de fuerza y flexibilidad (Usada en **Tarjeta Horarios**).
  - `src/assets/images/kids-silks.png`: Tarjeta Grupo Infantil.

---

## 📁 4. ESTRUCTURA DE DIRECTORIOS Y ARQUITECTURA MODULAR

```
vulpiare-app/
├── README.md                     # Documentación explicativa pública del proyecto
├── PROJECT_CONTEXT.md            # Este archivo de contexto para agentes de IA
├── vercel.json                   # Configuración raíz para auto-deploy en Vercel/v0
├── package.json                  # Script delegado de build raíz
├── .github/
│   └── workflows/
│       └── ci.yml                # Workflow de GitHub Actions (typecheck y build)
└── frontend/                     # Aplicación React + TypeScript + Vite
    ├── index.html                # Favicon vinculado a /favicon.png
    ├── vite.config.ts            # Alias '@' apuntando a './src'
    ├── tailwind.config.ts        # Paleta oficial de Vulpiare
    ├── tsconfig.json             # Configuración estricta de TS
    ├── vercel.json               # Configuración respaldatoria para Vercel
    └── src/
        ├── vite-env.d.ts         # Declaraciones de tipos para Vite y assets de imagen (.jpg, .png)
        ├── assets/
        │   └── images/           # Assets oficiales (logo.png, victoria-*.jpg, kids-silks.png)
        ├── components/
        │   ├── common/           # Componentes UI reutilizables
        │   │   ├── ClassCard.tsx
        │   │   ├── FloatingWhatsAppButton.tsx
        │   │   ├── InstructorBanner.tsx
        │   │   ├── Header.tsx
        │   │   └── Footer.tsx
        │   └── landing/          # Secciones específicas de la Landing
        │       ├── HeroSection.tsx
        │       └── ClassesSection.tsx
        ├── constants/
        │   └── config.ts         # Teléfonos, mensaje predefinido de WhatsApp y datos de la instructora
        ├── pages/
        │   └── LandingPage.tsx   # Vista principal orquestadora
        ├── types/
        │   ├── components.ts     # Interfaces de props UI
        │   ├── landing.ts        # Tipos para datos de la landing
        │   └── domain.ts         # Entidades para la Fase 2 (User, Student, StudentClass, Payment)
        ├── App.tsx
        ├── main.tsx
        └── index.css
```

---

## ⚙️ 5. COMPONENTES Y FUNCIONALIDADES IMPLEMENTADAS

1. **`Header.tsx`**: Encabezado sticky con backdrop blur, mostrando el logo oficial circular de Vulpiare + texto "Vulpiare" y botón de CTA "Inscribirme".
2. **`HeroSection.tsx`**: Presentación con el eslogan *"Echá raíces. Desplegá tus alas."*, botones para pedir clase de prueba / ver horarios y la fotografía oficial `victoria-pose.jpg` en marco con degradado.
3. **`InstructorBanner.tsx`**: Banner destacado color `#9F6DAF` con el texto:  
   *"Dirigido por **María Victoria Benetto** — Campeona Sudamericana Nivel Premium"*.
4. **`ClassesSection.tsx` & `ClassCard.tsx`**: Tarjetas responsivas con efecto elevador:
   - **Grupo Infantil (6 a 12 años)**: Imagen lúdica + CTA de consulta.
   - **Jóvenes / Adultos (+15 años)**: Foto `victoria-split.jpg` + badge "Adultos / Nivel Avanzado".
   - **Horarios y Ubicación**: Foto `victoria-stretch.jpg` + botón de enlace a Google Maps.
5. **`FloatingWhatsAppButton.tsx`**: Botón flotante verde de WhatsApp fija a la derecha abajo (`fixed bottom-6 right-6`), utiliza la API `wa.me` con el mensaje predeterminado:  
   *"Hola Victoria! Vengo de la página web de Vulpiare y me gustaría recibir más información sobre las clases de tela y horarios."*  
   *(El número de teléfono se configura en `src/constants/config.ts` mediante la constante `VULPIARE_PHONE`)*.
6. **`Footer.tsx`**: Pie de página con copyright y el logo oficial.

---

## 📊 6. ESTADO DE LAS FASES DEL PROYECTO

### ✅ FASE 1: Landing Page Pública de Conversión (COMPLETADA)
- Refactorización modular de prototipo v0 a React + TS + Tailwind + Vite.
- Integración de la identidad oficial de la marca (colores y logotipo).
- Fotografías oficiales de María Victoria Benetto integradas.
- Pipeline de CI en GitHub Actions funcionando.
- Archivos `vercel.json` configurados para despliegue sin errores en Vercel / v0.

### ⏳ FASE 2: Sistema de Gestión Integral (PRÓXIMO PASO)
Las interfaces de TypeScript para esta fase ya están pre-definidas en `src/types/domain.ts`:
- **`User` / `Student`**: Alumnos, fichas médicas, contactos de emergencia y clases activas.
- **`StudentClass`**: Gestión de grupos (Infantil, Adultos), niveles, cupos e instructores.
- **`Payment`**: Control de pagos (cuotas, estados: `PENDING`, `PAID`, `OVERDUE`, métodos de pago).
- **Vistas Futuras**: Panel de administración (`src/pages/admin/DashboardPage.tsx`).

---

## 🚀 7. COMANDOS FÁCILES PARA EL DESARROLLADOR

```bash
# 1. Navegar a la carpeta frontend
cd frontend

# 2. Instalar dependencias
npm install

# 3. Levantar servidor local en la red (para probar en celular)
npm run dev -- --host

# 4. Probar compilación para producción
npm run build

# 5. Guardar cambios y subir a GitHub
git add .
git commit -m "feat: descripción del cambio"
git push origin main
```
