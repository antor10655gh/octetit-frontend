import React from 'react';
import {
  Button,
  Dialog,
  Badge,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography
} from '@material-tailwind/react';
import addBanner from '../../assets/images/addBanner.jpg';

const AddPopUp = () => {
  const [open, setOpen] = React.useState(true);

  const handleOpen = () => setOpen(!open);
  return (
    <div>
      <Badge content="1" color="orange">
        <Button onClick={handleOpen} className="primary-btn">
          Notification
        </Button>
      </Badge>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>
          <Typography variant="h5" color="blue-gray">
            Your Attention is Required!
          </Typography>
        </DialogHeader>
        <DialogBody divider className="grid place-items-center gap-4">
          <img src={addBanner} alt="addBanner.jpg" />
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="text" color="blue-gray" onClick={handleOpen}>
            Cancle
          </Button>
          <Button variant="gradient" onClick={handleOpen}>
            Registration
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default AddPopUp;
