<script>
import Post from "./components/Post.vue";

export default {
    components: {
        Post,
    },
};
</script>

<template>
    <div id="container">
        <h2>Posts</h2>
        <div id="posts-container"><Post /></div>
    </div>
</template>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 15%;
}

#posts-container {
    display: flex;
    flex-direction: column;
}

.btn {
    height: 25px;
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
    height: 25px;
    border-radius: 5px;
    border: 1px solid #bbbbbb;
    background: #f0f0f0;
    padding: 3px 6px;
}
</style>
