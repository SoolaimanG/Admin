import * as React from "react";
import Box from "@mui/material/Box";
import { MdQrCodeScanner } from "react-icons/md";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import QR from "../../Assets/Qr.png";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "300px",
  bgcolor: "background.paper",
  border: "1px solid var(--color-secondary)",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  position: "relative",
  alignItems: "center",
  justifyContent: "center",
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div onClick={handleOpen}>
        <MdQrCodeScanner />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Scan To Connect &#x1F600;
          </Typography>
          <img style={{ width: "250px" }} src={QR} alt="" />
        </Box>
      </Modal>
    </div>
  );
}
