export const state = () => ({
  incompleteTasks: [],
  completedTasks: []
})

export const mutations = {
  SET_INCOMPLETE_TASKS (state, tasks) {
    state.incompleteTasks = tasks
  },
  SET_COMPLETED_TASKS (state, tasks){
      state.completedTasks = tasks
  }
}

export const actions = {
    async fetchIncompleteTasks( { commit } ) {
        let tasks = await this.$axios.$get(`http://opus-api.devops.arimac.xyz/webapi/tasks/incompleted`)
        commit('SET_INCOMPLETE_TASKS', tasks)
    },
    async fetchCompletedTasks({ commit }){
        let tasks = await this.$axios.$get('http://opus-api.devops.arimac.xyz/webapi/tasks/completed')
        commit('SET_COMPLETED_TASKS', tasks)
    }
}
