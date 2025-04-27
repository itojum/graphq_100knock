
export const users = [
  {
    id: '1',
    name: 'John Doe',
    email: 'user1@example.com',
  },
  
  {
    id: '2',
    name: 'Jane Smith',
    email: 'user2@example.com',
  },
  
  {
    id: '3',
    name: 'Alice Johnson',
    email: 'user3@example.com',
  }
];

export const getUserById = (id: string) => {
  return users.find(user => user.id === id);
}