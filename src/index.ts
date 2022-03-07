import { config } from "dotenv";
import { createApp } from "./utils/CreateApp";
import createConnection from './database/connect';
config();

const PORT = process.env.PORT || 8080;

async function main() {
    try {
        const app = createApp();
        app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
    } catch(error) {
        console.log(error)
    }
}

main();
createConnection();