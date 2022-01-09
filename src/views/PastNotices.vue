<template>
  <NavBar />
  <div class="container-fluid">
    <h1 class="text-center mt-2">Past Notices</h1>
    <hr />
    <div class="p-2">
      <div
        class="row p-2"
        v-for="notice in pastNotices"
        v-bind:key="notice['id']"
      >
        <div class="col-1">{{ notice["id"] }}</div>
        <div class="col-3">{{ notice["subject"] }}</div>
        <div class="col-2">{{ notice["date"] }}</div>
        <div class="col-4">{{ notice["description"] }}</div>
        <div class="col-2">
          <div class="btn-group btn-group-sm" role="group">
            <button type="button" class="btn btn-primary">
              <i class="fas fa-eye"></i>
            </button>
            <button
              type="button"
              class="btn btn-info"
              data-bs-toggle="modal"
              data-bs-target="#editNoticeModal"
              @click="editNotice(notice)"
            >
              <i class="fas fa-edit"></i>
            </button>
            <button
              type="button"
              class="btn btn-danger"
              data-bs-toggle="modal"
              data-bs-target="#deleteNoticeModal"
              @click="deleteNotice(notice)"
            >
              <i class="fas fa-minus-circle"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal -->
  <!-- Edit Modal -->
  <div
    class="modal fade"
    id="editNoticeModal"
    tabindex="-1"
    aria-labelledby="editNoticeModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="editNoticeModalLabel">Edit Notice</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <table class="table">
            <tbody>
              <tr>
                <td>ID</td>
                <td>: {{ this.editModalNotice["id"] }}</td>
              </tr>
              <tr>
                <td>Subject</td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    v-model="this.editModalNotice['subject']"
                  />
                </td>
              </tr>
              <tr>
                <td>Date</td>
                <td>
                  <input
                    type="date"
                    class="form-control"
                    v-model="this.editModalNotice['date']"
                  />
                </td>
              </tr>
              <tr>
                <td>Description</td>
                <td>
                  <textarea
                    type="text"
                    class="form-control"
                    v-model="this.editModalNotice['description']"
                  >
                  </textarea>
                </td>
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
          <button type="button" class="btn btn-success">Save</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Delete Modal -->
  <div
    class="modal fade"
    id="deleteNoticeModal"
    tabindex="-1"
    aria-labelledby="deleteNoticeModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="deleteNoticeModalLabel">
            Are you sure you want to delete?
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <table class="table">
            <tbody>
              <tr>
                <td>ID</td>
                <td>: {{ this.delModalNotice["id"] }}</td>
              </tr>
              <tr>
                <td>Subject</td>
                <td>: {{ this.delModalNotice["subject"] }}</td>
              </tr>
              <tr>
                <td>Date</td>
                <td>: {{ this.delModalNotice["date"] }}</td>
              </tr>
              <tr>
                <td>Description</td>
                <td>: {{ this.delModalNotice["description"] }}</td>
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
          <button type="button" class="btn btn-danger">Confirm</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "PastNotices",
  components: {
    NavBar,
  },
  data() {
    return {
      editModalNotice: {
        id: -1,
        subject: "",
        date: "",
        description: "",
      },
      delModalNotice: {
        id: -1,
        subject: "",
        date: "",
        description: "",
      },
      pastNotices: [
        {
          id: 1,
          subject: "Free Gifts",
          date: "25-Dec-2021",
          description:
            "Free gift that you can collect from office for the christmas! Enjoy!",
        },
      ],
    };
  },
  methods: {
    deleteNotice(notice) {
      this.delModalNotice = notice;
      //   console.log(Noticeloyee);
    },
    editNotice(notice) {
      this.editModalNotice = { ...notice };
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
