<script>
export default {
    data() {
        return {
            number: 0,
        };
    },
    methods: {
        generate() {
            this.number = Math.floor(Math.random() * 101);
        },
    },
};
</script>

<template>
    <main>
        <button @click="generate">Generate</button>
        <p>{{ number }}</p>
    </main>
</template>
