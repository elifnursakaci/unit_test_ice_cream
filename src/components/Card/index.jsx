const Card = ({ item, addToBasket, clearFromBasket, amount }) => {
  return (
    <div
      style={{
        width: "200px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.2s, box-shadow 0.2s",
      }}
      className="border rounded p-3 d-flex flex-column align-items-center gap-1"
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
      }}
    >
      <img
        height={100}
        src={item.imagePath}
        alt="çeşit-resim"
        style={{ borderRadius: "5px" }}
      />
      <span
        style={{ fontWeight: "bold", fontSize: "1.1rem", textAlign: "center" }}
      >
        {item.name}
      </span>

      <div className="d-flex gap-2 mt-4 align-items-center">
        <button
          onClick={() => clearFromBasket(item.id)}
          className="btn btn-sm btn-outline-danger"
          style={{ borderRadius: "5px" }}
        >
          Sıfırla
        </button>
        <span data-testid="amount" className="fs-2">
          {amount}
        </span>
        <button
          onClick={() => addToBasket(item)}
          className="btn btn-sm btn-outline-success"
          style={{ borderRadius: "5px" }}
        >
          Ekle
        </button>
      </div>
    </div>
  );
};

export default Card;
