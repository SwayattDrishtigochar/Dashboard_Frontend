import { useState } from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControlLabel,
  FormControl,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  Box,
  Checkbox,
  DialogContentText,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addBoilerData } from '../../slices/boilerSlice';
import { useSetBoilerDataMutation } from '../../slices/boilerApiSlice';
import { toast } from 'react-toastify';
import Loader from '../Loader/Loader';

const BoilerModal = ({ open, onClose }) => {
  const [time, setTime] = useState();
  const [steamPressure, setSteamPressure] = useState('');
  const [mainValveControls, setMainValveControls] = useState('');
  const [feedPump1, setFeedPump1] = useState('');
  const [feedPump2, setFeedPump2] = useState('');
  const [waterLevel, setWaterLevel] = useState(0);
  // const [feedWater, setFeedWater] = useState('OFF');
  // const [blowDown, setBlowDown] = useState('OFF');
  const dispatch = useDispatch();
  const { boilerData } = useSelector((state) => state.boiler);

  const [openDialog, setOpenDialog] = useState(false);

  const handleClickOpen = () => {
    setOpenDialog(true);
    setTime(new Date());
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  const handleIncrement = () => {
    setWaterLevel((prevValue) => prevValue + 5);
  };

  const handleDecrement = () => {
    if (waterLevel > 0) {
      setWaterLevel((prevValue) => prevValue - 5);
    }
  };

  const setDefault = () => {
    setSteamPressure('');
    setMainValveControls('');
    setFeedPump1('');
    setFeedPump2('');
    setWaterLevel('');
  };
  const [setBoilerData, { isLoading, error }] = useSetBoilerDataMutation();

  const handleSave = async (e) => {
    e.preventDefault();

    // Set the current time as the form submission time
    // const currentTime = new Date();

    try {
      const res = await setBoilerData({
        steamPressure,
        mainValveControls,
        feedPump1,
        feedPump2,
        waterLevel,
        // feedWater,
        // blowDown,
        time,
      }).unwrap();
      dispatch(addBoilerData([...boilerData, res.data]));
      handleClose();
      setDefault();
      onClose();
    } catch (err) {
      toast.error(err?.data?.message || err?.error);
    }
  };

  if (isLoading) return <Loader />;

  return (
    <>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Add Data</DialogTitle>
        <form style={{ width: '100%' }}>
          <DialogContent>
            <FormControl fullWidth margin='normal'>
              <TextField
                error={error}
                name='steamPressure'
                label='Steam Pressure'
                value={steamPressure}
                onChange={(e) => setSteamPressure(e.target.value)}
                type='number'
              />
            </FormControl>

            <Box mt={2} display='flex' alignItems='center'>
              <Typography variant='subtitle1'>Main Control Valve:</Typography>
              <RadioGroup
                name='mainValveControls'
                value={mainValveControls}
                onChange={(e) => setMainValveControls(e.target.value)}
                row
              >
                <FormControlLabel value='ON' control={<Radio />} label='ON' />
                <FormControlLabel value='OFF' control={<Radio />} label='OFF' />
              </RadioGroup>
            </Box>

            <Box mt={2} display='flex' alignItems='center'>
              <Typography variant='subtitle1'>Feed Pump Number 1:</Typography>
              <RadioGroup
                name='feedPump1'
                value={feedPump1}
                onChange={(e) => setFeedPump1(e.target.value)}
                row
              >
                <FormControlLabel value='ON' control={<Radio />} label='ON' />
                <FormControlLabel value='OFF' control={<Radio />} label='OFF' />
              </RadioGroup>
            </Box>

            <Box mt={2} display='flex' alignItems='center'>
              <Typography variant='subtitle1'>Feed Pump Number 2:</Typography>
              <RadioGroup
                name='feedPump2'
                value={feedPump2}
                onChange={(e) => setFeedPump2(e.target.value)}
                row
              >
                <FormControlLabel value='ON' control={<Radio />} label='ON' />
                <FormControlLabel value='OFF' control={<Radio />} label='OFF' />
              </RadioGroup>
            </Box>
            {/* 
            <TextField
              name='waterLevel'
              label='Water Level'
              type='number'
              value={waterLevel}
              fullWidth
              margin='normal'
              onChange={(e) => setWaterLevel(e.target.value)}
            /> */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <p>Water Level:</p>
              <div>
                <Button onClick={handleDecrement}>-</Button>
                <span>{waterLevel}</span>
                <Button onClick={handleIncrement}>+</Button>
              </div>
            </div>

            {/* <Box mt={2}>
            <FormControlLabel
              control={
                <Checkbox
                  name='feedWater'
                  checked={feedWater === 'ON'}
                  color='primary'
                  onChange={(e) =>
                    setFeedWater(e.target.checked ? 'ON' : 'OFF')
                  }
                />
              }
              label='Feed Water Analysis'
            />

            <FormControlLabel
              control={
                <Checkbox
                  name='blowDown'
                  checked={blowDown === 'ON'}
                  color='primary'
                  onChange={(e) => setBlowDown(e.target.checked ? 'ON' : 'OFF')}
                />
              }
              label='Blow Down Analysis'
            />
          </Box> */}
          </DialogContent>
          <DialogActions>
            <Button onClick={onClose}>Cancel</Button>
            <Button
              onClick={handleClickOpen}
              variant='contained'
              color='primary'
            >
              Save
            </Button>
          </DialogActions>
        </form>
      </Dialog>

      <Dialog open={openDialog} onClose={handleClose}>
        <DialogTitle id='alert-dialog-title'>Confirm Data?</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            Are you sure to save this data?
            <div>
              <p>Steam Pressure: {steamPressure}</p>
              <p>Main Valve Controls: {mainValveControls}</p>
              <p>Feed Pump 1: {feedPump1}</p>
              <p>Feed Pump 2: {feedPump2}</p>
              <p>Water Level: {waterLevel}</p>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default BoilerModal;
