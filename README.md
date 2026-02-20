# MBST Phones - Catálogo de Teléfonos

## 🇪🇸 Español

### 📱 Descripción

MBST Phones es una aplicación web moderna para explorar y gestionar un catálogo de teléfonos móviles. Permite a los usuarios buscar dispositivos, filtrar por color y capacidad de almacenamiento, ver especificaciones detalladas y gestionar un carrito de compras.

### ✨ Características

- **Catálogo dinámico** de teléfonos con búsqueda en tiempo real
- **Filtrado** por nombre de marca y/o modelo
- **Detalles completos** de cada dispositivo
- **Carrito de compras** persistente en localStorage
- **Interfaz responsiva** adaptada a móvil, tablet y desktop
- **Pruebas automatizadas** con cobertura de código
- **Tipado fuerte** con TypeScript

### 🌐 Acceso Online

**Aplicación desplegada:** https://mbst-phone-catalog.netlify.app/

### 🚀 Quick Start - Empezar rápido

#### Requisitos Previos

- Node.js >= 18.x
- pnpm >= 9.0.0 (o npm/yarn como alternativa)

#### Instalación

1. **Clonar el repositorio**

   ```bash
   git clone <repository-url>
   cd zara-phone-catalog
   ```

2. **Instalar dependencias**

   ```bash
   pnpm install
   ```

3. **Configurar variables de entorno**

   Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:

   ```
   VITE_API_KEY=87909682e6cd74208f41a6ef39fe4191
   VITE_API_BASE_URL=https://prueba-tecnica-api-tienda-moviles.onrender.com
   ```

4. **Iniciar el servidor de desarrollo**

   ```bash
   pnpm dev
   ```

   La aplicación estará disponible en `http://localhost:5173`

### 📦 Scripts Disponibles

```bash
# Desarrollo
pnpm dev              # Inicia servidor de desarrollo con HMR

# Build
pnpm build           # Compila TypeScript y crea bundle de producción
pnpm preview         # Vista previa del build de producción

# Testing
pnpm test            # Ejecuta tests una vez
pnpm test:ui         # Interfaz interactiva de tests
pnpm test:coverage   # Reporte de cobertura de código

# Linting y Formato
pnpm lint            # Verifica errores de ESLint
pnpm lint:fix        # Corrige automáticamente errores de ESLint
pnpm format          # Formatea código con Prettier
```

### 🏗️ Arquitectura y Estructura del Proyecto

```
src/
├── components/          # Componentes React reutilizables
│   ├── Button/         # Botón genérico
│   ├── CartCounter/    # Contador de items en carrito
│   ├── ColorPicker/    # Selector de colores
│   ├── MainHeader/     # Encabezado principal
│   ├── MainLayout/     # Layout principal
│   ├── PhoneCard/      # Tarjeta individual de teléfono
│   ├── SearchBar/      # Barra de búsqueda
│   ├── SimilarProducts/# Productos similares
│   ├── Specifications/ # Especificaciones de dispositivo
│   └── StorageSelector/# Selector de capacidad
│
├── pages/              # Páginas (rutas)
│   ├── PhoneListPage/  # Listado de teléfonos
│   ├── PhoneDetailsPage/ # Detalle de teléfono
│   └── CartPage/       # Carrito de compras
│
├── context/            # Context API
│   └── phonesContext.tsx # Contexto global de teléfonos
│
├── hooks/              # Custom hooks
│   └── usePhones.ts    # Hook para obtener datos de teléfonos
│   └── useDebounce/    # Hook de debounce para búsqueda
│
├── services/           # Servicios (API calls)
│   └── phonesServices.ts # Servicio de API para teléfonos
│
├── styles/             # Estilos globales y tema
│   ├── GlobalStyles.ts # Estilos globales
│   └── mainTheme.ts    # Tema de la aplicación
│
├── types/              # Definiciones de tipos TypeScript
│   └── phonesTypes.ts  # Tipos relacionados con teléfonos
│
├── utils/              # Funciones utilitarias
│   └── api/            # Configuración de Axios
│
├── mocks/              # Mock Service Worker (MSW)
│   └── handlers.ts     # Manejadores de rutas mock
│
└── test/               # Configuración de tests
    └── setup.ts        # Setup de tests
```

### 🏗️ Patrón de Arquitectura

**Frontend Architecture Pattern:** React + Context API + Custom Hooks

- **Components:** Componentes funcionales con hooks, tipado completo
- **State Management:** Context API para estado global (teléfonos disponibles y seleccionados)
- **Data Fetching:** Axios con servicio centralizado
- **Styling:** Styled-components con tema centralizado
- **Testing:** Vitest + React Testing Library
- **Routing:** React Router DOM para navegación SPA

### 🛠️ Tecnologías

| Tecnología        | Versión | Propósito               |
| ----------------- | ------- | ----------------------- |
| React             | 19.2.0  | Framework UI            |
| TypeScript        | 5.9.3   | Tipado estático         |
| Vite              | 7.3.1   | Build tool y dev server |
| React Router DOM  | 7.13.0  | Enrutamiento SPA        |
| Styled Components | 6.1.15  | CSS-in-JS y temas       |
| Axios             | 1.13.5  | Cliente HTTP            |
| Vitest            | 4.0.18  | Framework de testing    |
| ESLint            | 9.39.1  | Linting                 |
| Prettier          | 3.8.1   | Formateo de código      |

### 📋 Variables de Entorno

Para ejecutar la aplicación localmente, **debes crear un archivo `.env`** en la raíz del proyecto con las siguientes variables:

```env
# API Configuration
VITE_API_KEY=87909682e6cd74208f41a6ef39fe4191
VITE_API_BASE_URL=https://prueba-tecnica-api-tienda-moviles.onrender.com
```

