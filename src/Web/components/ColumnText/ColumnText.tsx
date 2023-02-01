import styles from "./ColumnText.module.css";

const ColumnText = () => {
  const { container, columnCard } = styles;

  return (
    <section className={container}>
      <div className={columnCard}>
        <span>Feline Comfort</span>
        <p>
          Our cat beds are made from soft, plush materials that will provide
          your cat with a comfortable place to rest and sleep. With various
          sizes and shapes available, you can find the perfect bed to fit your
          cat's unique needs.
        </p>
      </div>
      <div className={columnCard}>
        <span>Improved Health</span>
        <p>
          Sleeping in a comfortable bed can help your cat get better sleep and
          reduce stress, leading to improved health and well-being. Our beds are
          also made with materials that are hypoallergenic and safe for your
          pet, helping to prevent allergies and skin irritations.
        </p>
      </div>
      <div className={columnCard}>
        <span>Stylish Design</span>
        <p>
          Our cat beds come in a range of colors and designs, so you can choose
          one that fits in with your home décor. With our beds, you don't have
          to sacrifice style for comfort, as our products are both functional
          and fashionable.
        </p>
      </div>
    </section>
  );
};

export default ColumnText;
