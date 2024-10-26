interface ImportMetaEnv {
    readonly VITE_APP_APIGEE_DEV_SECRET: string;
    // Add other environment variables here
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  