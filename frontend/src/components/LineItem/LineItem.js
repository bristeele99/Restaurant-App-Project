import styles from "./LineItem.module.css";

export default function LineItem({ lineItem, isPaid, handleChangeQty }) {
 
  console.log(lineItem);
  return (
    <div className={styles.LineItem}>
      {/* <div className="flex-ctr-ctr">{lineItem.item.img}</div> */}
      <div >
        <span >{lineItem.item.name}</span>
        {/* <span>{lineItem.item.price}</span> */}
        {/* <span>{lineItem.item.price.toFixed(2)}</span> */}
      </div>
      <div
        className={styles.qty}
        style={{ justifyContent: isPaid && "center" }}
      >
        {!isPaid && (
          <button
            className={styles.button}
            onClick={() => handleChangeQty( lineItem.item._id, lineItem.qty - 1)
            }
          >
            -
          </button>
        )}
        <span>{lineItem.qty}</span>
        {!isPaid && (
          <button
            className={styles.button}
            onClick={() => handleChangeQty( lineItem.item._id, lineItem.qty + 1)}
          >
            +
          </button>
        )}
      </div>
      <div className={styles.extPrice}>${lineItem.extPrice.toFixed(2)}</div>
    </div>
  );
}
