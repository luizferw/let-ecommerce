import { ProductType } from "@/data/models";
import { ProductReducerType } from "@/state/reducers/types";
import { 
  DECREASE_AMOUNT, 
  FILTER_BY_DATE, 
  FILTER_BY_PRICE, 
  FILTER_BY_SEARCH, 
  HIGHEST, INCREASE_AMOUNT, 
  LATEST, LOWEST, OLDER, 
  SORT_PRODUCTS 
} from "@/state/actions/types";

interface ProductsState {
  products: ProductType[]
  filteredProducts : ProductType[] | []
}

const initialState = {
  products: [
    {
      id: 1,
      title: 'Smartphone Xioami',
      price: 1299,
      amount: 1,
      post_date: new Date('2022-08-15'),
      imageName: 'smartphone-xioami.jpeg'
    },
    {
      id: 2,
      title: 'Notebook Samsung',
      amount: 1,
      price: 2459,
      post_date: new Date('2022-08-12'),
      imageName: 'laptop.jpg'
    },
    {
      id: 4,
      title: 'Smartphone Samsung',
      amount: 1,
      price: 879,
      post_date: new Date('2022-08-24'),
      imageName: 'smartphone-samsung.jpg'
    },
    {
      id: 3,
      title: 'Headphone Sennheiser',
      amount: 1,
      price: 525,
      post_date: new Date('2022-08-19'),
      imageName: 'headphone.jpg'
    },
    {
      id: 5,
      title: 'Monitor Acer',
      amount: 1,
      price: 890,
      post_date: new Date('2022-08-4'),
      imageName: 'monitor.jpg'
    },
  ],
  filteredProducts: []
}

export const productsReducer = (state: ProductsState = initialState, action: ProductReducerType) => {
  switch (action.type) {
    case DECREASE_AMOUNT : {
      const objIndex = state.products.findIndex(obj => obj.id === action.payload.id);

      if(state.products[objIndex].amount >= 1) return state
      return {
        ...state, products: [...state.products.filter(p => p.id !== action.payload.id), action.payload]
      }
    } case INCREASE_AMOUNT : {
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