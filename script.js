const anchor = document.querySelector(".anchor-tooltip");
var tooltipText = anchor.getAttribute("title"),
    tooltip = document.createElement("span");
tooltip.className = "title-tooltips";
tooltip.innerHTML = tooltipText;
anchor.appendChild(tooltip);


