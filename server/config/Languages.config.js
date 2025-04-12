// server/config/languages.js

// languages = {
//   key: { --> this will be used to identify the language
//    name: "Language Name",  --> This will be displayed in the dropdown
//    extension: ".ext",
//    docker: {
//      image: "docker-image-name",
//      workDir: "/app",
//      timeout: 10000,
//      memory: "128mb",
//      cpus: "0.5",
//    },
//    execution: {
//      command: "command",
//      compileCommand: "compile command",
//      filePrefix: "file",
//      defaultBoilerplate: "code",
//    },
//    settings: {
//      supportsInput: true,
//      supportsFiles: false,
//      requiresCompilation: false,
//    },
//  },
// }

const languages = {
  javascript: {
    name: 'JavaScript',
    extension: '.js',
    docker: {
      image: 'code-executor-javascript',
      workDir: '/app',
      timeout: 10000,
      memory: '128mb',
      cpus: '0.5',
    },
    execution: {
      command: 'node',
      compileCommand: null,
      filePrefix: 'index',
      defaultBoilerplate: 'console.log("Hello, World!");',
    },
    settings: {
      supportsInput: true,
      supportsFiles: false,
      requiresCompilation: false,
    },
  },
  python: {
    name: 'Python',
    extension: '.py',
    docker: {
      image: 'code-executor-python',
      workDir: '/app',
      timeout: 10000,
      memory: '128mb',
      cpus: '0.5',
    },
    execution: {
      command: 'python3',
      compileCommand: null,
      filePrefix: 'main',
      defaultBoilerplate: 'print("Hello, World!")',
    },
    settings: {
      supportsInput: true,
      supportsFiles: false,
      requiresCompilation: false,
    },
  },
  cpp: {
    name: 'C++',
    extension: '.cpp',
    docker: {
      image: 'code-executor-cpp',
      workDir: '/app',
      timeout: 15000,
      memory: '128mb',
      cpus: '0.5',
    },
    execution: {
      command: './program',
      compileCommand: 'g++ -o program main.cpp',
      filePrefix: 'main',
      defaultBoilerplate:
        '#include <bits/stdc++.h>\n\nint main() {\n    std::cout << "Hello, World!" << std::endl;\n    return 0;\n}',
    },
    settings: {
      supportsInput: true,
      supportsFiles: false,
      requiresCompilation: true,
    },
  },
};

/**
 * Returns a list of supported languages by name and key.
 * @returns {Array<{ key: string, name: string }>} - Array of supported language keys and names.
 */
export function getSupportedLanguages() {
  return Object.keys(languages).map(key => ({
    value: key,
    label: languages[key].name,
  }));
}

/**
 * Fetches the configuration for a given programming language.
 * @param {string} language - The language key, e.g., "javascript", "python", or "cpp".
 * @returns {object|null} - The language configuration object or null if not found.
 */
export function getLanguageConfig(language) {
  return languages[language] || null;
}

/**
 * Checks if a language is supported.
 * @param {string} language - The language key to validate.
 * @returns {boolean} - True if the language is supported, false otherwise.
 */
export function validateLanguage(language) {
  return Object.hasOwnProperty.call(languages, language);
}

export { languages };
