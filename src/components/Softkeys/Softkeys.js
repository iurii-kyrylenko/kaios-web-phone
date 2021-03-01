import css from "./Softkeys.module.css";

const Softkeys = ({ left, center, right }) => {
  return (
    <div className={css.softKeys}>
      <label className={css.left}>{left}</label>
      <label className={css.center}>{center}</label>
      <label className={css.right}>{right}</label>
    </div>
  );
};

export default Softkeys;
