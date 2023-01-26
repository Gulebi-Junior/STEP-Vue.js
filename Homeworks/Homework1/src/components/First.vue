<script>
export default {
    data() {
        return {
            userInfo: {
                name: "Gleb",
                surname: "Ivanov",
                login: "Gulebi",
            },
        };
    },
};
</script>

<template>
    <main>
        <p><strong>Name: </strong>{{ userInfo.name }}</p>
        <p><strong>Surname: </strong>{{ userInfo.surname }}</p>
        <p><strong>Login: </strong>{{ userInfo.login }}</p>
    </main>
</template>
