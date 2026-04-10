# Curso Next.js: Migración de JavaScript a TypeScript

Repositorio de apoyo para un curso práctico de migración de una aplicación real en **Next.js** desde **JavaScript** hacia **TypeScript**.

Este proyecto está pensado para aprender con casos reales de errores de tipado, validación de datos y mejora de mantenibilidad.

## Requisitos previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** 18 o superior
- **npm** 9 o superior
- **Git**
- (Opcional) **Visual Studio Code**

Puedes verificar versiones con:

```bash
node -v
npm -v
git --version
```

## Cómo clonar el repositorio

```bash
git clone <URL_DEL_REPOSITORIO>
cd Curso-Next-TS
```

## Contexto del curso

En este repositorio conviven dos versiones de la misma app:

- `clientflow-js`: versión base en JavaScript, con errores intencionales para fines didácticos.
- `clientflow-ts`: versión migrada a TypeScript, donde se aplican tipos, validaciones y buenas prácticas.

La idea del curso es comparar ambos proyectos para entender, paso a paso, cómo TypeScript ayuda a detectar problemas en desarrollo y no en producción.

## Sobre los errores intencionales

La versión en JavaScript (`clientflow-js`) contiene errores diseñados para el aprendizaje. Algunos ejemplos:

- Datos inconsistentes en la capa de servidor (por ejemplo, `name: null`, `name` numérico o ausente)
- Lógica sin validaciones en creación de clientes
- Utilidades que asumen tipos correctos sin comprobarlos
- Comportamientos no deterministas en IDs

Estos casos simulan bugs comunes en proyectos JS reales y sirven como base para demostrar el valor de TypeScript durante la migración.

## Objetivos de aprendizaje

Durante el curso se trabaja en:

1. Detectar errores de tipo antes de ejecutar la app.
2. Modelar el dominio con tipos e interfaces.
3. Validar datos en los límites del sistema.
4. Refactorizar componentes y utilidades para mayor seguridad y legibilidad.
5. Adoptar una estrategia de migración incremental aplicable a proyectos reales.

## Estructura del repositorio

```text
/
	clientflow-js/   # Implementación base en JavaScript
	clientflow-ts/   # Implementación migrada a TypeScript
```

## Cómo ejecutar cada versión

### JavaScript

```bash
cd clientflow-js
npm install
npm run dev
```

### TypeScript

```bash
cd clientflow-ts
npm install
npm run dev
```

Luego abre `http://localhost:3000` en tu navegador.

## Enfoque recomendado para el curso

1. Ejecuta `clientflow-js` y reproduce los errores.
2. Revisa el flujo del fallo (especialmente en `/clients`).
3. Contrasta la implementación equivalente en `clientflow-ts`.
4. Identifica qué problema previene cada tipo agregado.
5. Repite el patrón en nuevas funcionalidades.

## Créditos

Autor: **Ivan Martinez**  
Institución: **CCOL (Club de Ciencias & Open Lab)**
