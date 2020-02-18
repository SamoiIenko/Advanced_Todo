import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        notes: localStorage.saveNotes ? JSON.parse(localStorage.saveNotes) : {title: 'app', task: []}
    },
    mutations: {
        save_storage(state) {
            var saveTitle = JSON.stringify(state.notes);
            localStorage.setItem('saveNotes', saveTitle);
            console.log(saveTitle);
        }
    },
    
    actions: {
        save_storage(context) {
            context.commit('save_storage');
        }
    }
});