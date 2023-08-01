import ReactPaginate from 'react-paginate';
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';
import PropTypes from 'prop-types';
import { useBreakpoint } from '~/hooks/use-breakpint';

export default function Pagination({ count, range }) {
  const { breakpoint } = useBreakpoint();
  return (
    <ReactPaginate
      className='pagination'
      breakLabel='...'
      nextLabel={<MdOutlineKeyboardArrowRight size={18} />}
      // onPageChange={handlePageClick}
      pageRangeDisplayed={range}
      marginPagesDisplayed={breakpoint === 'desktop' ? 3 : 1}
      pageCount={count}
      previousLabel={<MdOutlineKeyboardArrowLeft size={18} />}
      renderOnZeroPageCount={null}
    />
  );
}

Pagination.propTypes = {
  count: PropTypes.number.isRequired,
  range: PropTypes.number,
};

Pagination.defaultProps = {
  range: 3,
};
