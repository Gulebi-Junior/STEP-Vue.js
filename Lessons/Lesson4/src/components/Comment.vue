<script>
export default {
    props: {
        content: {
            type: String,
            required: true,
        },
    },
};
</script>

<template>
    <div class="comment">
        <h4 class="comment-content">{{ content }}</h4>
    </div>
</template>

<style scoped>
.comment {
    background: #dadada;
    padding: 4px;
    border-radius: 5px;
}
</style>
