<template>
  <div class="social">
    <div class="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4">
      <figure class="w-40 m-4">
        <a href="https://github.com/FlyingBaum" target="_blank">
          <img
            :src="require('@/assets/github.svg')"
            alt="github"
            class="bg-gray-200 border-gray-400 border-4 rounded-3xl"
          />
        </a>
        <figcaption class="mt-2 text-lg">Github</figcaption>
      </figure>

      <figure class="w-40 m-4">
        <a
          href="https://www.linkedin.com/in/krist-baliev-5a9a54207/"
          target="_blank"
        >
          <img
            :src="require('@/assets/linkedIn.svg')"
            alt="linkedIn"
            class="bg-gray-200 border-gray-400 border-4 rounded-3xl"
          />
        </a>
        <figcaption class="mt-2 text-lg">LinkedIn</figcaption>
      </figure>
    </div>
  </div>
</template>
