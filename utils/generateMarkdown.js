// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const dayjs = require("dayjs");

function renderLicenseBadge(license) {
  let licenseUrl = renderLicenseLink(license);

  switch (license){
    case "Apache 2.0 License":
      {
        return `[![License](https://img.shields.io/badge/License-Apache_2.0-yellowgreen.svg)](${licenseUrl})`;
      }
    case "Boost Software License 1.0":
      {
        return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](${licenseUrl})`;
      }
    case "GNU GPLv3":
      {
        return `[![License](https://img.shields.io/badge/License-GPLv3-blue.svg)](${licenseUrl})`;
      }
    case "MIT License":
      {
        return `[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](${licenseUrl})`;
      }
    case "Mozilla Public License 2.0":
      {
        return `[![License](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](${licenseUrl})`;
      }
    case "The Unlicense":
      {
        return `[![License](https://img.shields.io/badge/license-Unlicense-red.svg)](${licenseUrl})`;
      }
    default: 
      return ""   
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license){
    case "Apache 2.0 License":
      {
        return "https://opensource.org/licenses/Apache-2.0";
      }
    case "Boost Software License 1.0":
      {
        return "https://www.boost.org/LICENSE_1_0.txt";
      }
    case "GNU GPLv3":
      {
        return "https://www.gnu.org/licenses/gpl-3.0";
      }
    case "MIT License":
      {
        return "https://opensource.org/licenses/MIT";
      }
    case "Mozilla Public License 2.0":
      {
        return "https://opensource.org/licenses/MPL-2.0";
      }
    case "The Unlicense":
      {
        return "https://unlicense.org/";
      }
    default: 
      return ""   
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let copyrightDate = dayjs().format("YYYY");
  let licenseUrl = renderLicenseLink(license);

  switch (license){
    case "Apache 2.0 License":
      {
        return `## License\nThis application is covered under the [${license}](${licenseUrl}):
        
        Copyright ${copyrightDate}

        Licensed under the Apache License, Version 2.0 (the "License");
        you may not use this file except in compliance with the License.
        You may obtain a copy of the License at
     
          http://www.apache.org/licenses/LICENSE-2.0
     
        Unless required by applicable law or agreed to in writing, software
        distributed under the License is distributed on an "AS IS" BASIS,
        WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
        See the License for the specific language governing permissions and
        limitations under the License.`;
      }
    case "Boost Software License 1.0":
      {
        return `## License\nThis application is covered under the [${license}](${licenseUrl}):
        
        Boost Software License - Version 1.0 - August 17th, 2003

        Permission is hereby granted, free of charge, to any person or organization
        obtaining a copy of the software and accompanying documentation covered by
        this license (the "Software") to use, reproduce, display, distribute,
        execute, and transmit the Software, and to prepare derivative works of the
        Software, and to permit third-parties to whom the Software is furnished to
        do so, all subject to the following:
        
        The copyright notices in the Software and this entire statement, including
        the above license grant, this restriction and the following disclaimer,
        must be included in all copies of the Software, in whole or in part, and
        all derivative works of the Software, unless such copies or derivative
        works are solely in the form of machine-executable object code generated by
        a source language processor.
        
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT. IN NO EVENT
        SHALL THE COPYRIGHT HOLDERS OR ANYONE DISTRIBUTING THE SOFTWARE BE LIABLE
        FOR ANY DAMAGES OR OTHER LIABILITY, WHETHER IN CONTRACT, TORT OR OTHERWISE,
        ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
        DEALINGS IN THE SOFTWARE.`;
      }
    case "GNU GPLv3":
      {
        return `## License\nThis application is covered under the [${license}](${licenseUrl}) license:
      
        Copyright (C) ${copyrightDate}
    
        This program is free software: you can redistribute it and/or modify
        it under the terms of the GNU General Public License as published by
        the Free Software Foundation, either version 3 of the License, or
        (at your option) any later version.
    
        This program is distributed in the hope that it will be useful,
        but WITHOUT ANY WARRANTY; without even the implied warranty of
        MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
        GNU General Public License for more details.
    
        You should have received a copy of the GNU General Public License
        along with this program.  If not, see <https://www.gnu.org/licenses/>.`;
      }
    case "MIT License":
      {
        return `## License\nThis application is covered under the [${license}](${licenseUrl}):
        
        Copyright ${copyrightDate}

        Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
        
        The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
        
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
        `;
      }
    case "Mozilla Public License 2.0":
      {
        return `## License\nThis application is covered under the [${license}](${licenseUrl}):
        
        This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not distributed with this file, You can obtain one at <https://mozilla.org/MPL/2.0/>.`;
      }
    case "The Unlicense":
      {
        return `## License\nThis application is covered under the [${license}](${licenseUrl}):
        
        This is free and unencumbered software released into the public domain.

        Anyone is free to copy, modify, publish, use, compile, sell, or
        distribute this software, either in source code form or as a compiled
        binary, for any purpose, commercial or non-commercial, and by any
        means.
        
        In jurisdictions that recognize copyright laws, the author or authors
        of this software dedicate any and all copyright interest in the
        software to the public domain. We make this dedication for the benefit
        of the public at large and to the detriment of our heirs and
        successors. We intend this dedication to be an overt act of
        relinquishment in perpetuity of all present and future rights to this
        software under copyright law.
        
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
        EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
        MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
        IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
        OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
        ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
        OTHER DEALINGS IN THE SOFTWARE.
        
        For more information, please refer to <http://unlicense.org/>`;
      }
    default: 
      return ""   
  }
}

const renderContentsTable = (license) => {
  if (license !== "None"){
    return `\n- [Description](#description)\n- [Installation](#installation)\n- [Usage](#usage)\n- [License](#license)\n- [Contributing](#contributing)\n- [Tests](#tests)\n- [Questions](#questions)`;
  } else {
    return `\n- [Description](#description)\n- [Installation](#installation)\n- [Usage](#usage)\n- [Contributing](#contributing)\n- [Tests](#tests)\n- [Questions](#questions)`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const {title, description, installation, usage, contributing, tests, license, github, email} = data
  const licenseBadge = renderLicenseBadge(license);
  const licenseSection = renderLicenseSection(license);
  const contentsTable = renderContentsTable(license);
  
  return `# ${title} 
  
  \n${licenseBadge}
  
  \n## Description
  \n${description}
  
  \n## Table of Contents
  \n${contentsTable}
  
  \n## Installation
  \n${installation}
  
  \n## Usage
  \n${usage}
  
  \n${licenseSection}

  \n## Contributing
  \n${contributing}
  
  \n## Tests
  \n${tests}
  
  \n## Questions
  \nYou can find me on GitHub: [${github}](https://github.com/${github})
  \nSend me an email with any further questions: ${email}
  \n---
  \n*This README was made with ❤️ by the [README Generator](https://github.com/mqas1/readme-generator)*`;
}

module.exports = generateMarkdown;