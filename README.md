<a id="readme-top"></a>

<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/SenneDerom/MobileApplications_project">
    <img src="public/icons/logo_ucll.png" alt="UCLL logo" height="80">
  </a>

<h3 align="center">Campus Connect</h3>

  <p align="center">
    Ontdek de UCLL-campus op je eigen tempo: scan de QR-codes op de borden en leer alles over je toekomstige opleiding.
    <br />
    <br />
    <a href="https://github.com/SenneDerom/MobileApplications_project"><strong>View the repo »</strong></a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#project-structure">Project Structure</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

**Campus Connect** is a mobile app (Android and iOS) built for the *Mobile Applications* course at UCLL.
It is meant for the UCLL open days: visitors such as future students and their parents take a self-guided tour of the campus. During the open day, signs around the campus have QR codes on them, and scanning one with the app shows information about the programme it belongs to. There is no fixed order, and visitors can pause the tour and continue later that day.

Screens:

| Route | File | Description |
|-------|------|-------------|
| `/` | `app/index.tsx` | Landing page with intro and buttons to start the tour or open the explanation |
| `/explanation` | `app/explanation.tsx` | "Hoe werkt het?" – step-by-step explanation of the tour, with footer navigation |

📄 **App idea:** see [IDEA.md](IDEA.md) for the target audience, roadmap and competitors.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![Expo][Expo-badge]][Expo-url]
* [![React Native][ReactNative-badge]][ReactNative-url]
* [![React][React-badge]][React-url]
* [![TypeScript][TypeScript-badge]][TypeScript-url]
* [![Expo Router][ExpoRouter-badge]][ExpoRouter-url]
* [![Zustand][Zustand-badge]][Zustand-url]
* [![Storybook][Storybook-badge]][Storybook-url]
* [![Cypress][Cypress-badge]][Cypress-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/) (LTS) with npm
* *Optional:* the [Expo Go](https://expo.dev/go) app on your phone to run the app on a real device

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/SenneDerom/MobileApplications_project.git
   cd MobileApplications_project
   ```
2. Install the npm packages
   ```sh
   npm install
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE -->
## Usage

| Command | What it does |
|---------|--------------|
| `npm start` | Starts the Expo dev server. Press `w` for web, `a` for Android, `i` for iOS, or scan the QR code with Expo Go |
| `npm run web` | Starts the dev server and opens the web version (http://localhost:8081) |
| `npm run tunnel` | Starts the dev server through a tunnel (when your phone is not on the same network) |
| `npm run storybook` | Starts Storybook on http://localhost:6006 to browse the UI components |
| `npm run build-storybook` | Builds a static Storybook into `storybook-static/` |
| `npm run cypress:open` | Opens the Cypress test runner |
| `npm run cypress:run` | Runs the Cypress end-to-end tests headless |

> Cypress tests run against `http://localhost:8081`, so start the web server (`npm run web`) first.

**Production web build** (used by Vercel, see `vercel.json`):
```sh
npx expo export -p web
```
The output is written to `dist/`.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- PROJECT STRUCTURE -->
## Project Structure

```
app/                  # Screens & routing (expo-router, file-based)
  (app)/              # Route group for screens that will require login
src/
  components/         # App components (Button, Footer, StepList, ...)
    primitives/       # Reusable UI primitives + Storybook stories
  constants/          # Colors and other constants
  services/           # Data / auth services (Supabase, to be implemented)
  state/              # Zustand stores
  types/              # TypeScript types
cypress/              # End-to-end tests
public/               # Static web assets (icons, manifest, service worker)
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] Landing page
- [x] Explanation page with footer navigation
- [ ] QR code scanning ("Start de rondleiding")
- [ ] Programme detail pages
- [ ] Supabase setup

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Top contributors:

<a href="https://github.com/SenneDerom/MobileApplications_project/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=SenneDerom/MobileApplications_project" alt="contrib.rocks image" />
</a>

> **Note:** This repository is hosted on my school GitHub account ([@SenneDerom](https://github.com/SenneDerom)),
> but I commit with my personal GitHub account ([@Senne-Derom](https://github.com/Senne-Derom)) so the
> contributions also show on my personal profile. Both accounts belong to me, Senne Derom.



<!-- CONTACT -->
## Contact

Senne Derom - senne.derom@student.ucll.be

Project Link: [https://github.com/SenneDerom/MobileApplications_project](https://github.com/SenneDerom/MobileApplications_project)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [UCLL](https://www.ucll.be/)
* [Expo Documentation](https://docs.expo.dev/)
* [Best-README-Template](https://github.com/othneildrew/Best-README-Template)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/SenneDerom/MobileApplications_project.svg?style=for-the-badge
[contributors-url]: https://github.com/SenneDerom/MobileApplications_project/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/SenneDerom/MobileApplications_project.svg?style=for-the-badge
[forks-url]: https://github.com/SenneDerom/MobileApplications_project/network/members
[stars-shield]: https://img.shields.io/github/stars/SenneDerom/MobileApplications_project.svg?style=for-the-badge
[stars-url]: https://github.com/SenneDerom/MobileApplications_project
[Expo-badge]: https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white
[Expo-url]: https://expo.dev/
[ReactNative-badge]: https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[ReactNative-url]: https://reactnative.dev/
[React-badge]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://react.dev/
[TypeScript-badge]: https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/
[ExpoRouter-badge]: https://img.shields.io/badge/Expo_Router-000020?style=for-the-badge&logo=expo&logoColor=white
[ExpoRouter-url]: https://docs.expo.dev/router/introduction/
[Zustand-badge]: https://img.shields.io/badge/Zustand-443E38?style=for-the-badge&logo=react&logoColor=white
[Zustand-url]: https://zustand.docs.pmnd.rs/
[Storybook-badge]: https://img.shields.io/badge/Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white
[Storybook-url]: https://storybook.js.org/
[Cypress-badge]: https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white
[Cypress-url]: https://www.cypress.io/
