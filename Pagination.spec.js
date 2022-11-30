import React from 'react';
import { render, screen } from '@testing-library/react';

import Pagination from './Pagination';

describe(Pagination, () => {
  describe('Pagination', () => {
    describe('When provided non-empty pageLinks array', () => {
      beforeEach(() => {
        delete window.location;
        window.location = new URL('https://www.example.com/weblog');
      });

      describe('When the first element is the hosting path', () => {
        const pageLinks = [
          '/weblog',
          '/weblog/pagina/2',
          '/weblog/pagina/3',
          '/weblog/pagina/4',
          '/weblog/pagina/5',
          '/weblog/pagina/6',
          '/weblog/pagina/7',
          '/weblog/pagina/8'
        ];

        it('does not render left arrow', () => {
          const { container } = render(<Pagination pageLinks={pageLinks} />);
          const leftArrow = container.getElementsByClassName(
            'nyc-icon-arrow-left'
          )[0];

          expect(leftArrow?.parentElement).toBeUndefined();
        });

        it('renders right arrow', () => {
          const { container } = render(<Pagination pageLinks={pageLinks} />);
          const rightArrow = container.getElementsByClassName(
            'nyc-icon-arrow-right'
          )[0];

          expect(rightArrow?.parentElement).toHaveAttribute(
            'href',
            '/weblog/pagina/2'
          );
        });
      });

      describe('When the 4th element is the hosting path', () => {
        const pageLinks = [
          '/first',
          '/weblog/pagina/2',
          '/weblog/pagina/3',
          '/weblog',
          '/weblog/pagina/5',
          '/weblog/pagina/6',
          '/weblog/pagina/7',
          '/weblog/pagina/8'
        ];

        it('displays 2 placeholders', () => {
          render(<Pagination pageLinks={pageLinks} />);
          const placeholders = screen.getAllByText('...');

          expect(placeholders).toHaveLength(2);
        });

        it('highlights the active path link', () => {
          render(<Pagination pageLinks={pageLinks} />);
          const activePageNumber = screen.getByText('4').parentElement;

          expect(activePageNumber).toHaveClass('-active');
        });

        it('renders page numbers in range with respective link', () => {
          render(<Pagination pageLinks={pageLinks} />);
          const fifthPageLink = screen.getByText('5');

          expect(fifthPageLink).toHaveAttribute('href', pageLinks[4]);
        });

        it('does not render page numbers out of range', () => {
          render(<Pagination pageLinks={pageLinks} />);
          const fifthPageLink = screen.queryByText('6');

          expect(fifthPageLink).toBeNull();
        });
      });

      describe('When the last element is the hosting path', () => {
        const pageLinks = [
          '/first',
          '/weblog/pagina/2',
          '/weblog/pagina/3',
          '/weblog/pagina/4',
          '/weblog/pagina/5',
          '/weblog/pagina/6',
          '/weblog/pagina/7',
          '/weblog'
        ];

        it('does not render right arrow', () => {
          const { container } = render(<Pagination pageLinks={pageLinks} />);
          const rightArrow = container.getElementsByClassName(
            'nyc-icon-arrow-right'
          )[0];

          expect(rightArrow?.paarentElement).toBeUndefined();
        });

        it('renders left arrow', () => {
          const { container } = render(<Pagination pageLinks={pageLinks} />);
          const leftArrow = container.getElementsByClassName(
            'nyc-icon-arrow-left'
          )[0];

          expect(leftArrow?.parentElement).toHaveAttribute(
            'href',
            '/weblog/pagina/7'
          );
        });
      });
    });

    describe('When provided an empty pageLinks array', () => {
      it('does should render nothing', () => {
        const { container } = render(<Pagination pageLinks={[]} />);
        const pageList = container.getElementsByTagName('ul')[0];

        expect(pageList).toBeUndefined();
      });
    });
  });
});
