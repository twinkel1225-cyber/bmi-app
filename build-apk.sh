#!/bin/bash

# BMI App - Quick APK Builder Script
# This script builds the APK using Docker (no Java/Android SDK needed locally)

set -e

echo "🚀 BMI App - APK Builder"
echo "======================="
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo -e "${YELLOW}❌ Docker is not installed${NC}"
    echo "Please install Docker Desktop from: https://www.docker.com/products/docker-desktop"
    exit 1
fi

echo -e "${GREEN}✅ Docker is installed${NC}"
echo ""

# Build options
if [ $# -eq 0 ]; then
    echo "Usage: ./build-apk.sh [debug|release|all]"
    echo ""
    echo "Options:"
    echo "  debug    - Build debug APK (for testing)"
    echo "  release  - Build release APK (for distribution)"
    echo "  all      - Build both debug and release"
    echo ""
    echo "Example: ./build-apk.sh debug"
    exit 0
fi

BUILD_TYPE=$1

echo -e "${BLUE}Building APK (${BUILD_TYPE})...${NC}"
echo ""

# Create output directory
mkdir -p ./build-output

# Build Docker image
echo -e "${BLUE}Step 1: Building Docker image...${NC}"
docker build -t bmi-app-builder:latest .

# Build debug APK
if [ "$BUILD_TYPE" = "debug" ] || [ "$BUILD_TYPE" = "all" ]; then
    echo ""
    echo -e "${BLUE}Step 2: Building Debug APK...${NC}"
    docker run --rm \
        -v "$(pwd)/android/app/build:/app/android/app/build" \
        bmi-app-builder:latest \
        sh -c "cd /app/android && ./gradlew assembleDebug"
    
    echo ""
    echo -e "${GREEN}✅ Debug APK built successfully!${NC}"
    echo "📍 Location: android/app/build/outputs/apk/debug/app-debug.apk"
fi

# Build release APK
if [ "$BUILD_TYPE" = "release" ] || [ "$BUILD_TYPE" = "all" ]; then
    echo ""
    echo -e "${BLUE}Step 3: Building Release APK...${NC}"
    docker run --rm \
        -v "$(pwd)/android/app/build:/app/android/app/build" \
        bmi-app-builder:latest \
        sh -c "cd /app/android && ./gradlew assembleRelease"
    
    echo ""
    echo -e "${GREEN}✅ Release APK built successfully!${NC}"
    echo "📍 Location: android/app/build/outputs/apk/release/app-release.apk"
fi

echo ""
echo -e "${GREEN}✅ Build complete!${NC}"
echo ""
echo "Next steps:"
echo "1. Install APK on device: adb install android/app/build/outputs/apk/debug/app-debug.apk"
echo "2. Or transfer to phone manually and open the APK file"
echo ""
