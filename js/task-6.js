function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

document.addEventListener('DOMContentLoaded', function () {
    const input = document.querySelector('input');
    const createButton = document.querySelector('[data-create]');
    const destroyButton = document.querySelector('[data-destroy]');
    const boxesContainer = document.getElementById('boxes');

    createButton.addEventListener('click', function () {
        const amount = Number(input.value);

        if (amount < 1 || amount > 100) {
            return;
        }

        boxesContainer.innerHTML = '';
        const fragment = document.createDocumentFragment();

        for (let i = 0; i < amount; i++) {
            const box = document.createElement('div');
            const size = 30 + i * 10;
            box.style.width = `${size}px`;
            box.style.height = `${size}px`;
            box.style.backgroundColor = getRandomHexColor();
            fragment.appendChild(box);
        }

        boxesContainer.appendChild(fragment);
        input.value = '';
    });

    destroyButton.addEventListener('click', function () {
        boxesContainer.innerHTML = '';
    });

    input.addEventListener('input', function () {
        if (input.value < 1 || input.value > 100) {
            createButton.disabled = true;
        } else {
            createButton.disabled = false;
        }
    });
});