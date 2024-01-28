
const multiplicar = async (base) => {
  return new Promise((resolve) => {
    let tabla = [];
    for (let i = 1; i <= 10; i++) {
      tabla.push(i * base);
    }
    resolve(tabla);
  });
}

module.exports = { multiplicar };