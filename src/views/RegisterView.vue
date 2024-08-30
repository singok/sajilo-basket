<script setup>
</script>

<template>
	<div class="flex">
		<div class="w-1/2 max-lg:hidden">
			<img src="../assets/static-images/side-login-image.jpeg" alt="logo" class="h-full">
		</div> 
		<div class="bg-white max-lg:w-full lg:w-1/2 flex justify-center">
			<form method="POST" action="#" class="w-full p-8 rounded-3xl max-w-lg">
				<div class="flex items-center justify-center">
					<img src="../assets/static-images/burger-logo.png" alt="logo" class="max-w-40 mb-10">
				</div>
				<div class="w-full mb-10 text-center">
					<h1 class="font-bold text-2xl">Sign Up</h1>
				</div>
                <div class="mb-5">
					<label for="first_name" class="block h-10 w-full text-xl font-bold">First Name</label>
					<input type="text" class="block border-2 h-10 w-full p-5 rounded-lg" id="first_name" name="first_name" placeholder="First Name">
				</div>
                <div class="mb-5">
					<label for="last_name" class="block h-10 w-full text-xl font-bold">Last Name</label>
					<input type="text" class="block border-2 h-10 w-full p-5 rounded-lg" id="last_name" name="last_name" placeholder="Last Name">
				</div>
                <div class="mb-5">
					<label for="phone" class="block h-10 w-full text-xl font-bold">Phone Number</label>
					<input type="text" class="block border-2 h-10 w-full p-5 rounded-lg" id="phone" name="phone" placeholder="Phone Number">
				</div>
				<div class="mb-5">
					<label for="email" class="block h-10 w-full text-xl font-bold">Email</label>
					<input type="text" class="block border-2 h-10 w-full p-5 rounded-lg" id="email" name="email" placeholder="Email">
				</div>
				<div class="mb-5">
					<label for="password" class="block h-10 w-full text-xl font-bold">Password</label>
					<input type="password" class="block border-2 h-10 w-full p-5 rounded-lg" id="password" name="password" placeholder="Password">
				</div>
                <div class="mb-5">
					<label for="confirm_password" class="block h-10 w-full text-xl font-bold">ConfirmPassword</label>
					<input type="password" class="block border-2 h-10 w-full p-5 rounded-lg" id="confirm_password" name="confirm_password" placeholder="Confirm Password">
				</div>
				<div class="text-center">
					<button class="block w-full bg-red-700 text-white p-2 rounded-lg">Log in</button>
				</div>
				<div class="mt-5 text-center">
					Already have an account? <RouterLink to="/login"><span class="w-full p-2 hover:underline underline-offset-7 text-red-700">Sign in</span></RouterLink>
				</div>
			</form>
		</div> 
	</div>
</template>

<style scoped>
</style>