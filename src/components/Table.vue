<template>
	<v-container>
		<v-data-table
			:headers="headers"
			:items="users"
			:items-per-page="10"
			class="elevation-1"
		></v-data-table>
	</v-container>
</template>

<script lang="ts">
import {
	defineComponent,
	onMounted,
	ref,
	reactive,
} from "@vue/composition-api";
import dataService from "../helper/services";

export default defineComponent({
	name: "Table",
	methods: {
		getUsers() {
			dataService
				.getAll()
				.then((response) => {
					return response.data;
				})
				.then((data) => {
					this.users = data;
				})
				.catch(function (error) {
					console.log(error);
				});
		},
		postUsers() {
			dataService
				.create("users", {
					firstName: "new",
					lastName: "User",
				})
				.then(function (response) {
					console.log(response);
				})
				.catch(function (error) {
					console.log(error);
				});
		},
		deleteUsers() {
			dataService
				.delete("users", "61a625b497069d03e849104c")
				.then(function (response) {
					console.log(response);
				})
				.catch(function (error) {
					console.log(error);
				});
		},
	},
	mounted() {
		// this.getUsers();
		// this.postUsers();
		// this.deleteUsers();
	},
	data() {
		return {
			headers: [
				{
					text: "First Name",
					align: "left",
					sortable: true,
					value: "firstName",
				},
				{
					text: "Last Name",
					align: "left",
					sortable: true,
					value: "lastName",
				}
			],
			users: [
			],
		};
	},
});
</script>