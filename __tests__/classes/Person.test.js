//import necessary classes
const Person = require('../classes/Person.js')
const Bag = require('../classes/Bag.js')

//tests
describe('person tests',()=>{
    const person1 = new Person('alice', 'london', [])
    const bag1 = new Bag(20,1)
    const addedbag = person1.addBag(bag1)
    test('person instance creates', ()=>{
        expect(person1).toBe({name: 'alice', destination: 'london', bags: []})
    })
    test('bags is an empty array',()=>{
        expect(person1.bags).toBe([])
    })
    test('add bags adds bag to bags array',()=>{
        expect(addedbag).toBe([bag1])
    })
})