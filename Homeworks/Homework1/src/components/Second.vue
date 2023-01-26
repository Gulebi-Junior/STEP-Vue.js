<script>
export default {
    data() {
        return {
            likes: 0,
        };
    },
    methods: {
        addLike() {
            this.likes++;
        },
    },
};
</script>

<template>
    <main>
        <button @click="addLike">{{ likes }}</button>
    </main>
</template>
