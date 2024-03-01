const fetchPost = async (length) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${length + 1}`
    );
    const data = await response.json();
    return data;
}

export default fetchPost