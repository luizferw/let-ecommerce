import ReactDOM from 'react-dom/client'
import Router from '@/main/routes/router'
import '@/presentation/styles/global.scss'
import { Provider } from "react-redux"
import { store } from '@/state/store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <Router />
  </Provider>
)
