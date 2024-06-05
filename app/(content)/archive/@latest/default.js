import NewsList from '@/components/news-list';
import {getLatestNews} from '@/lib/news';

const LatestNewsPage = async () => {
  const latestNews = await getLatestNews();

  return (
    <div>
      <h1>Latest News</h1>
      <NewsList news={latestNews} />
    </div>
  );
};

export default LatestNewsPage;
