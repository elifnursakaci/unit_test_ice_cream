import { useState } from "react";

const Form = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isHover, setIsHover] = useState(false);

  return (
    <form className="mb-5 d-flex justify-content-center align-items-center gap-3">
      <div className="d-flex align-items-center gap-2">
        <input
          onChange={(e) => setIsChecked(e.target.checked)}
          id="terms"
          type="checkbox"
          className="form-check-input"
          style={{ transform: "scale(1.2)" }}
        />
        <label
          htmlFor="terms"
          style={{ fontSize: "1.1rem", cursor: "pointer" }}
        >
          Koşulları okudum ve kabul ediyorum
        </label>
      </div>

      <div
        className="terms-wrapper position-relative"
        style={{ position: "relative" }}
      >
        <p
          style={{
            visibility: isHover ? "visible" : "hidden",
            position: "absolute",
            bottom: "100%",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#f8d7da",
            color: "#721c24",
            padding: "5px 10px",
            borderRadius: "5px",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
            whiteSpace: "nowrap",
          }}
        >
          Size gerçekten bir şey teslim etmeyeceğiz
        </p>
      </div>

      <button
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        disabled={!isChecked}
        className="btn btn-primary"
        style={{
          backgroundColor: isChecked ? "#007bff" : "#6c757d",
          borderColor: isChecked ? "#007bff" : "#6c757d",
          cursor: isChecked ? "pointer" : "not-allowed",
          transition: "background-color 0.3s, border-color 0.3s",
        }}
      >
        Siparişi Onayla
      </button>
    </form>
  );
};

export default Form;
