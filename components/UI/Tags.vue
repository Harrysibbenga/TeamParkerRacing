<template>
  <div>
    <multiselect
      :options="options"
      :value="tags"
      :multiple="true"
      tag-placeholder="Add this as new tag"
      placeholder="Select or create tags for this post"
      label="name"
      track-by="name"
      :taggable="true"
      :clear-on-select="false"
      :close-on-select="false"
      @input="(tags) => $emit('update:tags', tags)"
      @tag="addTag"
    />
  </div>
</template>

<script>
  import Multiselect from 'vue-multiselect'

  export default {
    name: 'Tags',
    components: {
      Multiselect
    },
    props: ["tags"],
    data() {
      return {
        value: [],
      };
    },
    computed: {
        options(){
            return this.$store.getters['tags/getTags']
        }
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
