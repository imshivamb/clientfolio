declare global {
    namespace NodeJS {
      interface ProcessEnv {
        REACT_APP_UNSPLASH_ACCESS_KEY: string;
      }
    }
  }
  
  export {};