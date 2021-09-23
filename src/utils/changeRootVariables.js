export function changeRootVariables(value){
    if (value === "dark") {
        document.documentElement.style.setProperty("--searcherBackground", "rgb(27, 27, 27)");
        document.documentElement.style.setProperty("--cardsContainerBackground", "rgb(44, 44, 44)");
        document.documentElement.style.setProperty("--logoColor", "#fff");
        document.documentElement.style.setProperty("--flipCardContainer", "rgb(27, 27, 27)");
        document.documentElement.style.setProperty("--clr-gray100", "rgb(27, 27, 27)");
      } else {
        document.documentElement.style.setProperty("--searcherBackground", "#ef5939");
        document.documentElement.style.setProperty("--cardsContainerBackground", "#fff");
        document.documentElement.style.setProperty("--logoColor", "#000");
        document.documentElement.style.setProperty("--flipCardContainer", "#fff");
        document.documentElement.style.setProperty("--clr-gray100", "#000");
        document.documentElement.style.setProperty("--clr-gray100", "#f0f7f8");
      }
}