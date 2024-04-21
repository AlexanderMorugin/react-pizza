import { useEffect, useRef, useState } from 'react';
import arrow from '../../../assets/icons/icon_arrow_sort.svg';

import styles from './sorting.module.scss';


const Sorting = () => {
  const sortRef = useRef(null);
  // const dispatch = useDispatch();
  // const sort = useSelector((state) => state.filter.sort);

  // console.log('sort - ', sort);

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const popupMenu = ['популярности', 'цене', 'алфавиту'];
  const sortName = popupMenu[active];

  const handleClick = (index: number) => {
    setActive(index);
    setOpen(!open);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    const path = event.path || (event.composedPath && event.composedPath());
    if (path && !path.includes(sortRef.current)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
    return () => {
      document.body.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const handleEscapeKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleEscapeKeyDown);
    return () => {
      document.removeEventListener('keydown', handleEscapeKeyDown);
    };
  }, []);

  return (
    <div ref={sortRef} className={styles.sorting}>
      <img className={styles.sorting__image} src={arrow} />
      <span className={styles.sorting__text}>Сортировка&nbsp;по:</span>
      <span className={styles.sorting__link} onClick={() => setOpen(!open)}>
        {sortName}
      </span>

      {/* popup menu */}
      {open && (
        <ul className={styles.popup}>
          {popupMenu.map((item, index) => (
            <li
              key={index}
              className={
                active === index ? styles.popup__active : styles.popup__nav
              }
              onClick={() => handleClick(index)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Sorting;
