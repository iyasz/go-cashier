<template>
<div class="min-h-100vh flex grow">
    <main class="grid w-full grow grid-cols-1 place-items-center">
        <div class="w-full max-w-[26rem] p-4 sm:px-5 mt-20">
            <div class="text-center">   
                <div class="mt-4">
                    <h2 class="text-2xl font-semibold text-slate-600 dark:text-navy-100">Welcome Back</h2>
                    <p class="text-slate-400 dark:text-navy-300">Please sign in to continue</p>
                </div>
            </div>  
            <div class="bg-white shadow-md mt-5 rounded-lg p-5">
                    <div class="">
                        <label for="username" class="text-sm font-medium text-gray-500">Username</label>
                        <div class="mt-2">
                            <div class="flex rounded-md ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                                <span class="flex select-none items-center pl-3 text-gray-400 sm:text-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                                    </svg>
                                </span>
                                <input type="text" name="username" id="username" required autocomplete="off" class="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm " placeholder="example" />
                            </div>  
                        </div>
                    </div>
                    <div class="mt-5">
                        <label for="pw" class="text-sm font-medium text-gray-500">Password</label>
                        <div class="mt-2">
                            <div class="flex rounded-md ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                                <span class="flex select-none items-center pl-3 text-gray-400 sm:text-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lock" viewBox="0 0 16 16">
                                        <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1"/>
                                    </svg>
                                </span>
                                <input type="password" name="passwrd" id="pw" required autocomplete="off" class="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm " placeholder="******" />
                            </div>  
                        </div>
                    </div>
                    <button class="w-full bg-indigo-600 text-slate-200 rounded-md py-2 mt-10 text-sm">Sign In</button>
            </div>
        </div>
    </main>
</div>
</template>

<script>

</script>