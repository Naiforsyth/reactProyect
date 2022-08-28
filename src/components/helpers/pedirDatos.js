import stock from "../../data/data"

const pedirDatos = () =>{
  return new Promise ((resolve, reject) =>{
    //Cuerpo Promesa
    setTimeout(() =>{
      resolve(stock)
    }, 1000)
      //resolve("Promesa resulta")
    //   reject ("Promesa rechazada")
    // }, 3000)
    
  })
}

export default pedirDatos