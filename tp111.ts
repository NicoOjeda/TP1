//1. Crear una interfaz “Animal” que posea el atributo “nombre”, así como también la definición de un método “gritar” que retorne un string que representa el ruido que hace el animal al gritar.//

interface Animal {
    nombre: string,

    gritar: ()=> string;
}

//2. Crear las clases “Perro”, “Gato”, y “Vaca” que implementen la interfaz “Animal”. //

class Perro implements Animal {
    nombre: string;

    constructor(nom: string){
        this.nombre= nom;
    }
    gritar(): string{
        return "guau";
    }
}
class Gato implements Animal {
    nombre: string;

    constructor(nom: string){
        this.nombre= nom;
    }
    gritar(): string{
        return "miau";
    }
}
class Vaca implements Animal {
    nombre: string;

    constructor(nom: string){
        this.nombre= nom;
    }
    gritar(): string{
        return "muu";
    }
}

// 3. Crear una función “describirAnimal” que reciba como parámetro un objeto de tipo 
// “Animal” e imprima en la consola “El animal [nombre del animal] hace [ruido que 
// hace el animal al gritar]”. Hacer uso del método “gritar” y el acceso a la propiedad 
// “nombre” para cumplir el objetivo. 

function describirAnimal(animal: Animal): string{
    return `El animal ${animal.nombre} hace ${animal.gritar()}`
}


// 4. Crear una constante “perro”, una constante “vaca”, y una constante “gato” que tengan 
// como valor una instancia de la clase que corresponda y tengan declarado el tipo de 
// datos correspondiente.

const perro = new Perro("titan")
const vaca = new Vaca("antonia")
const gato = new Gato("michi")
// console.log(perro);
// console.log(vaca);
// console.log(gato);

// 5. Ejecutar el método “describirAnimal” para cada una de las constantes creadas (3 
//     veces en total). 

console.log(describirAnimal(perro));
console.log(describirAnimal(vaca));
console.log(describirAnimal(gato));

// 6. Crear un Enum “DiasSemana” que tenga como valores los días de la semana.

enum DiasSemana{
    Domingo,
    Lunes,
    Martes,
    Miercoles,
    Jueves,
    Viernes,
    Sabado
}

// 7. Crear una variable que pueda contener únicamente valores de tipo número o de tipo 
// string. Asignar a la variable el string “Messi”, y luego reemplazarlo por el número 10. 

let crack: string | number;

crack = "Messi";
// console.log(crack);

crack = 10;
// console.log(crack);

// 8. Crear una clase genérica que implemente la siguiente interfaz: 

interface Fila<T> {  
agregar(elemento: T): void;  
remover(): T | undefined;  
} 

class Generica<T> implements Fila<T>{
    private elementos: T[] = [] 
    
    agregar(elemento: T): void{
        this.elementos.push(elemento)
    }
    
    remover(): T | undefined {
       return this.elementos.pop()
    }
} 



// 9. Crear una fila para números, una fila para strings, y una fila para animales (declarando 
//     los tipos correspondientes en cada variable).  

const elementoNumero: Generica<number> = new Generica <number>();
const elementoString: Generica<string> = new Generica <string>();
const elementoAnimales: Generica<Animal> = new Generica <Animal>();

// 10. En la fila para animales, agregar las 3 instancias que fueron creadas con anterioridad. 
// En las otras 2 filas, agregar 3 elementos a elección en cada una. Para finalizar, 
// remover un elemento de cada una de las 3 filas.

elementoAnimales.agregar(perro);
elementoAnimales.agregar(gato);
elementoAnimales.agregar(vaca);

elementoNumero.agregar(1);
elementoNumero.agregar(3);
elementoNumero.agregar(5);

elementoString.agregar("creo");
elementoString.agregar("que");
elementoString.agregar("termino");

console.log(elementoAnimales);
console.log(elementoNumero);
console.log(elementoString);


elementoAnimales.remover()
elementoNumero.remover()
elementoString.remover()

console.log(elementoAnimales);
console.log(elementoNumero);
console.log(elementoString);



