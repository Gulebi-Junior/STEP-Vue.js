<script>
import First from "./components/First.vue";
import Second from "./components/Second.vue";
import Third from "./components/Third.vue";
export default {
    components: {
        First,
        Second,
        Third,
    },
};
</script>

<template>
    <main>
        <First />
        <hr />
        <Second />
        <hr />
        <Third />
    </main>
</template>

<style scoped></style>
