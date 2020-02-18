<template>
    <div>
        <div class="counter">
            <h2 class="counter__stats">{{"Total notes: " + notes.length}}</h2>
        </div>
        <Modal v-if="showModal" @close="showModal = false" @delete_note="delete_note"/>
        <Note v-for="(note, index) in notes" :key="index" :id="index" :data="note" @show_modal="show_modal(index)"/>
        <div class="add_note">
            <div class="add_note__input">
                <input class="editNote__enter" placeholder="Add note..." type="text" v-model="new_note.title"><br>
                <div v-for="(task, index) in new_note.task" :key="index">
                    <input class="editTask" placeholder="Add todo..." type="text" v-model="task.name"><br>               
                </div>
                <button class="add_note__action"  @click="add_action">Add action</button>
            </div>
            <button class="add_note__btn" @click="add_note ">✔️</button>
        </div>
    </div>
</template>

<script>
    import Modal from './Modal.vue'
    import Note from './Note.vue'

    export default {
        components: {
            Modal,
            Note,
        },
        name: 'Notes',
        data() {
            return {
                edit: false,
                showModal: false,
                currentIndex: null,
                todos: 0,
                new_note: {
                    title: '',
                    task: []
                },
                notes: this.$store.state.notes
            }
        },

        methods: {              
            add_note(){
                if(this.new_note.title) {
                    this.notes.push({
                        title: this.new_note.title,
                        task: this.new_note.task
                    });
                    this.new_note.task = [];
                var saveTitle = JSON.stringify(this.new_note.title);
                localStorage.setItem('this.new_note.title', saveTitle);
                console.log(saveTitle); 
                    
                }
                this.new_note.title = '';
            },
            add_action(){
                this.new_note.task.push({
                    name: '',
                    complete: false
                });
                var saveTask = JSON.stringify(this.new_note.task);
                localStorage.setItem('this.new_note.task', saveTask);           
                console.log(saveTask);
            },
            delete_note() {
                this.notes.splice(this.currentIndex, 1);
                this.showModal = false;
            },

            show_modal(index) {
                this.showModal = true;
                this.currentIndex = index;
            }
        }
    }
</script>

<style>

    .counter {
        background-color: rgb(120, 172, 173);
        border: none;
        margin: 0 auto;
        width: 50%;
        height: 50px;   
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .counter__stats {
        color: #fff;
        text-transform: uppercase;
    }

    @media screen and (max-width: 425px){
        .counter {
            width: 100%;
        }         
    }

    .task__name.completed {
        text-decoration: line-through;
    }

    .add_note {
        margin: 0 auto;
        background-color: rgb(104, 173, 64);
        width: 50%;
        text-align: center;
    }
    

    .editNote__enter, .editTask {
        width: 180px;
        padding: 10px;
        border-radius: 4px;
        border: none;
        margin: 10px;
        outline: none;
    }

    .add_note__action {
        width: 180px;
        padding: 10px 0;
        margin: 10px 5px;
        background-color: #fff;
        border: none;
        border-radius: 4px;
        font-size: 12px;
        font-weight: 600;
        text-transform: uppercase;
        cursor: pointer;
        transition: .2s;
        outline: none;
    }

    .add_note__action:hover {
        background-color: rgb(238, 153, 153);
    }

    .add_note__btn {
        width: 30px;
        height: 30px;
        background-color: #fff;
        border: none;
        border-radius: 20px;
        cursor: pointer;
        margin: 10px;
    }

    @media screen and (max-width: 425px){
        .add_note {
            width: 100%;
        }         
    }
</style>