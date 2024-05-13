import Link from 'next/link';
import Image from 'next/image';

// import classes from './meal-item.module.css';

export default function ProductItem({ title, slug, image, summary, creator }) {
  return (
    <article >
      <header>
        <div >
          {/* <Image
            src={`https://maxschwarzmueller-nextjs-demo-users-image.s3.amazonaws.com/${image}`}
            alt={title}
            fill
          /> */}
        </div>
        <div >
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div >
        <p >{summary}</p>
        <div>
          <Link href={`/products/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}
