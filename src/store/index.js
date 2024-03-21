import { createStore } from 'vuex'
import axios from 'axios'
import Swal from 'sweetalert2'
import sweet from 'sweetalert'
import router from '@/router'
import {applyToken} from '@/service/AuthenticateUser.js'




const URL = 'https://capstone-eomp-almuakhir.onrender.com/'

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null

  },
  getters: {
  },
  mutations: {
    setUsers(state, value){
      state.users = value
    },
    setUser(state, value){
      state.user = value
    },
    setProducts(state, value){
      state.products = value
    },
    setProduct(state, value){
      state.product = value
    }
  },
  actions: {
    async register(context, payload) {
      try {
          const { msg, token } = (await axios.post(`${URL}users/register`, payload)).data;
  
          if (token) {
              context.dispatch('fetchUsers');
              await Swal.fire({
                  title: 'Registration',
                  text: msg,
                  icon: 'success',
                  timer: 2000,
              });
              router.push('/login');
          } else {
              await Swal.fire({
                  title: 'Info',
                  text: "Backend store information message",
                  icon: 'info',
                  timer: 2000,
              });
          }
      } catch (error) {
          console.error(error);
          await Swal.fire({
              title: 'Error',
              text: 'Please try again later',
              icon: 'error',
              timer: 2000,
          });
      }
  },
      async fetchUsers(context) {
        try{
          let {results} = (await axios.get(`${URL}users`)).data
          if(results) {
            context.commit('setUsers', results)
          }
        }catch(e) {
          sweet({
            title: 'Error',
            text: 'An error occurred when retrieving users.',
            icon: "error",
            timer: 2000
          }) 
        }
      },
      async fetchUser(context, payload) {
        try{
          let {result} = (await axios.get(`${URL}users/${payload.id}`)).data
          if(result) {
            context.commit('setUser', result)
          }else {
            sweet({
              title: 'Retrieving a single user',
              text: 'User was not found',
              icon: "info",
              timer: 2000
            }) 
          }
        }catch(e) {
          sweet({
            title: 'Error',
            text: 'A user was not found.',
            icon: "error",
            timer: 2000
          }) 
        }
      },

      
      async updateUser(context, {id,data}){
        try{
          let{update}= await axios.patch(`${URL}users/${id}/updateUser`,data);
          if(update){
            context.dispatch('setUser');
            Swal.fire({
              title: 'Update Successful',
              text: 'User has been updated successfully!',
              icon: 'success',
              timer: 2000,
              showConfirmButton: true
            })
          }
          window.location.reload()
        }catch(e){
          Swal.fire({
            title:'Error',
            text:'Failed to update user',
            icon:'error',
            timer:2000
          });
          console.error('error updating user:',e)
        }
      },
      async deleteUser({commit,dispatch}, payload) {
        try{
            await axios.delete(`${URL}users/${payload.id}/deleteUser`);
            commit('setUser');
            dispatch('fetchUsers');
              sweet({
                title: 'Delete User',
                icon: "success",
                timer: 2000
              }) 
          }catch(e) {
            sweet({
              title: 'Error',
              text: 'An error occurred when deleting a User.',
              icon: "error",
              timer: 2000
            }) 
          }
        },
        async login(context, payload) {
          try {
            const { msg, token, result } = (await axios.post(`${URL}users/login`, payload)).data
    
            if (result) {
              context.commit('setUser', { msg, result })

              if (typeof applyToken === 'function') {
                applyToken(token);
              } else {
                console.error('applyToken is not a function');
              }
              document.cookie = `userAuthenticated=${JSON.stringify({ msg, token, result })}; path=/`;
              sweet({
                title: msg,
                text: `Welcome back, ${result?.firstName} ${result?.lastName}`,
                icon: "success",
                timer: 2000
              })
              router.push('/Profile')
              setTimeout(() => {
                window.location.reload();
                window.location.reload();
              }, 1000);
            } else {
              sweet({
                title: 'Info',
                text: msg,
                icon: 'info',
                timer: 2000,
              });
            }
          } catch (e) {
            console.error('Error during login:', e);
            sweet({
              title: 'Error',
              text: 'Failed to login.',
              icon: 'error',
              timer: 2000,
            });
          }
        },
      async fetchProducts(context) {
        try{
          let {results} = (await axios.get(`${URL}products`)).data
          if(results) {
            context.commit('setProducts', results)
          }
        }catch(e) {
          sweet({
            title: 'Error',
            text: 'An error occurred when retrieving Products.',
            icon: "error",
            timer: 2000
          }) 
        }
      },
      async fetchProduct(context, payload) {
        try{
          let {result} = (await axios.get(`${URL}products/${payload.id}`)).data
          if(result) {
            context.commit('setProduct', result)
          }else {
            sweet({
              title: 'Retrieving a single product',
              text: 'Product was not found',
              icon: "info",
              timer: 2000
            }) 
          }
        }catch(e) {
          sweet({
            title: 'Error',
            text: 'A product was not found.',
            icon: "error",
            timer: 2000
          }) 
        }
      },
      async AddProduct(context, payload) {
        try{
          let {msg} = (await axios.post(`${URL}products/addProduct`, payload))
          if(msg) {
            context.dispatch('setProducts')
            sweet({
              title: 'Product added!!',
              text: msg,
              icon: "success",
              timer: 2000
            }) 
          }
        }catch(e) {
          sweet({
            title: 'Error',
            text: 'Failed to Add',
            icon: "error",
            timer: 2000
          }) 
        }
      },
      async deleteProduct({commit,dispatch}, payload) {
      try{
          await axios.delete(`${URL}products/${payload.id}/deleteProduct`)
          commit('setProducts');
          dispatch('fetchProducts');
            sweet({
              title: 'Delete product',
              icon: "success",
              timer: 2000
            }) 
        }catch(e) {
          sweet({
            title: 'Error',
            text: 'An error occurred when deleting a Product.',
            icon: "error",
            timer: 2000
          }) 
        }
      },
      async updateProduct(context, {id,data}){
        try{
          let{update}= await axios.patch(`${URL}products/${id}/updateProduct`,data);
          if(update){
            context.dispatch('setProducts');
            Swal.fire({
              title: 'Update Successful',
              text: 'User has been updated successfully!',
              icon: 'success',
              timer: 2000,
              showConfirmButton: true
            })
          }
          window.location.reload()
        }catch(e){
          Swal.fire({
            title:'Error',
            text:'Failed to update Product',
            icon:'error',
            timer:2000
          });
          console.error('error updating Product:',e)
        }
      }
  },
  modules: {
  }
})

