import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'DemoBlogAndabopa',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    "cordova-plugin-inappbrowser": {}
  }
};

export default config;
