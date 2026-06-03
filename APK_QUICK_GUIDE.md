# ⚡ Quick Reference - Get APK in 3 Steps

## 🎯 Step-by-Step

### 1️⃣ Create GitHub Repository (2 min)
```
Go to: https://github.com/new
- Name: bmi-app
- Public: Yes
- Create
```

### 2️⃣ Push Code (1 min)
```bash
cd /Users/apple/untitled\ folder
git remote add origin https://github.com/YOUR_USERNAME/bmi-app
git push -u origin main
```
**Replace YOUR_USERNAME with your GitHub username**

### 3️⃣ Download APK (15-20 min)
```
Go to: https://github.com/YOUR_USERNAME/bmi-app/actions
- Wait for build to complete ✅
- Click completed build
- Download app-debug.apk from Artifacts
```

### 4️⃣ Install on Phone (1 min)
```bash
adb install ~/Downloads/app-debug.apk
```

---

## 📍 Key URLs

| What | URL |
|------|-----|
| Sign Up | https://github.com/signup |
| New Repo | https://github.com/new |
| Your Repo | https://github.com/YOUR_USERNAME/bmi-app |
| Build Status | https://github.com/YOUR_USERNAME/bmi-app/actions |

---

## ✅ Verification

```bash
# Check git status
git status

# View workflow file
cat .github/workflows/build-apk.yml

# List Android files
ls -la android/app/build/outputs/apk/debug/
```

---

## 🐛 If It Fails

```bash
# Retry build
git commit --allow-empty -m "Retry"
git push origin main

# Wait 15-20 minutes
# Check Actions tab for green checkmark ✅
```

---

## 📱 Install Methods

### Method 1: ADB (Fastest)
```bash
adb install ~/Downloads/app-debug.apk
```

### Method 2: Manual
1. Copy APK to phone USB
2. Open File Manager
3. Tap APK to install

### Method 3: Email
1. Email APK to yourself
2. Download on phone
3. Tap to install

---

## 🚀 That's It!

**You now have your APK file!** 

Transfer to your phone and enjoy your BMI app! 🎉
