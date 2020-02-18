import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        notes: [
            {
                title: 'Learn German',
                task: [
                    {
                        name: 'Learn 10 new words',
                        complete: false
                    },
                    {
                        name: 'Explore Partizip 2',
                        complete: false
                    }
                ],
            }
        ]
    },
});