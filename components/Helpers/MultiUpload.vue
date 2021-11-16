<template>
  <div>
    <input
      type="file"
      name="files"
      multiple
      accept="image/*"
      @change="handleChange"
    >
  </div>
</template>

<script>
export default {
    name: 'ImageUpload',
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
        }
    },
}
</script>
