import { createClient } from "redis";

const redisClient = createClient({
  url: "redis://localhost:6379", // Redis 서버 주소
});

redisClient.on("error", (err) => {
  console.error("Redis client error:", err);
});

const connectRedis = async () => {
  if (!redisClient.isOpen) {
    await redisClient.connect();
  }
};

export { redisClient, connectRedis };
