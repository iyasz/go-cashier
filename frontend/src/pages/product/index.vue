<template>
    <div class="flex h-screen overflow-hidden">
        <Sidebar :sidebarOpen="sidebarOpen" @close-sidebar="sidebarOpen = false" />

        <div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <Header :sidebarOpen="sidebarOpen" @toggle-sidebar="sidebarOpen = !sidebarOpen" />
            <main>
                <div class="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
                    <div class="flex items-center space-x-4 pb-5 lg:pb-6">
                        <h2 class="text-xl font-medium text-slate-800 dark:text-slate-200 lg:text-2xl">Product List</h2>
                    </div>

                    <div class="grid grid-cols-1 gap-4 sm:gap-5 lg:gap-6 mt-5">
                        <div class="">
                            <div class="flex items-center justify-between">
                                <h2 class="text-base font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-slate-300">Product Table</h2>
                                <div class="">
                                    <RouterLink to="/product/create" class="btn bg-indigo-700 dark:bg-indigo-800 px-9 ms-4 py-2 text-slate-200"> Tambah</RouterLink>
                                </div>
                            </div>
                            <div class="card mt-3">
                                <div class="is-scrollbar-hidden min-w-full overflow-x-auto">
                                    <table class=" w-full text-left">
                                        <thead>
                                            <tr>
                                                <th class="whitespace-nowrap text-sm rounded-tl-lg bg-slate-100 px-4 py-3 font-semibold uppercase text-slate-600 dark:bg-[#202b40] dark:text-slate-300 lg:px-5">#</th>
                                                <th class="whitespace-nowrap text-sm bg-slate-100 px-4 py-3 font-semibold uppercase text-slate-600 dark:bg-[#202b40] dark:text-slate-300 lg:px-5">Photo</th>
                                                <th class="whitespace-nowrap text-sm bg-slate-100 px-4 py-3 font-semibold uppercase text-slate-600 dark:bg-[#202b40] dark:text-slate-300 lg:px-5">Name</th>
                                                <th class="whitespace-nowrap text-sm bg-slate-100 px-4 py-3 font-semibold uppercase text-slate-600 dark:bg-[#202b40] dark:text-slate-300 lg:px-5">Stock</th>
                                                <th class="whitespace-nowrap text-sm bg-slate-100 px-4 py-3 font-semibold uppercase text-slate-600 dark:bg-[#202b40] dark:text-slate-300 lg:px-5">Status</th>
                                                <th class="whitespace-nowrap text-sm rounded-tr-lg bg-slate-100 px-4 py-3 font-semibold uppercase text-slate-600 dark:bg-[#202b40] dark:text-slate-300 lg:px-5">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="border-y border-transparent border-b-slate-200 dark:border-b-slate-700 dark:bg-[#26334d] bg-white shadow">
                                                <td class="whitespace-nowrap text-sm dark:text-slate-300 px-4 py-3 sm:px-5">1</td>
                                                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                                                    <div class="avatar flex size-4">
                                                        <img src="https://i.pinimg.com/originals/73/7a/47/737a47db82a662e28a44253d58162c1f.jpg" width="55" height="55" class="mask rounded-xl" alt="">
                                                    </div>
                                                </td>
                                                <td class="whitespace-nowrap text-sm px-3 py-3 font-medium text-slate-700 dark:text-slate-300 lg:px-5">Johan</td>
                                                <td class="whitespace-nowrap text-sm px-4 py-3 sm:px-5 dark:text-slate-300">43</td>
                                                <td class="whitespace-nowrap text-xs px-4 py-3 sm:px-5">
                                                    <div class="badge rounded-full bg-indigo-100 dark:bg-indigo-400 py-1 text-indigo-600 dark:text-indigo-900 font-semibold w-max px-4">Tersedia</div>
                                                </td>
                                                <td class="whitespace-nowrap text-sm px-4 py-3 sm:px-5 dark:text-slate-300">43</td>
                                            </tr>
                                            <tr class="border-y border-transparent border-b-slate-200 dark:border-b-slate-700 dark:bg-[#26334d] bg-white shadow">
                                                <td class="whitespace-nowrap text-sm dark:text-slate-300 px-4 py-3 sm:px-5">2</td>
                                                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                                                    <div class="avatar flex size-4">
                                                        <img src="https://i.pinimg.com/originals/73/7a/47/737a47db82a662e28a44253d58162c1f.jpg" width="55" height="55" class="mask rounded-xl" alt="">
                                                    </div>
                                                </td>
                                                <td class="whitespace-nowrap text-sm px-3 py-3 font-medium text-slate-700 dark:text-slate-300 lg:px-5">Johan</td>
                                                <td class="whitespace-nowrap text-sm px-4 py-3 sm:px-5 dark:text-slate-300">43</td>
                                                <td class="whitespace-nowrap text-xs px-4 py-3 sm:px-5">
                                                    <div class="badge rounded-full bg-indigo-100 dark:bg-indigo-400 py-1 text-indigo-600 dark:text-indigo-900 font-semibold w-max px-4">Tersedia</div>
                                                </td>
                                                <td class="whitespace-nowrap text-sm px-4 py-3 sm:px-5 dark:text-slate-300">43</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>

                    </div>
                    
                </div>
            </main>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import Sidebar from '../../partials/Sidebar.vue'
import Header from '../../partials/Header.vue'

export default {
  name: 'Product',
  components: {
    Sidebar,
    Header,
  },
  setup() {

    const sidebarOpen = ref(false)

    return {
      sidebarOpen,
    }  
  }
}
</script>