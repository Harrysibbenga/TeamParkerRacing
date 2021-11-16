<template>
  <div>
    <mdb-modal
      top
      position="top"
      full-height
      direction="top"
      :show="select"
      @close="closeSelect"
    >
      <mdb-modal-header>
        <mdb-modal-title>Select</mdb-modal-title>
      </mdb-modal-header>
      <mdb-modal-body>
        <div class="container-fluid">
          <div class="row">
            <div v-for="(item, index) in items" :key="index" class="col-4 p-0">
              <div class="custom-control custom-radio custom-control-inline">
                <img :src="item.url" :alt="item.alt" class="img-fluid">
                <input
                  :id="item.id"
                  type="radio"
                  name="circuits"
                  class="custom-control-input"
                  @click="selected(item)"
                >
                <label class="custom-control-label" :for="item.id">{{ item.title }}</label>
              </div>
            </div>
          </div>
        </div>
      </mdb-modal-body>
      <mdb-modal-footer>
        <mdb-btn color="secondary" @click.native="closeSelect">
          Close
        </mdb-btn>
        <mdb-btn color="primary" @click="confirmSelect">
          Confirm
        </mdb-btn>
      </mdb-modal-footer>
    </mdb-modal>
  </div>
</template>

<script>
import {
  mdbBtn,
  mdbModalHeader,
  mdbModalTitle,
  mdbModalBody,
  mdbModalFooter,
  mdbModal,
} from "mdbvue";
export default {
    components: {
        mdbBtn,
        mdbModalHeader,
        mdbModalTitle,
        mdbModalBody,
        mdbModalFooter,
        mdbModal,
  },
    props: {
        item: {
            type: Object,
            default: () => {}
        },
        items: {
            type: Array,
            default: () => []
        },
        select: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            object: {}
        }
    },
    methods: {
        selected(item) {
            this.object = item
        },
        confirmSelect() {
            this.$emit('update:item', this.object)
            this.$emit('update:select', false)
            this.object = '';
        },
        closeSelect() {
            this.$emit('update:select', false)
            this.object = '';
        }
    }
}
</script>
