<template>
  <div
    class="repo m-2 shadow-lg hover:shadow-xl transition duration-500 cursor-pointer p-8 h-96"
    @click="openUrl"
  >
    <div class="flex">
        <span class="text-lg md:text-xl w-40 md:w-auto font-bold uppercase truncate"
        >{{ getRepoName() }}</span>
        <div class="inline ml-auto">
            <span>Stars:</span>
            <span class="ml-1 text-red-500">{{ getRepoStarCount() }}</span>
        </div>
    </div>
    <div class="wrap w-full text-left">
        <p class="py-6 text-sm md:text-lg">{{ getRepoDesc() }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class RepoCard extends Vue {
  @Prop() private repoName!: string;
  @Prop() private repoUrl!: string;
  @Prop() private repoStarCount!: number;
  @Prop() private repoDescription!: string;

  getRepoName() {
    return this.repoName;
  }
  getRepoUrl() {
    return this.repoUrl;
  }
  getRepoStarCount() {
    return this.repoStarCount;
  }
  getRepoDesc() {
    return this.repoDescription;
  }

  openUrl() {
      window.open(this.repoUrl, "_blank")
  }

}
</script>
