import "./createproduct.css";
import { IoIosArrowDown } from "react-icons/io";
import { useRef, useState, useContext } from "react";
import { Apps } from "../../App";
import { useNavigate, Link } from "react-router-dom";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TiTick } from "react-icons/ti";

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
  borderRadius: "5px",
  alignItems: "center",
  justifyContent: "center",
};

function CreateProduct() {
  const Navigate = useNavigate();
  const { product, setProduct } = useContext(Apps);
  const [open, setOpen] = React.useState(false);
  const Input = useRef();
  const [dropDown, setDropDown] = useState(false);
  const [ProductName, setProductName] = useState("");
  const [ProductDescription, setProductDescription] = useState("");
  const [ProductImage, setProductImage] = useState("");
  const [ProductPrice, setProductPrice] = useState(0);
  const [ProductStock, setProductStock] = useState("");
  const [ProductCategory, setProductCategory] = useState("");
  const [ProductQuantity, setProductQuantity] = useState("");
  const [ProductRating, setProductRating] = useState(0);
  const [ProductCreatedAt, setProductCreatedAt] = useState("");
  const [ProductStatus, setProductStatus] = useState("true");
  const [toast, setToast] = useState(false);

  // Functionality
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const addProduct = () => {
    const Products = {
      id: Date.now(),
      ProductName,
      ProductDescription,
      ProductImage,
      ProductPrice,
      ProductStock,
      ProductCategory,
      ProductQuantity,
      ProductRating,
      ProductStatus,
      ProductCreatedAt,
    };

    setProduct((prev) => [...prev, Products]);
    Navigate("/Products");
  };

  return (
    <div className="createproduct__one">
      <div className="createproduct__two">
        <div className="createproduct__three">
          <div className="createproduct__four">
            <h2>Product Information.</h2>
            <div className="btncta">
              <Link to={"/Products"}>
                <button>Back</button>
              </Link>
            </div>
            <div className="createproduct__five">
              <div className="createproduct__six">
                <label htmlFor="">
                  Product Name
                  <input
                    value={ProductName}
                    onChange={(e) => {
                      setProductName(e.target.value);
                    }}
                    type="text"
                    placeholder="Luois Vuitton"
                  />
                </label>
                <label htmlFor="">
                  Product Description
                  <input
                    value={ProductDescription}
                    onChange={(e) => {
                      setProductDescription(e.target.value);
                    }}
                    type="text"
                    placeholder="Describe the product"
                  />
                </label>
                <label htmlFor="">
                  Product Image url
                  <input
                    value={ProductImage}
                    onChange={(e) => {
                      setProductImage(e.target.value);
                    }}
                    placeholder="Product Image URL"
                    type="text"
                  />
                </label>
                <label htmlFor="">
                  Product Price
                  <input
                    value={ProductPrice}
                    onChange={(e) => {
                      setProductPrice(e.target.value);
                    }}
                    type="number"
                    placeholder="Amount in $"
                  />
                </label>
                <label htmlFor="">
                  Product Stock
                  <input
                    value={ProductStock}
                    onChange={(e) => {
                      setProductStock(e.target.value);
                    }}
                    placeholder="Yes or No"
                    type="text"
                  />
                </label>
              </div>
              <div className="createproduct__six">
                <label htmlFor="">
                  Product Category
                  <div
                    className={
                      dropDown ? "inputRef" : "createproduct__category__focus"
                    }
                  >
                    <input
                      onClick={() => {
                        setDropDown((prev) => !prev);
                      }}
                      value={ProductCategory}
                      onChange={(e) => {
                        setProductCategory(e.target.value);
                      }}
                      ref={Input}
                      className={dropDown ? "input__zero" : "svg__turn"}
                      type="text"
                    />
                    <IoIosArrowDown />
                    <div className={dropDown ? "dropOptions" : "none"}>
                      <p
                        onClick={() => {
                          setProductCategory("Shoes");
                          setDropDown(false);
                        }}
                      >
                        Shoes
                      </p>
                      <p
                        onClick={() => {
                          setProductCategory("Clothing");
                          setDropDown(false);
                        }}
                      >
                        Clothing
                      </p>
                      <p
                        onClick={() => {
                          setProductCategory("MakeUps");
                          setDropDown(false);
                        }}
                      >
                        MakeUps
                      </p>
                    </div>
                  </div>
                </label>
                <label htmlFor="">
                  Product Quantity
                  <input
                    value={ProductQuantity}
                    onChange={(e) => {
                      setProductQuantity(e.target.value);
                    }}
                    type="text"
                    placeholder="Item Remaining"
                  />
                </label>
                <label htmlFor="">
                  Product Status
                  <input
                    value={ProductStatus}
                    onChange={(e) => {
                      setProductStatus(e.target.value);
                    }}
                    type="text"
                  />
                </label>
                <label htmlFor="">
                  Product Rating
                  <input
                    value={ProductRating}
                    onChange={(e) => {
                      setProductRating(e.target.value);
                    }}
                    type="text"
                  />
                </label>
                <label htmlFor="">
                  Product CreatedAt
                  <input
                    value={ProductCreatedAt}
                    onChange={(e) => {
                      setProductCreatedAt(e.target.value);
                    }}
                    type="date"
                  />
                </label>
              </div>
            </div>
            <button
              onClick={() => {
                handleOpen();
              }}
            >
              Create
            </button>
          </div>
        </div>
        <Modal
          open={open}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="sucessssss">
              <TiTick />
            </div>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Product Created!
            </Typography>
            <div className="btnCloseModal">
              <button
                onClick={() => {
                  handleClose();
                  addProduct();
                }}
              >
                Close
              </button>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
}

export default CreateProduct;
