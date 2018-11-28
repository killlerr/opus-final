export const state = () => ({
  incompleteTasks: []
})

export const mutations = {
  SET_INCOMPLETE_TASKS (state, tasks) {
    state.incompleteTasks = tasks
  }
}

export const actions = {
    async fetchIncompleteTasks( { commit } ) {
        let tasks = await this.$axios.$get(`http://opus-api.devops.arimac.xyz/webapi/tasks/incompleted`)
        commit('SET_INCOMPLETE_TASKS', tasks)
    }
}