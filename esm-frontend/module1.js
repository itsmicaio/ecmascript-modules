export const test1 = async () => {
  console.log("Estamos dentro de um módulo ESM | ", new Date().toISOString());
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log("Conteúdo carregou | ", new Date().toISOString());
  return "Fui gerado por um módulo ESM";
};