<template>
    <div class="flex items-center space-x-2">
      <button class="btn btn-sm" @click="setLanguage('en')">English</button>
      <button class="btn btn-sm" @click="setLanguage('zh')">中文</button>
      <button class="btn btn-sm" @click="setLanguage('zh-TW')">繁體中文</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LanguageToggle',
    methods: {
      setLanguage(lang) {
        this.$i18n.locale = lang;
      }
    }
  }
  </script>
  