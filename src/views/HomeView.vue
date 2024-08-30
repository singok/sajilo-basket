<script setup>
import Banner from '@/components/Banner.vue';
import Card from '@/components/Card.vue';
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue'
import Nav from '@/components/Nav.vue';
import Offer from '@/components/Offer.vue';
import Search from '@/components/Search.vue';
import ShopCategory from '@/components/ShopCategory.vue';
</script>

<template>
    <div class="px-32 h-10 bg-gray-100">
        <Header />
    </div>
    <div class="bg-gradient-to-r from-purple-400 to-blue-300 h-20">
        <Search />
    </div>
    <div class="flex flex-row py-8 px-32 bg-gray-100 ">    
        <div class="basis-1/4">
            <ShopCategory />
        </div>
        <div class="basis-3/4">
            <div class="flex flex-col gap-9">
                <Nav />
                <Banner />
            </div>
        </div>
    </div>
    <div class="flex flex-row my-4 py-8 px-32 bg-gray-100 gap-4">
        <div class="basis-4/5 flex flex-col gap-2">
            <div class="flex flex-row justify-between">
                <div class="flex flex-row gap-3 items-center">
                    <span class="font-bold text-xl">Daily Super Deals</span>
                    <span class="text-white bg-red-600 rounded-xl text-sm inline-block py-2 px-4">Ends in: 19 hrs: 33 mins: 22 sec</span>
                </div>
                <div class="flex flex-row items-center">
                    View All (34 items) 
                </div>
            </div>
            <div class="flex flex-row gap-6 py-6">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
        <div class="basis-1/5 min-h-96 rounded-3xl bg-[url('/src/assets/images/macbook.jpeg')] bg-no-repeat bg-cover p-8 text-white flex flex-col gap-1">
            <Offer />
        </div>
    </div>
    <div class="bg-black">
        <Footer />
    </div>
</template>

<style scoped>
</style>