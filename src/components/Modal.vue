<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">

                    <div class="modal-header">
                        <slot name="header">
                            Do you want to delete the todo?
                        </slot>
                    </div>

                    <div class="modal-footer">
                        <slot name="footer">
                            <button class="modal-default-button" @click="$emit('delete_note')">Confirm</button>
                            <button class="modal-default-button" @click="$emit('close')">Cancel</button>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'Modal',
    }
</script>

<style>

    .modal-container {
        background-color: #eaa1a1;
        width: 300px;
        margin: 0px auto;
        padding: 20px 30px;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        transition: all .3s ease;
        font-family: Helvetica, Arial, sans-serif;
    }

    .modal-header {
        text-align: center;
    }
  
    .modal-body {
        margin: 20px 0;
    }

     .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
        transition: opacity .3s ease;
    }
  
    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }
  
    .modal-default-button {
        float: right;
    }
  
    .modal-enter {
        opacity: 0;
    }
  
    .modal-leave-active {
        opacity: 0;
    }
  
    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }

    .modal-default-button {
        width: 70px;
        height: 30px;
        background-color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        margin: 10px;
        text-transform: uppercase;
        transition: .2s;
        cursor: pointer;  
    }
    .modal-default-button:hover {
        background-color: #a5a8cc;
    }

    .modal-footer {
        min-height: 35px;
        display: flex;
        justify-content: center;
    }
</style>