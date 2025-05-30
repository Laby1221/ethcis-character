document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".tab-btn").forEach((item, index) => {
        item.addEventListener("click", function () {
            document.querySelectorAll(".tab-btn").forEach(el => el.classList.remove("is-tab-btn-active"));
            this.classList.add("is-tab-btn-active");
            document.querySelectorAll(".tab-page").forEach(el => el.classList.remove("is-tab-page-active"));
            document.querySelectorAll(".tab-page")[index].classList.add("is-tab-page-active");
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    fetch("eth-chara.json")
        .then(response => response.json())
        .then(jsonData => {
            function createBoxes(tabId, dataKey) {
                const tab = document.getElementById(tabId);
                if (!tab) return;
                tab.innerHTML = ""; // 初期化

                jsonData[dataKey].forEach(item => {
                    const box = document.createElement("div");
                    box.classList.add("box");

                    const img = document.createElement("img");
                    img.src = `images/${item.id}.png`;
                    img.alt = item.name;
                    box.appendChild(img);

                    const nameDiv = document.createElement("div");
                    nameDiv.classList.add("name");
                    nameDiv.textContent = item.name;
                    box.appendChild(nameDiv);

                    const thoughtDiv = document.createElement("div");
                    thoughtDiv.classList.add("thought");
                    thoughtDiv.textContent = item.thought;
                    box.appendChild(thoughtDiv);

                    const keywordDiv = document.createElement("div");
                    keywordDiv.classList.add("keyword");
                    if (Array.isArray(item.keyword)) {
                        keywordDiv.textContent = item.keyword.join(" / ");
                    } else {
                        keywordDiv.textContent = item.keyword;
                    }
                    box.appendChild(keywordDiv);

                    tab.appendChild(box);
                });
            }

            createBoxes("tab-1", "1");
            createBoxes("tab-2", "2");
            createBoxes("tab-3", "3");
            createBoxes("tab-4", "4");
            createBoxes("tab-5", "5");
            createBoxes("tab-6", "6");
            createBoxes("tab-7", "7");
            createBoxes("tab-8", "8");
            createBoxes("tab-9", "9");
        })
        .catch(error => console.error("JSON読み込みエラー:", error));
});
