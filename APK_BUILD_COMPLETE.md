# 📱 Complete APK Build Guide

Your React BMI app has been successfully configured for Android using Capacitor. The web app has been synced with the Android project and is ready to be built into an APK. Here are all the ways to build it:

## ✅ Project Status

- ✓ React web app built (`dist/` directory)
- ✓ Capacitor configured (`capacitor.config.ts`)
- ✓ Android project initialized (`android/` directory)
- ✓ Web assets synced to Android (`android/app/src/main/assets/public/`)

## 🛠️ Build Options

### Option 1: GitHub Actions (Cloud Build - Easiest)

Perfect if you have Java/Android SDK issues locally.

**Steps:**
1. Push your code to GitHub
2. GitHub Actions automatically builds the APK
3. Download from Actions artifacts

**Setup:**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/repo
git push -u origin main
```

Go to **Settings → Secrets and variables → Actions** and add (for signed releases):
- `ANDROID_SIGNING_KEY`: Base64 encoded keystore
- `ANDROID_KEY_ALIAS`: Key alias
- `ANDROID_KEYSTORE_PASSWORD`: Password
- `ANDROID_KEY_PASSWORD`: Password

The workflow file is already in `.github/workflows/build-apk.yml`

### Option 2: Docker Build (Local - Recommended for macOS)

No need to install Java/Android SDK locally!

**Prerequisites:**
- Docker Desktop installed

**Build:**
```bash
# Build debug APK
docker build -t bmi-app-builder .

# Extract APK
docker run --rm -v $(pwd)/android/app/build:/build bmi-app-builder cp /app/android/app/build/outputs/apk/debug/app-debug.apk /build/
```

Or with Docker Compose:
```bash
docker-compose up
```

**APK Locations:**
- Debug: `android/app/build/outputs/apk/debug/app-debug.apk`
- Release: `android/app/build/outputs/apk/release/app-release.apk`

### Option 3: Manual Build (Local Machine)

If you have Java and Android SDK installed locally.

**Install Requirements (if not already done):**

1. **Java 11 (OpenJDK)**
   ```bash
   # macOS with Homebrew
   brew install openjdk@11
   
   # Add to ~/.zshrc or ~/.bash_profile
   export JAVA_HOME=$(/usr/libexec/java_home -v 11)
   ```

2. **Android SDK**
   ```bash
   # Option A: via Android Studio GUI
   # Download: https://developer.android.com/studio
   
   # Option B: via Command Line Tools
   # https://developer.android.com/studio/command-line/sdkmanager
   ```

3. **Environment Variables**
   ```bash
   # Add to ~/.zshrc or ~/.bash_profile
   export JAVA_HOME=$(/usr/libexec/java_home -v 11)
   export ANDROID_SDK_ROOT=/path/to/android/sdk
   export PATH=$PATH:$ANDROID_SDK_ROOT/cmdline-tools/latest/bin
   ```

**Build APK:**
```bash
cd /Users/apple/untitled\ folder

# Verify setup
java -version
$ANDROID_SDK_ROOT/cmdline-tools/latest/bin/sdkmanager --list_installed

# Build debug APK
cd android
./gradlew assembleDebug

# Or build release APK
./gradlew assembleRelease
```

**APK Output:**
- `android/app/build/outputs/apk/debug/app-debug.apk`
- `android/app/build/outputs/apk/release/app-release.apk`

### Option 4: Online APK Builders

If you want to avoid local setup entirely:

1. **CloudBuild** (Google Cloud)
2. **AWS CodeBuild**
3. **Azure Pipelines**
4. **AppCenter (Microsoft)**

You can configure these in their consoles by uploading your `android/` directory.

## 📦 APK File Details

### Debug APK (for testing)
```
android/app/build/outputs/apk/debug/app-debug.apk
- Size: ~40-50 MB
- Installation: Direct on device or emulator
- Debugging: Enabled
- Signing: Self-signed
```

### Release APK (for distribution)
```
android/app/build/outputs/apk/release/app-release.apk
- Size: ~35-40 MB
- Installation: Google Play Store
- Debugging: Disabled
- Signing: Required (signing key)
```

## 📱 Installing the APK

### On Android Device (via USB)
```bash
adb install android/app/build/outputs/apk/debug/app-debug.apk
```

### On Android Emulator
```bash
# Start emulator first
emulator -avd YourEmulatorName &

# Then install
adb install android/app/build/outputs/apk/debug/app-debug.apk
```

### Manual Installation
1. Transfer APK file to your Android device
2. Open file manager and tap the APK
3. Tap "Install"

## 🔑 Creating Signing Key (for Release APK)

To sign your APK for distribution:

```bash
keytool -genkey -v -keystore my-app.jks \
  -keyalg RSA \
  -keysize 2048 \
  -validity 10000 \
  -alias my-key-alias

# Then configure in android/app/build.gradle
```

## 📊 Build Configuration

### App Identification
- **App ID:** `com.bmiapp.fitness`
- **App Name:** BMI Diet & Workout
- **Version:** 1.0.0
- **Min SDK:** Android 5.0 (API 21)
- **Target SDK:** Android 14 (API 34)

### Capacitor Config
See `capacitor.config.ts` for details

### Android Config
See `android/app/build.gradle` for build settings

## 🚀 Publishing to Google Play Store

1. Create signing key (see above)
2. Build release APK
3. Create Google Play account
4. Create app in Play Console
5. Upload APK
6. Fill in app details and screenshots
7. Submit for review

## 🐛 Troubleshooting

### "Java not found"
```bash
export JAVA_HOME=$(/usr/libexec/java_home -v 11)
echo $JAVA_HOME  # Verify
java -version
```

### "Android SDK not found"
```bash
export ANDROID_SDK_ROOT=/path/to/android/sdk
$ANDROID_SDK_ROOT/cmdline-tools/latest/bin/sdkmanager --list_installed
```

### Gradle build fails
```bash
cd android
./gradlew clean build
```

### APK too large
- Disable debug symbols (release build)
- Remove unused resources
- Use ProGuard/R8 obfuscation

### App crashes on startup
- Check Android logcat: `adb logcat | grep MyApp`
- Verify permissions in AndroidManifest.xml
- Check capacitor.config.ts settings

## 📝 Next Steps

1. **Choose a build method** from the options above
2. **Build the APK** using your preferred method
3. **Test on device/emulator** to verify functionality
4. **Create signing key** if publishing to Play Store
5. **Build release APK** for production
6. **Submit to Google Play Store** or distribute manually

## 🔗 Useful Resources

- [Capacitor Docs](https://capacitorjs.com/docs)
- [Android Development](https://developer.android.com)
- [Android Studio](https://developer.android.com/studio)
- [Google Play Console](https://play.google.com/console)
- [OpenJDK 11](https://openjdk.org/projects/jdk/11/)
- [Docker Documentation](https://docs.docker.com)
- [GitHub Actions](https://docs.github.com/actions)

## 📧 Support

If you encounter issues:

1. Check the error messages carefully
2. Review Capacitor logs
3. Check Android logcat
4. Visit Capacitor Discord for community help
5. Check Stack Overflow for similar issues

---

**Your app is ready to be built! 🎉**

Choose Option 2 (Docker) for the easiest local build or Option 1 (GitHub Actions) for cloud-based building.
