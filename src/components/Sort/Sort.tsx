import React from 'react';

import styles from './Sort.module.scss';

export let sortList: string[] = [
    'All',
    'brown',
    'red',
    'blue',
    'white'
  ];

const Sort: React.FC = () => {
    let sortRef = React.useRef<HTMLDivElement>(null);
    let [open, setOpen] = React.useState<boolean>(false);
    let [value, setValue] = React.useState<number>(0);

    let onClickListItem = (index: number) => {
        setValue(index)
        setOpen(false);
    };

    React.useEffect(() => {
        let handleClickOutside = (event: MouseEvent) => {
          if (sortRef.current && !event.composedPath().includes(sortRef.current)) {
            setOpen(false);
          }
        };
    
        document.body.addEventListener('click', handleClickOutside);
    
        return () => {
          document.body.removeEventListener('click', handleClickOutside);
        };
    }, []);

  return (
    <div className={styles.sortContainer}>
        <div className={styles.sortName}>color eye</div>
        <div onClick={() => setOpen(!open)} ref={sortRef} className={styles.sortSelect}>
            <p>{sortList[value]}</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="3" viewBox="0 0 6 3" fill="none">
                <line y1="-0.5" x2="3.60561" y2="-0.5" transform="matrix(0.832056 0.554692 -0.35113 0.936327 0 1)" stroke="black"/>
                <line y1="-0.5" x2="3.60569" y2="-0.5" transform="matrix(0.832001 -0.554775 0.351197 0.936302 3 3)" stroke="black"/>
            </svg>
        </div>
        {open && (
            <div className={styles.sortPopup}>
                <ul>
                    {sortList.map((item, index) => (
                        <li className={styles.sortListItem} onClick={() => onClickListItem(index)} key={item}>{item}</li>
                    ))}
                </ul>
            </div>
        )
        }
    </div>
  )
}

export default Sort;