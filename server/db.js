import pg from 'pg';
const  {Pool}  = pg;

const pool = new Pool({
  user: 'arina',     // Логин от PostgreSQL
  password: 'новый_пароль',    // Пароль (как при установке)
  host: 'localhost',    // Сервер БД
  database: 'travel_app', // Имя твоей базы
  port: 5432,           // Порт PostgreSQL
});

export default pool; // Теперь этот объект можно использовать везде