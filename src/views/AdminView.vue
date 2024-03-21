<template>
  <main class="container-fluid">
    <div class="container">
      <div>
        <h2 id="userHeading" class="display-4 mt-4 mb-4">USER</h2>
      </div>
      <div class="d-flex justify-content-center">
        <div>
          <span class="s1"><AddUser :user="user" /></span>
          <span><updateUser /></span>
        </div>
      </div>
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
          <div class="d-flex justify-content-center">
            <div>
              <span class="s1"><AddProduct /></span>
              <span class="s2"><updateProduct /></span>
            </div>
          </div>
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
                  <td>{{ product.prodID }}</td>
                  <td>
                    <img
                      class="img-fluid"
                      id="prodImg"
                      :src="product.prodImg"
                      alt=""
                    />
                  </td>
                  <td>{{ product.prodName }}</td>
                  <td>{{ product.prodCategory }}</td>
                  <td>{{ product.prodQuantity }}</td>
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
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://iili.io/JXbaQv2.png');
  background-size: cover; 
  background-position: center;
  min-height: 100vh;
  display: flex;
  align-items: center;
}

table.table {
  background-color: rgba(255, 255, 255, 0.1); /* Semi-transparent white background for tables */
  color: white;
  border: none;
}

table.table th,
table.table td {
  background-color: rgba(255, 255, 255, 0.1); /* Semi-transparent white background for table cells */
  color: #fff;
}

button.btn {
  background-color: rgba(255, 255, 255, 0.1);
  color: rgb(252, 252, 252);
  transition: background-color 0.3s, color 0.3s, transform 0.3s;
  border: none;
}

button.btn:hover {
  background-color: rgba(255, 255, 255, 0.1);
  color: #caa036;
  transform: scale(1.1);
}

#prodImg {
  max-width: 250px;
}

.table .prod-amount {
  color: #caa036;
}

.s1{
  margin-right: 10px;
}
</style>








