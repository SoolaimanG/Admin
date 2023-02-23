import "./balance.css";
import { MdAccountBalanceWallet } from "react-icons/md";

function Balance() {
  return (
    <div>
      <div className="balanceOne">
        <div className="balanceTwo">
          <MdAccountBalanceWallet />
          <p>Account</p>
        </div>
        <div className="balanceTwo">
          <p>Wallet Balance</p>
          <h3>$12,300</h3>
        </div>
        <div className="balanceTwo">
          <p>Gain</p>
          <h3>$2,300</h3>
        </div>
        <div className="balanceTwo">
          <p>Dept</p>
          <h3>-$900</h3>
        </div>
      </div>
    </div>
  );
}

export default Balance;
