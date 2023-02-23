import "./product.css";
import Productable from "../../Components/Productable/productable";
import TopNav from "../../Components/TopNav/topnav";
import ManageProducts from "../../Components/manageproducts/manageproduct";

function Products() {
  return (
    <div className="products__wrapper">
      <div className="container">
        <TopNav />
        <div>
          <ManageProducts value={"Product"} />
        </div>
        <div className="productcontainer">
          <Productable />
        </div>
      </div>
    </div>
  );
}

export default Products;
