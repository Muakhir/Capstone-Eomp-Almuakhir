<template>
  <!-- Button trigger modal -->
  <button type="button" class="btn custom-btn" data-bs-toggle="modal" data-bs-target="#updateUserModal">
      Update User
  </button>

  <!-- Modal -->
  <div class="modal fade" id="updateUserModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
              <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">User Details</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                  <form @submit.prevent="updateUser">
                      <div class="mb-3">
                          <input type="number" class="form-control w-50 mx-auto" placeholder="User ID" v-model="payload.userID" required>
                      </div>
                      <div class="mb-3">
                          <input type="text" class="form-control w-50 mx-auto" placeholder="First Name" v-model="payload.firstName" required>
                      </div>
                      <div class="mb-3">
                          <input type="text" class="form-control w-50 mx-auto" placeholder="Last Name" v-model="payload.lastName" required>
                      </div>
                      <div class="mb-3">
                          <input type="number" class="form-control w-50 mx-auto" placeholder="Age" v-model="payload.userAge" required>
                      </div>
                      <div class="mb-3">
                          <input type="text" class="form-control w-50 mx-auto" placeholder="Gender" v-model="payload.gender" required>
                      </div>
                      <div class="mb-3">
                          <input type="email" class="form-control w-50 mx-auto" placeholder="Email" v-model="payload.emailAdd" required>
                      </div>
                      <div class="mb-3">
                          <input type="text" class="form-control w-50 mx-auto" placeholder="Role" v-model="payload.userRole" required>
                      </div>
                  </form>
              </div>
              <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-success" @click="updateUser">Update</button>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';
export default {
  data() {
    return {
      payload: {
        userID: '',
        firstName: '',
        lastName: '',
        userRole: '',
        gender: '',
        userAge: '',
        emailAdd: ''
      }
    };
  },
  methods: {
  async updateUser() {
    try {
      await this.$store.dispatch('updateUser', { id: this.payload.userID, data: this.payload });
      Swal.fire({
        title: 'Update user',
        icon: 'success',
        timer: 3000
      });
    } catch (error) {
      console.error('Error updating user:', error);
      Swal.fire({
        title: 'Error',
        text: 'An error occurred when updating a user.',
        icon: 'error',
        timer: 2000
      });
    }
  }
}
};
</script>


<style scoped>

.custom-btn {
  background-color: rgba(255, 255, 255, 0.1);
  color: rgb(252, 252, 252);
  transition: background-color 0.3s, color 0.3s, transform 0.3s;
  border: none;
}

.custom-btn:hover {
  background-color: rgba(255, 255, 255, 0.1);
  color: #36cac0;
  transform: scale(1.1);
}
</style>