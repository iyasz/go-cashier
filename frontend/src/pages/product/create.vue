<template>

    <Alert v-if="showAlert" :message="alertMessage" />

    <div class="flex h-screen overflow-hidden">
        <Sidebar :sidebarOpen="sidebarOpen" @close-sidebar="sidebarOpen = false" />

        <div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <Header :sidebarOpen="sidebarOpen" @toggle-sidebar="sidebarOpen = !sidebarOpen" />
            <main>
                <div class="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
                    <div class="flex items-center space-x-4 pb-5 lg:pb-6">
                        <h2 class="text-xl font-medium text-slate-800 dark:text-slate-200 lg:text-2xl">Product Create</h2>
                        <ul class="hidden flex-wrap items-center space-x-4 sm:flex">
                            <li class="flex items-center space-x-4">
                                <RouterLink to="/product" class="text-primary text-indigo-600 transition-colors hover:text-primary-focus dark:text-indigo-400 dark:hover:text-accent">Product</RouterLink>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                                </svg>
                            </li>
                            <li>Create</li>
                        </ul>
                    </div>

                    <div class="mt-5">
                        <form action="">
                            <div class="flex justify-between">
                                <h2 class="text-base font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-slate-300">New Product</h2>
                                <div class="">
                                    <button class="btn bg-indigo-700 dark:bg-indigo-800 px-9 ms-4 py-2 text-slate-200">Save</button>
                                </div>
                            </div>
                            <div class="grid grid-cols-12 gap-4 sm:gap-5 lg:gap-6 mt-3">
                                <div class="lg:order-0 order-1 col-span-12 lg:col-span-8">
                                    <div class="bg-white dark:bg-slate-800 shadow rounded-md">
                                        <div class="p-4">
                                            <div class="mb-5">
                                                <label for="name" class="text-sm font-medium dark:text-gray-300 text-gray-500">Name</label>
                                                <div class="mt-2">
                                                    <div class="flex w-full rounded-md ring-1 ring-inset ring-gray-300 dark:ring-gray-500 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 ">
                                                        <input v-model="formData.name" type="text" name="name" id="name" required autocomplete="off" class="block flex-1 border-0 bg-transparent py-2 pl-3 text-gray-900 dark:text-gray-300 placeholder:text-gray-400 focus:ring-0 sm:text-sm " placeholder="Product Name" />
                                                    </div>  
                                                </div>
                                            </div>
                                            <div class="mb-5">
                                                <label for="jenis" class="text-sm font-medium dark:text-gray-300 text-gray-500">Jenis</label>
                                                <div class="mt-2">
                                                    <div class="flex w-full rounded-md ring-1 ring-inset ring-gray-300 dark:ring-gray-500 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 ">
                                                        <select v-model="formData.jenis" required name="jenis" id="jenis" class="block flex-1 border-0 bg-transparent py-2 pl-3 text-gray-900 dark:text-gray-300 placeholder:text-gray-400 focus:ring-0 sm:text-sm">
                                                            <option class="dark:bg-slate-700" selected disabled>Choose an option</option>
                                                            <option class="dark:bg-slate-700" value="1">Makanan</option>
                                                            <option class="dark:bg-slate-700" value="2">Barang</option>
                                                        </select>
                                                    </div>  
                                                </div>
                                            </div>
                                            
                                            <div class="mb-5">
                                                <label for="price" class="text-sm font-medium dark:text-gray-300 text-gray-500">Price</label>
                                                <div class="mt-2">
                                                    <div class="grid grid-cols-12 gap-3">
                                                        <div class="lg:col-span-7 col-span-12">
                                                            <div class="flex w-full rounded-md ring-1 ring-inset ring-gray-300 dark:ring-gray-500 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 ">
                                                                <input v-model="formData.price" @input="changeToRupiah" type="number" name="price" id="price" required autocomplete="off" class="block flex-1 border-0 bg-transparent py-2 pl-3 text-gray-900 dark:text-gray-300 placeholder:text-gray-400 focus:ring-0 sm:text-sm " />
                                                            </div>
                                                        </div>
                                                        <div class="lg:col-span-5 lg:block hidden">
                                                            <div class="flex w-full rounded-md ring-1 ring-inset ring-gray-300 dark:ring-gray-500 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 ">
                                                                <input v-model="rupiah" type="text" name="topRupiah" id="topRupiah" readonly required autocomplete="off" class="block flex-1 border-0 bg-transparent py-2 pl-3 text-gray-900 dark:text-gray-300 placeholder:text-gray-400 focus:ring-0 sm:text-sm " placeholder="Rupiah" />
                                                            </div>
                                                        </div>

                                                    </div>  
                                                </div>
                                            </div>
                                            <div class="mb-5">
                                                <label for="stok" class="text-sm font-medium dark:text-gray-300 text-gray-500">Stok</label>
                                                <div class="mt-2">
                                                    <div class="flex w-full rounded-md ring-1 ring-inset ring-gray-300 dark:ring-gray-500 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 ">
                                                        <input v-model="formData.stok" type="number" name="stok" id="stok" required autocomplete="off" class="block flex-1 border-0 bg-transparent py-2 pl-3 text-gray-900 dark:text-gray-300 placeholder:text-gray-400 focus:ring-0 sm:text-sm "/>
                                                    </div>  
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div class="lg:order-1 order-0 col-span-12 lg:col-span-4">
                                    <div class="bg-white dark:bg-slate-800 shadow rounded-md">
                                        <div class="p-4">
                                            <div class="">
                                                <label class="text-sm font-medium dark:text-gray-300 text-gray-500">Photo</label>
                                                <input ref="fileInput" type="file" @change="previewImage" style="display: none;"  accept="image/*">
                                                <div class="mt-2">
                                                    <div @click="openFileInput" class="cursor-pointer rounded-md w-full" :class="imagePreview ? 'min-h-max' : 'border-3 border-slate-300 border-dashed dark:border-slate-700 min-h-[200px]'">
                                                        <img :src="imagePreview" v-if="imagePreview" alt="Preview" class="w-full object-cover rounded-md">
                                                        <div v-if="!imagePreview" class="h-full w-full text-center">
                                                            <p class="mt-20">Click here to upload</p>
                                                        </div>  
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </form>
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
import Alert from '../../components/Alert.vue'

