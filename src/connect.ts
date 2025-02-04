import postgres from 'postgres';
import dotenv from 'dotenv';
dotenv.config();

const {
  PGHOST: host,
  PGPORT: port,
  PGDATABASE: database,
  PGUSER: username,
  PGPASSWORD: password,
  DEBUG,
} = process.env;

export default postgres({
  host,
  port: parseInt(port || '5432'),
  database,
  username,
  password,
   debug: DEBUG === "true" ? (connection, query, parameters) => {
    console.log('SQL Query:', query);
    console.log('Parameters:', parameters);
  } : DEBUG === "true",
});
