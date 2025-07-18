# Formulario de Registro - React + TypeScript + Unit Testing

## Explicación Funcional

Este proyecto muestra un formulario de registro de usuarios con validación de datos en tiempo real. El formulario recopila información básica, como nombre, email, contraseña y confirmación de la misma, y muestra mensajes de validación para guiar al usuario.

Cuando se completa correctamente el formulario y se envía, se muestra una notificación de éxito y otra notificación con los datos ingresados por el usuario en formato JSON.

La interfaz es sencilla pero profesional, con un estilo limpio y retroalimentación visual inmediata sobre la validez de los datos ingresados.

## Detalles Técnicos

### Tecnologías Principales

- **React**: En esta ocación, elegí React por encima de Next porque el proyecto era sumamente sencillo y ligero y no se aprovecharían todas las características que provee Next.
  
- **TypeScript**: Incluí TypeScript para garantizar un código más robusto, limpio y prevenir errores de tipado.
  
- **Vite**: Utilicé este compilador por recomendación de Meta, los cuales ahora incluyen por defecto vite como compilador, además de su rápida velocidad de compilación.

### Librerías Utilizadas

- **Tailwind**: Utilicé este framework por recomendación, conformidad y por permitir un desarrollo ágil, rápido y dinámico por sus clases predefinidas y moldeables.
  
- **React-toastify**: Utilicé esta librería de notificaciones por su fácil instalación, manejo y personalización.
  
- **Yup y React Hook Form**: Utilicé estas librerías por la facilidad que ofrecen para manejar y validar los campos del formulario de manera clara gracias a la sintaxis declarativa de yup y a su fácil integración con react hook form, el cual posee una API bastante intuitiva y además evita renderizados innecesarios.
  
- **userEvent, vitest**: Utilizados para la creación de test unitarios en cada componente, simulando la implementación con acciones que realizaría un usuario final.
  
- **playwright**: Utilizado para ejecutar las pruebas unitarias en un navegador integraado.

## Instalación y Configuración

### Requisitos Previos
- Node.js (versión 16.x o superior)
- pnpm (recomendado) o npm

### Comandos de Instalación
1. **Clonar el repositorio**:
   -git clone https://github.com/tu-usuario/jemd-prueba-rapida.git
   
2. **Acceder al proyecto clonado e instalar las dependencias necesarias**:
   -cd jemd-prueba-rapida
   -pnpm install
   -pnpm exec playwright install firefox

3. **Correr la aplicación**:
   -pnpm run dev

4. **Ejecutar pruebas unitarias**:
   -pnpm test
