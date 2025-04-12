<template>
    <div class="containerNav">
        <nav>
            <router-link to="/chat" class="linkStyle">Чат</router-link>
            <router-link to="/" class="linkStyle">Мой профиль</router-link>
            <router-link to="/posts" class="linkStyle">Данные API</router-link>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'NavComp'
}
</script>

<style scoped>
.containerNav{
    height: 70px;
    display: flex;
    justify-content: center;
}
nav{
    height: 100%;
    width: 500px;
    display: flex;
    justify-content:space-between;
    margin: 25px;
    font-size: 1.7em;
}

.linkStyle{
    text-align: center;
    color: black;
    text-decoration:none;
}
.router-link-exact-active{
    color: brown;
}
</style>