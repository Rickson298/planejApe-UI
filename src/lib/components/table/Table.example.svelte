<script>
	import List from 'phosphor-svelte/lib/List';
	import Table from './Table.svelte';
	import { users } from './table-data.mocks';
</script>

<Table data={users} let:item>
	<thead slot="header">
		<th>ID</th>
		<th>Name</th>
		<th>Age</th>
		<th>City</th>
		<th>Email</th>
	</thead>
	<tr>
		<td>{item.id}</td>
		<td>{item.name}</td>
		<td>{item.age} </td>
		<td>{item.city}</td>
		<td>{item.email}</td>
		<td><List /></td>
	</tr>
</Table>
