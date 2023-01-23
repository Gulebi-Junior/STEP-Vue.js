<script>
export default {
    data() {
        return {
            counter: 0,
        };
    },
    methods: {
        logger() {
            this.counter++;
        },
    },
};
</script>

<template>
    <div>
        <button class="btn" @click="logger()">{{ counter }}</button>
    </div>
</template>

<style scoped>
.btn {
    box-sizing: border-box;
    min-width: 60px;
    padding: 4px 6px;
    background: rgb(128, 128, 128);
    border: 0px;
    border-radius: 5px;
    cursor: pointer;

    transition: 0.2s;
}
.btn:hover {
    background: rgb(160, 160, 160);
}
</style>
