# Text Me Maybe
[![License: MIT](https://img.shields.io/badge/license-MIT-yellow)](https://opensource.org/licenses/MIT)

## A simple code editor showcasing as a SPA and PWA
This text editor uses makes use of a service worker, is installable, and your text persists via localStorage and IndexedDB. It also stylizes the code using CodeMirror.

# Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Contributors](#contributors)
- [Questions](#questions)

# Installation
Simply visit the live app on [Heroku](https://text-me-dt.herokuapp.com/). If you choose to install the app, just click the button. TMM will be added as a browser application.

# Usage

## Local Storage
As you type, text is stored into localStorage, which is also used as a backup text source if IndexedDB is empty.

## IndexedDB
When you navigate away from the editor, text is stored in IndexedDB. The app checks for data from IDB when the page loads, so if you run away from the screen and accidentally close it, no big deal.

## Offline Mode
Once the app loads, you will be able to access it offline, including your data!

# License
This project is provisioned under the [MIT License](https://opensource.org/licenses/MIT)

# Contributing
[Repo link](https://github.com/codewizard-dt/text-me-maybe)

Do you want to help make this project better? Visit the the repo to check out existing issues or create a new branch to start working on a suggested feature

# Contributors
After everything worked in the local environment, I hit a snag deploying to Heroku. [Dusticcus](https://github.com/Dusticcus) and [Andrew87E](https://github.com/Andrew87E) graciously helped look for possible bugs and allowed me to look through their code to try to search for differences. After all that, it turned out to be a Heroku cache issue that was solved by creating a new app. There may be similarities between code bases.

# Questions
If you have any questions, please contact me on [Github](https://github.com/codewizard-dt) or [email](mailto:david@codewizard.app).