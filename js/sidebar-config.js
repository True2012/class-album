const sidebarTitles = [
    { title: "首页", link: "index.html" },
    { title: "风雨同行", link: "rain.html" },
    { title: "幻城戏游", link: "travel_1.html" },
    { title: "洛阳寻迹", link: "travel_2.html" },
    { title: "荣誉长廊", link: "awards.html" },
    { title: "毕业合照", link: "groupPhoto.html" },
    { title: "帮助文档", link: "help.html" },
];

function openHTML(url) {
    /*const link = document.createElement("a");
    link.href = url;
    link.click();*/
    window.location.replace(url);
};

document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    let text = "<ul>";
    sidebarTitles.forEach(item => {
        text += `<li onclick="openHTML('${item.link}');"><a href="${item.link}">${item.title}</a></li>`;
    });
    text += "</ul>";
    sidebar.innerHTML = text;
});
