<script>
	import Table from './Table.svelte';
	import { users } from './table-data.mocks';
</script>

<Table data={users} let:item>
	<thead slot="header">
		<th>ID</th>
		<th>Nome</th>
		<th>Idade</th>
		<th>Cidade</th>
		<th>Email</th>
	</thead>
	<tr>
		<td>{item.id}</td>
		<td>{item.name}</td>
		<td>{item.age} </td>
		<td>{item.city}</td>
		<td>{item.email}</td>
		<td>Ações</td>
	</tr>
</Table>
