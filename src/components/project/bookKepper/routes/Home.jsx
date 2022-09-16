import { Link, Outlet } from "react-router-dom";

export const Home = () => {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h1>Bookkeeper</h1>
      <nav
            style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
            display: "flex",
            gap: "10px",
            justifyContent: "center"
          }}
        >
          <Link style={{textDecoration: "none"}} to="/">Home</Link>
          <Link style={{textDecoration: "none"}} to="/invoices">Invoices</Link>
          <Link style={{textDecoration: "none"}} to="/expenses">Expenses</Link>
        </nav>
        <Outlet/>
    </main>
  )
}
