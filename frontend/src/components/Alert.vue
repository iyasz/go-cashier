<style>
    .alert-container {
        animation: animateIn 0.5s ease-in-out forwards, animateOut 0.5s ease-in-out 2s forwards;
    }

    @keyframes animateIn {
        from {
            transform: translateY(-100%);
        }
        to {
            transform: translateY(10px);
        }
    }

    @keyframes animateOut {
        from {
            transform: translateY(10px);
        }
        to {
            transform: translateY(-100%);
        }
    }
</style>

<template>
    <div class="relative z-40 alert-container">
      <div class="alert-container fixed top-0 left-0 right-0 flex justify-center">
        <div class="alert bg-red-100 md:w-80 w-[70%] rounded-lg">
          <div class="flex justify-between w-full">
            <div class="flex items-center space-x-3 p-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" class="text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
              </svg>
              <div class="text-red-600 text-sm">{{ message }}</div>
            </div>
            <div class="w-1.5 bg-red-400 rounded-tr-lg rounded-br-lg"></div>
          </div>
        </div>
      </div>
    </div>
  </template>

<script>
export default {
  props: {
    message: {
      type: String, 
      required: true 
    }
  }
};
</script>
  