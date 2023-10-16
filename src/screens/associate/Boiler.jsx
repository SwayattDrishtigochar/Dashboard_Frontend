import { useEffect, useState } from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Box,
  Button,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import BoilerModal from '../../components/BoilerModal/BoilerModal';
import { useGetBoilerDataQuery } from '../../slices/api/boilerApiSlice';
import { addBoilerData } from '../../slices/boilerSlice';
import Loader from '../../components/Loader/Loader';
import Clock from '../../components/Clock/Clock';
import BoilderDataTableRow from '../../components/BoilderDataTableRow/BoilderDataTableRow';
const Boiler = () => {
  const [open, setOpen] = useState(false);
  const { boilerData } = useSelector((state) => state.boiler);
  const { data, isFetching } = useGetBoilerDataQuery(
    {},
    {
      refetchOnMountOrArgChange: true,
      skip: false,
      // pollingInterval: 1000,
    }
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (data) {
      dispatch(addBoilerData(data));
    }
  }, [data, dispatch]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {/* <Header /> */}
      <Box position='relative' width={'100%'} mt={'80px'}>
        <Clock />
        <Typography
          variant='h5'
          align='center'
          gutterBottom
          style={{
            //make font bold
            fontWeight: 'bold',
            //give some space above
            marginTop: '20px',
          }}
        >
          Boiler Data
        </Typography>
        <TableContainer component={Box}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  style={{ textAlign: 'center', fontWeight: 'bolder' }}
                >
                  Time
                </TableCell>
                <TableCell
                  style={{ textAlign: 'center', fontWeight: 'bolder' }}
                >
                  {/* show it as power of 2 */}
                  Steam Pressure (psi)
                </TableCell>
                <TableCell
                  style={{ textAlign: 'center', fontWeight: 'bolder' }}
                >
                  Main Steam Valve Controls
                </TableCell>
                <TableCell
                  colSpan={2}
                  style={{ textAlign: 'center', fontWeight: 'bolder' }}
                >
                  Feed Pump
                </TableCell>
                <TableCell
                  style={{ textAlign: 'center', fontWeight: 'bolder' }}
                >
                  Water Level (%)
                </TableCell>
                <TableCell
                  style={{ textAlign: 'center', fontWeight: 'bolder' }}
                >
                  Wood (kg)
                </TableCell>
                <TableCell
                  colSpan={2}
                  style={{ textAlign: 'center', fontWeight: 'bolder' }}
                >
                  Water Analysis
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell />
                <TableCell />
                <TableCell />
                <TableCell
                  style={{ textAlign: 'center', fontWeight: 'bolder' }}
                >
                  Number 1
                </TableCell>
                <TableCell
                  style={{ textAlign: 'center', fontWeight: 'bolder' }}
                >
                  Number 2
                </TableCell>
                <TableCell />
                <TableCell />
                <TableCell style={{ textAlign: 'center' }}>
                  Feed Water
                </TableCell>
                <TableCell style={{ textAlign: 'center' }}>Blow Down</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {isFetching && (
                <TableRow>
                  <TableCell
                    colSpan={7}
                    style={{ textAlign: 'center' }}
                    sx={{
                      position: 'relative',
                    }}
                  >
                    <Loader />
                  </TableCell>
                </TableRow>
              )}
              <BoilderDataTableRow boilerData={boilerData} />
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Button
        onClick={() => setOpen(true)}
        sx={{
          '&:hover': {
            backgroundColor: '#3dcc5b',
          },
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: '100',
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          backgroundColor: '#3dcc5b',
          color: 'white',
          fontSize: '3rem',
          boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
        }}
      >
        +
      </Button>

      <BoilerModal open={open} onClose={handleClose} />
    </>
  );
};
export default Boiler;
