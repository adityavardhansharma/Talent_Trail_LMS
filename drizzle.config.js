/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./configs/schema.jsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:8cYVEMdQLg5P@ep-frosty-sea-a535658s.us-east-2.aws.neon.tech/neondb?sslmode=require',
    }
  };