document.querySelectorAll('a.copyable').forEach(element => {
    element.setAttribute("data-clipboard-text", element.title);
    element.href = "javascript:"
});
