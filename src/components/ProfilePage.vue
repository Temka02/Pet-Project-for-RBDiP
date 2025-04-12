<template>
    <div v-if="isAuth">
        <h3 class="flowtext">Приветствую, {{ username }}</h3>
        <UserData/>
        <br>
        <NotesPage/>
        <button @click="logout" class="shine-button">Выйти из профиля</button>
    </div>
    <div v-else class="registration">
        <label class="labelStyle">Введите ваше имя: </label>
        <input v-model="username" @keyup.enter="login" class="inputStyle">
        <button @click="login" class="shine-button">Войти</button>
    </div>    
    <img src="../assets/basket2.jpg" alt="basket2" class="Images">
    <img src="../assets/basket1.jpg" alt="basket1" class="Images">
    <img src="../assets/basket3.jpg" alt="basket3" class="Images">
</template>

<script>
import NotesPage from './NotesPage.vue';
import UserData from './UserData.vue'

export default{
    name: 'ProfilePage',
    data(){
        return{
            isAuth: false,
            username: ''
        }
    },
    created(){
        if (localStorage.getItem('isAuth')){
            this.isAuth = true
            this.username = localStorage.getItem('username')
        }
    },
    methods:{
        login() {
            if (this.username !== ""){
                this.isAuth = true

                localStorage.setItem('isAuth', true)
                localStorage.setItem('username', this.username)

                this.$router.push({
                    name: 'Chat',
                    query: {
                        username: this.username
                    }
                })
            }
            else{
                alert('Вы не ввели имя!')
            }
        },
        logout(){
            this.isAuth = false
            this.username = ''
            this.isRegistered = false
            this.notes = []
            localStorage.removeItem('isRegistered')
            localStorage.removeItem('isAuth')
            localStorage.removeItem('username')
            localStorage.removeItem('city')
            localStorage.removeItem('birthDate')
            localStorage.removeItem('credo')
            localStorage.removeItem('notes')
            localStorage.removeItem('messages')
            localStorage.removeItem('deleteBtn')
            localStorage.removeItem('emptyMessage')
        }
    },
    components:{
        NotesPage,
        UserData
    }
}
</script>

<style>
    .shine-button {
    text-decoration: none;
    display: inline-block;
    padding: 10px 10px;
    margin: 10px 10px;
    position: relative;
    overflow: hidden;
    border: 2px solid #fe6637;
    border-radius: 8px;
    color: #fe6637;
    transition: .2s ease-in-out;
    font-size: 0.8em;
    font-weight: bold;
    }
    .shine-button:before {
    content: "";
    background: linear-gradient(90deg, rgba(255, 255, 255, .1), rgba(255, 255, 255, .5));
    height: 50px;
    width: 50px;
    position: absolute;
    top: -8px;
    left: -75px;
    transform: skewX(-45deg);
    }
    .shine-button:hover {
    background: #fe6637;
    color: #fff;
    }
    .shine-button:hover:before {
    left: 150px;
    transition: .5s ease-in-out;
    }
    .flowtext{
        font-size: 32px;
        background: linear-gradient(90deg, #864b7b, #e48451, #d49733, #c76e6e, #864b7b);
        /* background: linear-gradient(90deg, #fe6637, #d30505, #9a6b55, #3c5f0b, #fe6637); */
        background-size: 200% auto;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: textflow 5s linear infinite;
        }
    @keyframes textflow {
        from {background-position: 0% center}         
        to {background-position: 200% center}
    }
    .inputStyle{
        border: 2px solid #fe6637;
        border-radius: 8px;
        padding: 10px 10px;
        margin: 10px 10px;
        font-size: 0.9em;
    }
    .componentStyle{
        border: 4px solid #fe6637;
        border-radius: 10px;
        padding-bottom: 30px;
    }
    .labelStyle{
        font-size: 22px;
        font-weight: bold;
    }
    .chatStyle{
        border: 2px solid #fe6637;
        border-radius: 100px;
    }
    .Images{
        margin-top: 150px;
        margin-left:10px;
        margin-right:10px;
        width: 471.11px;
        height: 265px;
        border-radius: 15px;
    }
    .registration{
        margin: 44.7px
    }
</style>