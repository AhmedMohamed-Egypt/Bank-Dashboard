import BasicTable from "./../ui-components/BasicTable";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import { useSelector } from "react-redux";
import TableHead from '@mui/material/TableHead';

function NonCash() {
  const { ratescurrency, loadCurrnecy, errorLoad } = useSelector(
    (store) => store.currency
  );
  const calcPurchase = (val) => {
    return (val * 0.95).toFixed(2);
  };
  const calcSell = (val) => {
    return (val * 1.05).toFixed(2);
  };
  const rows = loadCurrnecy
    ? []
    : [
        {
          name: "USD",
          purchase: calcPurchase(ratescurrency.USD),
          sell: calcSell(ratescurrency.USD),
          cb: ratescurrency.USD.toFixed(2),
        },
        {
          name: "CAD",
          purchase: calcPurchase(ratescurrency.CAD),
          sell: calcSell(ratescurrency.CAD),
          cb: ratescurrency.CAD.toFixed(2),
        },
        {
          name: "AUD",
          purchase: calcPurchase(ratescurrency.AUD),
          sell: calcSell(ratescurrency.AUD),
          cb: ratescurrency.AUD.toFixed(2),
        },
        {
          name: "GBP",
          purchase: calcPurchase(ratescurrency.GBP),
          sell: calcSell(ratescurrency.GBP),
          cb: ratescurrency.GBP.toFixed(2),
        },
      ];

  return (
    <>
      {loadCurrnecy ? (
        errorLoad !== null ? (
          errorLoad
        ) : (
          "Loading"
        )
      ) : (
        <>
          <BasicTable
           
            classTable={"table-exchange"}
          >
                <TableHead className={'thead-exchnage'}>
                      <TableRow>
                        <TableCell></TableCell>
                        <TableCell align="left">Puchase</TableCell>
                        <TableCell align="left">Sell</TableCell>
                        <TableCell align="left">Cb</TableCell>
                      </TableRow>
                    </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    className={"th-currency"}
                  >
                    {row.name}
                  </TableCell>
                  <TableCell className={"table-td"} align="left">
                    {row.purchase}
                  </TableCell>
                  <TableCell className={"table-td"} align="left">
                    {row.sell}
                  </TableCell>
                  <TableCell className={"table-td"} align="left">
                    {row.cb}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </BasicTable>
        </>
      )}
    </>
  );
}

export default NonCash;
