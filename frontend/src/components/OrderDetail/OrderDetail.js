import styles from "./OrderDetail.module.css";
import LineItem from "../LineItem/LineItem";

// Used to display the details of any order, including the cart (unpaid order)
export default function OrderDetail({
  order,
  handleChangeQty,
  handleCheckout,
}) {
  if (!order) return null;
// console.log(order);
  const lineItems = order.lineItems.map((item) => (
    <LineItem
      lineItem={item}
      isPaid={order.isPaid}
      handleChangeQty={handleChangeQty}
      key={item._id}
    />
  ));


  return (
    <div className={styles.OrderDetail}>
      <div className={styles.sectionHeading}>
        {order.isPaid ? (
          <span>
            ORDER ID  <span className="smaller">{order.orderId}{"  "}</span>
          </span>
        ) : (
          <span>NEW ORDER </span>
        )}
        <span>{ new Date(order.updatedAt).toLocaleDateString()}</span>
      </div>
      <div
        className={`${styles.lineItemContainer} flex-ctr-ctr flex-col scroll-y`}
      >
        {lineItems.length ? (
          <>
            {lineItems}
            <section >
              {order.isPaid ? (
                <span className={styles.right}>&nbsp;&nbsp;</span>
              ) : (
                <button
                  className={styles.button}
                  onClick={handleCheckout}
                  disabled={!lineItems.length}
                >
                  CHECK OUT
                </button>
              )}
             <div className={styles.total}>
              <span>Total: </span>
              <span >{order.totalQty}</span>
              <span className={styles.right}>
                ${order.orderTotal.toFixed(2)}
              </span>
              </div>
            </section>
          </>
        ) : (
          <div className={styles.hungry}>Drooling?</div>
        )}
      </div>
    </div>
  );
}
