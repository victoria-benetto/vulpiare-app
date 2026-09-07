# vulpiare-app

**Vulpiare** es la plataforma web de la academia de acrobacias en tela dirigida por **María Victoria Benetto** — *Campeona Sudamericana Nivel Premium*.

Este repositorio alberga la plataforma de la academia, diseñada bajo una arquitectura modular y escalable para acompañar la evolución del proyecto en dos fases clave.

---

## 🚀 Visión General del Proyecto

### 📌 Fase 1: Landing Page Pública de Conversión (Fase Actual)
- **Objetivo**: Atraer nuevos alumnos y transmitir la identidad de la marca Vulpiare.
- **Hero Section**: Destacando el lema *"Desplegá tus alas."* y llamado a la acción para clases de prueba.
- **Banner Oficial de la Instructora**: Reconocimiento a **María Victoria Benetto**, Campeona Sudamericana Nivel Premium.
- **Componente Reutilizable `ClassCard`**: Tarjetas descriptivas para Grupo Infantil (6 a 12 años), Jóvenes/Adultos (+15 años) y Horarios/Ubicación con integración a Google Maps.
- **Botón Flotante de WhatsApp**: Conversión directa mediante la API de `wa.me` con mensaje predefinido para consultas inmediatas.

### 🔮 Fase 2: Sistema de Gestión Integral (Próxima Integración)
- **Panel de Administración**: Métricas del estudio y gestión centralizada.
- **Base de Datos de Alumnos**: Fichas médicas, contactos de emergencia y nivel técnico.
- **Control de Pagos**: Seguimiento de cuotas mensuales, vencimientos y comprobantes.
- **Gestión de Horarios y Cupos**: Programación de clases por nivel e instructor.

---

## 🎨 Paleta de Colores Oficial

El diseño implementa la identidad cromática de Vulpiare mediante variables personalizadas en Tailwind CSS:

| Color | Código Hex | Uso en UI |
| :--- | :--- | :--- |
| **Primario / Oscuro** | `#9F6DAF` | Encabezados, botones principales, branding y acentos principales |
| **Medio** | `#D9A6E8` | Degradados, bordes decorativos y elementos interactivos |
| **Claro / Fondo** | `#E9D4EF` | Fondos de sección soft, badges y estados hover |

---

## 📸 Gestión de Imágenes y Assets

Actualmente, el proyecto utiliza imágenes ilustrativas/temporales organizadas en la carpeta `src/assets/images/`:
- `hero-acrobat.png` — Imagen principal del banner Hero.
- `kids-silks.png` — Tarjeta de Grupo Infantil.
- `adult-silks.png` — Tarjeta de Jóvenes / Adultos.
- `schedule-silks.png` — Tarjeta de Horarios.

> ℹ️ **Nota de Producción**: Estas imágenes son temporales y serán reemplazadas por las fotografías oficiales de la academia en una futura actualización.

---

## 🛠️ Stack Tecnológico

- **Framework**: React 18
- **Lenguaje**: TypeScript 5
- **Estilos**: Tailwind CSS 3 & PostCSS
- **Bundler & Dev Server**: Vite 6
- **Iconos**: Lucide React

---

## 📁 Estructura de Directorios (Árbol Modular)

```
vulpiare-app/
├── README.md                     # Documentación oficial del proyecto
└── frontend/                     # Aplicación React + TS + Vite
    ├── index.html
    ├── vite.config.ts
    ├── tailwind.config.ts        # Paleta de colores oficial de Vulpiare
    ├── tsconfig.json
    └── src/
        ├── assets/
        │   └── images/           # Assets visuales temporales / oficiales
        ├── components/
        │   ├── common/           # Componentes UI reutilizables (ClassCard, FloatingWhatsAppButton, InstructorBanner, etc.)
        │   └── landing/          # Secciones compuestas de la Landing Page
        ├── constants/
        │   └── config.ts         # Teléfonos, mensajes predefinidos y datos de la instructora
        ├── pages/
        │   └── LandingPage.tsx   # Vista orquestadora principal
        ├── types/
        │   ├── components.ts     # Interfaces de props UI
        │   ├── landing.ts        # Tipos de contenido estático
        │   └── domain.ts         # Entidades preparadas para la Fase 2 (User, Student, StudentClass, Payment)
        ├── App.tsx
        ├── main.tsx
        └── index.css
```

---

## 🔧 Instalación y Ejecución Local

1. **Navegar a la carpeta frontend**:
   ```bash
   cd frontend
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   # o bien con pnpm / yarn
   ```

3. **Iniciar el servidor de desarrollo**:
   ```bash
   npm run dev
   ```

4. **Construir para producción**:
   ```bash
   npm run build
   ```

---

## 📞 Configuración del Teléfono de WhatsApp

Para actualizar el número al cual llegan los mensajes de WhatsApp:
1. Abrir `frontend/src/constants/config.ts`.
2. Modificar la constante `VULPIARE_PHONE`:
   ```typescript
   export const VULPIARE_PHONE = '5491123456789'; // Reemplazar con el número real
   ```
