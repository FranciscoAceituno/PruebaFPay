const { request, response } = require('express');
const { validationResult } = require('express-validator');


const getNrosPrimos = (req = request, res = response) =>{

    const {param} = req.query;
    let msgSalida = '';
    let nroPrimos = getPrimos(param);

    res.status(200).json({
        msg: nroPrimos.msgSalida,
        salida:  nroPrimos.primos
    });
}


const getPrimos = (param)=>
{

    let primos = '';
    let msgSalida = '';
    if(isNaN(param) || param.length === 0)
        {
            if(param.length === 0)
                msgSalida = 'El campo param no puede ser vacio';
            else
                msgSalida = 'El campo param debe ser numerico';            
        }
        else{
            for(let candidato = param; candidato >= 2; candidato--) {
                let primo = true;
                let maximoDivisor = Math.floor(Math.sqrt(candidato));
                
                for(let divisor=2; divisor <= maximoDivisor; divisor++) {
                    
                    if(candidato%divisor == 0) {
                        primo = !primo;
                        break;
                    }
                }
                if(primo) 
                    primos += candidato +",";
            }

            if(primos.length > 0)
                msgSalida = 'Listado de Nros primos para el Nro ' + param;
            else
                msgSalida = 'No hay numeros primos para el Nro ' + param;

        }

    return {primos : primos.substr(0, primos.length-1), msgSalida};
}

module.exports = {
    getNrosPrimos,
    getPrimos
}