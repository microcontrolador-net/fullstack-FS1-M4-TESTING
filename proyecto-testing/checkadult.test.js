const checkAdult=require(`./checkadult.app`);

describe('Matchers de veracidad',()=>{
    test('Mayor de edad',()=>{
        expect(checkAdult(18)).toBeTruthy();
    })
    test('Menor de edad',()=>{
        expect(checkAdult(6)).toBeFalsy();
    })
})