<template>
    <div class="editNote">
        <input class="editNote__title"  v-model="data.title" type="text" placeholder="">
        <Modal v-if="showModal" @close="showModal = false" @delete_note="delete_note"/>
        <div class="editNote__listCheck" v-for="(task, index) in data.task" :key="index">
            <input v-model="task.complete" type="checkbox">
            <input v-model="task.name" type="text" class="retry_edit" placeholder="Write todo...">
            <button id="show-modal" @click="show_modal(index)" class="task__delete">❌</button>
        </div>
        <button class="editNote__addActions" @click="add_task">Add action</button><br>     
        <router-link :to="{name: 'all', params: {data: data, id: id}}">
            <button class="editNote__saveChange" @click="save_edit">Save change</button>
        </router-link>
    </div>
</template>

<script>
    import Modal from './Modal.vue';
    export default {
        components: {
            Modal
        },
        name: 'editNote',
        data() {
            return {
                data: this.$route.params.data,
                id: this.$route.params.id,
                showModal: false,
                currentIndex: null
            }
        },
        methods: {
            save_edit() {
                this.$emit('save_edit');
            },
            add_task(){
                this.data.task.push({
                    name: '',
                    complete: false
                })          
            },
            delete_note(){
                this.data.task.splice(this.currentIndex, 1);
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
    .editNote{
        margin: 0 auto;
        background-color: rgb(213, 169, 218);
        width: 50%;
        text-align: center;
    }

    .editNote__title, .retry_edit {
        width: 180px;
        padding: 10px;
        border-radius: 4px;
        border: none;
        margin: 10px;
        outline: none;
    }

    .editNote__addActions, .editNote__saveChange {
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

    .editNote__addActions:hover, .editNote__saveChange:hover {
        background-color: rgb(238, 153, 153);
    }

    .task__delete {
        font-size: 10px;
        width: 20px;
        height: 20px;
        background-color: #fff;
        border: none;
        border-radius: 20px;
        cursor: pointer;
    }


    @media screen and (max-width: 575px){
        .editNote{
            width: 100%;
        }
    }
</style>