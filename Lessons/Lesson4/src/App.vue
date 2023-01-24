<script>
import Post from "./components/Post.vue";

export default {
    components: {
        Post,
    },
    data() {
        return {
            posts: [],
            newContent: "",
        };
    },
    methods: {
        addPost() {
            const newPost = {
                id: this.posts.at(-1)?.id + 1 || 1,
                content: this.newContent,
                comments: [],
            };

            this.posts.unshift(newPost);
            this.newContent = "";
        },
    },
};
</script>

<template>
    <div class="container">
        <div id="blog-block">
            <h2>Blog</h2>
            <div id="add-post-block">
                <input type="text" id="add-post-input" class="input" v-model="newContent" />
                <button id="add-post-btn" class="btn" @click="addPost">Add</button>
            </div>
            <div id="posts-block">
                <Post v-for="post in posts" :key="post.id" :post="post"></Post>
            </div>
        </div>
    </div>
</template>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.container {
    margin: 50px;
    display: flex;
    justify-content: center;
}

#blog-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 20px;
    border: 1px solid #000000;
    border-radius: 15px;
}

#add-post-block {
    display: flex;
    gap: 7px;
}

#posts-block {
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
    padding: 0px 10px;
}

.btn {
    height: 25px;
    border-radius: 5px;
    border: 1px solid #808080;
    background: #f0f0f0;
    padding: 3px 6px;

    transition: 0.2s;
    cursor: pointer;
}

.btn:hover {
    background: #f8f8f8;
}

.input {
    height: 25px;
    border-radius: 5px;
    border: 1px solid #808080;
    background: #f0f0f0;
    padding: 3px 6px;
}
</style>
