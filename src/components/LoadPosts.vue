<template>
    <div v-if="username" class="container">
        <div class="flowtext" id="title">Тестовые посты</div>

        <div v-if="isLoad" class="loading">Загрузка данных...</div>

        <div v-else class="show">
            <div v-for="(el, i) in posts" :key="el.id">
                {{ i+1 }}. {{ el.abbreviation }} {{ el.city }}
            </div>
        </div>
    </div>
    <div v-else class="alert">
        Для авторизации перейдите по <router-link :to="{name: 'ProfilePage'}" class="linkStyle">ссылке</router-link>
    </div>
    <img src="../assets/basket2.jpg" alt="basket2" class="Images">
    <img src="../assets/basket1.jpg" alt="basket1" class="Images">
    <img src="../assets/basket3.jpg" alt="basket3" class="Images">
</template>

<script>
    export default{
        name: 'LoadPosts',
        data(){
            return{
                posts: [],
                isLoad: true,
                username: localStorage.getItem('username')
            };
        },
        mounted(){
            this.fetch_req() 
        },
        computed(){
            localStorage.setItem('username', this.$route.query.username)
        },
        methods: {
            async fetch_req(){
                const url = "https://free-nba.p.rapidapi.com/teams?page=0";
                const options = {
                    method: "GET",
                    headers: {
                    "X-RapidAPI-Key": "488f437511msh2d3854838388c55p13692cjsn135921cfebdf",
                    "X-RapidAPI-Host": "free-nba.p.rapidapi.com",
                    },
                };
                try {
                    const response = await fetch(url, options);
                    const data = await response.json();
                    
                    if (data?.data) {
                        this.posts = data.data;
                    }
                } catch (error) {
                    console.error('Error:', error);
                } finally {
                    this.isLoad = false;
                }
            }
        }
    }
</script>

<style scoped>
.loading{
    margin: 14px;
}
.show{
    margin: 14px;
}
#title{
    margin-top: 30px;
}
</style>














