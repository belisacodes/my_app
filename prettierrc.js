module.exports = {
  bracketSpacing: false,
  jsxBracketSameLine: true,
  singleQuote: true,
  trailingComma: "all",
  arrowParens: "avoid",
  importOrder: [
    "^(react|react-native)$",
    "^(expo)",
    "<THIRD_PARTY_MODULES>",
    "^(src|components|containers|[./])",
    `^screens`,
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
