<script>
import { toRaw } from "vue";
import Post from "./components/Post.vue";

export default {
    components: {
        Post,
    },
    data() {
        return {
            posts: [
                {
                    id: 1,
                    blocks: [],
                },
            ],
        };
    },
    methods: {
        changePost(changedPost) {
            changedPost = toRaw(changedPost);
            this.posts = this.posts.map((post) => (post.id == changedPost.id ? changedPost : undefined));
        },
        addPost() {
            this.posts.push({
                id: this.posts.at(-1)?.id + 1 || 1,
                blocks: [],
            });
        },
    },
};
</script>

<template>
    <div id="container">
        <h2 id="title">Posts</h2>
        <div id="posts-container">
            <Post v-for="post in posts" :key="post.id" :post="post" @clicked="changePost"></Post>
        </div>
    </div>
</template>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    margin: 8px;
}

#container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 10%;
}

#title {
    margin-bottom: 15px;
}

#posts-container {
    display: flex;
    flex-direction: column;
}

.btn {
    height: 25px;
    min-width: 80px;
    border-radius: 5px;
    border: 1px solid #bbbbbb;
    background: #f0f0f0;
    padding: 3px 6px;

    transition: 0.2s;
    cursor: pointer;
}

.btn:hover {
    background: #f8f8f8;
}

.input {
    height: 28px;
    width: 100px;
    border-radius: 5px;
    border: 1px solid #bbbbbb;
    background: #f0f0f0;
    padding: 3px 6px;
}

.checkbox {
    width: 28px;
}
</style>
