import dotenv from "dotenv";

dotenv.config();

interface Config {
   BASE_URL: string;
}

const config: Config = {
   BASE_URL: process.env.BASE_URL || "",
};

export default config;
