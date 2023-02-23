import "./productable.css";
import { Apps } from "../../App";
import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { FaTimes } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "5px",
  p: 4,
};

export function BasicModal(props) {
  const { product, setProduct } = useContext(Apps);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const deleteItem = (id) => {
    setProduct(
      product.filter((item) => {
        return item.id !== id;
      })
    );
    setOpen(false);
  };

  return (
    <div>
      <p
        className="deleteitem"
        onClick={() => {
          handleOpen();
        }}
      >
        Delete Item
      </p>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="modal">
            <div className="modal__one">
              <FaTimes />
            </div>
            <h3>Are you sure you want to delete this item?</h3>
            <p>This action is irreversible</p>
            <div className="modalbtn">
              <button onClick={handleClose} className="cancelbtn">
                Cancel
              </button>
              <button
                onClick={() => {
                  deleteItem(props.value);
                }}
                className="deletebtnn"
              >
                Delete
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

function Productable() {
  // Receiving from context API
  const { product, setProduct } = useContext(Apps);

  return (
    <div className="productable__one">
      <div className="productable__two">
        {product?.map((products) => {
          return (
            <div key={products.id} className="productable__three">
              <Link to={"/Products/" + products.id}>
                <img src={products.ProductImage} alt={products.ProductName} />
              </Link>
              <div className="productable__four">
                <h3>
                  Name: <p>{products.ProductName}</p>
                </h3>
                <h3>
                  Description: <p>{products.ProductDescription}</p>
                </h3>
                <h3>
                  Price: <p>${products.ProductPrice}</p>
                </h3>
                <BasicModal value={products.id} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Productable;
