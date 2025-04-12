<template>
    <div v-if="username">
        <h2 class="flowtext">Чат {{ username }}</h2>
        <div id="chatStyle">
            <div class="messages" v-for="message in messages" :key="message.id">
                {{ message.user }}: {{ message.text }}
            </div>
            <div v-show="emptyMessage" class="empty">Текущих сообщений нет</div>
        </div>

        <input v-model="newMsg" placeholder="Введите ваше сообщение" class="inputStyle">

        <button @click="sendMsg" @keyup.enter="sendMsg" class="shine-button">Отправить</button>
        <button v-show="deleteBtn" @click="delMsg" class="shine-button">Удалить</button>
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
        name: 'ChatPage',

        data(){
            return{

                messages:[],
                newMsg: '',
                emptyMessage: true,
                deleteBtn: false,
                username: localStorage.getItem('username')

            }
        },

        created() {
            this.messages = JSON.parse(this.getLocalStorageItem('messages')) || []
            this.emptyMessage = this.getLocalStorageItem('emptyMessage') === 'true'
            this.deleteBtn = this.getLocalStorageItem('deleteBtn') === 'true'
        },

        computed(){
            localStorage.setItem('username', this.$route.query.username)
        },

        methods: {
            getLocalStorageItem(key) {
                return localStorage.getItem(key)
            },

            setLocalStorageItem(key, value) {
                localStorage.setItem(key, value)
            },

            sendMsg() {
                this.messages = this.messages || []

                if(!this.username){
                    this.username = 'Аноним'
                }

                if (this.newMsg !== ''){
                    this.messages.push({
                        id: new Date().getTime(), 
                        text: this.newMsg, 
                        user: this.username
                    })
                    this.newMsg = ''
                    this.deleteBtn = true
                    this.emptyMessage = false
                }

                else{
                    alert('Пожалуйста, введите сообщение')
                }
                
                this.setLocalStorageItem('messages', JSON.stringify(this.messages))
                this.setLocalStorageItem('emptyMessage', false)
                this.setLocalStorageItem('deleteBtn', true)
            },

            delMsg(){
                this.messages = []
                this.emptyMessage = true
                this.deleteBtn = false

                this.setLocalStorageItem('messages', JSON.stringify(this.messages))
                this.setLocalStorageItem('emptyMessage', true)
                this.setLocalStorageItem('deleteBtn', false)

                alert('Все сообщения были удалены')
            }
        }
    }
</script>

<style >
    .linkStyle{
        text-align: center;
        color: rgb(199, 83, 83);
        text-decoration:none;
        font-weight: bold;
    }
    .alert{
        margin: 60px;
        font-size: 1.5em;
    }
    #chatStyle{
        border: 3.5px solid #fe6637;
        margin-left: auto;
        margin-right: auto;
        width: 500px;
        height: 100%;
        padding: 15px;
        border-radius: 10px;
        background-color: rgb(255, 249, 244) !important;

    }
    .messages{
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 13px;
        overflow:hidden;
        word-wrap: break-word;
        font-size: 18px;
        font-weight: bold;
    }
    .empty{
        font-size: 22px;
        font-weight: bold;
    }
</style>



