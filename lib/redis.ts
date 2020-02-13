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

client.setToken = (username: string, token: string) => {
  return client.setAsync(String(token), username);
};

client.checkToken = (username: string, token: string) => {
  return client.getAsync(String(token)).then(function(user: null) {
    return user === null ? false : username === user;
  });
};

export default client;
