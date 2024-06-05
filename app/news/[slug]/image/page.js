import {DUMMY_NEWS} from '@/dummy-news';
import {notFound} from 'next/navigation';

const InterceptedImagePage = ({params}) => {
  const newsSlug = params.slug;
  const newsItem = DUMMY_NEWS.find((item) => item.slug === newsSlug);

  if (!newsItem) {
    notFound();
  }
  return (
    <div className='fullscreen-image'>
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
};

export default InterceptedImagePage;
