const fetchNews = async (id) => {
  const response = await fetch(`http://localhost:8000/back.php?id=${id}`);
  const data = await response.json();
  console.log(data);
};

fetchNews(543010);