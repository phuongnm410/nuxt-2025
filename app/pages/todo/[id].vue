<template>
    <div>
        <div class="tools">
            <button class="start border-black border bg-green-400 p-2 m-2 rounded-sm ">Start now</button>
            <button class="create border-black border bg-blue-400 p-2 m-2 rounded-sm ">Create Card</button>
        </div>
        <hr class="m-3">
        <div class="cards">
            <ul class="flex flex-row">
                <li>
                    <div class="card">
                        <div class="front-card">
                            <img src="https://t3.ftcdn.net/jpg/02/41/43/18/360_F_241431868_8DFQpCcmpEPVG0UvopdztOAd4a6Rqsoo.jpg" alt="Thumbnail card">
                        </div>
                        <div class="back-card">
                            <h6>Shop</h6>
                        </div>
                    </div>
                </li>
                  <li>
                    <div class="card">
                        <div class="front-card">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/1200px-Good_Food_Display_-_NCI_Visuals_Online.jpg" alt="Thumbnail card">
                        </div>
                        <div class="back-card">
                            <h6>foods</h6>
                        </div>
                        <button class="border border-black p-3 cursor-pointer" @click="showInfo">
                            Show product modal
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
    import ABC from '~/components/ABC.vue';
    const { open  } = useModal()
    
    function showInfo() {
        open({
            component: ABC,
            props: { productId: 123 },
            title: "Product Details"
        })
    }
</script>
