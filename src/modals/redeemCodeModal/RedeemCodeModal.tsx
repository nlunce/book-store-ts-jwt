import "./redeemCodeModal.css";
import { RedeemCode } from "../../ui-components";

interface RedeemCodeModalProps {
  overlayFunctionality: () => void; // Specify the function's return type
}

const RedeemCodeModal: React.FC<RedeemCodeModalProps> = (props) => {
  return (
    <>
      <div
        onClick={props.overlayFunctionality}
        className="redeem-code-overlay"
      ></div>
      <div className="redeem-code-modal-content">
        <RedeemCode
          overrides={{
            MyIcon: {
              style: { cursor: "pointer" },
              onClick: props.overlayFunctionality,
            },
          }}
        />
      </div>
    </>
  );
};

export default RedeemCodeModal;
