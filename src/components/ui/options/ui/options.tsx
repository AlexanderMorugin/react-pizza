import styles from './options.module.scss';

const Options = () => {
  return (
    <div className={styles.options}>
      <div className={styles.options__classes}>
        <div className={styles.options__active}>тонкое</div>
        <div className={styles.options__box}>традиционное</div>
      </div>
      <div className={styles.options__sizes}>
        <div className={styles.options__active}>26 см</div>
        <div className={styles.options__box}>30 см</div>
        <div className={styles.options__box}>40 см</div>
      </div>
    </div>
  );
};

export default Options;