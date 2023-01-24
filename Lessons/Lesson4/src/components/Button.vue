<script>
export default {
    props: ["text", "onclick"],
};
</script>

<template>
    <button @click="onclick">{{ text }}</button>
</template>

<style scoped>
button {
    padding: 5px;
}
</style>
