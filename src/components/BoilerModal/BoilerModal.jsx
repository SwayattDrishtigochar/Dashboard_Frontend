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
  DialogContentText,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addBoilerData } from '../../slices/boilerSlice';
import { useSetBoilerDataMutation } from '../../slices/boilerApiSlice';
import { toast } from 'react-toastify';

const BoilerModal = ({ open, onClose }) => {
  const [time, setTime] = useState();
  const [steamPressure, setSteamPressure] = useState(0);
  const [mainValveControls, setMainValveControls] = useState('');
  const [feedPump1, setFeedPump1] = useState('');
  const [feedPump2, setFeedPump2] = useState('');
  const [waterLevel, setWaterLevel] = useState(0);
  const [woodInput, setWoodInput] = useState('');
  const [woodAmount, setWoodAmount] = useState(0);
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

  const increaseWaterLevel = () => {
    setWaterLevel((prevValue) => prevValue + 5);
  };

  const decreaseWaterLevel = () => {
    if (waterLevel > 0) {
      setWaterLevel((prevValue) => prevValue - 5);
    }
  };

  const increaseSteam = () => {
    setSteamPressure((prevValue) => prevValue + 5);
  };

  const decreaseeSteam = () => {
    if (steamPressure > 0) {
      setSteamPressure((prevValue) => prevValue - 5);
    }
  };

  const setDefault = () => {
    setSteamPressure(0);
    setMainValveControls('');
    setFeedPump1('');
    setFeedPump2('');
    setWaterLevel(0);
    setWoodInput('');
    setWoodAmount(0);
  };
  const [setBoilerData, { isLoading, error }] = useSetBoilerDataMutation();

  const handleSave = async (e) => {
    e.preventDefault();

    try {
      const res = await setBoilerData({
        steamPressure,
        mainValveControls,
        feedPump1,
        feedPump2,
        waterLevel,
        // feedWater,
        // blowDown,
        woodAmount,
        time,
      }).unwrap();

      dispatch(
        addBoilerData([
          ...boilerData,

          {
            steamPressure,
            mainValveControls,
            feedPump1,
            feedPump2,
            waterLevel,
            // feedWater,
            // blowDown,
            woodAmount,
            time: new Date(time).toLocaleString('en-IN', {
              timeZone: 'Asia/Kolkata',
            }),
          },
        ])
      );
      handleClose();
      setDefault();
      onClose();
    } catch (err) {
      toast.error(err?.data?.message || err?.error);
    }
  };

  const handleWoodInput = (value) => {
    setWoodInput(value);
    if (value === 'Yes') {
      //add 500 to wood input

      setWoodAmount(500);
    } else {
      // add 0 to wood input

      setWoodAmount(0);
    }
  };

  return (
    <>
      <Dialog open={open}>
        <DialogTitle textAlign='center'>Add Boiler Data</DialogTitle>

        <DialogContent sx={{ width: '70%', margin: 'auto', maxWidth: '100%' }}>
          {/* <FormControl fullWidth margin='normal'>
            <TextField
              required
              error={error}
              name='steamPressure'
              label='Steam Pressure'
              value={steamPressure}
              onChange={(e) => setSteamPressure(e.target.value)}
              type='number'
            />
          </FormControl> */}
          <FormControl fullWidth margin='normal'>
            <Box
              display='flex'
              justifyContent='space-between'
              alignItems='center'
            >
              <Typography variant='subtitle1'>Steam Pressure:</Typography>
              <Box display='flex' alignItems='center'>
                {/* <Typography variant='body1' style={{ marginRight: '8px' }}>
                    Select Water Level:
                  </Typography> */}
                <Button variant='outlined' onClick={decreaseeSteam}>
                  -
                </Button>
                <span style={{ margin: '0 10px' }}>{steamPressure}</span>
                <Button variant='outlined' onClick={increaseSteam}>
                  +
                </Button>
              </Box>
            </Box>
          </FormControl>

          <FormControl fullWidth margin='normal'>
            <Box
              display='flex'
              justifyContent='space-between'
              alignItems='center'
            >
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
          </FormControl>

          <FormControl fullWidth margin='normal'>
            <Box
              display='flex'
              justifyContent='space-between'
              alignItems='center'
            >
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
          </FormControl>

          <FormControl fullWidth margin='normal'>
            <Box
              display='flex'
              justifyContent='space-between'
              alignItems='center'
            >
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
          </FormControl>

          <FormControl fullWidth margin='normal'>
            <Box
              display='flex'
              justifyContent='space-between'
              alignItems='center'
            >
              <Typography variant='subtitle1'>Water Level:</Typography>
              <Box display='flex' alignItems='center'>
                {/* <Typography variant='body1' style={{ marginRight: '8px' }}>
                    Select Water Level:
                  </Typography> */}
                <Button variant='outlined' onClick={decreaseWaterLevel}>
                  -
                </Button>
                <span style={{ margin: '0 10px' }}>{waterLevel}</span>
                <Button variant='outlined' onClick={increaseWaterLevel}>
                  +
                </Button>
              </Box>
            </Box>
          </FormControl>
          <FormControl fullWidth margin='normal'>
            <Box
              display='flex'
              justifyContent='space-between'
              alignItems='center'
            >
              <Typography variant='subtitle1'>Wood Input:</Typography>
              <RadioGroup
                name='wood'
                value={woodInput}
                onChange={(e) => handleWoodInput(e.target.value)}
                row
              >
                <FormControlLabel value='Yes' control={<Radio />} label='Yes' />
                <FormControlLabel value='No' control={<Radio />} label='No' />
              </RadioGroup>
            </Box>
          </FormControl>
        </DialogContent>

        <DialogActions>
          <Button
            onClick={() => {
              setDefault();
              onClose();
            }}
          >
            Cancel
          </Button>
          <Button
            disabled={
              steamPressure === '' ||
              mainValveControls === '' ||
              feedPump1 === '' ||
              feedPump2 === '' ||
              waterLevel === 0 ||
              woodInput === ''
            }
            onClick={handleClickOpen}
            variant='contained'
            color='primary'
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={openDialog} onClose={handleClose}>
        <DialogTitle id='alert-dialog-title'>Confirm Data?</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            Are you sure to save this data?
            <Box>
              <Typography>Steam Pressure: {steamPressure}</Typography>
              <Typography>Main Valve Controls: {mainValveControls}</Typography>
              <Typography>Feed Pump 1: {feedPump1}</Typography>
              <Typography>Feed Pump 2: {feedPump2}</Typography>
              <Typography>Water Level: {waterLevel}</Typography>
              <Typography>Wood Amount: {woodAmount}</Typography>
            </Box>
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
