import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'rebass';

const Pagination = ({ currentPage, onPrevPageClick, onNextPageClick }) => {
  return (
    <Box>
      <button onClick={() => onPrevPageClick()}>prev page</button>
      <span>{currentPage}</span>
      <button onClick={() => onNextPageClick()}>next page</button>
    </Box>
  );
};

Pagination.propTypes = {
  // bla: PropTypes.string,
};

Pagination.defaultProps = {
  // bla: 'test',
};

export default Pagination;
