import { useEffect, useState } from 'react';
import {
  TableContainer,
  Paper,
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
import {
  useGetBoilerDataQuery,
  useDeleteBoilerDataMutation,
} from '../../slices/boilerApiSlice';
import { addBoilerData, removeBoilerData } from '../../slices/boilerSlice';
import Loader from '../../components/Loader/Loader';
import { toast } from 'react-toastify';
import Header from '../../components/Header/Header';

const Boiler = () => {
  const [open, setOpen] = useState(false);

  const { boilerData } = useSelector((state) => state.boiler);

  const { data, isLoading, isError } = useGetBoilerDataQuery();

  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(addBoilerData(data.data));
    }
  }, [data, dispatch]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (isError && !isLoading) {
    toast.error('Cant load data');
  }

  return (
    <>
      <Header />
      <Box position='relative'>
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
                <TableCell style={{ textAlign: 'center' }}>Time</TableCell>
                <TableCell style={{ textAlign: 'center' }}>
                  {/* show it as power of 2 */}
                  Steam Pressure (Kg/CM<sup>2</sup>)
                </TableCell>
                <TableCell style={{ textAlign: 'center' }}>
                  Main Steam Valve Controls
                </TableCell>
                <TableCell colSpan={2} style={{ textAlign: 'center' }}>
                  Feed Pump
                </TableCell>
                <TableCell style={{ textAlign: 'center' }}>
                  Water Level (%)
                </TableCell>
                <TableCell style={{ textAlign: 'center' }}>Wood (kg)</TableCell>
                {/* <TableCell colSpan={2} style={{ textAlign: 'center' }}>
                  Water Analysis
                </TableCell> */}
              </TableRow>
              <TableRow>
                <TableCell />
                <TableCell />
                <TableCell />
                <TableCell style={{ textAlign: 'center' }}>Number 1</TableCell>
                <TableCell style={{ textAlign: 'center' }}>Number 2</TableCell>
                <TableCell />
                {/* <TableCell style={{ textAlign: 'center' }}>
                  Feed Water
                </TableCell>
                <TableCell style={{ textAlign: 'center' }}>Blow Down</TableCell> */}
              </TableRow>
            </TableHead>
            {isLoading && <Loader />}
            <TableBody>
              {boilerData?.map((data, index) => (
                <TableRow key={index}>
                  <TableCell style={{ textAlign: 'center' }}>
                    {data?.time}
                  </TableCell>
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
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Button
        onClick={handleOpen}
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
