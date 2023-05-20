
let actual_left_side = "";

if (actual_left_side === "") {
    document.getElementsByClassName("presentation")[0].style.display = "flex";
    document.getElementsByClassName("projects")[0].style.display = "none";
    document.getElementsByClassName("skills")[0].style.display = "none";
    actual_left_side = "open-presentation";

}

function updateLeftSide(selected) {
    console.log(selected.target.id);
    if (actual_left_side != selected.target.id) {
        switch (selected.target.id) {
            case "open-presentation":
                document.getElementsByClassName("presentation")[0].style.display = "flex";
                document.getElementsByClassName("projects")[0].style.display = "none";
                document.getElementsByClassName("skills")[0].style.display = "none";
                break;

            case "open-projects":
                document.getElementsByClassName("presentation")[0].style.display = "none";
                document.getElementsByClassName("projects")[0].style.display = "flex";
                document.getElementsByClassName("skills")[0].style.display = "none";
                break;

            case "open-skills":
                document.getElementsByClassName("presentation")[0].style.display = "none";
                document.getElementsByClassName("projects")[0].style.display = "none";
                document.getElementsByClassName("skills")[0].style.display = "flex";
                break;

            default:
                break;
        }
        actual_left_side = selected.target.id;

    }
}





let nav = [document.getElementById("open-presentation"),
document.getElementById("open-projects"),
document.getElementById("open-skills")
];
nav[0].addEventListener('click', updateLeftSide);
nav[1].addEventListener('click', updateLeftSide);
nav[2].addEventListener('click', updateLeftSide);

