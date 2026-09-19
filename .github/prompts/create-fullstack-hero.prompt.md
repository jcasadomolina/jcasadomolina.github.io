---
description: "Diseña e implementa una hero section responsive para un portafolio de desarrollador full-stack"
name: "Crear hero full-stack"
argument-hint: "Indica nombre, roles animados, biografía y destinos de los botones"
agent: "agent"
---
Actúa como un diseñador y desarrollador frontend senior. Diseña e implementa una sección principal (hero section) para el portafolio de un desarrollador full-stack.

Antes de editar:
- Inspecciona la estructura del proyecto y respeta su framework, sistema de estilos, componentes y convenciones existentes.
- Identifica el punto de entrada de la página y reutiliza los patrones locales cuando existan.
- Si falta información, usa estos valores editables o solicita solo lo imprescindible:
  - Nombre: [NOMBRE]
  - Roles para el efecto de escritura: [ROL 1], [ROL 2], [ROL 3]
  - Biografía de una sola línea: [BIOGRAFÍA]
  - Destino de "Ver trabajos": [URL_O_ANCLA_TRABAJOS]
  - Destino de "Contactar": [URL_O_ANCLA_CONTACTO]

Requisitos visuales y funcionales:
- Trabaja con enfoque mobile-first y adapta el diseño de forma fluida a tablet y escritorio.
- Usa #0F172A como fondo oscuro principal y #4F46E5 como único color de acento. No introduzcas otros colores de marca ni gradientes multicolor.
- Incluye un titular claro con un efecto de escritura animada que alterne los roles indicados. La animación debe respetar `prefers-reduced-motion` y mantener el contenido accesible para lectores de pantalla.
- Añade una biografía breve de una sola línea, permitiendo que se ajuste de forma legible en pantallas estrechas sin desbordarse.
- Añade dos llamadas a la acción: "Ver trabajos" y "Contactar". Deben ser accesibles, tener estados de hover, focus y disabled si aplica, y apuntar a los destinos indicados.
- Añade líneas de cuadrícula sutiles en el fondo sin perjudicar la legibilidad ni competir con el contenido.
- No uses fotografías de archivo, imágenes decorativas innecesarias ni recursos externos que no existan en el proyecto.
- Mantén una jerarquía tipográfica expresiva, legible y coherente con el proyecto. Evita el aspecto de plantilla genérica.
- Garantiza contraste suficiente, navegación por teclado, HTML semántico y etiquetas accesibles.
- Evita desbordamientos horizontales, saltos de layout y solapamientos en cualquier viewport.

Implementación:
- Modifica los archivos existentes adecuados y crea componentes o estilos solo cuando aporten una separación clara de responsabilidades.
- Mantén la solución concisa y coherente con la arquitectura actual; no hagas refactors no relacionados.
- Si el proyecto no tiene una infraestructura de pruebas visuales, valida al menos el build, lint o typecheck disponible y revisa los estados responsive relevantes.

Al finalizar, informa brevemente de:
1. Los archivos modificados.
2. Las decisiones responsive y de accesibilidad aplicadas.
3. La validación ejecutada y cualquier limitación restante.
