'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const declarations = sourceString
    .split(';')
    .map((s) => s.trim())
    .filter(Boolean);

  for (const decl of declarations) {
    const [rawKey, ...rest] = decl.split(':');

    if (!rawKey || rest.length === 0) {
      continue;
    }

    const key = rawKey.trim();
    const value = rest.join(':').trim();

    if (!key || !value) {
      continue;
    }

    result[key] = value;
  }

  return result;
}

module.exports = convertToObject;
