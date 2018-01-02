import * as types from '../mutation-types'
import axios from 'axios'

const state = {
  tickets: [
    {
      title: 'title',
      wishText: 'wishText',
      sendDate: 'sendDate'
    },
    {
      title: 'title',
      wishText: 'wishText',
      sendDate: 'sendDate'
    },
    {
      title: 'title',
      wishText: 'wishText',
      sendDate: 'sendDate'
    }
  ]
}

const getters = {
  tickets: state => state.tickets
}

const actions = {
  addTicket ({ commit }, ticket) {
    // todo: post data to server
    axios({
      method: 'get',
      url: `api/server.js`
    })
      .then(response => {
        // console.log(response)
        // console.log('response')
        return new Promise((resolve, reject) => {
          commit(types.ADD_TICKET, ticket)
          setTimeout(() => { resolve({success: true}) }, 5000)
        })
      })
  }
}

const mutations = {
  [types.ADD_TICKET] (state, ticket) {
    console.log(ticket)
    state.tickets.push(ticket)
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
