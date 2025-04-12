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

        created(){
            console.log(localStorage.getItem('emptyMessage'))
            console.log(localStorage.getItem('deleteBtn'))
            this.messages = JSON.parse(localStorage.getItem('messages'))
            if (localStorage.getItem('emptyMessage') === 'true' && localStorage.getItem('deleteBtn') === 'false'){
                this.emptyMessage = true
                this.deleteBtn = false
            }
            if (localStorage.getItem('emptyMessage') === 'false' && localStorage.getItem('deleteBtn') === 'true'){
                this.emptyMessage = false
                this.deleteBtn = true
            }
            
            
            console.log(this.emptyMessage)
            console.log(this.deleteBtn)
        },

        computed(){
            localStorage.setItem('username', this.$route.query.username)
        },

        methods: {
            sendMsg() {
                this.messages = this.messages || []

                if(!this.username){
                    this.username = 'Аноним'
                }

                if (this.newMsg !== ''){
                    this.emptyMessage = false
                    this.messages.push({id: new Date().getTime(), text: this.newMsg, user: this.username})
                    console.log(this.messages)
                    this.newMsg = ''
                    this.deleteBtn = true
                    console.log(this.emptyMessage)
                    console.log(this.deleteBtn)
                }

                else{
                    alert('Пожалуйста, введите сообщение')
                }

                localStorage.setItem('messages', JSON.stringify(this.messages))
                localStorage.setItem('emptyMessage', false)
                localStorage.setItem('deleteBtn', true)
            },

            delMsg(){
                this.messages = []
                alert('Все сообщения были удалены')
                this.emptyMessage = true
                this.deleteBtn = false
                localStorage.setItem('messages', JSON.stringify(this.messages))
                localStorage.setItem('emptyMessage', true)
                localStorage.setItem('deleteBtn', false)
                console.log(this.emptyMessage)
                console.log(this.deleteBtn)
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



