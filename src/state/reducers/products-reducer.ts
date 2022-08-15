import { ProductType } from "@/data/models";
import { ProductReducerType } from "@/state/reducers/types";
import { 
  FILTER_BY_DATE, 
  FILTER_BY_PRICE, 
  FILTER_BY_SEARCH, 
  HIGHEST,
  LATEST, LOWEST, OLDER, 
  SORT_PRODUCTS, 
  UPDATE_PRODUCT
} from "@/state/actions/types";

interface ProductsState {
  products: ProductType[]
  filteredProducts : ProductType[] | []
}

const initialState = {
  products: [
    {
      id: 1,
      title: 'Smartphone Xiaomi',
      price: 1299.10,
      amount: 0,
      post_date: new Date('2022-08-15'),
      imageName: 'smartphone-xiaomi.jpg',
      inventory: 5
    },
    {
      id: 2,
      title: 'Notebook Samsung',
      amount: 0,
      price: 2459.98,
      post_date: new Date('2022-08-12'),
      imageName: 'laptop.jpg',
      inventory: 63
    },
    {
      id: 4,
      title: 'Smartphone Samsung',
      amount: 0,
      price: 879.20,
      post_date: new Date('2022-08-24'),
      imageName: 'smartphone-samsung.jpg',
      inventory: 21
    },
    {
      id: 3,
      title: 'Headphone Sennheiser',
      amount: 0,
      price: 525,
      post_date: new Date('2022-08-19'),
      imageName: 'headphone.jpg',
      inventory: 15
    },
    {
      id: 5,
      title: 'Monitor Acer',
      amount: 0,
      price: 890.5,
      post_date: new Date('2022-08-4'),
      imageName: 'monitor.jpg',
      inventory: 10
    },
    {
      id: 6,
      title: 'Camera Canon',
      amount: 0,
      price: 250.9,
      post_date: new Date('2022-08-15'),
      imageName: 'camera.jpg',
      inventory: 1
    },
    {
      id: 7,
      title: 'Mechanical Gaming Keyboard',
      amount: 0,
      price: 70,
      post_date: new Date('2022-07-9'),
      imageName: 'keyboard.jpg',
      inventory: 9
    },
  ],
  filteredProducts: []
}

export const productsReducer = (state: ProductsState = initialState, action: ProductReducerType) => {
  switch (action.type) {
    case UPDATE_PRODUCT : {
      return {
        ...state, products: [...state.products.filter(p => p.id !== action.payload.id), action.payload]
      }
    } case SORT_PRODUCTS : {
      const sortBy = action.sortBy || {sortBy: ''}

      switch (sortBy.sortBy) {
        case HIGHEST : {
          const sortedByHighest = (state.filteredProducts.slice().sort((a, b) => b.price - a.price))
          return {...state, filteredProducts: sortedByHighest, sortedBy: sortBy.sortBy}
        } case LOWEST : {
          const sortedByLowest = (state.filteredProducts.slice().sort((a, b) => a.price - b.price))
          return {...state, filteredProducts: sortedByLowest, sortedBy: sortBy.sortBy}
        } case LATEST : {
          const sortedByLatest = (state.filteredProducts.slice().sort((a, b) => new Date(b.post_date).getTime() - new Date(a.post_date).getTime()))
          return {...state, filteredProducts: sortedByLatest, sortedBy: sortBy.sortBy}
        } case OLDER : {
          const sortedByOlder =  (state.filteredProducts.slice().sort((a, b) => new Date(a.post_date).getTime() - new Date(b.post_date).getTime() ))
          return {...state, filteredProducts: sortedByOlder, sortedBy: sortBy.sortBy}
        } default : return state
      }
    } case FILTER_BY_SEARCH : {
      const search = action.search || ''
      if (search.length == 0) { return {...state, filteredProducts: state.products} }

      const array: ProductType[] = []

      for (let i = 0; i < state.products.length; i++) {
        const conditionSearch = state.products[i].title.toLowerCase().includes(search.toLowerCase())
  
        if (conditionSearch) {
          array.push(state.products[i])
        } 
      }

      return {...state, filteredProducts: array}
    } case FILTER_BY_DATE : {
        const filterDate = action.filter || {firstValue: '', secondValue: ''}

        if (filterDate.firstValue.length === 0 || filterDate.secondValue.length === 0) { return {...state, filteredProducts: state.products} } 

        const array: ProductType[] = []

        for (let i = 0; i < state.products.length; i++) {
          const conditionDate = new Date(state.products[i].post_date).getTime() >= new Date(filterDate.firstValue).getTime() 
                                && new Date(state.products[i].post_date).getTime() <= new Date(filterDate.secondValue).getTime()
    
          if (conditionDate) {
            array.push(state.products[i])
          } 
        }
      return {...state, filteredProducts: array}
    } case FILTER_BY_PRICE : {
        const filterPrice = action.filter || {firstValue: '', secondValue: ''}

        if (filterPrice.secondValue.length === 0) { return {...state, filteredProducts: state.products} } 
        const array: ProductType[] = []
    
        for (let i = 0; i < state.products.length; i++) {
          const conditionPrice = state.products[i].price >= Number(filterPrice.firstValue) && state.products[i].price <= Number(filterPrice.secondValue)
          if (conditionPrice) {
            array.push(state.products[i])
          } 
        }
        return {...state, filteredProducts: array}
    } default : return state
  }
}