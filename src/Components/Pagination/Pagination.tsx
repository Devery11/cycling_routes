import classNames from "classnames";
import React from "react";
import {DisasterType} from "../../../types/DisasterType";

type Props = {
    disasters: DisasterType,
    page: number,
    setPage: React.Dispatch<React.SetStateAction<number>>,
};

export const Pagination: React.FC<Props> = ({ disasters, page, setPage }) => {
    const totalPageCount = Math.floor((disasters.totalResults / 25));

  return (
      <div className="pagination">
          <div
              className={classNames('pagination__cell button', {
                  'pagination--disabled': page === 1,
              })}
              onClick={() => setPage((prevState) => prevState - 1)}
          >
              Prev
          </div>
          <div
              className={classNames('pagination__cell button', {
                  'pagination--disabled': page === 1,
              })}
              onClick={() => setPage(1)}
          >
              1
          </div>
          {page > 4 ? (
              <>
                  <div className="pagination__complete button pagination--disabled">...</div>
                  {[0, 1, 2].map(number => {
                      return (
                          <div
                              className={classNames('pagination__cell button', {
                                  'pagination--disabled': page === page + number,
                              })}
                              key={page + number}
                              onClick={() => setPage(page + number)}
                          >
                              {page + number}
                          </div>
                      );
                  })}
              </>
          ) : (
              <>
                  {[2, 3, 4, 5].map(number => {
                      return (
                          <div
                              className={classNames('pagination__cell button', {
                                  'pagination--disabled': page === number,
                              })}
                              key={number}
                              onClick={() => setPage(number)}
                          >
                              {number}
                          </div>
                      );
                  })}
              </>
          )}

          <div className="pagination__complete button pagination--disabled">...</div>
          <div
              className={classNames('pagination__cell button', {
                  'pagination--disabled': page === totalPageCount,
              })}
              onClick={() => setPage(
                  totalPageCount
              )}>
              {totalPageCount}
          </div>
          <div className="pagination__cell button">Next</div>
      </div>
  );
};
