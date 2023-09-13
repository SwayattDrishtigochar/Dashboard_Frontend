import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Box,
  Typography,
} from '@mui/material';
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
    <Dialog open={openDialog} onClose={onClose}>
      <DialogTitle id='alert-dialog-title'>Confirm Data?</DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-description'>
          Are you sure to save this data?
          <Box>
            <Typography>Steam Pressure: {data.steamPressure}</Typography>
            <Typography>
              Main Valve Controls: {data.mainValveControls}
            </Typography>
            <Typography>Feed Pump 1: {data.feedPump1}</Typography>
            <Typography>Feed Pump 2: {data.feedPump2}</Typography>
            <Typography>Water Level: {data.waterLevel}</Typography>
            <Typography>Wood Amount: {data.woodAmount}</Typography>
          </Box>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        {/* <Button onClick={handleClose}>Cancel</Button> */}
        <Button onClick={handleSave}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default BoilerConfirmDialog;
