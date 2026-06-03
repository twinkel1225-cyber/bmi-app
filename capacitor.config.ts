import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.bmiapp.fitness',
  appName: 'BMI Diet & Workout',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
