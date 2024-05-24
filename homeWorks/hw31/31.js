document.getElementById('searchPostButton').addEventListener('click', () => {
    const postId = document.getElementById('postIdInput').value;
    if (postId < 1 || postId > 100) {
        alert('Please enter a valid post ID between 1 and 100.');
        return;
    }

    fetchPost(postId)
        .then(post => displayPost(post))
        .catch(error => console.error('Error fetching post:', error));
});

function fetchPost(postId) {
    return new Promise((resolve, reject) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(response => {
                if (!response.ok) {
                    reject('Post not found');
                }
                return response.json();
            })
            .then(data => resolve(data))
            .catch(error => reject(error));
    });
}

function displayPost(post) {
    const postContainer = document.getElementById('postContainer');
    postContainer.innerHTML = `
        <div class="post">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
            <button onclick="fetchComments(${post.id})">Load Comments</button>
            <div class="comments" id="comments-${post.id}"></div>
        </div>
    `;
}

function fetchComments(postId) {
    return new Promise((resolve, reject) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then(response => {
                if (!response.ok) {
                    reject('Comments not found');
                }
                return response.json();
            })
            .then(data => resolve(data))
            .catch(error => reject(error));
    })
        .then(comments => displayComments(comments, postId))
        .catch(error => console.error('Error fetching comments:', error));
}

function displayComments(comments, postId) {
    const commentsContainer = document.getElementById(`comments-${postId}`);
    commentsContainer.innerHTML = comments.map(comment => `
        <div>
            <h3>${comment.name} (${comment.email})</h3>
            <p>${comment.body}</p>
        </div>
    `).join('');
}
