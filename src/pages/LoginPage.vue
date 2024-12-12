<template>
    <div class="login-page">
      <h2>Авторизация</h2>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="login">Логин:</label>
          <input type="text" id="login" v-model="loginData.username" required>
        </div>
        <div class="form-group">
          <label for="password">Пароль:</label>
          <input type="password" id="password" v-model="loginData.password" required>
        </div>
        <button type="submit" class="btn btn-login">Войти</button>
      </form>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const loginData = ref({
    username: '',
    password: ''
  });
  
  const login = () => {
    //Здесь будет логика обработки авторизации
      console.log('Авторизация', loginData.value);
      // В реальном приложении, тут бы отправлялся запрос на сервер
  };
  </script>
  
  <style scoped>
  .login-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
  
  h2 {
    margin-bottom: 20px;
  }
  
  .form-group {
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    width: 300px;
  }
  
  label {
    margin-bottom: 5px;
  }
  
  input {
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  .btn-login {
    background-color: #2196F3;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  </style>