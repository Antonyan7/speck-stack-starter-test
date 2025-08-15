<script lang="ts">
	import * as Form from '$lib/shadcn/components/ui/form/index.js';
	import { Input } from '$lib/shadcn/components/ui/input/index.js';
	import { Textarea } from '$lib/shadcn/components/ui/textarea/index.js';
	import { Check } from '@lucide/svelte';
	import { contactSchema, type ContactSchema } from './contactSchema';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { valibotClient } from 'sveltekit-superforms/adapters';

	import { slide } from 'svelte/transition';
	import { Button } from '$lib/shadcn/components/ui/button';
	import * as Card from '$lib/shadcn/components/ui/card/index.js';
	import { m } from '$lib/paraglide/messages';

	let { data }: { data: { form: SuperValidated<Infer<ContactSchema>> } } = $props();

	let errorMessage: string | undefined = $state(undefined);
	let successScreen: boolean = $state(false);

	const form = superForm(data.form, {
		validators: valibotClient(contactSchema),
		onUpdate({ form }) {
			if (form.valid) {
				successScreen = true;
				return;
			}
			if (form.message) errorMessage = form.message;
		},

		onSubmit() {
			errorMessage = undefined;
			successScreen = false;
		}
	});

	const { form: formData, enhance } = form;
</script>

<div class="mx-auto max-w-xl">
	<Card.Root>
		{#if !successScreen}
			<div transition:slide>
				<h1 class="sr-only">{m.only_loved_mongoose_dial()}</h1>

				<Card.Header>
					<Card.Title level={2}>{m.only_loved_mongoose_dial()}</Card.Title>
					<Card.Description>{m.dull_raw_koala_stab()}</Card.Description>
				</Card.Header>
			</div>
		{/if}
		<Card.Content>
			{#if successScreen}
				<div transition:slide class="flex flex-col items-center space-y-4">
					<div class="flex flex-col items-center justify-center">
						<Check class="text-primary" size={32} />

						<div class="">{m.swift_antsy_slug_bump()}</div>
					</div>
					<Button
						onclick={() => {
							successScreen = false;
						}}
					>
						Close
					</Button>
				</div>
			{:else}
				<form transition:slide method="POST" use:enhance>
					<div class="flex flex-row gap-4">
						<Form.Field {form} name="firstName" class="flex-1">
							<Form.Control>
								{#snippet children({ props })}
									<Form.Label>{m.trite_weak_dove_hurl()}</Form.Label>
									<Input {...props} bind:value={$formData.firstName} />
								{/snippet}
							</Form.Control>
							<Form.FieldErrors />
						</Form.Field>

						<Form.Field {form} name="lastName" class="flex-1">
							<Form.Control>
								{#snippet children({ props })}
									<Form.Label>{m.civil_even_penguin_read()}</Form.Label>
									<Input {...props} bind:value={$formData.lastName} />
								{/snippet}
							</Form.Control>
							<Form.FieldErrors />
						</Form.Field>
					</div>

					<Form.Field {form} name="companyName">
						<Form.Control>
							{#snippet children({ props })}
								<Form.Label>{m.orange_funny_hawk_dazzle()}</Form.Label>
								<Input {...props} bind:value={$formData.companyName} />
							{/snippet}
						</Form.Control>
						<Form.FieldErrors />
					</Form.Field>

					<Form.Field {form} name="email">
						<Form.Control>
							{#snippet children({ props })}
								<Form.Label>{m.mild_spare_florian_cure()}</Form.Label>
								<Input {...props} type="email" bind:value={$formData.email} />
							{/snippet}
						</Form.Control>
						<Form.FieldErrors />
					</Form.Field>

					<Form.Field {form} name="phoneNumber">
						<Form.Control>
							{#snippet children({ props })}
								<Form.Label>{m.away_home_snail_climb()}</Form.Label>
								<Input {...props} type="tel" bind:value={$formData.phoneNumber} />
							{/snippet}
						</Form.Control>
						<Form.FieldErrors />
					</Form.Field>

					<Form.Field {form} name="message">
						<Form.Control>
							{#snippet children({ props })}
								<Form.Label>{m.loud_next_gibbon_fear()}</Form.Label>
								<Textarea {...props} bind:value={$formData.message} rows={4} />
							{/snippet}
						</Form.Control>
						<Form.FieldErrors />
					</Form.Field>

					<div class="mt-6">
						<Form.Button>{m.tired_solid_moth_sail()}</Form.Button>
					</div>
					{#if errorMessage}
						<div class="text-destructive mt-2">{errorMessage}</div>
					{/if}
				</form>
			{/if}
		</Card.Content>
	</Card.Root>
</div>
