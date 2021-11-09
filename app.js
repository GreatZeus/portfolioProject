const commentsContainer = document.querySelector('#comments');
const commentForm = document.querySelector('#commentForm');
const commentBtn = document.querySelector('#commentBtn');
const error = document.querySelector('#errorSpan');

commentBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const nameInput = commentForm.elements.name;
    const yorumInput = commentForm.elements.yorum;
    if (nameInput.value === "" || yorumInput.value === "") {
        error.style.display = "block";
    } else {
        addComment(nameInput.value, yorumInput.value);
        nameInput.value = "";
        yorumInput.value = "";
        error.style.display = "none";
    }
});

const addComment = (name, yorum) => {
    const newComment = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(yorum);
    newComment.append(bTag);
    newComment.append(` - ${name}`);
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="far fa-trash-alt"></i>';
    deleteButton.classList.add('deleteBtn');
    newComment.append(deleteButton);
    deleteButton.onclick = function() {
        this.parentElement.style.display = "none";
    }
    commentsContainer.append(newComment);

}