- `VITE_API_KEY`: Clave de autenticación para la API
- `VITE_API_BASE_URL`: URL base de la API REST

**Nota:** El archivo `.env` NO debe ser versionado en Git (está incluido en `.gitignore`)

### 🧪 Testing

La aplicación incluye tests completos:

```bash
# Ejecutar tests
pnpm test
```

Se utiliza **Mock Service Worker (MSW)** para mockear las llamadas API en tests.

### 📱 Responsive Design

La aplicación está optimizada para:

- **Mobile:** 480px y superior
- **Tablet:** 834px y superior
- **Desktop:** 1024px y superior

---

## 🇬🇧 English

### 📱 Description

MBST Phones is a modern web application to explore and manage a mobile phone catalog. It allows users to search for devices, filter by color and storage capacity, view detailed specifications, and manage a shopping cart.

### ✨ Features

- **Dynamic catalog** of phones with real-time search
- **Filtering** by brand name and/or model
- **Complete details** for each device
- **Persistent shopping cart** using localStorage
- **Responsive interface** optimized for mobile, tablet, and desktop
- **Automated tests** with code coverage
- **Strong typing** with TypeScript

### 🌐 Live Demo

**Deployed application:** https://mbst-phone-catalog.netlify.app/

### 🚀 Quick Start

#### Prerequisites

- Node.js >= 18.x
- pnpm >= 9.0.0 (or npm/yarn as alternative)

#### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd zara-phone-catalog
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Configure environment variables**

   Create a `.env` file in the project root with the following content:

   ```
   VITE_API_KEY=87909682e6cd74208f41a6ef39fe4191
   VITE_API_BASE_URL=https://prueba-tecnica-api-tienda-moviles.onrender.com
   ```

4. **Start the development server**

   ```bash
   pnpm dev
   ```

   The application will be available at `http://localhost:5173`

### 📦 Available Scripts

```bash
# Development
pnpm dev              # Start dev server with HMR

# Build
pnpm build           # Compile TypeScript and create production bundle
pnpm preview         # Preview of production build

# Testing
pnpm test            # Run tests once
pnpm test:ui         # Interactive test UI
pnpm test:coverage   # Code coverage report

# Linting and Formatting
pnpm lint            # Check ESLint errors
pnpm lint:fix        # Auto-fix ESLint errors
pnpm format          # Format code with Prettier
```

### 🏗️ Architecture and Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Button/         # Generic button
│   ├── CartCounter/    # Shopping cart counter
│   ├── ColorPicker/    # Color selector
│   ├── MainHeader/     # Main header
│   ├── MainLayout/     # Main layout
│   ├── PhoneCard/      # Individual phone card
│   ├── SearchBar/      # Search bar
│   ├── SimilarProducts/# Similar products
│   ├── Specifications/ # Device specifications
│   └── StorageSelector/# Storage capacity selector
│
├── pages/              # Pages (routes)
│   ├── PhoneListPage/  # Phone listing page
│   ├── PhoneDetailsPage/ # Phone detail page
│   └── CartPage/       # Shopping cart page
│
├── context/            # Context API
│   └── phonesContext.tsx # Global phones context
│
├── hooks/              # Custom hooks
│   └── usePhones.ts    # Hook for fetching phone data
│   └── useDebounce/    # Debounce hook for search
│
├── services/           # Services (API calls)
│   └── phonesServices.ts # Phone API service
│
├── styles/             # Global styles and theme
│   ├── GlobalStyles.ts # Global styles
│   └── mainTheme.ts    # Application theme
│
├── types/              # TypeScript type definitions
│   └── phonesTypes.ts  # Phone-related types
│
├── utils/              # Utility functions
│   └── api/            # Axios configuration
│
├── mocks/              # Mock Service Worker (MSW)
│   └── handlers.ts     # Mock route handlers
│
└── test/               # Test configuration
    └── setup.ts        # Test setup
```

### 🏗️ Architecture Pattern

**Frontend Architecture Pattern:** React + Context API + Custom Hooks

- **Components:** Functional components with hooks, fully typed
- **State Management:** Context API for global state (available and selected phones)
- **Data Fetching:** Axios with centralized service
- **Styling:** Styled-components with centralized theme
- **Testing:** Vitest + React Testing Library
- **Routing:** React Router DOM for SPA navigation

### 🛠️ Technologies

| Technology        | Version | Purpose                   |
| ----------------- | ------- | ------------------------- |
| React             | 19.2.0  | UI Framework              |
| TypeScript        | 5.9.3   | Static typing             |
| Vite              | 7.3.1   | Build tool and dev server |
| React Router DOM  | 7.13.0  | SPA routing               |
| Styled Components | 6.1.15  | CSS-in-JS and theming     |
| Axios             | 1.13.5  | HTTP client               |
| Vitest            | 4.0.18  | Testing framework         |
| ESLint            | 9.39.1  | Linting                   |
| Prettier          | 3.8.1   | Code formatting           |

### 📋 Environment Variables

To run the application locally, **you must create a `.env` file** in the project root with the following variables:

```env
# API Configuration
VITE_API_KEY=87909682e6cd74208f41a6ef39fe4191
VITE_API_BASE_URL=https://prueba-tecnica-api-tienda-moviles.onrender.com
```

- `VITE_API_KEY`: Authentication key for the API
- `VITE_API_BASE_URL`: Base URL of the REST API

**Note:** The `.env` file should NOT be versioned in Git (it's included in `.gitignore`)

### 🧪 Testing

The application includes comprehensive tests:

```bash
# Run tests
pnpm test
```

**Mock Service Worker (MSW)** is used to mock API calls in tests.

### 📱 Responsive Design

The application is optimized for:

- **Mobile:** 480px and up
- **Tablet:** 834px and up
- **Desktop:** 1024px and up
