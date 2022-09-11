import stock from "../../data/data"

const pedirDatos = () => {
  return new Promise((resolve, reject) => {
    //Cuerpo Promesa
    setTimeout(() => {
      resolve(stock)
    }, 1000)

  })
}

export default pedirDatos