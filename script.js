const wrapper = document.querySelector ('.wrapper');
const question = document.querySelector ('.question');
const yesBtn = document.querySelector ('.yes-btn');
const noBtn = document.querySelector ('.no-btn');
const wrapperRect = wrapper .getBoundingClientRect();
const nobtnrect =noBtn.getBoundingClientRect();

yesBtn.addEventListener('click', () => {
    question.innerHTML = 'I LOVE YOU TOO...';
});

noBtn.addEventListener('mouseover' , () => {
    const i = Math.floor(Math.random() * (wrapperRect.width - nobtnrect.width)) + 1;
const j = Math.floor(Math.random() *(wrapperRect.height - nobtnrect.height)) + 1;
noBtn.style.left = i + 'px';
noBtn.style.top = j + 'px';
});