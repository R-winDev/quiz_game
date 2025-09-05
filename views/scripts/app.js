const startGameBtn = document.getElementById("gameStart");
const selectBox = document.querySelector(".select-box");
const home = document.querySelector("#home");

let grades = [
    {
        id: 1,
        name: "grade10",
        title: "دهم انسانی",
        lessons: [
            {
                id: 1,
                name: "درس اول",
            },
            {
                id: 2,
                name: "درس دوم",
            },
            {
                id: 3,
                name: "درس سوم",
            },
            {
                id: 4,
                name: "درس چهارم",
            },
            {
                id: 5,
                name: "درس پنحم",
            },
            {
                id: 6,
                name: "درس ششم",
            },
            {
                id: 7,
                name: "درس هفتم",
            },
            {
                id: 8,
                name: "درس هشتم",
            },
            {
                id: 9,
                name: "درس نهم",
            },
            {
                id: 10,
                name: "درس دهم",
            },
            {
                id: 11,
                name: "نیمه اول",
            },
            {
                id: 12,
                name: "نیمه دوم",
            },
        ],
    },
    {
        id: 2,
        name: "grade11",
        title: "یازدهم انسانی",
        lessons: [
            {
                id: 1,
                name: "درس اول",
            },
            {
                id: 2,
                name: "درس دوم",
            },
            {
                id: 3,
                name: "درس سوم",
            },
            {
                id: 4,
                name: "درس چهارم",
            },
            {
                id: 5,
                name: "درس پنحم",
            },
            {
                id: 6,
                name: "درس ششم",
            },
            {
                id: 7,
                name: "درس هفتم",
            },
            {
                id: 8,
                name: "درس هشتم",
            },
            {
                id: 9,
                name: "درس نهم",
            },
            {
                id: 10,
                name: "درس دهم",
            },
            {
                id: 11,
                name: "درس یازدهم",
            },
            {
                id: 12,
                name: "نیمه اول",
            },
            {
                id: 13,
                name: "نیمه دوم",
            },
        ],
    },
    {
        id: 3,
        name: "grade12",
        title: "دوازدهم انسانی",
        lessons: [
            {
                id: 1,
                name: "درس اول",
            },
            {
                id: 2,
                name: "درس دوم",
            },
            {
                id: 3,
                name: "درس سوم",
            },
            {
                id: 4,
                name: "درس چهارم",
            },
            {
                id: 5,
                name: "درس پنحم",
            },
            {
                id: 6,
                name: "درس ششم",
            },
            {
                id: 7,
                name: "نیمه اول",
            },
            {
                id: 8,
                name: "نیمه دوم",
            },
        ],
    },
];

startGameBtn.addEventListener("click", function (event) {
    event.preventDefault();
    selectBox.innerHTML = "";

    // create new select-box sections
    let newElem;
    grades.forEach(function (grade) {
        newElem = document.createElement("a");
        newElem.innerText = grade.title;
        newElem.classList.add("btn", grade.name);

        selectBox.append(newElem);
    });

    newElem = document.createElement("a");
    newElem.innerText = "بازگشت";
    newElem.classList.add("btn");
    newElem.href = "/";

    home.append(newElem);

    const grade10 = document.querySelector(".grade10");
    const grade11 = document.querySelector(".grade11");
    const grade12 = document.querySelector(".grade12");

    if (grade10) {
        grade10.addEventListener("click", function (event) {
            event.preventDefault();
            selectBox.innerHTML = "";
            gradeLessons = grades[0]["lessons"];

            gradeLessons.forEach(function (lesson) {
                newElem = document.createElement("a");
                newElem.innerText = lesson.name;
                newElem.classList.add("btn");
                newElem.href = `question/grade10?lesson=${lesson.id}`;

                selectBox.append(newElem);
            });
        });
    }

    if (grade11) {
        grade11.addEventListener("click", function () {
            event.preventDefault();
            selectBox.innerHTML = "";
            gradeLessons = grades[1]["lessons"];

            gradeLessons.forEach(function (lesson) {
                newElem = document.createElement("a");
                newElem.innerText = lesson.name;
                newElem.classList.add("btn");
                newElem.href = `question/grade10?lesson=${lesson.id}`;

                selectBox.append(newElem);
            });
        });
    }

    if (grade12) {
        grade12.addEventListener("click", function () {
            event.preventDefault();
            selectBox.innerHTML = "";
            gradeLessons = grades[2]["lessons"];

            gradeLessons.forEach(function (lesson) {
                newElem = document.createElement("a");
                newElem.innerText = lesson.name;
                newElem.classList.add("btn");
                newElem.href = `question/grade10?lesson=${lesson.id}`;

                selectBox.append(newElem);
            });
        });
    }
});
