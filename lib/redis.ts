const redis = require("redis");
const bluebird = require('bluebird');

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

const client = redis.createClient({
  port: process.env.REDISPORT,
  host: process.env.REDISIP,
  password: process.env.REDISPASS,
  db: process.env.REDISDB,
});

client.setToken = (token: string, identifier: {user: string; userID: string}) => {
  console.log(JSON.stringify(identifier));
  return client.setAsync(String(token), JSON.stringify(identifier));
};

client.checkToken = (token: string, userToCheck: {user: string; userID: string}) => {
  console.log(token);
  return client.getAsync(String(token)).then(function(user: null | string) {
    const data = user !== null ? JSON.parse(user) : null;
    return data === null ? false :
     (userToCheck.user === data.user && Number(userToCheck.userID) === Number(data.userID));
  });
};

export default client;
