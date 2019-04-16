import React from 'react';
import { Flex, Button, Text } from 'rebass';
import styled from 'styled-components';

const PaginationWrapper = styled(Flex)`
  justify-content: center;
  align-items: center;
`;

const Pagination = ({ currentPage, onPrevPageClick, onNextPageClick }) => {
  return (
    <PaginationWrapper>
      <Button bg="white" color="black" onClick={() => onPrevPageClick()}>
        prev page
      </Button>
      <Text>{currentPage}</Text>
      <Button bg="white" color="black" onClick={() => onNextPageClick()}>
        next page
      </Button>
    </PaginationWrapper>
  );
};

export default Pagination;
