import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Expenses } from "./routes/Expenses";
import { Home } from "./routes/Home";
import { Invoice } from "./routes/Invoice";
import { Invoices } from "./routes/Invoices";

const BookKeeper = () => {
  return (
      
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route path="expenses" element={<Expenses/>}/>
          <Route path="invoices" element={<Invoices/>}>
              <Route
                index
                element={
                  <main style={{ padding: "1rem" }}>
                    <p>Select an invoice from the left</p>
                  </main>
                }
              />
            <Route path=":invoiceId" element={<Invoice/>}></Route>
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
    
  )
};

export default BookKeeper;