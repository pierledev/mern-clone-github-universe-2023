import { useState } from 'react';
import { useAppContext } from '../../context/appContext';
import { FilterOptions } from '.';
import { ButtonLink, Modal } from '../shared';
import {
  HiOutlineMagnifyingGlass,
  HiOutlineAdjustmentsHorizontal,
  HiXMark,
} from 'react-icons/hi2';

import styles from './Filter.module.scss';

const Filter = () => {
  const { clearFilter, filterCategories, handleFilterInput, sessions } =
    useAppContext();

  const [showFilter, setShowFilter] = useState(false);

  const handleShowFilter = () => setShowFilter(true);
  const handleCloseFilter = () => setShowFilter(false);

  return (
    <>
      {showFilter && (
        <Modal onClose={handleCloseFilter}>
          <div className={`${styles.filter__options} ${styles.active}`}>
            <div className={styles['filter__options-top']}>
              <h2>Filters</h2>
              <button type='button' onClick={handleCloseFilter}>
                <HiXMark />
              </button>
            </div>
            <div className={styles['filter__options-container']}>
              <FilterOptions />
            </div>
            <div className={styles.filter__buttons}>
              <ButtonLink variant='secondary' onClick={clearFilter}>
                Clear
              </ButtonLink>
              <ButtonLink type='submit' onClick={handleCloseFilter}>
                Done
              </ButtonLink>
            </div>
          </div>
        </Modal>
      )}
      <div className={styles.filter}>
        <div className={styles.filter__top}>
          <div className={styles['filter__top-actions']}>
            <h2>Filters</h2>
            <button type='button' onClick={clearFilter}>
              Clear
            </button>
          </div>
          <div className={styles.filter__search}>
            <form>
              <input
                type='text'
                name='search'
                id='search'
                placeholder='Search'
                value={filterCategories.search}
                onChange={handleFilterInput}
              />
              <HiOutlineMagnifyingGlass
                className={styles['filter__search-icon']}
              />
            </form>
            <button type='button' onClick={handleShowFilter}>
              <HiOutlineAdjustmentsHorizontal />
            </button>
          </div>
        </div>

        <div className={styles.filter__options}>
          <div className={styles['filter__options-top']}>
            <h2>Filters</h2>
            <button type='button'>
              <HiXMark />
            </button>
          </div>
          <div className={styles['filter__options-container']}>
            <FilterOptions />
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
