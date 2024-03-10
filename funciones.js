function saludar(nombre){
    return `Hola ${nombre}`;
}

function sumar(a, b){
    return a + b;
}

const persona=[{"name":"Juan", "lname":"Perez", "age":30}, {"name":"Maria", "lname":"Gomez", "age":25}, {"name":"Carlos", "lname":"Lopez", "age":40}];


module.exports={
    saludar:saludar,
    sumar:sumar,
    persona:persona
}