/* eslint-disable testing-library/no-node-access */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Pagination from './Pagination';

describe('Pagination', () => {
  describe('When provided non-empty pageLinks array', () => {
    describe('When the first element is the hosting path', () => {
      beforeEach(() => {
        delete window.location
        window.location = {
          pathname: '/blog'
        };
      });

      const pageLinks = [
        '/blog',
        '/blog/page/2',
        '/blog/page/3',
        '/blog/page/4',
        '/blog/page/5',
        '/blog/page/6',
        '/blog/page/7',
        '/blog/page/8'
      ];

      it('does not render left arrow', () => {
        render(<Pagination pageLinks={pageLinks} />);
        const leftArrow = screen.queryByText('<');
        expect(leftArrow).toBeNull();
      });

      it('renders right arrow', () => {
        render(<Pagination pageLinks={pageLinks} />);
        const rightArrow = screen.getByText('>');
        console.log('here', rightArrow)
        expect(rightArrow).toHaveAttribute('href', '/blog/page/2');
      });

      it('displays 1 placeholder', () => {
        render(<Pagination pageLinks={pageLinks} />);
        const placeholders = screen.getAllByText('...');
        expect(placeholders).toHaveLength(1);
      });

      it('highlights the active path link', () => {
        render(<Pagination pageLinks={pageLinks} />);
        const activePageNumber = screen.getByText('1').parentElement;
        expect(activePageNumber).toHaveClass('active');
      });

      it('renders page numbers in range with respective link', () => {
        render(<Pagination pageLinks={pageLinks} />);
        const fifthPageLink = screen.getByText('2');
        expect(fifthPageLink).toHaveAttribute('href', pageLinks[1]);
      });

      it('does not render page numbers out of range', () => {
        render(<Pagination pageLinks={pageLinks} />);
        const fifthPageLink = screen.queryByText('3');
        expect(fifthPageLink).toBeNull();
      });

      it('renders last page link element', () => {
        render(<Pagination pageLinks={pageLinks} />);
        const fifthPageLink = screen.queryByText('8');
        expect(fifthPageLink).toHaveAttribute('href', pageLinks[7]);
      });
    });

    describe('When the 4th element is the hosting path', () => {
      beforeEach(() => {
        delete window.location
        window.location = {
          pathname: '/blog/page/4'
        };
      });

      const pageLinks = [
        '/blog',
        '/blog/page/2',
        '/blog/page/3',
        '/blog/page/4',
        '/blog/page/5',
        '/blog/page/6',
        '/blog/page/7',
        '/blog/page/8'
      ];

      it('renders left arrow', () => {
        render(<Pagination pageLinks={pageLinks} />);
        const leftArrow = screen.queryByText('<');
        expect(leftArrow).toHaveAttribute('href', '/blog/page/3');
      });

      it('renders right arrow', () => {
        render(<Pagination pageLinks={pageLinks} />);
        const rightArrow = screen.getByText('>');
        expect(rightArrow).toHaveAttribute('href', '/blog/page/5');
      });

      it('displays 2 placeholders', () => {
        render(<Pagination pageLinks={pageLinks} />);
        const placeholders = screen.getAllByText('...');
        expect(placeholders).toHaveLength(2);
      });

      it('highlights the active path link', () => {
        render(<Pagination pageLinks={pageLinks} />);
        const activePageNumber = screen.getByText('4').parentElement;
        expect(activePageNumber).toHaveClass('active');
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

      it('renders first page link element', () => {
        render(<Pagination pageLinks={pageLinks} />);
        const fifthPageLink = screen.queryByText('1');
        expect(fifthPageLink).toHaveAttribute('href', pageLinks[0]);
      });

      it('renders last page link element', () => {
        render(<Pagination pageLinks={pageLinks} />);
        const fifthPageLink = screen.queryByText('8');
        expect(fifthPageLink).toHaveAttribute('href', pageLinks[7]);
      });
    });

    describe('When the last element is the hosting path', () => {
      beforeEach(() => {
        delete window.location
        window.location = {
          pathname: '/blog/page/8'
        };
      });

      const pageLinks = [
        '/blog',
        '/blog/page/2',
        '/blog/page/3',
        '/blog/page/4',
        '/blog/page/5',
        '/blog/page/6',
        '/blog/page/7',
        '/blog/page/8'
      ];

      it('does not render right arrow', () => {
        render(<Pagination pageLinks={pageLinks} />);
        const rightArrow = screen.queryByText('>');
        expect(rightArrow).toBeNull();
      });

      it('renders left arrow', () => {
        render(<Pagination pageLinks={pageLinks} />);
        const leftArrow = screen.queryByText('<');
        expect(leftArrow).toHaveAttribute('href', '/blog/page/7');
      });

      it('displays 1 placeholder', () => {
        render(<Pagination pageLinks={pageLinks} />);
        const placeholders = screen.getAllByText('...');
        expect(placeholders).toHaveLength(1);
      });

      it('highlights the active path link', () => {
        render(<Pagination pageLinks={pageLinks} />);
        const activePageNumber = screen.getByText('8').parentElement;
        expect(activePageNumber).toHaveClass('active');
      });

      it('renders page numbers in range with respective link', () => {
        render(<Pagination pageLinks={pageLinks} />);
        const fifthPageLink = screen.getByText('7');
        expect(fifthPageLink).toHaveAttribute('href', pageLinks[6]);
      });
      
      it('does not render page numbers out of range', () => {
        render(<Pagination pageLinks={pageLinks} />);
        const fifthPageLink = screen.queryByText('6');
        expect(fifthPageLink).toBeNull();
      });

      it('renders first page link element', () => {
        render(<Pagination pageLinks={pageLinks} />);
        const fifthPageLink = screen.queryByText('1');
        expect(fifthPageLink).toHaveAttribute('href', pageLinks[0]);
      });
    });
  });

  describe('When provided an empty pageLinks array', () => {
    it('does not render anything', () => {
      render(<Pagination pageLinks={[]} />);
      const linkList = screen.queryByRole('list');
      expect(linkList).toBeNull();
    });
  });
});
