<template lang="pug">
  #app.page-container
    md-app
      md-app-toolbar.md-transparent
        //- md-button.md-icon-button
        //-   md-icon menu

        span.md-title Ledger

      md-app-drawer(md-permanent='card')
        md-list
          md-list-item(to="/balance")
            md-icon account_balance
            span.md-list-item-text Balance
            
          md-list-item(to="/register")
            md-icon list_alt
            span.md-list-item-text Register
            
          md-list-item(to="/add")
            md-icon add
            span.md-list-item-text Add

      md-app-content
        router-view
        

</template>

<style lang="scss">
  .md-app {
    min-height: 100vh;
  }

  .md-app-toolbar {
    box-shadow: none;
  }

  .md-app-drawer {
    width: 250px;
    height: fit-content;
  }
</style>