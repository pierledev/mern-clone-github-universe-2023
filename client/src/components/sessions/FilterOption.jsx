import { useState } from 'react';
import { useAppContext } from '../../context/appContext';
import { formatDate } from '../../utils';
import { HiOutlineChevronDown, HiOutlineChevronUp } from 'react-icons/hi2';
import { filters } from '../../data';

import styles from './FilterOption.module.scss';

const FilterOption = ({ category }) => {
  const { handleFilterInput, filterCategories } = useAppContext();
  const [filterOpen, setFilterOpen] = useState(false);

  const handleFilterOpen = () => setFilterOpen((prevState) => !prevState);

  return (
    <div key={category} className={styles.filterOption}>
      <button type='button' onClick={handleFilterOpen}>
        <label htmlFor={category}>{category} </label>
        {filterOpen ? <HiOutlineChevronUp /> : <HiOutlineChevronDown />}
      </button>
      <div
        className={`${styles.filterOption__options} ${
          filterOpen ? styles['filterOption__options--active'] : ''
        }`}
      >
        {filters[category].map((singleOption) => {
          const { id, option } = singleOption;

          return (
            <div key={id} className={styles.filterOption__option}>
              <input
                type='checkbox'
                name={category}
                id={option}
                value={option}
                onChange={(e) => handleFilterInput(e)}
                checked={filterCategories[category].includes(option)}
              />
              <label htmlFor={option}>
                {category === 'days' ? formatDate(option) : option}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FilterOption;
