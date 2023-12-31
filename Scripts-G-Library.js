/* -------------------------------------------------------------------------- */
/*                        Thanks For Using G's Library                        */
/* -------------------------------------------------------------------------- */


/* -------------------------- On Keypress Function -------------------------- */

function KeyPress(GetKey, GetScript) {
    document.addEventListener("keydown", function(event) {
        if (event.key === GetKey) {
            GetScript();
        }
    });
}

/* ------------------------------ Color Library ----------------------------- */

const BasicColorNames = ["Blue", "Pink", "White", "Black", "Purple", "Red", "Orange", "Brown", "Yellow", "Grey", "Green"] 
const AdvancedColorNames = [
    "AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure",
    "Beige", "Bisque", "Black", "BlanchedAlmond","Blue", "BlueViolet", "Brown", "BurlyWood",
    "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan",
    "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGrey", "DarkGreen",  
    "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "Darkorange", "DarkOrchid",
    "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise",
    "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue",
    "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia",
    "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow",
    "HoneyDew", "HotPink",
    "IndianRed", "Indigo", "Ivory",
    "Khaki",
    "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue",
    "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGrey",
    "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue",
    "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow",
    "Lime", "LimeGreen", "Linen",
    "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid",
    "MediumPurple", "MediumSeaGreen","MediumSlateBlue", "MediumSpringGreen",
    "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin",
    "NavajoWhite", "Navy",
    "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid",
    "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed",
    "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple",
    "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon","SandyBrown",
    "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue",
    "SlateGray", "SlateGrey", "Snow", "SpringGreen", "SteelBlue",
    "Tan", "Teal", "Thistle", "Tomato", "Turquoise",
    "Violet",
    "Wheat", "White", "WhiteSmoke",
    "Yellow", "YellowGreen",
  ];

/* -------------------------------- Shortcuts ------------------------------- */

const db = document.body

/* ADD COOL STUFF LATER HERE (OnX Functions) */

function OnClick(object, callback) {
    object.addEventListener("click", callback);
}

function OnHover(object, callback) {
    object.addEventListener("mouseover", callback);
}

function OnLeave(object, callback) {
    object.addEventListener("mouseout", callback);
}

function OnDClick(object, callback) {
    object.addEventListener("dblclick", callback);
}

function OnRClick(object, callback) {
    object.addEventListener("contextmenu", callback);
}

function NoRMenu(object){
    object.addEventListener("contextmenu", (event) => {event.preventDefault()});
}

/* ADD COOL STUFF LATER HERE (Class Functions) */

function AddClass(object, Class){
    object.classList.add(Class);
}

function RemoveClass(object, Class){
    object.classList.remove(Class);
}

function ChangeClass(object, RClass, AClass){
    object.classList.remove(RClass);
    object.classList.add(AClass);
}

function ToggleClass(object, Class){
    object.classList.toggle(Class);
}

/* ADD COOL STUFF LATER HERE (Link Functions) */

function Goto(Link){
    window.location.href = Link
}

function NewTab(Link){
    window.open(Link)
}
