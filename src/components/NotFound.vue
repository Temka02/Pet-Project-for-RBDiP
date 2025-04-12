<template>
    <div>
        <h2>Упс... Страницы не существует</h2>
        <img src="../assets/error.avif" alt="error">
        <br>
        <router-link to="/" class="returnLink">На главную</router-link>
    </div>
</template>

<script>
    export default{
        name: 'NotFound'
    }
</script>

<style scoped>
    img{
        height: 400px;
        width: 400px;
        margin-bottom: 30px;
    }
    .returnLink{
        font-size: 2em;
        font-weight: bold;
        color: brown;
        text-decoration:none
    }

</style>