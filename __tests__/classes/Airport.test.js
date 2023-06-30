//import neccessary bags
const Plane = require('../classes/Plane.js')
const Airport = require('../classes/Airport.js')

//tests
describe('airport tests',()=>{
    const airport1 = new Airport('washington', [])
    airport1.airportCode = 'JFK'
    const plane1 = new Plane('delta',airport1.airportCode, 'london', [])
    const addedPlane = airport1.addPlane(plane1)
    test('logs correct airport',()=>{
        expect(airport1).toBe({name: 'washington', airportCode: 'JFK', planes: []})
    })
    test('correct airport code',()=>{
        expect(airport1.airportCode).toBe('JFK')
    })
    test('array is intitialized empty',()=>{
        expect(airport1.planes).toBe([])
    })
    test('can addPlane to array',()=>{
        expect(addedPlane).toBe([{company: 'delta', origin: 'JFK', destination: 'london', passengers: []}])
    })
})