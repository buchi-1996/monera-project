export const state = () => ({
  user: { email: '' }
})

const mutations = {
  add (state, user) {
    state.user = user
  }
}

const getters = {
  email: state => state.user.email || '',
  password: state => state.user.password || '',
  unique_key: state => state.user.unique_key
}

export { mutations, getters }
