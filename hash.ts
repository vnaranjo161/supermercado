import generateHash from "./helpers/generateHash";

const funcion = async()=>{
const constrasena = await generateHash("123456789")
console.log(constrasena);
}

funcion();