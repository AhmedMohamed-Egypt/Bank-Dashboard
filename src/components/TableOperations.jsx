import BasicTable from "../ui-components/BasicTable";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import { useSelector } from "react-redux";
import { useEffect, useReducer } from "react";

function TableOperations() {
  const { dataOperations, loadOperationData, errorOperationData } = useSelector(
    (store) => store.operationTable
  );

  function fromatZone(hours){
    return hours>12?`0${hours - 12}`:`${hours}`
  }

  function formatTime(timeParam){
    let mins = new Date(timeParam).getMinutes()<10?`0${new Date(timeParam).getMinutes()}`:new Date(timeParam).getMinutes()
    let hrs = new Date(timeParam).getHours()<10?(new Date(timeParam).getHours()===0?12:`0${new Date(timeParam).getHours()}`):new Date(timeParam).getHours()
     return `${fromatZone(hrs)}:${mins} ${hrs>12?'PM':'AM'}`
  }

  return (
    <div>
      {errorOperationData != null || loadOperationData ? (
        <p>{errorOperationData || "loading"}</p>
      ) : (
        <div className="mt-[25px] ">
            <div>
                <h2 className="text-size-20 font-semibold mb-2 font-pop">Account Operations</h2>
            </div>
          <BasicTable classTable='no-shadow bg-lightviolet rounded-xl px-[20px]'>
            <TableHead className={""}>
              <TableRow>
                <TableCell align="left" className='text-grey100'>Description</TableCell>
                <TableCell align="left" className='text-grey100'>Time</TableCell>
                <TableCell align="left" className='text-grey100'>Currecny</TableCell>
                <TableCell align="left" className='text-grey100'>Status</TableCell>
                <TableCell align="left" className='text-grey100'>Cashback</TableCell>
                <TableCell align="left" className='text-grey100'>Amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dataOperations.map((item, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row" className={"font-semibold text-size-18"}>
                    {item.name}
                  </TableCell>
                  <TableCell className={"font-semibold text-size-18"} align="left">
                    {formatTime(item.Time)}
                  </TableCell>
                  <TableCell className={"font-semibold text-size-18"}>
                    {item.Currency}
                  </TableCell>
                  <TableCell className={`font-semibold text-size-18 ${item.status==1?'text-violet':'text-textred500'}`}>
                    {item.status==1?'Successfully':'Cancelled'}
                  </TableCell>
                  <TableCell className={"font-semibold text-size-18"}>
                    {item.cashback}
                  </TableCell>
                  <TableCell className={"font-semibold text-size-18"}>
                    {item.amount}
                  </TableCell>
                  
                </TableRow>
              ))}
            </TableBody>
          </BasicTable>
        </div>
      )}
    </div>
  );
}

export default TableOperations;
