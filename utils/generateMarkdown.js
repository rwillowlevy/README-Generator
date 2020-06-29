function generateMarkdown(user, answer) {
  return `
# ${answer.title}
![GitHub forks](https://img.shields.io/github/forks/${answer.user}/${answer.title}?style=social)
![GitHub repo size](https://img.shields.io/github/repo-size/${answer.user}/${answer.title})
## Description
${answer.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Credits](#credits)
- [Questions](#questions)
## Installation
${answer.installation}
## usage
${answer.usage}
## Contributing
${answer.contributors}
## Tests
${answer.test}
## License
${answer.license}
## Credits
${answer.credits}
`;
}

module.exports = { generateMarkdown };
