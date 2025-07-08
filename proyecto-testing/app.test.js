const message=require(`./app`);

describe('Sintaxis básica Jest',()=>{
    test('Mensaje hola mundo',()=>{
        expect(menssage).toBe('Hola mundo');
    })
})