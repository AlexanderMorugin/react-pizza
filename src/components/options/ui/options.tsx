import React from 'react';

import style from './options.module.scss';

const Options = () => {
  return (
    <div className={style.options}>
      <div className={style.options__classes}>
        <div className={style.options__active}>тонкое</div>
        <div className={style.options__box}>традиционное</div>
      </div>
      <div className={style.options__sizes}>
        <div className={style.options__active}>26 см</div>
        <div className={style.options__box}>30 см</div>
        <div className={style.options__box}>40 см</div>
      </div>
    </div>
  );
};

export default Options;
