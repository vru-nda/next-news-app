import NewsList from '@/components/news-list';

const News = async () => {
  const response = await fetch('http://localhost:8080/news');

  if (!response.ok) {
    throw new Error('Failed to fetch news');
  }
  const news = await response.json();

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />;
    </>
  );
};

export default News;
