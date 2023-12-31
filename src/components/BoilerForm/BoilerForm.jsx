import { useState, useEffect } from 'react';
import {
  FormControl,
  Box,
  Typography,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
} from '@mui/material';
import { useGetSensorStateQuery } from '../../slices/api/sensorApiSlice';
import BoilerConfirmDialog from '../BoilerConfirmDialog/BoilerConfirmDialog';
import Loader from '../Loader/Loader';

const BoilerForm = ({ closeModal }) => {
  // const [time, setTime] = useState();
  const [steamPressure, setSteamPressure] = useState(0);
  const [mainValveControls, setMainValveControls] = useState('ON');
  const [feedPump1, setFeedPump1] = useState('');
  const [feedPump2, setFeedPump2] = useState('');
  const [waterLevel, setWaterLevel] = useState(0);
  const [woodInput, setWoodInput] = useState('');
  const [woodAmount, setWoodAmount] = useState(0);
  const [feedWater, setFeedWater] = useState('');
  const [blowDown, setBlowDown] = useState('');

  const [openDialog, setOpenDialog] = useState(false);

  const increaseWaterLevel = () => {
    setWaterLevel((prevValue) => Math.min(prevValue + 5, 100));
  };

  const decreaseWaterLevel = () => {
    setWaterLevel((prevValue) => Math.max(prevValue - 5, 0));
  };

  const increaseSteam = () => {
    setSteamPressure((prevValue) => Math.min(prevValue + 5, 300));
  };

  const decreaseSteam = () => {
    if (steamPressure > 0) {
      setSteamPressure((prevValue) => Math.max(prevValue - 5, 0));
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

  const setDefault = () => {
    setSteamPressure(0);
    setMainValveControls('');
    setFeedPump1('');
    setFeedPump2('');
    setWaterLevel(0);
    setWoodInput('');
    setWoodAmount(0);
    setFeedWater('');
    setBlowDown('');
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  const { data: feedPump1State, isFetching: isfeedPump1StateLoading } =
    useGetSensorStateQuery(
      {
        collection: 'feedpump1',
      },
      {
        refetchOnMountOrArgChange: true,
        skip: false,
        // pollingInterval: 1000,
      }
    );

  const { data: feedPump2State, isFetching: isfeedPump2StateLoading } =
    useGetSensorStateQuery(
      {
        collection: 'feedpump2',
      },
      {
        refetchOnMountOrArgChange: true,
        skip: false,
        // pollingInterval: 1000,
      }
    );

  useEffect(() => {
    if (feedPump1State && feedPump2State) {
      setFeedPump1(feedPump1State === '0' ? 'OFF' : 'ON');
      setFeedPump2(feedPump2State === '0' ? 'OFF' : 'ON');
    }
  }, [feedPump1State, feedPump2State]);

  const isStateLoading = isfeedPump1StateLoading && isfeedPump2StateLoading;

  return (
    <>
      <FormControl fullWidth margin='normal'>
        <Box display='flex' justifyContent='space-between' alignItems='center'>
          <Typography variant='subtitle1'>Steam Pressure:</Typography>
          <Box display='flex' alignItems='center'>
            {/* <Typography variant='body1' style={{ marginRight: '8px' }}>
                    Select Water Level:
                  </Typography> */}
            <Button variant='outlined' onClick={decreaseSteam}>
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
        <Box display='flex' justifyContent='space-between' alignItems='center'>
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

      {isStateLoading ? (
        <Loader />
      ) : (
        <>
          {' '}
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
        </>
      )}

      <FormControl fullWidth margin='normal'>
        <Box display='flex' justifyContent='space-between' alignItems='center'>
          <Box
            width={'50%'}
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
          >
            <Typography variant='subtitle1'>Blow Down</Typography>
            <Checkbox
              name='blowDown'
              checked={blowDown === 'Checked'}
              onChange={(e) => {
                setBlowDown(e.target.checked ? 'Checked' : '');
              }}
            />
          </Box>
          <Box
            width={'50%'}
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
          >
            <Typography variant='subtitle1'>Feed Water</Typography>
            <Checkbox
              name='feedWater'
              checked={feedWater === 'Checked'}
              onChange={(e) => {
                setFeedWater(e.target.checked ? 'Checked' : '');
              }}
            />
          </Box>
        </Box>
      </FormControl>

      <FormControl fullWidth margin='normal'>
        <Box display='flex' justifyContent='space-between' alignItems='center'>
          <Typography variant='subtitle1'>Water Level:</Typography>
          <Box display='flex' alignItems='center'>
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
        <Box display='flex' justifyContent='space-between' alignItems='center'>
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
      <Button
        fullWidth
        variant='contained'
        type='submit'
        sx={{ m: '5px' }}
        disabled={
          steamPressure === '' ||
          mainValveControls === '' ||
          feedPump1 === '' ||
          feedPump2 === '' ||
          waterLevel === 0 ||
          woodInput === ''
        }
        onClick={() => setOpenDialog(true)}
      >
        Save
      </Button>

      <BoilerConfirmDialog
        setDefault={setDefault}
        openDialog={openDialog}
        onClose={handleClose}
        closeModal={closeModal}
        data={{
          steamPressure,
          mainValveControls,
          feedPump1,
          feedPump2,
          waterLevel,
          woodAmount,
          feedWater,
          blowDown,
        }}
      />
    </>
  );
};

export default BoilerForm;
