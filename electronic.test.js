
const getMoneySpent = require('./electronic');


test('electronic test', ()=> {
    const keyboards =[3,1];
    const drives = [5,2,8];
    const budget= 10;

    const result = 9;
    expect(getMoneySpent(keyboards, drives, budget).toBe(result))
})

