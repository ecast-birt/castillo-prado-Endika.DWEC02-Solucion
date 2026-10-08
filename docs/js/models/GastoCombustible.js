export class GastoCombustible {
    // constructor
    constructor (id, vehicleType, date, kilometers, precioViaje) {
        this.id = id
        this.vehicleType = vehicleType
        this.date = date
        this.kilometers = kilometers
        this.precioViaje = precioViaje
    }

    // metodos
    fecha () {
        let fecha = new Date()
        return fecha.getFullYear()
    }
}