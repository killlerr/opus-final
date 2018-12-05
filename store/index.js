export const state = () => ({
  incompleteTasks: [], // =data
  completedTasks: [],
  profileInfo: {},

})

export const getters = { // =computed property

    availableTasks( state, getters){
        return state.incompleteTasks.filter( incompleteTask => incompleteTask.remain_days >0)
    },

    overdueTasks( state, getters){
        return state.incompleteTasks.filter( incompleteTask => incompleteTask.remain_days <=0)
    }
}


export const mutations = { // updating state
  SET_INCOMPLETE_TASKS (state, tasks) {
    state.incompleteTasks = tasks
  },
  SET_COMPLETED_TASKS (state, tasks){
    state.completedTasks = tasks
  },
  SET_PROFILE_INFO (state, info){
      state.profileInfo = info
  },
  setNewTasks (state, details){   //adding new task
    state.details = details 
  }
  

}

export const actions = { // make the call - run mutation
    async fetchIncompleteTasks( { commit } ) {
        let tasks = await this.$axios.$get(`/webapi/tasks/incompleted`)
        commit('SET_INCOMPLETE_TASKS', tasks)
    },
    async fetchCompletedTasks({ commit }){
        let tasks = await this.$axios.$get('/webapi/tasks/completed')
        commit('SET_COMPLETED_TASKS', tasks)
    },
    async fetchProfileInfo({commit}){
        let info = await this.$axios.$get('/webapi/users/1')
        commit('SET_PROFILE_INFO', info)
    },
    async saveProfileInfo({commit}, data){
        try{
            const {success} = await this.$axios.$put('/webapi/users/updatemyprofile', data)
            if(success){
                commit('SET_PROFILE_INFO', true);
                await dispatch('fetchProfileInfo');
            }
        }
        catch(e){
            
        }
    }
}
