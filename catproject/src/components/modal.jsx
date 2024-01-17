import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 900,
  height: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,

  '@media (max-width: 600px)': {
    width: '90%',  // Adjust width for smaller screens
    height: '300px', // Adjust height for smaller screens
  },
};

export default function BasicModal({ info, link }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>
        <Typography id="modal-modal-title" variant="h6" component="h2" className=" lowercase">
          {info}
        </Typography>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <iframe
            src={link}
            className=" h-full w-full"
            title="W3Schools Free Online Web Tutorials"
          ></iframe>
        </Box>
      </Modal>
    </div>
  );
}
