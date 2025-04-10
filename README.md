# TP1
TP1 - DAW
1. Crear una interfaz “Animal” que posea el atributo “nombre”, así como también la 
definición de un método “gritar” que retorne un string que representa el ruido que 
hace el animal al gritar. 
2. Crear las clases “Perro”, “Gato”, y “Vaca” que implementen la interfaz “Animal”. 
3. Crear una función “describirAnimal” que reciba como parámetro un objeto de tipo 
“Animal” e imprima en la consola “El animal [nombre del animal] hace [ruido que 
hace el animal al gritar]”. Hacer uso del método “gritar” y el acceso a la propiedad 
“nombre” para cumplir el objetivo. 
4. Crear una constante “perro”, una constante “vaca”, y una constante “gato” que tengan 
como valor una instancia de la clase que corresponda y tengan declarado el tipo de 
datos correspondiente.  
5. Ejecutar el método “describirAnimal” para cada una de las constantes creadas (3 
veces en total). 
6. Crear un Enum “DiasSemana” que tenga como valores los días de la semana. 
7. Crear una variable que pueda contener únicamente valores de tipo número o de tipo 
string. Asignar a la variable el string “Messi”, y luego reemplazarlo por el número 10. 
8. Crear una clase genérica que implemente la siguiente interfaz: 
interface Fila<T> {  
agregar(elemento: T): void;  
remover(): T | undefined;  
} 
9. Crear una fila para números, una fila para strings, y una fila para animales (declarando 
los tipos correspondientes en cada variable).  
10. En la fila para animales, agregar las 3 instancias que fueron creadas con anterioridad. 
En las otras 2 filas, agregar 3 elementos a elección en cada una. Para finalizar, 
remover un elemento de cada una de las 3 filas. 
