import { FilterOption } from '.';
import { filters } from '../../data';

const filterCategories = Object.keys(filters);

const FilterOptions = () => {
  return (
    <form>
      {filterCategories.map((category) => (
        <FilterOption category={category} key={category} />
      ))}
    </form>
  );
};

export default FilterOptions;
