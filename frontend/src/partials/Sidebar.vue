<template>
  <div>
    <!-- Sidebar backdrop (mobile only) -->
    <div class="fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200" :class="sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'" aria-hidden="true"></div>

    <!-- Sidebar -->
    <div id="sidebar" ref="sidebar" class="flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 dark:bg-slate-800 bg-white shadow p-4 transition-all duration-200 ease-in-out" :class="sidebarOpen ? 'translate-x-0' : '-translate-x-64'">

      <!-- Sidebar header -->
      <div class="flex justify-between mb-10 pr-3 sm:px-2">
        <!-- Close button -->
        <button ref="trigger" class="lg:hidden text-slate-500 hover:text-slate-400" @click.stop="$emit('close-sidebar')" aria-controls="sidebar" :aria-expanded="sidebarOpen">
          <span class="sr-only">Close sidebar</span>
          <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
          </svg>
        </button>
        <!-- Logo -->
        <router-link class="block" to="/">
          <svg width="32" height="32" viewBox="0 0 32 32">
            <defs>
              <linearGradient x1="28.538%" y1="20.229%" x2="100%" y2="108.156%" id="logo-a">
                <stop stop-color="#A5B4FC" stop-opacity="0" offset="0%" />
                <stop stop-color="#A5B4FC" offset="100%" />
              </linearGradient>
              <linearGradient x1="88.638%" y1="29.267%" x2="22.42%" y2="100%" id="logo-b">
                <stop stop-color="#38BDF8" stop-opacity="0" offset="0%" />
                <stop stop-color="#38BDF8" offset="100%" />
              </linearGradient>
            </defs>
            <rect fill="#6366F1" width="32" height="32" rx="16" />
            <path d="M18.277.16C26.035 1.267 32 7.938 32 16c0 8.837-7.163 16-16 16a15.937 15.937 0 01-10.426-3.863L18.277.161z" fill="#4F46E5" />
            <path d="M7.404 2.503l18.339 26.19A15.93 15.93 0 0116 32C7.163 32 0 24.837 0 16 0 10.327 2.952 5.344 7.404 2.503z" fill="url(#logo-a)" />
            <path d="M2.223 24.14L29.777 7.86A15.926 15.926 0 0132 16c0 8.837-7.163 16-16 16-5.864 0-10.991-3.154-13.777-7.86z" fill="url(#logo-b)" />
          </svg>
        </router-link>
      </div>

      <div class="space-y-8">
        <!-- Pages group -->
        <div>
          <h3 class="text-xs uppercase text-slate-500 font-semibold pl-3">
            <span class="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6" aria-hidden="true">•••</span>
            <span class="lg:hidden lg:sidebar-expanded:block 2xl:block">Main Menu</span>
          </h3>
          <ul class="mt-3">
            <SidebarLinkGroup v-slot="parentLink" :activeCondition="currentRoute.fullPath === '/' || currentRoute.fullPath.includes('dashboard')">
              <a class="block dark:text-slate-200 truncate transition duration-150"  href="#0" @click.prevent="sidebarExpanded ? parentLink.handleClick() : sidebarExpanded = true">
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" :class="(currentRoute.fullPath === '/' || currentRoute.fullPath.includes('dashboard')) ? 'text-indigo-500' : 'dark:text-slate-200 text-slate-500'" fill="currentColor" class="bi bi-grid" viewBox="0 0 16 16">
                      <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z"/>
                    </svg>
                    <span class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 " :class="(currentRoute.fullPath === '/' || currentRoute.fullPath.includes('dashboard')) ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-500 dark:text-slate-300'">Dashboard</span>
                  </div>
                  <div class="flex shrink-0 ml-2">
                    <svg class="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400" :class="parentLink.expanded && 'rotate-180'" viewBox="0 0 12 12">
                      <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                    </svg>
                  </div>
                </div>
              </a>
              <div class="lg:hidden lg:sidebar-expanded:block 2xl:block">
                <ul class="pl-9 mt-1 " :class="!parentLink.expanded && 'hidden'">
                  <RouterLink to="/" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mt-3 mb-2 last:mb-0">
                      <a class="block transition-[padding-left] duration-300 ease-in-out hover:pl-4" :class="isExactActive ? 'text-indigo-500' : 'text '" :href="href" @click="navigate">
                        <div class="flex items-center space-x-2">
                          <div class="w-[6px] h-[6px] rounded-full border border-current opacity-40"></div>
                          <span class="text-sm font-normal lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Main</span>
                        </div>
                      </a>
                    </li>
                  </RouterLink>
                  <RouterLink to="/dashboard/analytics" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-2 last:mb-0 ">
                      <a class="block transition-[padding-left] duration-300 ease-in-out hover:pl-4 " :class="isExactActive ? 'text-indigo-500' : 'text '" :href="href" @click="navigate">
                        <div class="flex items-center space-x-2">
                          <div class="w-[6px] h-[6px] rounded-full border border-current opacity-40"></div>
                          <span class="text-sm font-normal lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Analytics</span>
                        </div>
                      </a>
                    </li>
                  </RouterLink>
                </ul>
              </div>

            </SidebarLinkGroup>
            <!-- Products  -->
            <SidebarLinkGroup v-slot="parentLink" :activeCondition="currentRoute.fullPath.includes('product')">
              <a class="block text-slate-700 dark:text-slate-200 truncate transition duration-150" :class="currentRoute.fullPath.includes('product') ? '' : ''" href="#0" @click.prevent="sidebarExpanded ? parentLink.handleClick() : sidebarExpanded = true">
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" :class="currentRoute.fullPath.includes('product') ? 'text-indigo-500' : 'dark:text-slate-200 text-slate-500'" width="20" height="20" fill="currentColor" class="bi bi-box-seam" viewBox="0 0 16 16">
                      <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2zm3.564 1.426L5.596 5 8 5.961 14.154 3.5zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z"/>
                    </svg>
                    <span class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200" :class="currentRoute.fullPath.includes('product') ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-500 dark:text-slate-300'">Products </span>
                  </div>
                  <!-- Icon -->
                  <div class="flex shrink-0 ml-2">
                    <svg class="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400" :class="parentLink.expanded && 'rotate-180'" viewBox="0 0 12 12">
                      <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                    </svg>
                  </div>
                </div>
              </a>
              <div class="lg:hidden lg:sidebar-expanded:block 2xl:block">
                
                <ul class="pl-9 mt-1 " :class="!parentLink.expanded && 'hidden'">
                  <RouterLink to="/product" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mt-3 mb-2 last:mb-0 ">
                      <a class="block transition-[padding-left] duration-300 ease-in-out hover:pl-4 " :class="isExactActive ? 'text-indigo-500' : 'text '" :href="href" @click="navigate">
                        <div class="flex items-center space-x-2">
                          <div class="w-[6px] h-[6px] rounded-full border border-current opacity-40"></div>
                          <span class="text-sm font-normal lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">List</span>
                        </div>
                      </a>
                    </li>
                  </RouterLink>
                  <RouterLink to="/product/create" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-2 last:mb-0 ">
                      <a class="block transition-[padding-left] duration-300 ease-in-out hover:pl-4 " :class="isExactActive ? 'text-indigo-500' : 'text '" :href="href" @click="navigate">
                        <div class="flex items-center space-x-2">
                          <div class="w-[6px] h-[6px] rounded-full border border-current opacity-40"></div>
                          <span class="text-sm font-normal lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Create</span>
                        </div>
                      </a>
                    </li>
                  </RouterLink>
                  <RouterLink to="/dashboard/analytics" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-2 last:mb-0 ">
                      <a class="block transition-[padding-left] duration-300 ease-in-out hover:pl-4 " :class="isExactActive ? 'text-indigo-500' : 'text '" :href="href" @click="navigate">
                        <div class="flex items-center space-x-2">
                          <div class="w-[6px] h-[6px] rounded-full border border-current opacity-40"></div>
                          <span class="text-sm font-normal lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Details</span>
                        </div>
                      </a>
                    </li>
                  </RouterLink>
                </ul>
                
              </div>
            </SidebarLinkGroup>
            <!-- Transaksi  -->
            <SidebarLinkGroup v-slot="parentLink" :activeCondition="currentRoute.fullPath.includes('transaksi')">
              <a class="block text-slate-700 dark:text-slate-200 truncate transition duration-150" :class="currentRoute.fullPath.includes('transaksi') ? '' : ''" href="#0" @click.prevent="sidebarExpanded ? parentLink.handleClick() : sidebarExpanded = true">
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" :class="currentRoute.fullPath.includes('transaksi') ? 'text-indigo-500' : 'dark:text-slate-200 text-slate-500'" width="20" height="20" fill="currentColor" class="bi bi-graph-up-arrow" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M0 0h1v15h15v1H0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5"/>
                    </svg>
                    <span class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200" :class="currentRoute.fullPath.includes('transaksi') ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-500 dark:text-slate-300'">Transaction </span>
                  </div>
                  <!-- Icon -->
                  <div class="flex shrink-0 ml-2">
                    <svg class="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400" :class="parentLink.expanded && 'rotate-180'" viewBox="0 0 12 12">
                      <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                    </svg>
                  </div>
                </div>
              </a>
              <div class="lg:hidden lg:sidebar-expanded:block 2xl:block">
                
                <ul class="pl-9 mt-1 " :class="!parentLink.expanded && 'hidden'">
                  <RouterLink to="/transaksi" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mt-3 mb-2 last:mb-0 ">
                      <a class="block transition-[padding-left] duration-300 ease-in-out hover:pl-4 " :class="isExactActive ? 'text-indigo-500' : 'text '" :href="href" @click="navigate">
                        <div class="flex items-center space-x-2">
                          <div class="w-[6px] h-[6px] rounded-full border border-current opacity-40"></div>
                          <span class="text-sm font-normal lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Income Transaction</span>
                        </div>
                      </a>
                    </li>
                  </RouterLink>
                  <RouterLink to="/transaksi/create" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-2 last:mb-0 ">
                      <a class="block transition-[padding-left] duration-300 ease-in-out hover:pl-4 " :class="isExactActive ? 'text-indigo-500' : 'text '" :href="href" @click="navigate">
                        <div class="flex items-center space-x-2">
                          <div class="w-[6px] h-[6px] rounded-full border border-current opacity-40"></div>
                          <span class="text-sm font-normal lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Out Transaction</span>
                        </div>
                      </a>
                    </li>
                  </RouterLink>
                </ul>
                
              </div>
            </SidebarLinkGroup>
        
          </ul>
        </div>

        <div>
          <h3 class="text-xs uppercase text-slate-500 font-semibold pl-3">
            <span class="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6" aria-hidden="true">•••</span>
            <span class="lg:hidden lg:sidebar-expanded:block 2xl:block">Settings</span>
          </h3>
          <ul class="mt-3">

            <router-link to="/account" custom v-slot="{ href, navigate, isExactActive }">
              <li class="px-3 py-2 rounded-sm mb-0.5 last:mb-0" :class="isExactActive && 'bg-slate-900'">
                <a class="block text-slate-200 truncate transition duration-150" :class="isExactActive ? 'hover:text-slate-200' : 'hover:text-white'" :href="href" @click="navigate">
                  <div class="flex items-center justify-between">
                    <div class="grow flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" :class="currentRoute.fullPath.includes('account') ? 'text-indigo-500' : 'dark:text-slate-200 text-slate-500'" width="20" height="20" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                      </svg>
                      <span class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200" :class="currentRoute.fullPath.includes('account') ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-500 dark:text-slate-300'">My Account</span>
                    </div>
                  </div>
                </a>
              </li>
            </router-link>
            
          </ul>
        </div>
      </div>

      <div class="pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto">
        <div class="px-3 py-2">
          <button @click.prevent="sidebarExpanded = !sidebarExpanded">
            <span class="sr-only">Expand / collapse sidebar</span>
            <div class="bg-indigo-600 px-2 py-2 rounded-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right text-slate-300 fill-current sidebar-expanded:rotate-180" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
              </svg>
            </div>
          </button> 
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRouter } from 'vue-router'

