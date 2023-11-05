const test2 = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log("Estamos dentro de um módulo CommonJS");
};

module.exports = { test2 };