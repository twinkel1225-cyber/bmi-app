# BMI Diet & Workout App - APK Build Guide

## Prerequisites for APK Generation

Your React app has been successfully converted to an Android project using Capacitor. To build the APK, you need to set up your Android development environment:

### Required Software

1. **Java Development Kit (JDK) 11 or higher**
   - Download from: https://www.oracle.com/java/technologies/downloads/
   - Or install via Homebrew: `brew install openjdk@11`

2. **Android SDK and Android Studio**
   - Download Android Studio: https://developer.android.com/studio
   - This includes Android SDK, Build-tools, and Gradle

3. **Gradle** (usually included with Android Studio)

## Installation Steps (macOS)

### Option 1: Using Homebrew (Recommended)

```bash
# Install Java
brew install openjdk@11

# Install Android SDK
brew install android-sdk

# Set ANDROID_SDK_ROOT environment variable
export ANDROID_SDK_ROOT=/usr/local/share/android-sdk
export JAVA_HOME=$(/usr/libexec/java_home -v 11)
```

### Option 2: Using Android Studio (GUI)

1. Download Android Studio from https://developer.android.com/studio
2. Follow the installation wizard
3. In Android Studio, go to Preferences → SDK Manager
4. Install:
   - Android SDK Platform 33 or higher
   - Android SDK Build-tools 33 or higher
   - Android Emulator

## Building the APK

Once you have Java and Android SDK installed, run:

```bash
cd /Users/apple/untitled\ folder

# Sync the Android project
npx cap sync android

# Build the APK (Debug version - for testing)
cd android
./gradlew assembleDebug

# Or for Release version (for distribution)
./gradlew assembleRelease

# The APK will be located at:
# Debug: android/app/build/outputs/apk/debug/app-debug.apk
# Release: android/app/build/outputs/apk/release/app-release.apk
```

## Alternative: Using Android Studio GUI

1. Open the Android project:
   ```bash
   npx cap open android
   ```

2. This opens Android Studio with your project loaded

3. Click **Build** → **Build Bundle(s) / APK(s)** → **Build APK(s)**

4. Wait for the build to complete

5. You'll get a notification with the APK location

## Running on Android Device or Emulator

```bash
# Connect Android device via USB or start emulator

# Run the app in debug mode
cd android
./gradlew installDebug

# Or use adb to install directly
adb install app/build/outputs/apk/debug/app-debug.apk
```

## Troubleshooting

### Java not found
```bash
# Check if Java is installed
java -version

# If not, install:
brew install openjdk@11

# Set JAVA_HOME
export JAVA_HOME=$(/usr/libexec/java_home -v 11)
```

### Android SDK not found
```bash
# Install Android SDK
brew install android-sdk

# Or manually download from Android Studio
export ANDROID_SDK_ROOT=/path/to/your/android/sdk
```

### Gradle sync fails
1. In Android Studio, go to **File → Sync Project with Gradle Files**
2. Or run: `cd android && ./gradlew --sync`

## App Features

Your APK includes:
- 📊 **BMI Calculator** - Calculate Body Mass Index
- 🥗 **Diet Plan Generator** - Personalized diet based on BMI category
- 💪 **Workout Program** - Customized workout routines based on BMI category

## Next Steps

Once built and installed on your Android device:
1. Open the BMI Diet & Workout App
2. Enter your height and weight
3. Get your BMI calculation
4. View personalized diet plan and workout program

---

For more help, visit:
- Capacitor Documentation: https://capacitorjs.com/docs
- Android Development: https://developer.android.com
