declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DB_USER: string;
      DB_PWD: string;
      DB_PORT: number;
      DB_HOST: string;
      DB_INSTANCE: string;
      DB_VENDOR: string;
      API_PORT: number;
    }
  }
}

export {};
