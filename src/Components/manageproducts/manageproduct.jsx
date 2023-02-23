import { FaArrowLeft, FaPlus } from "react-icons/fa";
import "./manageproduct.css";
import { Link } from "react-router-dom";

function ManageProducts(props) {
  console.log(props.value === "Hello");

  return (
    <div className="yessss">
      <div className="manageone__one">
        <h2>You can manage your products here easily.</h2>
      </div>
      <div className="btncta">
        <Link to={"/CreateProduct"}>
          <button>
            <FaPlus />
            Create
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ManageProducts;
