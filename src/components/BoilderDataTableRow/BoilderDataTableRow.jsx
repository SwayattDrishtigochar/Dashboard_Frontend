import { TableRow, TableCell } from '@mui/material';

const BoilderDataTableRow = ({ boilerData }) => {
  return (
    <>
      {boilerData?.length === 0 ? (
        <TableRow>
          <TableCell colSpan={7} style={{ textAlign: 'center' }}>
            No Data Found
          </TableCell>
        </TableRow>
      ) : (
        boilerData?.map((data, index) => (
          <TableRow key={index}>
            <TableCell style={{ textAlign: 'center' }}>{data?.time}</TableCell>
            <TableCell style={{ textAlign: 'center' }}>
              {data?.steamPressure}
            </TableCell>
            <TableCell style={{ textAlign: 'center' }}>
              {data?.mainValveControls}
            </TableCell>
            <TableCell style={{ textAlign: 'center' }}>
              {data?.feedPump1}
            </TableCell>
            <TableCell style={{ textAlign: 'center' }}>
              {data?.feedPump2}
            </TableCell>
            <TableCell style={{ textAlign: 'center' }}>
              {data?.waterLevel}
            </TableCell>
            <TableCell style={{ textAlign: 'center' }}>
              {data?.woodAmount}
            </TableCell>
          </TableRow>
        ))
      )}
    </>
  );
};

export default BoilderDataTableRow;
