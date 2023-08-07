<template>
    <div>
        <p>
            data={{ data }}
            <!-- props={{ props }} -->
        </p>
    </div>
</template>
  </div>
<script>
export default {
    name: "",
    components: {},
    mixins: [],
    props: {
        props: {
            default: "已创建。",
        },
    },
    data() {
        return {
            data: this.props,
        };
    },
    computed: {
    },
    watch: {},
    methods: {
        testMethod() {
            console.log(":::methods节点已创建。");
        },
        ajaxRequset() {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', 'http://127.0.0.1:8888/api/isExists?userName=test');
            xhr.send();
            xhr.addEventListener('load', () => {
                const res = xhr.responseText;
                console.log(":::ajax请求=" + res);
                console.log(this);
            });
        }
    },
    beforeCreate() {
        console.log("beforeCreate")
        // console.log(":::data节点"+this.data);
        // console.log(":::props节点"+this.props);
        // this.testMethod();
    },
    created() {
        console.log("created")
        console.log(":::data节点" + this.data);
        console.log(":::props节点" + this.props);
        this.testMethod();
        //一般在这个阶段发起网络请求
        this.ajaxRequset();
    },
};
</script>
<style lang="" scoped></style>
