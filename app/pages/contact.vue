<script setup lang="ts">
const { profile, contact } = useAppConfig();

const state = ref({
  email: "",
  message: "",
  phone: "",
  fullname: "",
  subject: "",
});

const botcheck = ref(false);

const loading = ref(false);

async function onSubmit() {
  if (botcheck.value) {
    toast.error("Something went wrong. Please email me directly.");
    return;
  }

  loading.value = true;
  try {
    const res = await $fetch(contact.web3formsEndpoint, {
      method: "POST",
      body: {
        access_key: contact.web3formsAccessKey,
        name: state.fullname,
        email: "unemploidtee@protonmail.com",
        subject: state.subject,
        message: state.message,
      },
    });

    if (res?.success === false) {
      throw new Error(res.message || "Web3Forms submission failed");
    }

    state.value = {
      email: "",
      message: "",
      phone: "",
      fullname: "",
      subject: "",
    };
    toast.success("Message sent — thanks for reaching out!");
  } catch (error) {
    console.error("Failed to submit contact form:", error);
    toast.error("Something went wrong. Please email me directly at " + profile.email);
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <section class="mx-auto mt-4 flex max-w-4xl flex-col p-7 sm:mt-20">
    <h1 class="font-newsreader italic text-white-shadow text-center text-4xl">Contact</h1>
    <h2 class="text-center text-lg font-extralight italic text-muted">
      Let's talk about your ideas, projects or anything else
    </h2>
    <Divider class="mb-8 mt-2" />

    <p class="text-center text-sm text-muted">
      Email me directly at
      <a :href="'mailto:' + profile.email" class="text-primary underline">
        {{ profile.email }}
      </a>
    </p>

    <UForm :state class="mx-auto flex w-full max-w-[40rem] flex-col gap-3 pt-6" @submit="onSubmit">
      <input
        v-model="botcheck"
        type="checkbox"
        name="botcheck"
        class="hidden"
        tabindex="-1"
        autocomplete="off"
        aria-hidden="true"
      />

      <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <UFormField label="Fullname">
          <UInput
            v-model="state.fullname"
            type="text"
            autocomplete="name"
            class="w-full"
            placeholder="Your name"
          />
        </UFormField>

        <UFormField label="Email">
          <UInput
            v-model="state.email"
            type="email"
            autocomplete="email"
            class="w-full"
            placeholder="you@example.com"
          />
        </UFormField>
      </div>

      <UFormField label="Subject">
        <UInput
          v-model="state.subject"
          type="text"
          class="w-full"
          placeholder="What's this about?"
        />
      </UFormField>

      <UFormField label="Message">
        <UTextarea
          v-model="state.message"
          class="w-full"
          :rows="6"
          placeholder="Tell me a bit about your project..."
        />
      </UFormField>

      <UButton type="submit" block :loading size="lg" class="mt-2"> Send message </UButton>
    </UForm>
  </section>
</template>
