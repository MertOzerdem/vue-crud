<template>
	<v-app>
		<Table />
		<Input ></Input>
	</v-app>
</template>

<script>
import {defineComponent} from "@vue/composition-api";
import Table from "./components/Table.vue";
import Input from "./components/Input.vue";

// import HelloWorld from "./components/HelloWorld.vue";

export default defineComponent({
	name: "App",
	components: {
		Table,
		Input,
	}
});
</script>