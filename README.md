📝 Amigo Secreto 
#Descripción del Proyecto

Este proyecto es una aplicación web sencilla creada con JavaScript, HTML y CSS que permite al usuario agregar nombres a una lista, visualizarlos, realizar un sorteo aleatorio y reiniciar los datos. Es ideal para dinámicas de grupo, sorteos, rifas o cualquier actividad que requiera seleccionar un nombre de manera aleatoria.

# ⚙️ ¿Cómo funciona el código?
1. Agregar nombres a la lista
La función incluirNombre() se encarga de capturar el valor ingresado en un campo de texto (input) identificado como "nombreInput". Si el campo está vacío, se muestra un mensaje de error. En caso contrario:

El nombre se añade al arreglo listaNombres.

Se limpia el campo de entrada.

Se actualiza la lista visible en pantalla mediante la función actualizarLista().

Se limpia cualquier mensaje anterior con mostrarMensaje("").

2. Visualizar la lista de nombres
La función actualizarLista():

Limpia el contenido actual de la lista en la interfaz (elemento con ID listaNombres).

Recorre el arreglo listaNombres y agrega cada nombre como un elemento <li> dentro de la lista HTML.

De esta forma, se presenta visualmente una lista actualizada de los nombres ingresados.

3. Seleccionar un nombre al azar
La función seleccionarAleatorio():

Verifica que haya al menos dos nombres en la lista para poder hacer un sorteo.

Genera un número aleatorio dentro del rango del arreglo.

Obtiene el nombre correspondiente al índice aleatorio y lo muestra en la sección de resultados usando mostrarMensaje(nombreSeleccionado).

Si hay menos de dos nombres, se muestra un mensaje indicando que se necesitan más participantes.

4. Mostrar resultados o mensajes
La función mostrarMensaje(mensaje):

Se encarga de actualizar el contenido del contenedor HTML con ID mensajeResultado.

Permite mostrar tanto el nombre sorteado como cualquier mensaje de error o notificación.

5. Reiniciar la lista
La función reiniciarSorteo():

Limpia el contenido visible de la lista en pantalla.

Borra cualquier mensaje mostrado.

Vacía completamente el arreglo listaNombres, reiniciando el sistema para comenzar de nuevo.

📦 Requisitos
Este proyecto funciona directamente en el navegador. Solo necesitas un archivo HTML que tenga los elementos con los siguientes IDs:

nombreInput (input de texto)

listaNombres (lista donde se mostrarán los nombres)

mensajeResultado (contenedor para mostrar mensajes o resultados)

