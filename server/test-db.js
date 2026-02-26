
import pool from './db.js'; 

async function testConnection() {
  try {
    const { rows } = await pool.query('SELECT NOW()');
    console.log('✅ Успех! Время в БД:', rows[0].now);
  } catch (err) {
    console.error('❌ Ошибка:', err.message);
  } finally {
    await pool.end();
  }
}

testConnection();