
import Vue from 'vue';
import Vuex from 'vuex';

import moduleA from './moduleA';
import moduleB from './moduleB';
import plugins from './plugins';
Vue.use(Vuex)
const store = new Vuex.Store({
    plugins: [plugins],
    modules:{
        moduleA,
        moduleB
    },
    state:{
        count:2,
        todos:[
            {id:1,text:'...',done:true},
            {id:2,text:'...',done:false},
        ],
        msg:'welcome to vuex'
    },
    getters:{
        doneTodos:state => {
            return state.todos.filter(todo => todo.done)
        },
        doneTodosCount:(state,getters) => {
            return getters.doneTodos.length
        },
        getTodoById:(state) => (id) => {
            return state.todos.find(todo => todo.id === id)
        }
    },
    mutations:{
        increment(state,payload){
            return state.count += payload.amount;
        },
        add(state){
            return state.count ++;
        },
        push(state,{a}){
            return state.count -= a;
        },
        updateMsg(state,payload){
            return state.msg = payload
        }
    },
    actions:{
        incrementAsync({commit}){
            setTimeout(() => {
                commit('add')
            },1000)  
        },
        actionA ({ commit }) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    commit('someMutation')
                    resolve()
                }, 1000)
            })
        },
        actionB ({ dispatch, commit }) {
            return dispatch('actionA').then(() => {
                commit('someOtherMutation')
            })
        },
        async actionC ({ commit }) {
            commit('gotData', await getData())
        },
        async actionD ({ dispatch, commit} ) {
            await dispatch('actionC')
            commit('gotOtherData', await getOtherData())
        }
    }
})

export default store