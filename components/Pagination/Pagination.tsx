import css from './Pagination.module.css';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ totalPages, currentPage, onPageChange }: PaginationProps) => {
  if (totalPages <= 1) return null;

  return (
    <ul className={css.pagination}>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
        <li key={page} className={page === currentPage ? css.active : ''}>
          <a
            href="#"
            onClick={e => {
              e.preventDefault();
              onPageChange(page);
            }}
          >
            {page}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
