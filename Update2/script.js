const moods = {
  "happy": ["#FFC300", "#FF5733", "#C70039", "#900C3F", "#581845", "#F95700", "#FFBD39", "#FFA07A", "#F08080", "#FFDAB9", "#FFA07A", "#FF8C00", "#FF7F50", "#FF6347", "#FF4500", "#FF1493", "#EE82EE", "#DA70D6", "#BA55D3", "#800080"],
  "calm": ["#F0ECEB", "#E3E0D3", "#D9E8C2", "#C2DDBF", "#B2B6B1", "#DBE7E4", "#BFD1C9", "#8FBC8F", "#00FA9A", "#AFEEEE", "#87CEFA", "#5F9EA0", "#6495ED", "#00BFFF", "#4682B4", "#1E90FF", "#00CED1", "#40E0D0", "#48D1CC", "#87CEEB"],
  "energetic": ["#F44336", "#E91E63", "#9C27B0", "#673AB7", "#3F51B5", "#6D4C41", "#AF6E4D", "#FF8C00", "#FFD700", "#9ACD32", "#32CD32", "#00FF7F", "#00FF00", "#7CFC00", "#ADFF2F", "#00FA9A", "#00CED1", "#1E90FF", "#4169E1", "#FF69B4"],
  "relaxed": ["#8F9E9E", "#B4CDCD", "#D3E0E0", "#E7EBEB", "#F4F7F7", "#D7E4BD", "#BBC592", "#778899", "#6B8E23", "#556B2F", "#7FFFD4", "#98FB98", "#ADD8E6", "#B0C4DE", "#AFEEEE", "#87CEFA", "#00BFFF", "#6495ED", "#1E90FF", "#FFDAB9"]
};

const moodSelect = document.getElementById("mood-select");
const generateButton = document.getElementById("generate-button");
const colorPalette = document.getElementById("color-palette");

generateButton.addEventListener("click", function() {
  const mood = moodSelect.value;
  const colors = moods[mood];
  if (colors) {
    colorPalette.innerHTML = "";
    const selectedColors = [];
    for (let i = 0; i < 5; i++) {
      let color;
      do {
        color = colors[Math.floor(Math.random() * colors.length)];
      } while (selectedColors.includes(color));
      selectedColors.push(color);
      const colorBox = document.createElement("div");
      colorBox.classList.add("color-box");
      colorBox.style.backgroundColor = color;
      const colorCode = document.createElement("span");
      colorCode.classList.add("color-code");
      colorCode.textContent = color;
      colorBox.appendChild(colorCode);
      colorPalette.appendChild(colorBox);
    }
  } else {
    colorPalette.innerHTML = "Sorry, we don't have a color palette for that mood.";
  }
});

  
  