//imported necessary classes
const Bag = require('../classes/Bag.js')
const Person = require('../classes/')

//tests
describe('bag tests',()=>{
    const bag1 = new Bag(20,1)
    const person1 = new Person('alice','london', [])
    test('bag instance created',()=>{
        expect(bag1).toBe({weight:20, id: 1})
    })
    test('bag owner initialize at null',()=>{
        expect(bag1.getOwner()).toBe(null)
    })
    test('assign person as owner of bag', ()=>{
        expect(bag1.assignOwner(person1)).toBe({name: 'alice', destination: 'london', bags: []})
    })
})