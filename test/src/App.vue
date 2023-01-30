<script>
import axios from "axios";

export default {
    methods: {},
    created() {
        axios({
            method: "get",
            url: "https://www.youtube.com/watch?v=rqGCdMfVRDE",
            withCredentials: false,
        }).then((info) => console.log(info));
    },
};
</script>

<template>
    <main>
        <router-view />
    </main>
</template>

<style scoped></style>
