export const getParsedCupom = (cupom: string, sumProductsPrice: number) => {
  return  cupom.includes('GET') && cupom.length <= 5 ? 
  Number(cupom.split('T')[1]) <= sumProductsPrice ? 
  Number(cupom.split('T')[1]) 
  : '' 
  : ''
}