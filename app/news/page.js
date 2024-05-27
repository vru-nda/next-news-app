import NewsList from '@/components/news-list';
import {DUMMY_NEWS} from '@/dummy-news';

const News = () => {
  return (
    <>
      <h1>News Page</h1>
      <NewsList news={DUMMY_NEWS} />
    </>
  );
};

export default News;
