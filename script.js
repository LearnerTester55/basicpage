function changeTheme() {
  const themes = [
    { bg: "#fefefe", text: "#333" },
    { bg: "#282c34", text: "#f5f5f5" },
    { bg: "#fffbf0", text: "#4b3832" },
    { bg: "#fce4ec", text: "#880e4f" },
    { bg: "#e8f5e9", text: "#1b5e20" },
  ];

  const theme = themes[Math.floor(Math.random() * themes.length)];
  document.body.style.backgroundColor = theme.bg;
  document.body.style.color = theme.text;
}
