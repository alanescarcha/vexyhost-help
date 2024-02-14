# Configurar Tareas programadas

Las tareas programadas son una buena herramienta que le permite ejecutar automáticamente acciones en su servidor. Puede ser una copia de seguridad, un reinicio o un comando.

![](https://i.imgur.com/Xq0Yib1.png)


Hay un par de cosas que hay que entender antes de fijar la hora de ejecución de una tarea programada.

Las horas se establecen en un reloj de 24 horas, de 0 a 23, las tareas programadas se establecen y ejecutan en la zona horaria UTC, y la última hora de ejecución de un programa se muestra en su hora local. Por lo tanto, asegúrese de tener en cuenta la diferencia entre zonas horarias al establecer la hora.

Por ejemplo, si desea configurar una tarea programada para que se ejecute a las 6 de la mañana y vive en la zona horaria PST. Tendrá que añadir 8 horas a la hora que desea establecer, por lo que la hora que necesita es 13.

Una herramienta útil para la conversión de zonas horarias son sitios como [timezone360](https://timezone360.com/es/convert/UTC-to-PST). En ellos puedes seleccionar distintas zonas horarias y recorrer una línea para ver la diferencia horaria entre ellas.

## Fijar la hora

Para establecer la hora a la que deben ejecutarse las tareas programadas, podemos especificar las horas en las casillas de entrada. En cada una de las casillas, deberá especificar cuándo desea que se ejecute la tarea programada. Los tiempos se especifican utilizando el formato de tiempo cron. Cada parte, como minutos u horas, tiene una casilla de entrada separada.

El carácter `*` se puede utilizar para especificar cada unidad de tiempo en el cuadro de entrada especificado.

El carácter `,` se puede utilizar para enumerar varias veces para que se ejecute la programación. Por ejemplo, si desea que el programa se ejecute a las 6 y 12 horas del día, puede configurar el cuadro de entrada de horas como `6,12`.

El carácter `/` se puede utilizar para especificar cualquier otra unidad de tiempo para ejecutar el programa. La unidad establecida en el lado derecho de `/` es donde comienzan los pasos, y el lado izquierdo es el tamaño de los pasos. Por ejemplo, para ejecutar un programa cada 30 minutos entre los 0-59 minutos de la hora, puede utilizar `0/30`, o simplemente puede establecer `*/30` para ejecutar cada 30 minutos dependiendo de la hora en que se ejecutará el programa.

El carácter `-` se puede utilizar para especificar un rango de unidades para ejecutar el programa. Por ejemplo, si desea que un programa se ejecute todos los días del mes entre el 7º y el 12º día, puede configurar la casilla de entrada de días del mes como `7-12`.

Para un ejemplo completo, digamos que queremos ejecutar una tarea programada cada 5 minutos a las 6am cada Martes cada 2 meses, querremos configurar la tarea programada de la siguiente manera:

**Minuto: `*/5` | Hora: `6` | Día del mes: `*` | Mes: `*/2` | Día de la Semana: `2`**

Si tienes problemas para entender la sintaxis del formato cron time. [Crontab.guru](https://crontab.guru/) es un sitio útil que puede utilizarse para obtener una versión en inglés sencillo de la configuración de cron. Por ejemplo, si configuramos la casilla de entrada como `*/5 6 * */2 2` obtendremos como resultado `"Cada 5 minutos después de la hora 6 del martes cada dos meses"`.

## Establecer acciones

Ahora que ya has establecido el tiempo, tenemos que establecer las acciones. Una vez que haya creado la tarea programada, pulse sobre la tarea programada, esto le llevará a la parte de tareas/acciones.

Pulsando sobre el botón `New Task` podrá establecer una tarea para su tarea programada.

![](https://i.imgur.com/YE54iNi.png)

Una vez abierto el cuadro puedes seleccionar el tipo de tarea programada. "Commands" son comandos del juego, así que para Minecraft, si quisieras decir algo en el servidor, podrías poner el comando `say`. Asegurándose de no utilizar la barra diagonal `/` para Minecraft.

"Power actions" son acciones como reiniciar, iniciar, detener y kill (forzar la detención del servidor).

"Backups" te permiten hacer copias de seguridad usando el gestor de copias de seguridad. Si has alcanzado tu límite de copias de seguridad, se rotará la copia de seguridad más antigua a no ser que la misma esté bloqueada.

![](https://i.imgur.com/jzZUoO2.png)