const posts = [
    { name: "Post 1", author: "Yazar 1" },
    { name: "Post 2", author: "Yazar 2" },
    { name: "Post 3", author: "Yazar 3" }
]

const listPosts = (posts) => {
    return new Promise((res, rej) => {

        posts.map((post) => {
            console.log(post.name);
        });

        res('Postlar başarıyla listelendi.');
        rej('Herhangi bir post bulunamadı..');

    });
}

const addPost = (newPost) => {
    return new Promise((res, rej) => {
        posts.push(newPost);
        res(posts);
        rej('Post eklenemedi...')
    })
}

const postAddShow = async () => {
    try {
        await listPosts(posts);
        await addPost({ name: "Post 4", author: "Yazar 4" })
        await listPosts(posts);
    } catch (error) {
        console.log(error);
    }
}
postAddShow();