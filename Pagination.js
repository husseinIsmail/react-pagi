import React from 'react';
import propTypes from 'prop-types';
import { BEVMComponent, Icon } from '../../shared';

const Pagination = ({ pageLinks }) => {
  const currentPagePath = window.location.pathname;
  const currentPageIndex = pageLinks.indexOf(currentPagePath);
  const isCurrentPageFirst = currentPagePath === pageLinks[0];
  const isCurrentPageLast = currentPagePath === pageLinks[pageLinks.length - 1];

  const renderPrevArrow = () =>
    !isCurrentPageFirst && (
      <BEVMComponent is='li' element='item' block='pagination'>
        <BEVMComponent
          is='a'
          element='link'
          block='pagination'
          href={pageLinks[pageLinks.indexOf(currentPagePath) - 1]}
        >
          <Icon name='arrow-left' />
        </BEVMComponent>
      </BEVMComponent>
    );

  const renderNextArrow = () =>
    !isCurrentPageLast && (
      <BEVMComponent is='li' element='item' block='pagination'>
        <BEVMComponent
          is='a'
          element='link'
          block='pagination'
          href={pageLinks[pageLinks.indexOf(currentPagePath) + 1]}
        >
          <Icon name='arrow-right' />
        </BEVMComponent>
      </BEVMComponent>
    );

  const renderPaceHolder = pageLink => (
    <BEVMComponent
      is='li'
      element='item'
      modifier='disabled'
      block='pagination'
      key={pageLink}
    >
      ...
    </BEVMComponent>
  );

  const pageNumberItem = (pageLink, index) => (
    <BEVMComponent
      is='li'
      element='item'
      modifier={pageLink === currentPagePath ? 'active' : ''}
      block='pagination'
      key={pageLink}
    >
      <BEVMComponent is='a' element='link' block='pagination' href={pageLink}>
        {index + 1}
      </BEVMComponent>
    </BEVMComponent>
  );

  return (
    !!pageLinks.length && (
      <BEVMComponent is='ul' block='pagination'>
        {renderPrevArrow()}

        {pageLinks.map((pageLink, index) => {
          const isInRange =
            index >= currentPageIndex - 1 && index <= currentPageIndex + 1;
          const isFirstPage = index === 0;
          const isLastPage = index === pageLinks.length - 1;

          if (isFirstPage || isLastPage || isInRange) {
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
      </BEVMComponent>
    )
  );
};

Pagination.propTypes = {
  pageLinks: propTypes.array.isRequired
};

export default Pagination;
