<template lang="pug">
  .add.md-layout
    .md-layout-item.md-size-50.padding
      md-field
        label Input
        md-input(v-model='input')
        
      md-field
        label Input
        md-input(v-model='input')

    .md-layout-item.md-size-50
      md-list
        NestedItem
          NestedItem
</template>

<script>
  import NestedItem from '../components/NestedItem'

  export default {
    name: 'add',
    data: () => ({
      input: 'test'
    }),
    components: {
      NestedItem
    }
  }
</script>

<style lang="scss" scoped>
  .padding {
    padding: 25px;
  }
</style>
