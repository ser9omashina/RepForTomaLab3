<template>
    <div class="tickets-page">
      <h1>Билеты</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Пользователь (ID)</th>
            <th>Пользователь (Имя)</th>
            <th>Пользователь (Email)</th>
            <th>Фильм (ID)</th>
            <th>Фильм (Название)</th>
            <th>Фильм (Дата)</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="ticket in tickets" :key="ticket.id">
            <td>{{ ticket.id }}</td>
            <td>{{ ticket.user.id }}</td>
            <td>{{ ticket.user.name }}</td>
            <td>{{ ticket.user.email }}</td>
            <td>{{ ticket.movie.id }}</td>
            <td>{{ ticket.movie.name }}</td>
            <td>{{ ticket.movie.date }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  type UserType = {
    id: number;
    name: string;
    email: string;
  };
  
  type MovieType = {
    id: number;
    name: string;
    date: string;
  };
  
  type TicketType = {
    id: number;
    user: UserType;
    movie: MovieType;
  };
  
  const tickets = ref<TicketType[]>([
      {
          id: 1,
          user: { id: 1, name: 'Иван Иванов', email: 'ivan@example.com' },
          movie: { id: 1, name: 'Фильм 1', date: '2024-05-25' },
      },
      {
          id: 2,
          user: { id: 2, name: 'Петр Петров', email: 'petr@example.com' },
          movie: { id: 2, name: 'Фильм 2', date: '2024-05-26' },
      },
      {
          id: 3,
          user: { id: 1, name: 'Иван Иванов', email: 'ivan@example.com' },
          movie: { id: 3, name: 'Фильм 3', date: '2024-05-27' },
      },
  ]);
  </script>
  
  <style scoped>
  .tickets-page {
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