import React from 'react';
import propTypes from 'prop-types';
import './Pagination.css';

const Pagination = ({ pageLinks }) => {
  const currentPagePath = window.location.pathname;
  const currentPageIndex = pageLinks.indexOf(currentPagePath);
  const isCurrentPageFirst = currentPagePath === pageLinks[0];
  const isCurrentPageLast = currentPagePath === pageLinks[pageLinks.length - 1];

  const isInRange = (index) => {
    return index >= currentPageIndex - 1 && index <= currentPageIndex + 1;
  };

  const renderPrevArrow = () =>
    !isCurrentPageFirst && (
      <li className='pagination-item'>
        <a className='pagination-item-link' href={pageLinks[pageLinks.indexOf(currentPagePath) - 1]}>&lt;</a>
      </li>
    );

  const renderNextArrow = () =>
    !isCurrentPageLast && (
      <li className='pagination-item'>
        <a className='pagination-item-link' href={pageLinks[pageLinks.indexOf(currentPagePath) + 1]}>&gt;</a>
      </li>
    );

  const renderPaceHolder = pageLink => (
    <li className='pagination-item no-click' key={pageLink}>...</li>
  );

  const pageNumberItem = (pageLink, index) => (
    <li key={pageLink} className={pageLink === currentPagePath ? 'pagination-item active' : 'pagination-item'}>
      <a className='pagination-item-link' href={pageLink}>
        {index + 1}
      </a>
    </li>
  );

  return (
    pageLinks.length && (
      <div className='pagination-container'>
        <ul>
          {renderPrevArrow()}

          {pageLinks.map((pageLink, index) => {
            const isFirstPage = index === 0;
            const isLastPage = index === pageLinks.length - 1;

            if (isFirstPage || isLastPage || isInRange(index)) {
              return pageNumberItem(pageLink, index);
            }

            if (
              index === currentPageIndex - 2 ||
              index === currentPageIndex + 2
            ) {
              return renderPaceHolder(pageLink);
            }

            return undefined;
          })}

          {renderNextArrow()}
        </ul>
      </div>
    )
  );
};

Pagination.propTypes = {
  pageLinks: propTypes.arrayOf(propTypes.string).isRequired
};

export default Pagination;
