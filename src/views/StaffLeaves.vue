<template>
  <NavBar />
  <div class="container-fluid">
    <h1 class="text-center mt-2">Staff Leave Record</h1>
    <hr />
    <div class="p-2">
      <div
        class="row p-2"
        v-for="staffLeave in staffLeaves"
        v-bind:key="staffLeave['id']"
      >
        <div class="col-1">{{ staffLeave["id"] }}</div>
        <div class="col-3">{{ staffLeave["subject"] }}</div>
        <div class="col-3">{{ staffLeave["employee"] }}</div>
        <div class="col-2">{{ staffLeave["from_date"] }}</div>
        <div class="col-2">{{ staffLeave["to_date"] }}</div>
        <div class="col-1">
          <div class="btn-group btn-group-sm" role="group">
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#confSLModal"
              @click="checkLeaveApp(staffLeave)"
            >
              <i class="fas fa-eye"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal -->
  <!-- Approve Modal -->
  <div
    class="modal fade"
    id="confSLModal"
    tabindex="-1"
    aria-labelledby="confSLModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="confSLModalLabel">Approve leave?</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <!-- Search & Filter Options -->
        <div class="modal-body">
          <table class="table">
            <tbody>
              <tr>
                <td>ID</td>
                <td>: {{ this.confSL["id"] }}</td>
              </tr>
              <tr>
                <td>Employee</td>
                <td>: {{ this.confSL["employee"] }}</td>
              </tr>
              <tr>
                <td>Subject</td>
                <td>: {{ this.confSL["subject"] }}</td>
              </tr>
              <tr>
                <td>From</td>
                <td>: {{ this.confSL["from_date"] }}</td>
              </tr>
              <tr>
                <td>To</td>
                <td>: {{ this.confSL["to_date"] }}</td>
              </tr>
              <tr>
                <td>Description</td>
                <td>: {{ this.confSL["description"] }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-danger">Reject</button>
          <button type="button" class="btn btn-success">Confirm</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "StaffLeaves",
  components: {
    NavBar,
  },
  data() {
    return {
      confSL: {
        id: -1,
        subject: "",
        employee: "",
        from_date: "",
        to_date: "",
        description: "",
      },
      staffLeaves: [
        {
          id: 1,
          subject: "Wedding",
          employee: "Hardik Kardam",
          from_date: "25-Jan-2022",
          to_date: "05-Feb-2022",
          description: "I want to attend my brother's wedding",
        },
      ],
    };
  },
  methods: {
    checkLeaveApp(leave) {
      this.confSL = leave;
      //   console.log(employee);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
hr {
  color: white;
}
.row {
  color: white;
  border-radius: 1rem;
}
.row:hover {
  color: white;
  background-color: #3c4a58;
}
tr td:first-child {
  color: black;
}
tr td:nth-child(2) {
  color: darkblue;
}
</style>
