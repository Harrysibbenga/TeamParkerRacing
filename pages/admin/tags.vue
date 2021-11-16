<template>
  <div>
    <ui-message :msg.sync="msg" />
    <table class="table">
      <thead class="black text-white">
        <tr>
          <th scope="col">
            Name
          </th>
          <th scope="col">
            Active
          </th>
          <th scope="col">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(tag, index) in tags" :key="index">
          <td scope="row">
            {{ tag.name }}
          </td>
          <td>
            <div class="custom-control custom-switch">
              <input
                :id="tag.id"
                :name="tag.name"
                type="checkbox"
                class="custom-control-input"
                :checked="tag.active"
                @change="update(tag.id, $event)"
              >
              <label class="custom-control-label" :for="tag.id">{{ tag.active }}</label>
            </div>
          </td>
          <td>
            <button
              class="btn btn-danger btn-sm"
              @click="remove(tag.id)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <ui-message :msg.sync="msg" />
  </div>
</template>

<script>
import { tagsCollection } from "@/services/firebase"
export default {
  data: () => ({
    msg: {
      type: '',
      message: '',
      value: ''
    }
  }),
  computed: {
    tags() {
      return this.$store.getters['tags/getTags']
    }
  },
  methods: {
    remove(id) {
      tagsCollection.doc(id).delete().then(() => {
        this.msg = {
          type: 'error',
          message: "Tag deleted"
        }
        setTimeout(() => {
          this.msg = {
            type: '',
            message: ""
          }
        },5000)
      })
    },
    update(id, evnt) {
      const value = evnt.target.checked
      tagsCollection.doc(id).update({
        active: value
      }).then(() => {
        this.msg = {
          type: 'success',
          message: "Tag updated"
        }
        setTimeout(() => {
          this.msg = {
            type: '',
            message: ""
          }
        },3000)
      })
    }
  },
}
</script>
