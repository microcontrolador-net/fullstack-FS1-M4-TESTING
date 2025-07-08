const message=require('./app');

describe('Sintaxis básica Jest',()=>{
    test('Mensaje hola mundo',()=>{
        expected(menssage).toBe('Hola mundo');
    })
    test('Funcion suma',()=>{
        expected(add(3,3)).toEqual(5);
    })
})