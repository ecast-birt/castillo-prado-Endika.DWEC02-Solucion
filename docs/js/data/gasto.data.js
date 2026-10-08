//importamos el modelo
import {Gastocombustible} from '../models/GastoCombustible.js';

//declaramos las variables

const jsonHistorico = ``;
//creamos una constante GASTOS_DB que contenga el contenido de historico.json.la idea sera crear un array de objetos 
//con los datos de historico.json y exportarlo para poder usarlo en otros modulos

export const GASTOS_DB = [];


//parte central de la pagina 

//vamos a copiar el contenido de historico.json dentro de la variable jsonHistorico
import jsonHistorico from './historico.json' assert { type: 'json' };
console.log(jsonHistorico);

//procesamos el contenido de jsonHistorico para obtener un objeto JS 
const registroHistorico = JSON.parse(jsonHistorico);
console.log(GASTOS_DB);

//guardamos en GSTOS_DB un array de objetos de tipo GastoCombustible
registroHistorico.forEach(registro => {
    const nuevoGasto = new GastoCombustible(
        registro.id,
        registro.vehicleType,
        registro.date,
        registro.kilometers,
        registro.precioViaje
    );
    GASTOS_DB.push(nuevoGasto);
});







