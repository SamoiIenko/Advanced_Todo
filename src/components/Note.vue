<template>
    <div class="note">
        <div class="note__main">
            <h2 class="note__title">{{data.title}}</h2>
            <input v-on:keyup.enter="save_note()" v-if="edit" type="text" v-model="data.title">
            <p v-for="(task, index) in data.task" :key="index" :class="{'completed': task.complete}" class="task__name">{{task.name}}</p>
        </div>
        <div class="note__setting">     
            <button id="show-modal" @click="show_modal()" class="note__delete">❌</button>
        </div> 
        <router-link :to="{name: 'edit-note', params: {id: id, data: data}}">
            <button class="note__page" @click="edit_note()">✏️</button>
        </router-link>           
    </div> 
</template>
<script>
    export default {
    name: 'Note',
    data() {
        return {
            edit: false
        }
    },
    props: {
        id: Number,
        data: Object
    },
    methods: {
        edit_note(){
            this.edit = !this.edit; 
        },
        save_note() {          
            this.edit = false;
        },
        show_modal() {
            this.$emit('show_modal');
        }
    }
}
</script>

<style>
    .note {
        margin: 5px auto;
        width: 50%;
        display: flex;
        flex-direction: column;
        background-color: rgb(224, 122, 122);
    }

    .note__title{
        text-transform: uppercase;
        margin-bottom: 10px;
    }

    .note__main {
        width: 100%;
        text-align: center;
        justify-content: center;
        margin: 10px auto;
    }

    .note__setting{
        width: 100%;
        text-align: center;
        justify-content: center;
        margin: 10px 0px;
    }

    .note__page, .note__delete {
        width: 30px;
        height: 30px;
        background-color: #fff;
        border: none;
        border-radius: 20px;
        cursor: pointer;
    }


    .note a {
        text-align: center;
        margin: 0 0 10px 0;
    }

    @media screen and (max-width: 425px){
        .note{
            width: 100%;
        }
    }

</style>