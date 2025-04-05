# 🎉 Amigo Secreto 

Este es un challenge  en JavaScript que permite gestionar una lista de nombres y realizar un sorteo aleatorio entre los nombres ingresados.

## 🚀 Características

- Añadir nombres .
- Visualizar la lista en pantalla.
- Seleccionar un nombre de amigo aleatorio entre los registrados.
- Mostrar resultados o mensajes de advertencia cuando no se ingresa ningun nombre.
- Reiniciar el sorteo en cualquier momento.

## 📋 Descripción Técnica

Este proyecto está construido con **JavaScript ** . A continuación, se detallan sus principales funcionalidades:

### ➕ Incluir nombres
Permite agregar un nombre mediante un `input` de texto. Si el campo está vacío, se muestra un mensaje pidiendo que se ingrese un nombre válido. Los nombres válidos se agregan a un arreglo `listaNombres`, que representa los participantes.

### 📄 Mostrar lista
La función `actualizarLista()` recorre el arreglo `listaNombres` y actualiza una lista HTML (`<ul>` o `<ol>`) con todos los elementos añadidos. Limpia la lista anterior para evitar duplicaciones.

### 🎲 Selección aleatoria
La función `seleccionarAleatorio()` elige un nombre aleatorio del arreglo, siempre que haya al menos dos participantes. El nombre elegido se muestra en pantalla usando `mostrarMensaje()`.

### ❌ Reiniciar lista
La función `reiniciarSorteo()` permite borrar toda la lista y reiniciar el sistema, útil para comenzar un nuevo sorteo.

### 🔔 Mensajes de resultado
`mostrarMensaje()` es utilizada para mostrar resultados o advertencias en una sección de salida, como "Ingrese al menos dos nombres".

## 🧰 Tecnologías utilizadas

- HTML5
- CSS
- JavaScrip


