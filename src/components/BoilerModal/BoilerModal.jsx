import { Dialog, DialogTitle, DialogContent } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import BoilerForm from '../BoilerForm/BoilerForm';

const BoilerModal = ({ open, onClose }) => {
  return (
    <>
      <Dialog open={open} onClose={onClose}>
        <CloseIcon
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            cursor: 'pointer',
          }}
        />
        <DialogTitle textAlign='center'>Add Boiler Data</DialogTitle>
        <DialogContent sx={{ width: '70%', margin: 'auto', maxWidth: '100%' }}>
          <BoilerForm closeModal={onClose} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default BoilerModal;
