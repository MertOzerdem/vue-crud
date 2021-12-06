<template>
	<!-- <v-form v-model="state.valid">
		<v-container>
			<v-row>
				<v-col cols="12" md="4">
					<v-text-field
						v-model="state.firstname"
						:rules="state.nameRules"
						:counter="10"
						label="First name"
						required
					></v-text-field>
				</v-col>

				<v-col cols="12" md="4">
					<v-text-field
						v-model="state.lastname"
						:rules="state.nameRules"
						:counter="10"
						label="Last name"
						required
					></v-text-field>
				</v-col>

				<v-col cols="12" md="4">
					<v-text-field
						v-model="state.email"
						:rules="state.emailRules"
						label="E-mail"
						required
					></v-text-field>
				</v-col>
			</v-row>
		</v-container>
	</v-form> -->
	<div>sadsa</div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, reactive, PropType } from "@vue/composition-api";
import User from "../interfaces/users";
import dataService from "../helper/services";

export default defineComponent({
	name: "Input",
	// props: {
	// 	submitHandler: {
	// 		type: Function as PropType<User[]>,
	// 		required: true,
	// 	},
	// },
	setup(props, { emit }) {
        console.log(props)
		// const state = reactive({
		// 	firstname: "",
		// 	lastname: "",
		// 	email: "",
		// 	valid: false,
		// 	nameRules: [
		// 		(v: string) => !!v || "Name is required",
		// 		(v: string) =>
		// 			v.length <= 10 || "Name must be less than 10 characters",
		// 	],
		// 	emailRules: [
		// 		(v: string) => !!v || "E-mail is required",
		// 		(v: string) => /.+@.+/.test(v) || "E-mail must be valid",
		// 	],
		// });

		// const onClickSubmit = () => {
		// 	// const userData = {
		// 	//     firstname: state.firstname,
		// 	//     lastname: state.lastname,
		// 	//     email: state.email,
		// 	// };

		// 	// emit('onSubmit', userData)
		// 	console.log("onClickSubmit");
		// 	emit("onSubmit", {});
		// };

		return {
			// state,
			// onClickSubmit,
		};
	},
	// data: () => ({
	//   valid: false,
	//   firstname: '',
	//   lastname: '',
	//   nameRules: [
	//     (v:string) => !!v || 'Name is required',
	//     (v:string) => v.length <= 10 || 'Name must be less than 10 characters',
	//   ],
	//   email: '',
	//   emailRules: [
	//     (v:string) => !!v || 'E-mail is required',
	//     (v:string) => /.+@.+/.test(v) || 'E-mail must be valid',
	//   ],
	// }),
});
</script>
