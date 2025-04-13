import { BrowserRouter,Routes,Route } from "react-router-dom"
import Credit from "./routes/Credit"
import Home from "./routes/Home"

import { BalanceContxtProvider } from "./context/BalanceContext"
import Transfer from "./routes/Transfer"
import Loans from "./routes/Loans"
import Contacts from "./routes/Contacts"
import Setting from "./routes/Setting"

function App() {

  return (
    <BalanceContxtProvider>
  <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path="/Cards" element={<Credit/>}/>
    <Route path="/transfer" element={<Transfer/>}/>
    <Route path="/loans" element={<Loans/>}/>
    <Route path="/contacts" element={<Contacts/>}/>
    <Route path="/setting" element={<Setting/>}/>
   </Routes>
   </BrowserRouter>
    </BalanceContxtProvider>
 
  )
}

export default App
