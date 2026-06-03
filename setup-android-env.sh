#!/bin/bash

# BMI App - Android Development Environment Setup Script
# This script helps set up the development environment needed to build the APK

echo "🚀 BMI App - Android Development Setup"
echo "========================================"
echo ""

# Check if Homebrew is installed
if ! command -v brew &> /dev/null; then
    echo "❌ Homebrew is not installed."
    echo "Please install Homebrew first: https://brew.sh"
    exit 1
fi

echo "✅ Homebrew is installed"
echo ""

# Check if Java is installed
if command -v java &> /dev/null; then
    echo "✅ Java is already installed:"
    java -version
else
    echo "📦 Installing Java..."
    brew install openjdk@11
    echo ""
    echo "Setting JAVA_HOME..."
    export JAVA_HOME=$(/usr/libexec/java_home -v 11)
    echo "✅ Java installed successfully"
fi

echo ""

# Check if Android SDK is installed
if [ -d "$HOME/Library/Android/sdk" ]; then
    echo "✅ Android SDK is already installed"
    export ANDROID_SDK_ROOT="$HOME/Library/Android/sdk"
elif [ -d "/usr/local/share/android-sdk" ]; then
    echo "✅ Android SDK is already installed"
    export ANDROID_SDK_ROOT="/usr/local/share/android-sdk"
else
    echo "📦 Installing Android SDK..."
    brew install android-sdk
    export ANDROID_SDK_ROOT="/usr/local/share/android-sdk"
    echo "✅ Android SDK installed successfully"
fi

echo ""
echo "✅ Environment Setup Complete!"
echo ""
echo "Next steps:"
echo "1. Add these lines to your ~/.zshrc or ~/.bash_profile:"
echo "   export JAVA_HOME=\$(/usr/libexec/java_home -v 11)"
echo "   export ANDROID_SDK_ROOT=/usr/local/share/android-sdk"
echo ""
echo "2. Build the APK:"
echo "   npm run build:apk"
echo ""
echo "3. Or open in Android Studio:"
echo "   npm run open:android"
echo ""
