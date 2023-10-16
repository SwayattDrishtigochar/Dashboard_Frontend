import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { useDispatch, useSelector } from 'react-redux';
import { addBoilerData } from '../../slices/boilerSlice';
import { useSetBoilerDataMutation } from '../../slices/api/boilerApiSlice';
import { toast } from 'react-toastify';

const BoilerConfirmDialog = ({
  data,
  onClose,
  openDialog,
  setDefault,
  closeModal,
}) => {
  const dispatch = useDispatch();
  const { boilerData } = useSelector((state) => state.boiler);
  const [setBoilerData, { isLoading, error }] = useSetBoilerDataMutation();

  const handleSave = async (e) => {
    e.preventDefault();
    console.log(data);

    try {
      const res = await setBoilerData({
        ...data,
        time: new Date(),
      }).unwrap();

      dispatch(addBoilerData([...boilerData, res]));
      console.log(boilerData);
      setDefault();
      onClose();
      closeModal();
    } catch (err) {
      toast.error(err?.data?.message || err?.error);
    }
  };
  return (
    <Dialog open={openDialog} onClose={onClose} maxWidth='sm' fullWidth>
      <DialogTitle id='alert-dialog-title' textAlign={'center'}>
        Confirm Data?
      </DialogTitle>
      <DialogContent>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Parameter</TableCell>
                <TableCell>Value</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Steam Pressure</TableCell>
                <TableCell>{data?.steamPressure}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Main Valve Controls</TableCell>
                <TableCell>{data?.mainValveControls}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Feed Pump 1</TableCell>
                <TableCell>{data?.feedPump1}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Feed Pump 2</TableCell>
                <TableCell>{data?.feedPump2}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Feed Water</TableCell>
                <TableCell>
                  {data?.feedWater === 'Checked' ? (
                    <CheckBoxIcon color='success' />
                  ) : (
                    '-'
                  )}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Blow Down</TableCell>
                <TableCell>
                  {' '}
                  {data?.blowDown === 'Checked' ? (
                    <CheckBoxIcon color='success' />
                  ) : (
                    '-'
                  )}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Water Level</TableCell>
                <TableCell>{data?.waterLevel}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Wood Amount</TableCell>
                <TableCell>{data?.woodAmount}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSave}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default BoilerConfirmDialog;
