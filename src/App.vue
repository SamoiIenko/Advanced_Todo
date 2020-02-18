<template>
    <div id="app">
        <router-view @save_edit="saved"></router-view>
    </div>
</template>

<script>
    export default {
        methods: {
            saved() {
                console.log(this);
            }
        }
    }
</script>
