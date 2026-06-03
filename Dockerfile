# Use official Android development image
FROM androidsdk/android-30:latest

# Install Node.js
RUN apt-get update && apt-get install -y \
    curl \
    && curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get install -y nodejs \
    && apt-get clean

# Set working directory
WORKDIR /app

# Copy project files
COPY . .

# Install dependencies
RUN npm install

# Build the web app
RUN npm run build

# Sync with Android
RUN npx cap sync android

# Make gradlew executable
RUN chmod +x android/gradlew

# Build APK
RUN cd android && ./gradlew assembleDebug

# Build release APK
RUN cd android && ./gradlew assembleRelease

# Output
CMD ["echo", "APKs built successfully!"]
