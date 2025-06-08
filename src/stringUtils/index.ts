/**
 * Converts a string to Title Case.
 * @param str - The string to convert.
 * @return The string in title case.
 */
export const titleCase = (str: string): string => {
  if (typeof str !== "string") {
    throw new Error("Input must be a string");
  }
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

/**
 * Converts a string to camelCase.
 * @param str - The string to convert.
 * @return The string in camel case.
 */
export const camelCase = (str: string): string => {
  if (typeof str !== "string") {
    throw new Error("Input must be a string");
  }
  return str
    .toLowerCase()
    .split(" ")
    .map((word, index) =>
      index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join("");
};

/**
 * Converts a string to snake_case.
 * @param str - The string to convert.
 * @return The string in snake case.
 */
export const snakeCase = (str: string): string => {
  if (typeof str !== "string") {
    throw new Error("Input must be a string");
  }
  return str.toLowerCase().split(" ").join("_");
};

/**
 * Converts a string to kebab-case.
 * @param str - The string to convert.
 * @return The string in kebab case.
 */
export const kebabCase = (str: string): string => {
  if (typeof str !== "string") {
    throw new Error("Input must be a string");
  }
  return str.toLowerCase().split(" ").join("-");
};

/**
 * Converts a string to PascalCase.
 * @param str - The string to convert.
 * @return The string in Pascal case.
 */
export const pascalCase = (str: string): string => {
  if (typeof str !== "string") {
    throw new Error("Input must be a string");
  }
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
};

/**
 * Converts a string to UPPERCASE.
 * @param str - The string to convert.
 * @return The string in uppercase.
 */
export const upperCase = (str: string): string => {
  if (typeof str !== "string") {
    throw new Error("Input must be a string");
  }
  return str.toUpperCase();
};

/**
 * Converts a string to lowercase.
 * @param str - The string to convert.
 * @return The string in lowercase.
 */
export const lowerCase = (str: string): string => {
  if (typeof str !== "string") {
    throw new Error("Input must be a string");
  }
  return str.toLowerCase();
};

/**
 * capitalizes the first letter of a string.
 * @param str - The string to capitalize.
 * @return The string with the first letter capitalized.
 */
export const capitalizeFirstLetter = (str: string): string => {
  if (typeof str !== "string") {
    throw new Error("Input must be a string");
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Uncapitalizes the first letter of a string.
 * @param str - The string to uncapitalize.
 * @return The string with the first letter uncapitalized.
 */

export const uncapitalizeFirstLetter = (str: string): string => {
  if (typeof str !== "string") {
    throw new Error("Input must be a string");
  }
  return str.charAt(0).toLowerCase() + str.slice(1);
};

/**
 * Converts a string to a slug.
 * @param str - The string to convert.
 * @return The string in slug format.
 */
export const slugify = (str: string): string => {
  if (typeof str !== "string") {
    throw new Error("Input must be a string");
  }
  return str
    .toLowerCase()
    .trim()
    .replace(/[\s-]+/g, "-")
    .replace(/[^\w-]+/g, "");
};

/**
 * Checks if a string is a valid email.
 * @param email - The email string to validate.
 * @return True if the email is valid, false otherwise.
 */
export const isValidEmail = (email: string): boolean => {
  if (typeof email !== "string") {
    throw new Error("Input must be a string");
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Checks if a string is a valid URL.
 * @param url - The URL string to validate.
 * @return True if the URL is valid, false otherwise.
 */
export const isValidUrl = (url: string): boolean => {
  if (typeof url !== "string") {
    throw new Error("Input must be a string");
  }
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

/**
 * Checks if a string is a valid UUID.
 * @param uuid - The UUID string to validate.
 * @return True if the UUID is valid, false otherwise.
 */
export const isValidUUID = (uuid: string): boolean => {
  if (typeof uuid !== "string") {
    throw new Error("Input must be a string");
  }
  const uuidRegex =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return uuidRegex.test(uuid);
};

/**
 * Normalizes whitespace in a string.
 * @param str - The string to normalize.
 * @return The string with normalized whitespace.
 */
export const normalizeWhitespace = (str: string): string => {
  if (typeof str !== "string") {
    throw new Error("Input must be a string");
  }
  return str.replace(/\s+/g, " ").trim();
};

/**
 * Removes html tags from a string.
 * @param str - The string to sanitize.
 * @return The sanitized string with HTML tags removed.
 */
export const stripHtml = (str: string): string => {
  if (typeof str !== "string") {
    throw new Error("Input must be a string");
  }
  return str.replace(/<[^>]*>/g, "");
};

/**
 * Escapes html tags in a string.
 * @param str - The string to escape.
 * @return The escaped string with HTML tags escaped.
 */
export const escapeHtml = (str: string): string => {
  if (typeof str !== "string") {
    throw new Error("Input must be a string");
  }
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
};

/**
 * Removes all non-alphanumeric characters from a string.
 * @param str - The string to sanitize.
 * @return The sanitized string with only alphanumeric characters.
 */
export const stripNonAlphanumeric = (str: string): string => {
  if (typeof str !== "string") {
    throw new Error("Input must be a string");
  }
  return str.replace(/[^a-zA-Z0-9 ]/g, "").trim();
};

/**
 * Checks if all brackets/parentheses are closed properly.
 * @param str - The string to check.
 * @return True if all brackets are closed, false otherwise.
 */
export const areBracketsBalanced = (str: string): boolean => {
  if (typeof str !== "string") {
    throw new Error("Input must be a string");
  }
  const stack: string[] = [];
  const brackets: { [key: string]: string } = {
    "(": ")",
    "{": "}",
    "[": "]",
    "<": ">",
    "'": "'",
    '"': '"',
    "`": "`"
  };

  for (const char of str) {
    if (brackets[char]) {
      stack.push(brackets[char]);
    } else if (Object.values(brackets).includes(char)) {
      if (stack.pop() !== char) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

/**
 * Converts a string to a human-readable format.
 * @param str - The string to convert.
 * @return The string in human-readable format.
 */
export const toHumanReadable = (str: string): string => {
  if (typeof str !== "string") {
    throw new Error("Input must be a string");
  }
  return str
    .replace(/([a-z])([A-Z])/g, "$1 $2") // Add space before uppercase letters
    .replace(/[_-]/g, " ") // Replace underscores and hyphens with spaces
    .replace(/\s+/g, " ") // Normalize multiple spaces to a single space
    .trim(); // Trim leading and trailing spaces
}


