//import neccessary bags
const Plane = require('../classes/Plane.js')
const Airport = require('../classes/Airport.js')
const Person = require('../classes/Person.js')

//tests
describe('tests for plane', ()=>{
    const person1 = new Person('alice', 'london', [])
    const airport1 = new Airport('washington', [])
    airport1.airportCode = 'JFK'
    const plane1 = new Plane('delta',airport1.airportCode, 'london', [])
    const addedPerson = plane1.addPassengers(person1)
    test('correct plane logged', ()=>{
        expect(plane1).toBe({company: 'delta', origin: 'JFK', destination: 'london', passengers: []})
    })
    test('passengers is empty array', ()=>{
        expect(plane1.passengers).toBe([])
    })
    test('addPassenger adds a passenger',()=>{
        expect(addedPerson).toBe([{name: 'alice', destination: 'london', bags: []}])
    })
})