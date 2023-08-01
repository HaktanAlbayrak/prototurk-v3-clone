import ReactPaginate from 'react-paginate';
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';
import PropTypes from 'prop-types';

export default function Pagination({ count, range }) {
  return (
    <ReactPaginate
      className='pagination'
      breakLabel='...'
      nextLabel={<MdOutlineKeyboardArrowRight size={18} />}
      // onPageChange={handlePageClick}
      pageRangeDisplayed={range}
      pageCount={count}
      previousLabel={<MdOutlineKeyboardArrowLeft size={18} />}
      renderOnZeroPageCount={null}
    />
  );
}

Pagination.propTypes = {
  count: PropTypes.number.isRequired,
  count: PropTypes.number,
};

Pagination.defaultProps = {
  range: 3,
};
