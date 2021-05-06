<template>
  <div>
    <multiselect :options="options" :value="tags" @input="(tags) => $emit('update:tags', tags)"
    :multiple="true"
    tag-placeholder="Add this as new tag"
    placeholder="Select or create tags for this post"
    label="name"
    track-by="name"
    :taggable="true"
    @tag="addTag"
    :clear-on-select="false"
    :close-on-select="false"
    >
    </multiselect>
  </div>
</template>

<script>
  import Multiselect from 'vue-multiselect'

  export default {
    name: 'Tags',
    props: ["tags"],
    components: {
      Multiselect
    },
    computed: {
        options(){
            return this.$store.getters['tags/getTags']
        }
    },
    data() {
      return {
        value: [],
      };
    },
    methods: {
        addTag (newTag) {
            this.$store.dispatch('tags/newTag', newTag).then(tag => {
                this.value.push(tag)
            })
        },
    }
  }
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>