import SidebarLinkGroup from './SidebarLinkGroup.vue'

export default {
  name: 'Sidebar',
  props: ['sidebarOpen'],
  components: {
    SidebarLinkGroup,
  },
  setup(props, { emit }) {

    const trigger = ref(null)
    const sidebar = ref(null)

    const storedSidebarExpanded = localStorage.getItem('sidebar-expanded')
    const sidebarExpanded = ref(storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true')

    const currentRoute = useRouter().currentRoute.value

    // close on click outside
    const clickHandler = ({ target }) => {
      if (!sidebar.value || !trigger.value) return
      if (
        !props.sidebarOpen ||
        sidebar.value.contains(target) ||
        trigger.value.contains(target)
      ) return
      emit('close-sidebar')
    }

    // close if the esc key is pressed
    const keyHandler = ({ keyCode }) => {
      if (!props.sidebarOpen || keyCode !== 27) return
      emit('close-sidebar')
    }

    onMounted(() => {
      document.addEventListener('click', clickHandler)
      document.addEventListener('keydown', keyHandler)
    })

    onUnmounted(() => {
      document.removeEventListener('click', clickHandler)
      document.removeEventListener('keydown', keyHandler)
    })

    watch(sidebarExpanded, () => {
      localStorage.setItem('sidebar-expanded', sidebarExpanded.value)
      if (sidebarExpanded.value) {
        document.querySelector('body').classList.add('sidebar-expanded')
      } else {
        document.querySelector('body').classList.remove('sidebar-expanded')
      }
    })

    return {
      trigger,
      sidebar,
      sidebarExpanded,
      currentRoute,
    }
  },
}
</script>