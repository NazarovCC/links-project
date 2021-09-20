import axios from '../../axios/request'


export default{
  namespaced: true,
  state(){
    return{
      links:[],
      sortValue: '',
    }
  },
  getters:{
    getSortValue(state){
      return state.sortValue
    },
    sortLinks(state,getters){
      let value = getters.getSortValue
      if (value){
        return state.links.sort((next,prev)=>next[value]-prev[value])
      }
      return state.links

    },
    favoriceLinks(state){
       return state.links.filter(link=>link.isFavorice === true)
    },
  },
  mutations:{
     addLink(state,link){
       state.links.push(link)
     },
     setLink(state,links){
       state.links = links
     },
     addFavorice(state,id){
       const link = state.links.find(link=>link.id ===id)
       link.isFavorice = true
     },
     remFavorice(state,id){
      const link = state.links.find(link=>link.id ===id)
      link.isFavorice = false
    },
     addReading(state,id){
      const link = state.links.find(link=>link.id ===id)
      link.isReading= true
    },
    deleteLink(state, id){
      state.links = state.links.filter(link=>link.id !== id)
    },
    changeSortValue(state,value){
      state.sortValue = value
    }
  },
  actions:{
    async create({commit, dispatch}, payload){
      try{
        payload['date'] = Date.now()//new Date(Date.now()).toLocaleString()
        payload['isReading'] = false
        payload['isFavorice'] = false
        const {data} = await axios.post('/links.json',payload)
        commit('addLink', {...payload, id:data.name})
        dispatch('setMessage',{
          value: 'Ссылка успешно добавлена',
          type:'success',
        },{
          root:true
        })
      }

      catch(e){
        dispatch('setMessage',{
          value: e.message,
          type:'error',
        },{
          root:true
        })
      }
    },
   async load({commit,dispatch}){
     try{
      const {data} = await axios.get('/links.json')
      const links = Object.keys(data).map(id=>({ ...data[id], id }))
      commit('setLink', links)
     }
     catch(e){
      dispatch('setMessage',{
        value: e.message,
        type:'error',
      },{
        root:true
      })
    }

   },
   async onUpdated({commit,dispatch}, request){
      try{
         await axios.put(`/links/${request.id}.json`,request)
         commit('addReading',request.id)
      }
      catch(e){
        dispatch('setMessage',{
          value: e.message,
          type:'error',
        },{
          root:true
        })
      }
   },
   async onUpdatedFav({commit, dispatch}, request){
    try{
       await axios.put(`/links/${request.id}.json`,request)
       commit('addFavorice',request.id)
       dispatch('setMessage',{
        value: 'Запись успешно обновлена',
        type:'info',
      },{
        root:true
      })
    }
    catch(e){
      dispatch('setMessage',{
        value: e.message,
        type:'error',
      },{
        root:true
      })
    }
 },
 async onUpdatedNoFav({commit,dispatch}, request){
  try{
     await axios.put(`/links/${request.id}.json`,request)
     commit('remFavorice',request.id)
     dispatch('setMessage',{
      value: 'Запись успешно обновлена',
      type:'info',
    },{
      root:true
    })
  }
  catch(e){
    dispatch('setMessage',{
      value: e.message,
      type:'error',
    },{
      root:true
    })
  }
},
   async remove({commit,dispatch},id){
     try{
      await axios.delete(`/links/${id}.json`)
      commit('deleteLink',id)
      dispatch('setMessage',{
        value: 'Ссылка успешно удалена',
        type:'warning',
      },{
        root:true
      })
     }
     catch(e){
      dispatch('setMessage',{
        value: e.message,
        type:'error',
      },{
        root:true
      })
     }

   }
  }
}