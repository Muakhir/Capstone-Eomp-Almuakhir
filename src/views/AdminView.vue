<template>
  <main class="container-fluid">
    <div class="container">
      <div>
        <h2 id="userHeading" class="display-4 mt-4 mb-4">USER</h2>
      </div>
      <AddUser :user="user" />
      <updateUser />
  
      <div class="container">
          <div class="table-responsive">
            <table class="table">
          <thead>
            <tr>
              <th>User ID</th>
              <th>First name</th>
              <th>Last name</th>
              <th>User age</th>
              <th>Gender</th>
              <th>Email address</th>
              <th>User role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody v-if="users">
            <tr v-for="user in users" :key="user.userID">
              <td>{{ user.userID }}</td>
              <td>{{ user.firstName }}</td>
              <td>{{ user.lastName }}</td>
              <td>{{ user.userAge }}</td>
              <td>{{ user.gender }}</td>
              <td>{{ user.emailAdd }}</td>
              <td>{{ user.userRole }}</td>
              <td class="d-flex gap-2">
                <button
                  id="deleteUsed"
                  class="btn btn-success deleteButton"
                  @click="(event) => deleteUser(user.userID)"
                  >Delete</button>
              </td>
            </tr>
          </tbody>
          </table>
        </div>
      </div>
  
      <div class="mt-4">
        <div class="row">
          <h2 id="productHeading" class="display-4 mb-4">PRODUCTS</h2>
        </div>
  
        <div class="container">
          <AddProduct />
          <updateProduct />
          <div class="table-responsive">
            <table class="table">
            <thead>
              <tr>
                <th>Product ID</th>
                <th>Image</th>
                <th>Product Name</th>
                <th>Product Category</th>
                <th>Product Quantity</th>
                <th>Product Amount</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody v-if="products">
              <tr v-for="product in products" :key="product.prodID">
                <td>
                  {{ product.prodID }}
                </td>
                <td>
                  <img
                    class="img-fluid"
                    id="prodImg"
                    :src="product.prodImg"
                    alt=""
                  />
                </td>
                <td>
                  {{ product.prodName }}
                </td>
                <td>
                  {{ product.prodCat }}
                </td>
                <td>
                  {{ product.prodQuantity }}
                </td>
                <td class="prod-amount">
                  R {{ product.prodAmount }}
                </td>
                <td class="d-flex gap-2">
                  <button
                    id="deleteBut"
                    class="btn btn-success deleteButton"
                    @click="(event) => deleteProduct(product.prodID)"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </div>

  </main>
  </template>

<script>
import updateUser from "../components/updateUser.vue"
import AddUser from "../components/AddUser.vue"
import updateProduct from "../components/updateProduct.vue"
import AddProduct from "../components/AddProduct.vue"
    export default {
        components:{
          AddUser,updateUser,updateProduct,AddProduct
        },
        computed:{
            users(){
                return this.$store.state.users;
            },
            products(){
                return this.$store.state.products;
            },
        },
        mounted(){
            this.$store.dispatch("fetchUsers");
            this.$store.dispatch("fetchProducts");
        },
        methods:{
          deleteProduct(prodID){
            this.$store.dispatch("deleteProduct",{id:prodID})
          },
          deleteUser(userID){
            this.$store.dispatch("deleteUser",{id:userID})
          }
        }
       
    }
</script>

<style scoped>
main {
  background-image: url('https://iili.io/JW6KLgV.png');
  background-color: rgba(0, 0, 0, 0.7); /* Darker background */
  background-blend-mode: multiply;
}

table.table {
  background-color: transparent !important;
  color: white;
  border: none;
}

table.table th,
table.table td {
  background-color: transparent !important;
  color: #fff;
}

button.btn {
  background-color: #caa036;
  color: white;
  transition: background-color 0.3s, color 0.3s, transform 0.3s;
  border: none;
}

button.btn:hover {
  background-color: #fff;
  color: #000;
  transform: scale(1.1);
}

#prodImg {
  max-width: 250px;
}

.table .prod-amount {
  color: #caa036;
}
</style>






