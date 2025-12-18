<template>
    <div>
        <h3>List of todo</h3>
        <ul class="flex flex-wrap">
            <!-- example item with NuxtLink -->
            <li>
                <NuxtLink to="/todo/1">
                    <div class="card">
                        <img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/a9/99/ac.jpg"
                            alt="" />
                        <h2>English Plashcard</h2>
                        <p>Descipton</p>
                        <!-- .stop.prevent để ngăn nuxt-link khi mở modal -->
                        <button type="button" @click.stop.prevent="openSimpleModal = true"
                            class="px-3 cursor-pointer py-1 bg-blue-200 rounded">
                            Open Simple Modal
                        </button>
                    </div>
                </NuxtLink>

                <!-- modal bound bằng v-model -->
                <SimpleModal v-model="openSimpleModal" title="Hello modal">
                    <p>Custom content here.</p>
                </SimpleModal>
            </li>

            <!-- a second card -->
            <li>
                <div class="card">
                    <img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/a9/99/ac.jpg" alt="" />
                    <h2>Title card</h2>
                    <p>Descipton</p>
                    <button class="px-3 cursor-pointer py-1 bg-blue-200 rounded" @click="show = true">Open Info
                        Modal</button>

                    <FlexibleModal v-model="show" title="Info" size="lg" variant="info">
                        <template #body>
                            <p>Some informative content</p>
                        </template>

                        <template #footer>
                            <button class="px-3 py-1 bg-blue-500 text-white rounded" @click="save">Save</button>
                            <button class="px-3 py-1 bg-gray-200 rounded" @click="show = false">Cancel</button>
                        </template>
                    </FlexibleModal>
                </div>
            </li>

            <!-- render todos array -->
            <li v-for="(item, index) in todos" :key="index">
                <div class="card">
                    <!-- use v-bind for attributes -->
                    <img :src="item.img" alt="" />
                    <h2>{{ item.title }}</h2>
                    <p>{{ item.des }}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue'


const openSimpleModal = ref(false)
const show = ref(false)
function save() {
    show.value = false
}



const { data: todos } = await useAsyncData('todos', async () => {
    console.log('async data render')
  await new Promise(resolve => setTimeout(resolve, 1500))

  return [
    {
      img: 'https://picsum.photos/200?random=1',
      title: 'Mua cà phê',
      des: 'Ra cửa hàng gần nhà mua một ly latte để bắt đầu ngày mới.'
    },
    {
      img: 'https://picsum.photos/200?random=2',
      title: 'Đọc sách',
      des: 'Hoàn thành ít nhất 20 trang của cuốn sách đang đọc.'
    },
    {
      img: 'https://picsum.photos/200?random=3',
      title: 'Luyện tập thể thao',
      des: 'Tập 15 phút cardio và 20 phút giãn cơ.'
    },
    {
      img: 'https://picsum.photos/200?random=4',
      title: 'Học lập trình',
      des: 'Xem tiếp bài giảng về Vue và thực hành một bài nhỏ.'
    },
    {
      img: 'https://picsum.photos/200?random=5',
      title: 'Dọn bàn làm việc',
      des: 'Sắp xếp lại bàn làm việc cho gọn gàng để tăng năng suất.'
    }
  ]
})
</script>

<style lang="scss">
@use "~/assets/scss/todo.scss";
</style>
