<template>
<div>
    <div allign="center" >
        <b-form-group id="fieldset-horizontal"
        label-cols-sm="4"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="7"
        label="Họ:"
        label-for="input-horizontal">
            <b-form-input id="input-horizontal" :disabled="isEditable"  v-model="user.lastName"> 
            </b-form-input> 
        </b-form-group>

        <b-form-group id="fieldset-horizontal"
        label-cols-sm="4"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="7"
        label="Tên:"
        label-for="input-horizontal" > 
            <b-form-input  id="input-horizontal" :disabled="isEditable" v-model="user.firstName"> 
            </b-form-input> 
        </b-form-group>

        <b-form-group id="fieldset-horizontal"
        label-cols-sm="4"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="7"
        label="Email:"
        label-for="input-horizontal">
            <b-form-input id="input-horizontal" :disabled="isEditable" v-model="user.email"> 
            </b-form-input> 
        </b-form-group>

        <b-form-group id="fieldset-horizontal"
        label-cols-sm="4"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="7"
        label="SĐT:"
        label-for="input-horizontal">
            <b-form-input id="input-horizontal" :disabled="isEditable" v-model="user.phone"> 
            </b-form-input> 
        </b-form-group>

        <b-form-group id="fieldset-horizontal"
        label-cols-sm="4"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="7"
        label="Địa chỉ thường trú:"
        label-for="input-horizontal">
            <b-form-input id="input-horizontal" :disabled="isEditable" v-model="user.identityCard"> 
            </b-form-input> 
        </b-form-group>

        <b-form-group id="fieldset-horizontal"
        label-cols-sm="4"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="7"
        label="Căn cước công dân:   "
        label-for="input-horizontal">
            <b-form-input id="input-horizontal" :disabled="isEditable" v-model="user.location"> 
            </b-form-input> 
        </b-form-group>

        <div>
            <b-button @click="updateButton()" class="btn" v-bind:class="{ 'btn-primary' : isEditable, 'btn-danger' : !isEditable }" >{{button_text}}</b-button>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
import cookieCRUD from "../../mixins/cookie.js"
export default {
    data : () => {
        return {
            isChange: false,
            isEditable: true,
            button_text : "Chỉnh sửa",
            user : Object

        }
    },
    mixins : [cookieCRUD],
    mounted() {
        const token = this.getCookie("token");
        axios.get("http://localhost:8081/api/user/user-info/", {headers: {
          'Authorization': 'Bearer '+ token,
        }})
        .then(res => {
            this.user = res.data;
        })
        .catch(err => {
            console.log(err)
        })
    },
    methods: {
        updateUserInfo() {
            axios.post("http://localhost:8081/api/user/update-profile/")
        },

        updateButton() {
            this.isEditable = !this.isEditable
            if (this.isEditable) {
                this.button_text = "Chỉnh sửa"
            } else {
                this.button_text = "Xác nhận"
            }
        }
    }         
}
</script>