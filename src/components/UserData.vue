<template>
    <div class="componentStyle">
        <div v-if="isRegistered" class="infoStyle">
            <h2>Информация обо мне: </h2>
            Ваш город: {{ city }}
            <br>
            Дата рождения: {{ birthDate }}
            <br>
            Ваше кредо по жизни: {{ credo }}
            <br>
            <button @click="change" class="shine-button">Изменить данные</button>
        </div>
        <div v-else>
            <h2>Введите ваши данные:</h2>
            <label class="labelStyle">Ваш город: </label>
            <input v-model="city" type="text" class="inputStyle">
            <label class="labelStyle" for="date">Дата рождения: </label>
            <input v-model="birthDate" type="date" class="inputStyle"/>
            <label class="labelStyle">Ваше кредо по жизни:</label>
            <input v-model="credo" type="text" class="inputStyle">
            <button @click="send" class="shine-button">Сохранить</button>
        </div>
    </div>
</template>

<script>

    export default{
        name: 'UserData',
        data(){
            return{
                isRegistered: false
            }
        },
        created(){
            if (localStorage.getItem('isRegistered')){
                this.isRegistered = localStorage.getItem('isRegistered')
                this.city = localStorage.getItem('city')
                this.birthDate = localStorage.getItem('birthDate')
                this.credo = localStorage.getItem('credo')
                }
            },
        methods:{
            send(){
                if (this.city === undefined || this.birthDate === undefined || this.credo === undefined ){
                    alert('Введите данные')
                }
                else{
                    this.isRegistered = true

                    localStorage.setItem('isRegistered', this.isRegistered)
                    localStorage.setItem('city', this.city)
                    localStorage.setItem('birthDate', this.birthDate)
                    localStorage.setItem('credo', this.credo)
                }
            },
            change(){
                this.isRegistered = false
            }
        }
    }

</script>

<style scoped>
    .infoStyle{
        text-align: left;
        padding: auto;
        margin-left: 25px;
        font-size: 18px;

    }
    h2{
        color: #864b7b;
        font-size: 27px;
    }
</style>