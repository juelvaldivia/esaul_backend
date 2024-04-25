import Api from './src/api/index.ts';
import Database from './src/database/index.ts';

const PORT = 3000;
const database = new Database();

const api = new Api(database);

const app = api.apiServer();

app.listen(PORT, () => {
  console.log(`Server is running in ${PORT}`);
});
