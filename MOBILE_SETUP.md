# 📱 BMI Diet & Workout App - Mobile Setup Guide

## Overview

Your React web app has been successfully converted into an Android mobile app using **Capacitor**. The app is now ready to be built as an APK (Android Package) that can be installed on Android devices.

## Project Structure

```
untitled folder/
├── src/                    # React source code
│   ├── components/
│   │   ├── BMICalculator.jsx
│   │   ├── DietPlan.jsx
│   │   └── WorkoutProgram.jsx
│   ├── App.jsx
│   └── main.jsx
├── dist/                   # Build output (created during build)
├── android/                # Android project files (created by Capacitor)
├── capacitor.config.ts     # Capacitor configuration
├── package.json            # Project dependencies
├── vite.config.js          # Vite build configuration
└── APK_BUILD_GUIDE.md      # Detailed build instructions
```

## 🛠️ Quick Start - APK Generation

### Step 1: Install Dependencies

The required Node.js packages are already installed. If you need to reinstall:

```bash
npm install
```

### Step 2: Install Android Development Tools

#### Option A: Automated Setup (macOS with Homebrew)

```bash
chmod +x setup-android-env.sh
./setup-android-env.sh
```

#### Option B: Manual Setup

1. **Install Java 11 or higher**
   ```bash
   brew install openjdk@11
   export JAVA_HOME=$(/usr/libexec/java_home -v 11)
   ```

2. **Install Android SDK**
   ```bash
   brew install android-sdk
   export ANDROID_SDK_ROOT=/usr/local/share/android-sdk
   ```

3. **Add to ~/.zshrc or ~/.bash_profile**
   ```bash
   export JAVA_HOME=$(/usr/libexec/java_home -v 11)
   export ANDROID_SDK_ROOT=/usr/local/share/android-sdk
   ```

### Step 3: Build the APK

#### Quick Build (Debug APK - for testing)
```bash
npm run build:apk
```

#### Using Android Studio (GUI)
```bash
npm run open:android
```
Then in Android Studio: **Build → Build Bundle(s) / APK(s) → Build APK(s)**

#### Manual Build
```bash
npm run sync:android
npm run build:android:debug
# or for release
npm run build:android:release
```

## 📍 APK Locations

After building, find your APK files at:

- **Debug APK:** `android/app/build/outputs/apk/debug/app-debug.apk`
- **Release APK:** `android/app/build/outputs/apk/release/app-release.apk`

## 📲 Installing on Android Device

### Via ADB (Android Debug Bridge)
```bash
adb install android/app/build/outputs/apk/debug/app-debug.apk
```

### Via Android Studio
1. Connect your Android device via USB
2. In Android Studio, click **Run → Run 'app'**
3. Select your device from the list

### Via Emulator
```bash
# Start Android emulator first, then:
npm run build:apk
adb install android/app/build/outputs/apk/debug/app-debug.apk
```

## 🎯 App Features

Your mobile app includes three main features:

### 1. BMI Calculator
- Input height (cm) and weight (kg)
- Real-time BMI calculation
- BMI category display
- Color-coded results (underweight, normal, overweight, obese)

### 2. Diet Plan Generator
- Personalized diet recommendations based on BMI
- Meal suggestions for different BMI categories:
  - **Underweight:** Calorie-rich foods, protein
  - **Normal:** Balanced nutrition
  - **Overweight:** Low-calorie options
  - **Obese:** Structured diet plan

### 3. Workout Program
- Exercise recommendations based on BMI
- Different intensities for different categories:
  - **Underweight:** Weight training
  - **Normal:** General fitness
  - **Overweight:** Cardio focus
  - **Obese:** Gentle exercises

## 🔧 Available NPM Scripts

```bash
# Development
npm run dev              # Start development server

# Building
npm run build            # Build web version
npm run build:apk        # Build Android debug APK (quick)
npm run sync:android     # Sync web app with Android project

# Android-specific
npm run open:android     # Open Android project in Android Studio
npm run build:android:debug      # Build debug APK
npm run build:android:release    # Build release APK (for distribution)

# Other
npm run preview          # Preview production build
npm run lint             # Run ESLint
```

## ⚙️ Configuration

### Capacitor Config (capacitor.config.ts)
```typescript
{
  appId: 'com.bmiapp.fitness',
  appName: 'BMI Diet & Workout',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
}
```

### Android Config (android/app/build.gradle)
- Minimum SDK: API 21 (Android 5.0)
- Target SDK: API 34 (Android 14)

## 🚀 Distribution (Google Play Store)

To publish your app on Google Play Store:

1. **Build Release APK**
   ```bash
   npm run build:android:release
   ```

2. **Create Keystore**
   ```bash
   keytool -genkey -v -keystore my-app.keystore -keyalg RSA -keysize 2048 -validity 10000 -alias my-key
   ```

3. **Sign APK**
   ```bash
   jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-app.keystore android/app/build/outputs/apk/release/app-release-unsigned.apk my-key
   ```

4. **Create Play Store Account** → https://play.google.com/console

5. **Submit APK** to Google Play

## 🐛 Troubleshooting

### "Java not found"
```bash
brew install openjdk@11
export JAVA_HOME=$(/usr/libexec/java_home -v 11)
```

### "Android SDK not found"
```bash
brew install android-sdk
export ANDROID_SDK_ROOT=/usr/local/share/android-sdk
```

### "Gradle sync failed"
```bash
cd android
./gradlew clean
./gradlew sync
```

### "Cannot find symbol" errors
```bash
cd android
./gradlew clean build
```

### App crashes on startup
- Check Android Studio Logcat for errors
- Ensure all permissions are set in AndroidManifest.xml
- Verify capacitor.config.ts settings

## 📚 Resources

- [Capacitor Documentation](https://capacitorjs.com/docs)
- [Android Development Guide](https://developer.android.com/docs)
- [Android Studio Setup](https://developer.android.com/studio/install)
- [Google Play Console](https://play.google.com/console)

## 📝 Next Steps

1. ✅ Build the APK using `npm run build:apk`
2. ✅ Test on Android emulator or physical device
3. ✅ Customize app icon and splash screen (if needed)
4. ✅ Configure app permissions in `android/app/src/main/AndroidManifest.xml`
5. ✅ Build release version for distribution

## 📞 Support

If you encounter any issues:

1. Check **APK_BUILD_GUIDE.md** for detailed troubleshooting
2. Review Android Studio console output for error messages
3. Visit [Capacitor Discord](https://discord.com/invite/capacitorjs) for community support
4. Check [Android Issues](https://issuetracker.google.com/issues?q=componentid:192708) for known problems

---

**Happy building! 🎉**
