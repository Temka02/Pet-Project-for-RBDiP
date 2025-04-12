<template>
    <div class="componentStyle">
        <h2>Заметки на сегодня</h2>
        <label class="labelStyle">Введите заметку: </label>
        <input v-model="newNote" @keyup.enter="add" type="text" placeholder="Ваша новая заметка" class="inputStyle">
        <button @click="add" class="shine-button">Добавить заметку</button>
        <button v-show="clearBtn" @click="clear" class="shine-button">Очистить список заметок</button>        
        <div class="Notes" v-if="(!this.emptyNotes)">
            <h3 class="emptyNotes">Текущие заметки:</h3>
            <div v-for="note in notes" :key="note.id">
                <ul class="UnList">
                    <li>{{ note.text }}</li>
                </ul>
            </div>
        </div>
        <div v-else>
            <h3>Заметок нет</h3>
        </div>
    </div>

</template>

<script>

export default{
    name: 'NotesPage',
    data: function(){
        return{
            notes: [],
            emptyNotes: true,
            clearBtn: false
        }
    },
    created() {
        this.notes = JSON.parse(localStorage.getItem('notes')) || []
        this.emptyNotes = this.getLocalStorage('emptyNotes') !== 'true'
        this.clearBtn = this.getLocalStorage('clearBtn') === 'true'
    },
    methods: {
        getLocalStorage(key) {
            return localStorage.getItem(key)
        },
        setLocalStorage(key, value) {
            localStorage.setItem(key, value)
        },
        add(){
            this.notes = this.notes || []
            if (this.newNote !== ''){
                this.emptyNotes= false

                this.notes.push({id: new Date().getTime(), text: this.newNote})
                this.newNote = ''
                this.clearBtn = true

            }else{
                alert('Пожалуйста, введите сообщение')
            }
            this.setLocalStorage('notes', JSON.stringify(this.notes))
            this.setLocalStorage('emptyNotes', this.emptyNotes)
            this.setLocalStorage('clearBtn', this.clearBtn)
        },
        clear(){
            this.notes = []
            this.emptyNotes= true
            this.clearBtn = false
            this.setLocalStorage('clearBtn', false)
            this.setLocalStorage('emptyNotes', true)
            alert('Список заметок был очищен')
        }
    }
}
</script>

<style>
    .Notes {
        text-align: center;
    }

    .UnList {
        display: inline-block;
        line-height: 0%
    }
    h2{
        color: #864b7b;
        font-size: 27px;
    }
    h3{
        font-size: 24px
    }
    .labelStyle{
        font-size: 22px;
        font-weight: bold;
    }
</style>