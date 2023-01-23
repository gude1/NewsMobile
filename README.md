# lendsqr-fp-news
 FP News is a simple news application built using react-native typescript that allows you to read news provided by the newscatcher api


## Table of Contents

* [Features](#Features)
* [Installation](#Installation)
* [Alternatively download the React Native APK Test App](#Alternatively%download%the%React%Native%APK%Test%App)
* [Tech Stack](#Tech%Stack)
* [Screenshots](#Screenshots)



## Features
- Implemented Over-the-air update using code push
- Included the following Firebase services
* Crashlytics
* Performance
* Remote-config
* Messaging
- Middleware to log all user activities and screen change using Firebase event
- A button that throws a runtime error when pressed.
- Goggle sign in feature 




## Installation

How to Install & test the React Native App

```bash
git clone this repo
cd lendsqr-fp-news
yarn install
npx react-native run-android
```
    
## Alternatively download the React Native APK Test App

- [Android APK: ](https://appdistribution.firebase.google.com/testerapps/null/releases/1qlef3miuvn60)

## Tech Stack

**Client:** Bare React-Native, Redux Toolkit, Codepush, Firebase

**Server:** RapidAPI endpoint

## Screenshots

- Login screen
![](/src/images/signin.jpg)

- Signup screen
![](/src/images/signup.jpg)

- News Listing screen
![](/src/newslist.jpg)

- News Details Screen
![](/src/newsdetail.jpg)
