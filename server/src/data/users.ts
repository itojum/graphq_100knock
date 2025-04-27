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
  },
    
  {
    id: '4',
    name: 'Bob Brown',
    email: 'user4@example.com',
    company: {
      id: '4',
      name: 'MogeMoge LLC.',
    }
  },

  {
    id: '5',
    name: 'Tanaka Taro',
    email: 'tanaka@example.com',
    company: {
      id: '1',
      name: 'HogeHoge Inc.',
    }
  },

  {
    id: '6',
    name: 'Suzuki Hanako',
    email: 'suzuki@example.com',
    company: {
      id: '2',
      name: 'FugaFuga Co.',
    }
  },

  {
    id: '7',
    name: 'Yamada Ichiro',
    email: 'yamada@example.com',
    company: {
      id: '1',
      name: 'HogeHoge Inc.',
    }
  },

  {
    id: '8',
    name: 'Sato Jiro',
    email: 'sato@example.com',
    company: {
      id: '3',
      name: 'PiyoPiyo Ltd.',
    }
  },

  {
    id: '9',
    name: 'Watanabe Yuki',
    email: 'watanabe@example.com',
    company: {
      id: '4',
      name: 'MogeMoge LLC.',
    }
  },

  {
    id: '10',
    name: 'Kato Shigeru',
    email: 'kato@example.com',
    company: {
      id: '1',
      name: 'HogeHoge Inc.',
    }
  },

  {
    id: '11',
    name: 'Ito Momoko',
    email: 'ito@example.com',
    company: {
      id: '2',
      name: 'FugaFuga Co.',
    }
  },

  {
    id: '12',
    name: 'Nakamura Ken',
    email: 'nakamura@example.com', 
    company: {
      id: '3',
      name: 'PiyoPiyo Ltd.',
    }
  }
];

export const getUserById = (id: string) => {
  return users.find(user => user.id === id);
}

export const getUsersByCompanyId = (companyId: string) => {
  return users.filter(user => user.company.id === companyId);
}

export const createUser = (name: string, email: string, companyId: string) => {
  const company = users.find(user => user.company.id === companyId)?.company;
  if (!company) {
    throw new Error(`Company with ID ${companyId} not found`);
  }
  
  const newUser = {
    id: (users.length + 1).toString(),
    name,
    email,
    company
  };

  users.push(newUser);
  return newUser;
}