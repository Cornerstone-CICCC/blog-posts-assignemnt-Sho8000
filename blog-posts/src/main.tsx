import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { UserInfoContextProvider } from './context/UserInfo.tsx'

createRoot(document.getElementById('root')!).render(
  <UserInfoContextProvider>
    <App />
  </UserInfoContextProvider>
)
