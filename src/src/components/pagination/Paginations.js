import React from 'react'
import Pagination from 'react-bootstrap/Pagination';

const Paginations = ({ handlePrevious, handleNext, page, pageCount, setPage }) => {
  // Define how many page buttons you want to display
  const maxPageButtons = 5; // You can adjust this number based on your preference
  console.log("Page Count:", pageCount);
  

  // Calculate the range of page numbers to display
  let startPage = Math.max(page - Math.floor(maxPageButtons / 2), 1);
  let endPage = startPage + maxPageButtons - 1;
  if (endPage > pageCount) {
    endPage = pageCount;
    startPage = Math.max(endPage - maxPageButtons + 1, 1);
  }
  return (
    <>
      {pageCount > 1 && (
        <div className="pagination_div d-flex justify-content-end mx-5">
          <Pagination>
            <Pagination.Prev onClick={() => handlePrevious()} disabled={page === 1} />
            {Array.from({ length: endPage - startPage + 1 }, (_, index) => {
              const pageNumber = startPage + index;
              return (
                <Pagination.Item
                  key={pageNumber}
                  active={page === pageNumber}
                  onClick={() => setPage(pageNumber)}
                >
                  {pageNumber}
                </Pagination.Item>
              );
            })}
            <Pagination.Next onClick={() => handleNext()} disabled={page === pageCount} />
          </Pagination>
        </div>
      )}
    </>
  )
}

export default Paginations