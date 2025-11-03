document.querySelectorAll('a.copyable').forEach(element => {
    element.setAttribute("data-clipboard-text", element.title);
    element.href = "javascript:"
});

// Для руководства:
function createSpaceForAbsoluteElements() {
    const absoluteElements = document.querySelectorAll('img[style*="position:absolute"]');
    absoluteElements.forEach(element => {
        // Создаем невидимый блок-заглушку того же размера
        const spacer = document.createElement('div');
        const rect = element.getBoundingClientRect();

        spacer.style.width = rect.width + 'px';
        spacer.style.height = rect.height + 'px';
        spacer.style.visibility = 'hidden';
        spacer.style.pointerEvents = 'none';
        spacer.className = 'absolute-element-spacer';

        // Вставляем перед absolute-элементом
        element.parentNode.insertBefore(spacer, element);
    });
}

window.addEventListener('load', createSpaceForAbsoluteElements);

document.addEventListener('DOMContentLoaded', function() {
    // Для каждой группы
    for (let i = 1; i <= 12; i++) {
        const group = document.getElementById('group' + i);
        if (!group) continue;

        // Найти все элементы, которые должны быть в этой группе
        const elementsToMove = [];
        for (let j = 1; j <= 100; j++) {
            const pElement = document.getElementById('p' + i + '_' + j);

            if (pElement) {
                elementsToMove.push(pElement);
            }
        }

        // Переместить элементы в группу
        elementsToMove.forEach(element => {
            if (element.parentNode !== group) {
                group.appendChild(element);
            }
        });
    }
});
