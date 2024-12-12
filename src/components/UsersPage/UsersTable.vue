<template>
  <button class="btn btn-add" @click="openAddModal">Добавить пользователя</button>
  <div class="users-table">
    <div class="users-table__row users-table__row--header">
      <div class="users-table__cell">id</div>
      <div class="users-table__cell">Имя</div>
      <div class="users-table__cell">Почта</div>
      <div class="users-table__cell">Дата создания</div>
      <div class="users-table__cell">Действия</div>
    </div>
    <div v-for="user in users" :key="user.id" class="users-table__row">
      <div class="users-table__cell">{{ user.id }}</div>
      <div class="users-table__cell">{{ user.name }}</div>
      <div class="users-table__cell">{{ user.email }}</div>
      <div class="users-table__cell">{{ user.created }}</div>
      <div class="users-table__cell users-table__actions">
        <button class="btn btn-edit" @click="openEditModal(user)">Редактировать</button>
        <button class="btn btn-delete" @click="deleteUser(user.id)">Удалить</button>
      </div>
    </div>
  </div>

  <!-- Модальное окно для добавления -->
  <div v-if="isAddModalOpen" class="modal">
    <div class="modal-content">
      <span class="close" @click="closeAddModal">×</span>
      <h2>Добавить пользователя</h2>
      <form @submit.prevent="addUser">
        <label for="name">Имя:</label><br>
        <input type="text" id="name" v-model="newUser.name" required><br>
        <label for="email">Email:</label><br>
        <input type="email" id="email" v-model="newUser.email" required><br><br>
        <button type="submit">Сохранить</button>
      </form>
    </div>
  </div>

    <!-- Модальное окно для редактирования -->
    <div v-if="isEditModalOpen" class="modal">
        <div class="modal-content">
            <span class="close" @click="closeEditModal">×</span>
            <h2>Редактировать пользователя</h2>
            <form @submit.prevent="updateUser">
                <label for="editName">Имя:</label><br>
                <input type="text" id="editName" v-model="editedUser.name" required><br>
                <label for="editEmail">Email:</label><br>
                <input type="email" id="editEmail" v-model="editedUser.email" required><br><br>
                <button type="submit">Сохранить</button>
            </form>
        </div>
    </div>

</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

type UserType = {
    id: number
    name: string
    email: string
    created: string | Date
}

const currentDate = new Date()

const createdMockDate = computed(() => {
    return `${currentDate.getDate()}.${currentDate.getMonth() + 1}.${currentDate.getFullYear()}`
})


const users = ref<UserType[]>([
    {
        id: 0,
        name: 'Ann',
        email: 'alex@alex.alex',
        created: createdMockDate.value,
    },
    {
        id: 1,
        name: 'Alex',
        email: 'ann@ann.ann',
        created: createdMockDate.value,
    },
    {
        id: 2,
        name: 'Art',
        email: 'art@art.art',
        created: createdMockDate.value,
    },
    {
        id: 3,
        name: 'you',
        email: 'you@you.you',
        created: createdMockDate.value,
    },
    {
        id: 4,
        name: 'jack',
        email: 'jack@you.you',
        created: createdMockDate.value,
    },
    {
        id: 5,
        name: 'arni',
        email: 'arni@you.you',
        created: createdMockDate.value,
    }
])

const isAddModalOpen = ref(false);
const isEditModalOpen = ref(false);
const newUser = ref({ name: '', email: '' });
const editedUser = ref<UserType>({ id: -1, name: '', email: '', created: '' });


const openAddModal = () => {
    isAddModalOpen.value = true;
};

const closeAddModal = () => {
    isAddModalOpen.value = false;
    newUser.value = { name: '', email: '' };
};

const openEditModal = (user: UserType) => {
  editedUser.value = {...user};
  isEditModalOpen.value = true;
};

const closeEditModal = () => {
  isEditModalOpen.value = false;
};

const addUser = () => {
    const nextId = users.value.length > 0 ? Math.max(...users.value.map(user => user.id)) + 1 : 0
    users.value.push({
        id: nextId,
        name: newUser.value.name,
        email: newUser.value.email,
        created: createdMockDate.value
    });
    closeAddModal();
};

const deleteUser = (userId: number) => {
  users.value = users.value.filter(user => user.id !== userId);
};

const updateUser = () => {
    const index = users.value.findIndex(user => user.id === editedUser.value.id);
    if (index !== -1) {
        users.value[index] = {...editedUser.value};
    }
    closeEditModal();
};

</script>

<style scoped>
.users-table {
    display: flex;
    flex-direction: column;
    width: 100%;
    border-collapse: collapse;
}

.users-table__row {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    border-bottom: 1px solid #ddd;
}

.users-table__row--header {
    font-weight: bold;
    background-color: #f2f2f2;
}

.users-table__cell {
    min-width: 120px;
    background-color: #f4f4f4;
    border: 1px solid #ccc;
    text-align: center;
    padding: 8px;
    font-size: 14px;
}

.users-table__actions {
    display: flex;
    justify-content: center;
    gap: 5px;
}

/* Стили кнопок */
.btn {
    padding: 8px 12px;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    color: white;
}

.btn-edit {
    background-color: #4caf50;
}

.btn-delete {
    background-color: #f44336;
}

.btn-add {
    background-color: #2196F3;
    margin-bottom: 10px;
}

/* Стили модального окна */
.modal {
    display: flex;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
    justify-content: center;
    align-items: center;
}

.modal-content {
    background-color: #fefefe;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    max-width: 600px;
}

.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
}

.close:hover,
.close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}
</style>