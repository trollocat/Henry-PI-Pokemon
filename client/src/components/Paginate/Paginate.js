import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../redux/actions";
import {
  PaginateContainer,
  PageArrowButton,
  PageNumber,
} from "./StyledPaginate";
import { ReactComponent as StartSVG } from "../../assets/icons/start.svg";
import { ReactComponent as PreviousSVG } from "../../assets/icons/previous.svg";
import { ReactComponent as NextSVG } from "../../assets/icons/next.svg";
import { ReactComponent as EndSVG } from "../../assets/icons/end.svg";

const Paginate = () => {
  const dispatch = useDispatch();
  const { currentPage, totalPages } = useSelector((state) => state);
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) pageNumbers.push(i);
  const startHandler = () => {
    dispatch(setCurrentPage(1));
  };
  const previousHandler = () => {
    dispatch(setCurrentPage(currentPage - 1));
  };
  const goToHandler = (page) => {
    dispatch(setCurrentPage(page));
  };
  const nextHandler = () => {
    dispatch(setCurrentPage(currentPage + 1));
  };
  const endHandler = () => {
    dispatch(setCurrentPage(totalPages));
  };
  return (
    <PaginateContainer>
      <PageArrowButton onClick={startHandler} disabled={currentPage <= 1}>
        <StartSVG height="2em" />
      </PageArrowButton>
      <PageArrowButton onClick={previousHandler} disabled={currentPage <= 1}>
        <PreviousSVG height="2em" />
      </PageArrowButton>
      {pageNumbers.map((pageNumber) => (
        <PageNumber
          key={pageNumber}
          onClick={() => {
            goToHandler(pageNumber);
          }}
          isCurrent={pageNumber===currentPage && true}
        >
          {pageNumber}
        </PageNumber>
      ))}
      <PageArrowButton
        onClick={nextHandler}
        disabled={currentPage === totalPages}
      >
        <NextSVG height="2em" />
      </PageArrowButton>
      <PageArrowButton
        onClick={endHandler}
        disabled={currentPage === totalPages}
      >
        <EndSVG height="2em" />
      </PageArrowButton>
    </PaginateContainer>
  );
};

export default Paginate;
