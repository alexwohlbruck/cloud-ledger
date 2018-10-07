<template lang="pug">
  div
    //- md-dialog-prompt(:md-active.sync='newAccountDialog', v-model='newAccount', md-title='Create new account', md-input-placeholder='Account name', md-confirm-text='Create')

    .add.md-layout.md-alignment-top-space-between
      .md-layout-item.md-size-50.padding
        form(@submit.prevent='postAdd')
          md-field
            label(for='account') Account
            md-select#account(v-model='add.account', name='account')
              md-option(value='1') Account 1
              md-option(value='2') Account 2
              //- md-option(value='new') New account
            
          //- md-field
          //-   label Value
          //-   md-input(v-model='input')

          md-field
            label Comment
            md-input(v-model='add.comment')

          md-button(type='submit') Add

      .md-layout-item.md-size-50
        md-list
          md-list-item(v-for='add in adds')
            span.md-list-item-text {{add.comment}}
</template>

<script>
  import NestedItem from '../components/NestedItem'
  import axios from 'axios'

  const host = 'https://dincyl6edgih8.cloudfront.net'

  export default {
    name: 'add',
    data: () => ({
      add: {
        account: null,
        comment: null,
      },
      adds: [{
        comment: 'hello'
      },{
        comment: 'world'
      }],
      // newAccount: null,
      // newAccountDialog: false,
      input: 'test'
    }),
    components: {
      NestedItem
    },
    mounted() {
      axios(`${host}/add`, {method: 'GET'}).then(res => {
        this.adds = res.data
      })
    },
    methods: {

      postAdd() {
        axios(`${host}/add`, {method: 'POST', data: this.add}).then(res => {
          adds.push(res.data)
        })
      }
      // accountSelected() {
      //   alert(this.newAccount)
      //   if (this.newAccount == 'new')
      //     this.newAccountDialog = true
      // }
    }
  }
</script>

<style lang="scss" scoped>
  .padding {
    padding: 25px;
  }
</style>
