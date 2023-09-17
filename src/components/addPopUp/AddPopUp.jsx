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
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const AddPopUp = () => {
  const [open, setOpen] = React.useState(true);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div>
      <Badge content="1" color="orange">
        <Button onClick={handleOpen} className="primary-btn">
          Notification
        </Button>
      </Badge>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader className="flex justify-between">
          <Typography variant="h5" color="blue-gray">
            Your Attention is Required!
          </Typography>
          <span className="cursor-pointer mr-3" onClick={handleOpen}>
            <AiOutlineClose className="h-6 w-6" />
          </span>
        </DialogHeader>
        <DialogBody divider className="grid place-items-center gap-4">
          <img src={addBanner} alt="addBanner.jpg" />
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Link
            to="https://forms.gle/KHs3TKyE5aqi965N6"
            target="_blank"
            className="outline-none"
          >
            <Button variant="gradient" onClick={handleOpen}>
              Registration
            </Button>
          </Link>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default AddPopUp;
