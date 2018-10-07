<template lang="pug">
  div
    md-dialog-prompt(:md-active.sync='newAccountDialog', v-model='newAccount', md-title='Create new account', md-input-placeholder='Account name', md-confirm-text='Create')

    .add.md-layout
      .md-layout-item.md-size-50.padding
        md-field
          label(for='account') Account
          md-select#account(v-model='account', name='account', @md-selected='accountSelected')
            md-option(value='1') 1
            md-option(value='new') New account
          
        md-field
          label Value
          md-input(v-model='input')
          

        p {{account}}

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
      newAccount: null,
      newAccountDialog: false,
      input: 'test'
    }),
    components: {
      NestedItem
    },
    methods: {
      accountSelected() {
        alert(this.newAccount)
        if (this.newAccount == 'new')
          this.newAccountDialog = true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .padding {
    padding: 25px;
  }
</style>
