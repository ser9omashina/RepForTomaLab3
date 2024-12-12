<template>
    <div class="movies-page">
      <h1>Сеансы/Фильмы</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Название</th>
            <th>Дата</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="movie in movies" :key="movie.id">
            <td>{{ movie.id }}</td>
            <td>{{ movie.name }}</td>
            <td>{{ movie.date }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  type MovieType = {
    id: number;
    name: string;
    date: string;
  };
  
  const movies = ref<MovieType[]>([
    { id: 1, name: 'Фильм 1', date: '2024-05-25' },
    { id: 2, name: 'Фильм 2', date: '2024-05-26' },
    { id: 3, name: 'Фильм 3', date: '2024-05-27' },
  ]);
  </script>
  
  <style scoped>
  .movies-page {
    padding: 20px;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }
  
  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  
  th {
    background-color: #f2f2f2;
  }
  </style>