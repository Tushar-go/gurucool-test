

# React Native Tabbed App

A mobile app with three tabs (Home, Profile, Settings) built with React Native and React Navigation.


## Features
- **Home Tab**: Welcome screen with a greeting message.
- **Profile Tab**: User profile with name, avatar, and social links.
- **Settings Tab**: Toggle switches and configuration options.
- **Bottom Tab Navigation**: Smooth transitions between screens.

## Prerequisites
- Node.js (v16+)
- npm/yarn
- Android Studio (for Android emulator)
- Java JDK (v11+)

## Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/assigment-app/assignment-app.git
   cd repo
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the app**:
   ```bash
   npx react-native run-android
   ```
   (Ensure an Android emulator is running or a device is connected.)

## Dependencies
| Library | Purpose |
|---------|---------|
| `@react-navigation/bottom-tabs` | Tab navigation |
| `react-native-vector-icons` | Icons for tabs/settings |
| `@react-navigation/native` | navigation |
| `@react-navigation/native-stack` |Stack navigation |


## Building the APK
Follow these steps to generate a signed release APK:

### 1. Generate a Keystore (One-Time)
```bash
keytool -genkeypair -v \
  -keystore my-app-release.keystore \
  -alias my-app-key \
  -keyalg RSA -keysize 2048 -validity 10000 \
  -dname "CN=Your Name, OU=Dev, O=YourOrg, L=YourCity, S=YourState, C=IN" \
  -storepass yourpassword -keypass yourpassword
```

### 2. Configure Gradle
- Move `my-app-release.keystore` to `android/app/`.
- Update `android/gradle.properties`:
  ```properties
  MYAPP_RELEASE_STORE_FILE=my-app-release.keystore
  MYAPP_RELEASE_KEY_ALIAS=my-app-key
  MYAPP_RELEASE_STORE_PASSWORD=yourpassword
  MYAPP_RELEASE_KEY_PASSWORD=yourpassword
  ```

### 3. Build the APK
```bash
cd android
./gradlew clean
./gradlew assembleRelease
```
- APK location: `android/app/build/outputs/apk/release/app-release.apk`

## Improvements & Notes
- If i had more information what needs to be add in settings screen i would have added more




