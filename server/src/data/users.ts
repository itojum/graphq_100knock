
export const users = [
  {
    id: '1',
    name: 'John Doe',
    email: 'user1@example.com',
    company: {
      id: '1',
      name: 'HogeHoge Inc.',
    }
  },
  
  {
    id: '2',
    name: 'Jane Smith',
    email: 'user2@example.com',
    company: {
      id: '2',
      name: 'FugaFuga Co.',
    }
  },
  
  {
    id: '3',
    name: 'Alice Johnson',
    email: 'user3@example.com',
    company: {
      id: '3',
      name: 'PiyoPiyo Ltd.',
    }
  }
];

export const getUserById = (id: string) => {
  return users.find(user => user.id === id);
}