<template>
    <div>
        <h1>命名路由</h1>
        <ul>
            <li>
                <router-link :to="{name: 'user', params: { id: 123}}">User</router-link>
            </li>
            <li>
                <router-link to="/home">Home</router-link>
            </li>
        </ul>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        created() {
            //页面一加载，跳转到user路由
            // this.$router.push('/userinfo/1234');
        }
    }
</script>

<style scoped>

</style>