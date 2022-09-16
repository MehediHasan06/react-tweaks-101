import {
  useLocation, useNavigate, useParams
} from "react-router-dom";
import { deleteInvoice, getInvoice } from "../data";

export const Invoice = () => {
  let navigate = useNavigate();
  let location = useLocation();
  const { invoiceId } = useParams();
  let invoice = getInvoice(parseInt(invoiceId, 10));

  return (
    <div 
      style={{ display: "flex", flexDirection: "column", justifyContent: "center", marginLeft: "10px" }}
    >
      <p>Total Due: {invoice.amount}</p>
      <p>
        {invoice.name}: {invoice.number}
      </p>
      <p>Due Date: {invoice.due}</p>
      <button
          onClick={() => {
            deleteInvoice(invoice.number);
            navigate("/invoices" + location.search);
          }}
        >
          Delete
        </button>
    </div>
  )
};
