<template>
  <div class="projects">
    <h1 class="text-6xl m-4">
      <span class="text-green-500">Krist</span> Baliev
    </h1>
    <div class="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4">
      <div v-for="repo in repos" :key="repo.repoName" class="m-4">
        <repo-card
          :repoName="repo.repoName"
          :repoDescription="repo.repoDesc"
          :repoStarCount="repo.repoStarCount"
          :repoUrl="repo.repoUrl"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";
import RepoCard from "@/components/RepoCard.vue";

interface Repo {
  repoName: string;
  repoDesc: string;
  repoStarCount: number;
  repoUrl: string;
}

@Component({
  components: { RepoCard },
})
export default class Projects extends Vue {
  repos: Repo[] = [];

  mounted(): void {
    axios
      .get("https://api.github.com/users/FlyingBaum/repos?sort=updated")
      .then((values) => {
        values.data.slice(0, 10).forEach((repo: any) => {
          this.repos.push({
            repoName: repo.name,
            repoDesc: repo.desc,
            repoStarCount: repo.stargazers_count,
            repoUrl: repo.html_url,
          });
        });
      })
      .catch(console.error);
  }

  beforeCreate(): void {
    document.body.className = "projects";
  }
}
</script>
