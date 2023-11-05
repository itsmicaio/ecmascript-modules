export const test1 = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log("Estamos dentro de um módulo ESM nativo no Typescript");
};
