import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/wheatherApp.css'
import  {WheatherApp} from './WheatherApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WheatherApp></WheatherApp>
  </StrictMode>,
)
