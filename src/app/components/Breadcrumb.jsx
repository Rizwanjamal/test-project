import Link from 'next/link';

const Breadcrumb = ({ breadcrumbs }) => {
  return (
    <nav>
      {breadcrumbs.map((breadcrumb, index) => {
        return breadcrumb.url ? (
          <Link href={breadcrumb.url} key={breadcrumb.name} className='font-semibold text-gray'>
              {breadcrumb.name}
              {index < breadcrumbs.length - 1 && ' / '}
          </Link>
        ) : (
          <span key={breadcrumb.name} className='font-semibold'>
            {breadcrumb.name}
            {index < breadcrumbs.length - 1 && ' / '}
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
