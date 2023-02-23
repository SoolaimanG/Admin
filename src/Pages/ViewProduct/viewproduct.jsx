import ManageProducts from "../../Components/manageproducts/manageproduct";
import "./viewproduct.css";
import { Apps } from "../../App";
import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { FaStar, FaArrowLeft, FaPlus } from "react-icons/fa";

const star = () => {
  return <FaStar />;
};

function ViewProduct() {
  const params = useParams();
  const { product, setProduct } = useContext(Apps);
  return (
    <div className="viewproduct__one">
      <div className="container viewproduct__two">
        <div className="viewproduct__three">
          <div className="yessss">
            <div className="manageone__one">
              <h2>You can manage your products here easily.</h2>
            </div>
            <div className="btncta">
              <Link to={"/Products"}>
                <button>
                  <FaArrowLeft />
                  Back
                </button>
              </Link>
            </div>
          </div>
        </div>
        {product.map((products) => {
          if (products.id === Number(params.id)) {
            return (
              <div key={products.id} className="viewproduct__four">
                <div className="viewproduct__five">
                  <img src={products.ProductImage} alt="" />
                  <h3>{products.ProductName}</h3>
                </div>
                <div className="viewproduct__six">
                  <h4>
                    Product Description:
                    <p> {products.ProductDescription}</p>
                  </h4>
                  <p className="chip">
                    {products.ProductStock ? "In Stock" : "Out of stock"}
                  </p>
                  <h4>
                    Product Category: <p>{products.ProductCategory}</p>
                  </h4>
                  <h4>
                    Rating: <p>{products.ProductRating} out of 5</p>
                  </h4>
                  <h4>Available since {products.ProductCreatedAt}</h4>
                  <h4>
                    Price: <p>${products.ProductPrice}</p>
                  </h4>
                  <h4>
                    Remaining Product: <p>{products.ProductQuantity}</p>
                  </h4>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default ViewProduct;
