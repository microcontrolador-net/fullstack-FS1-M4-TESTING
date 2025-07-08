const minimumValuen=require('./minimumvalue.app');

describe('matchers de coparacion numérica',()=>{
    const x=50;
    const y=150;
    test('Valor mínimo 100',()=>{
        expect(minimumValuen(x,y)).toBeGreaterThanOrEqual(100);
        expect(minimumValuen(y,x)).toBeGreaterThanOrEqual(100);
        expect(minimumValuen(x,x)).toBeGreaterThanOrEqual(100);
    })
})