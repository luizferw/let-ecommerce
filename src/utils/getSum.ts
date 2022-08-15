import { ProductType } from "@/data/models";

export const getProductsSum = (obj: ProductType[]) => {
  function getTotal(total: number, item: ProductType) {
    return total + (item.price * item.amount)
  }

  return obj.reduce(getTotal, 0);
}

export const getSum = (obj: Array<object>) => {
  function getTotal(total: number, item: any) {
    return total + item.value
  }

  return obj.reduce(getTotal, 0);
} 