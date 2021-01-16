export const fetchUsers = () => fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())


