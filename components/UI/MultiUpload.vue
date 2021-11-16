<template>
  <div>
    <input type="file" name="files" multiple accept="image/*" @change="handleChange">

    <mdb-row v-if="imgs.length > 0">
      <mdb-col v-for="(item, index) in imgs" :key="index" col="4">
        <img :src="item.url" :alt="item.alt" class="img-fluid">
        <mdb-btn @click="removeImage(index, imgs)">
          Delete
        </mdb-btn>
      </mdb-col>
    </mdb-row>
  </div>
</template>

<script>
import {mdbRow, mdbCol, mdbBtn} from 'mdbvue'
export default {
    name: 'ImageUpload',
    components: {
      mdbRow, mdbCol, mdbBtn
    },
    props: {
        images: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            files: [],
            imgs: []
        }
    },
    methods: {
        handleChange(v) {
            this.files = v.target.files;
            for(let i = 0; i < this.files.length; i++) {
                const payload = {};
                payload.file = this.files[i];
                payload.alt = this.files[i].name;
                this.$store.dispatch("images/uploadImage", payload).then(img => {
                    this.imgs.push(img)
                })
                .catch(error => {
                    console.log(error)
                })
            }
            this.$emit('update:images', this.imgs)
        },
        removeImage(img, images){
      const index = images.indexOf(img)
      images.splice(index, 1)
    },
    },
}
</script>
