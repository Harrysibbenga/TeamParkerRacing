import Vue from 'vue'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import CKEditor from '@ckeditor/ckeditor5-vue2'

const options = {
  editors: {
    classic: ClassicEditor,
  },
  name: 'ckeditor',
}

Vue.use(CKEditor.plugin, options)
