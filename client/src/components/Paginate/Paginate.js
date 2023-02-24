import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../redux/actions";
import {
  PaginateContainer,
  PageArrowButton,
  PageNumber,
} from "./StyledPaginate";

const Paginate = () => {
  const dispatch = useDispatch();
  const { currentPage, totalPages } = useSelector((state) => state);
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) pageNumbers.push(i);
  const previousHandler = () => {
    dispatch(setCurrentPage(currentPage - 1));
  };
  const nextHandler = () => {
    dispatch(setCurrentPage(currentPage + 1));
  };
  return (
    <PaginateContainer>
      <PageArrowButton onClick={previousHandler}>PREVIOUS</PageArrowButton>
      {pageNumbers.map((pageNumber) => (
        <PageNumber>{pageNumber}</PageNumber>
      ))}
      <PageArrowButton onClick={nextHandler}>NEXT</PageArrowButton>
    </PaginateContainer>
  );
};

export default Paginate;
