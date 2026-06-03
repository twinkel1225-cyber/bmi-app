@echo off
REM BMI App - Quick APK Builder Script (Windows)
REM This script builds the APK using Docker (no Java/Android SDK needed locally)

setlocal enabledelayedexpansion

echo.
echo ========================================
echo 🚀 BMI App - APK Builder (Windows)
echo ========================================
echo.

REM Check if Docker is installed
docker --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Docker is not installed
    echo Please install Docker Desktop from: https://www.docker.com/products/docker-desktop
    pause
    exit /b 1
)

echo ✅ Docker is installed
echo.

REM Get build type from argument
if "%1"=="" (
    echo Usage: build-apk.bat [debug^|release^|all]
    echo.
    echo Options:
    echo   debug    - Build debug APK (for testing^)
    echo   release  - Build release APK (for distribution^)
    echo   all      - Build both debug and release
    echo.
    echo Example: build-apk.bat debug
    pause
    exit /b 0
)

set BUILD_TYPE=%1

echo Building APK (%BUILD_TYPE%)...
echo.

REM Create output directory
if not exist "build-output" mkdir build-output

REM Build Docker image
echo Step 1: Building Docker image...
docker build -t bmi-app-builder:latest .

REM Build debug APK
if "%BUILD_TYPE%"=="debug" (
    echo.
    echo Step 2: Building Debug APK...
    docker run --rm ^
        -v "%cd%\android\app\build:/app/android/app/build" ^
        bmi-app-builder:latest ^
        sh -c "cd /app/android && ./gradlew assembleDebug"
    
    echo.
    echo ✅ Debug APK built successfully!
    echo Location: android\app\build\outputs\apk\debug\app-debug.apk
)

if "%BUILD_TYPE%"=="release" (
    echo.
    echo Step 2: Building Release APK...
    docker run --rm ^
        -v "%cd%\android\app\build:/app/android/app/build" ^
        bmi-app-builder:latest ^
        sh -c "cd /app/android && ./gradlew assembleRelease"
    
    echo.
    echo ✅ Release APK built successfully!
    echo Location: android\app\build\outputs\apk\release\app-release.apk
)

if "%BUILD_TYPE%"=="all" (
    echo.
    echo Step 2: Building Debug APK...
    docker run --rm ^
        -v "%cd%\android\app\build:/app/android/app/build" ^
        bmi-app-builder:latest ^
        sh -c "cd /app/android && ./gradlew assembleDebug"
    
    echo ✅ Debug APK built successfully!
    
    echo.
    echo Step 3: Building Release APK...
    docker run --rm ^
        -v "%cd%\android\app\build:/app/android/app/build" ^
        bmi-app-builder:latest ^
        sh -c "cd /app/android && ./gradlew assembleRelease"
    
    echo ✅ Release APK built successfully!
)

echo.
echo ✅ Build complete!
echo.
echo Next steps:
echo 1. Install APK on device: adb install android\app\build\outputs\apk\debug\app-debug.apk
echo 2. Or transfer to phone manually and open the APK file
echo.
pause
