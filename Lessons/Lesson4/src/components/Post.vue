<script>
import Comment from "./Comment.vue";

export default {
    props: {
        post: {
            type: Object,
            required: true,
        },
    },
    components: {
        Comment,
    },
    data() {
        return {
            newCommentContent: "",
        };
    },
    methods: {
        addComment() {
            const newComment = {
                id: this.post.comments.at(-1)?.id + 1 || 1,
                content: this.newCommentContent,
            };

            this.post.comments.unshift(newComment);
            this.newCommentContent = "";
        },
    },
};
</script>

<template>
    <div class="post">
        <h3 class="post-content">{{ post.content }}</h3>
        <div class="add-comment-block">
            <input type="text" class="input" v-model="newCommentContent" />
            <button class="btn" @click="addComment">Add Comment</button>
        </div>
        <div class="comments-block">
            <Comment v-for="comment in post.comments" :key="comment.id" :content="comment.content"></Comment>
        </div>
    </div>
</template>

<style scoped>
.post {
    background: #f0f0f0;
    padding: 8px;
    border-radius: 10px;
}

.post-content {
    margin-bottom: 5px;
}

.add-comment-block {
    display: flex;
    align-items: center;
    gap: 15px;

    margin-bottom: 10px;
}

.input {
    height: 22px;
}

.btn {
    height: 22px;
}

.comments-block {
    display: flex;
    flex-direction: column;
    gap: 5px;
}
</style>
