#!/bin/bash

# 🚀 Automated GitHub Actions APK Builder Setup
# This script automates the entire process of building your APK using GitHub Actions

set -e

echo "🚀 BMI App - GitHub Actions APK Builder Setup"
echo "=============================================="
echo ""

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo -e "${RED}❌ Git is not installed${NC}"
    echo "Please install Git first: brew install git"
    exit 1
fi

echo -e "${GREEN}✅ Git is installed${NC}"
echo ""

# Initialize git repo if needed
if [ ! -d .git ]; then
    echo -e "${BLUE}Initializing Git repository...${NC}"
    git init
    git config user.email "builder@bmiapp.com"
    git config user.name "BMI App Builder"
    echo -e "${GREEN}✅ Git repository initialized${NC}"
else
    echo -e "${GREEN}✅ Git repository already exists${NC}"
fi

echo ""
echo -e "${BLUE}Staging files for commit...${NC}"
git add .
echo -e "${GREEN}✅ Files staged${NC}"

echo ""
echo -e "${BLUE}Creating initial commit...${NC}"
if git commit -m "Initial commit - BMI Diet & Workout App ready for APK build"; then
    echo -e "${GREEN}✅ Commit created${NC}"
else
    echo -e "${YELLOW}⚠️  No changes to commit (already committed)${NC}"
fi

# Change branch to main
echo ""
echo -e "${BLUE}Setting main branch...${NC}"
git branch -M main 2>/dev/null || true
echo -e "${GREEN}✅ Main branch set${NC}"

echo ""
echo "=========================================="
echo -e "${YELLOW}📝 NEXT STEPS:${NC}"
echo "=========================================="
echo ""
echo "1️⃣  Create a GitHub account (if you don't have one):"
echo "   → https://github.com/signup"
echo ""
echo "2️⃣  Create a new repository:"
echo "   → https://github.com/new"
echo "   → Name: bmi-app"
echo "   → Choose: Public"
echo "   → Click: Create repository"
echo ""
echo "3️⃣  After creating the repository, run:"
echo "   → git remote add origin https://github.com/YOUR_USERNAME/bmi-app"
echo "   → git push -u origin main"
echo ""
echo "   Replace YOUR_USERNAME with your actual GitHub username"
echo ""
echo "4️⃣  Watch the build:"
echo "   → Go to: https://github.com/YOUR_USERNAME/bmi-app/actions"
echo "   → Wait for the build to complete (~15 minutes)"
echo ""
echo "5️⃣  Download your APK:"
echo "   → Click the completed build"
echo "   → Scroll to Artifacts section"
echo "   → Download: app-debug.apk"
echo ""
echo "6️⃣  Install on your phone:"
echo "   → adb install path/to/app-debug.apk"
echo "   → Or transfer the file directly to your phone"
echo ""
echo "=========================================="
echo -e "${GREEN}✅ Setup complete!${NC}"
echo "=========================================="
echo ""
echo -e "${BLUE}Your git status:${NC}"
git status
echo ""