export default {
  name: 'Product',
  components: {
    Sidebar,
    Header,
    Alert,
  },
  setup() {
    const sidebarOpen = ref(false)

    return {
      sidebarOpen,
    }  
  },
  data() {
    return {
      showAlert: false,
      alertMessage: null,
      imagePreview: null,
      rupiah: null,
      formData: {
        photo: null,
        name: null,
        jenis: null,
        price: null,
        stok: null,
      },
    };
  },
  methods: {
    openFileInput() {
      this.$refs.fileInput.click();
    },
    changeToRupiah(){
        if(this.formData.price == 0 || this.formData.price == null){
            return this.rupiah = null;
        }

        if(this.formData.price.toString().length > 9){
            const number = this.formData.price.toString().slice(0, 9);
            this.formData.price = parseInt(number);
        }

        const convert = this.formData.price.toFixed().replace(/\d(?=(\d{3})+$)/g, '$&,');
        return this.rupiah = convert
        
    },
    previewImage(event) {
        const file = event.target.files[0];
        if (file) {

            const fileSize = file.size; 
            const maxSize = 1024 * 1024; 

            if (fileSize > maxSize) {
                this.$refs.fileInput.value = '';

                this.showAlert = true;
                this.alertMessage = "Tidak boleh melebihi 1 MB!";
                this.imagePreview = null;

                setTimeout(() => {
                    this.showAlert = false; 
                }, 3000); 

                return false;
            }

            const fileName = file.name;
            const fileExtension = fileName.split('.').pop().toLowerCase();

            const allowedExtensions = ['jpg', 'jpeg', 'png'];

            if (!allowedExtensions.includes(fileExtension)) {
                this.$refs.fileInput.value = '';

                this.showAlert = true;
                this.alertMessage = "Tipe file tidak support!";
                this.imagePreview = null;

                setTimeout(() => {
                    this.showAlert = false; 
                }, 3000); 

                return false;
            }

            this.formData.photo = file;

            const reader = new FileReader();
            reader.onload = (e) => {
                this.imagePreview = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    },
    
  },
}
</script>