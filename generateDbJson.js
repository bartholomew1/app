const faker = require('faker');
const fs = require('fs');

const generateUsers = (count) => {
  const users = [];

  for (let i = 0; i < count; i++) {
    const user = {
      id: i + 1,
      name: faker.name.findName(),
      email: faker.internet.email(),
      city: faker.address.city(),
      country: faker.address.country(),
    };

    users.push(user);
  }

  return { users };
};

const generateDbJson = (count, filename) => {
  const data = generateUsers(count);
  const json = JSON.stringify(data, null, 2);

  fs.writeFileSync(filename, json);

  console.log(`Generated ${count} users in ${filename}`);
};

generateDbJson(80, 'db.json');