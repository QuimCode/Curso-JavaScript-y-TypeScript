interface Personas {
    nombre: string;
    apellido: string;
    edad: number;
    gustos: string[];
    esEstudiante: boolean;
}

let fernando: Personas = {
    nombre: 'Fernando',
    apellido: 'Perez',
    edad: 30,
    gustos: ['Cine', 'Deportes', 'Viajar'],
    esEstudiante: true,
}

let luis: Personas = {
    nombre: 'Luis',
    apellido: 'Gomez',
    edad: 25,
    gustos: ['Musica', 'Deportes', 'Cocinar'],
    esEstudiante: true,
}

let maria: Personas = {
    nombre: 'Maria',
    apellido: 'Garcia',
    edad: 28,
    gustos: ['Musica', 'Deportes', 'Cocinar'],
    esEstudiante: false,
}

let people: Personas[] = [fernando, maria, luis];

for (let i = 0; i <= people.length; i++ ) {
    let person = people[i];
    console.log(person.nombre + ' ' + person.apellido + ' tiene una edad de: ' + person.edad + ' años. Sus gustos son: ' + person.gustos);
}