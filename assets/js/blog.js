const blogPosts = JSON.parse(localStorage.getItem('blogPosts'));

const table = document.getElementById('blogTable');

blogPosts.forEach(post => {
  const row = table.insertRow();
  const authorCell = row.insertCell(0);
  const titleCell = row.insertCell(1);
  const contentCell = row.insertCell(2);

  authorCell.textContent = post.author;
  titleCell.textContent = post.title;
  contentCell.textContent = post.content;
});