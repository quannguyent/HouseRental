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
            <b-form-input id="input-horizontal" :disabled="isEditable"  v-model="lastName"> 
            </b-form-input> 
        </b-form-group>

        <b-form-group id="fieldset-horizontal"
        label-cols-sm="4"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="7"
        label="Tên:"
        label-for="input-horizontal" > 
            <b-form-input  id="input-horizontal" :disabled="isEditable" v-model="firstName"> 
            </b-form-input> 
        </b-form-group>

        <b-form-group id="fieldset-horizontal"
        label-cols-sm="4"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="7"
        label="Email:"
        label-for="input-horizontal">
            <b-form-input id="input-horizontal" :disabled="isEditable" v-model="email"> 
            </b-form-input> 
        </b-form-group>

        <b-form-group id="fieldset-horizontal"
        label-cols-sm="4"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="7"
        label="Địa chỉ thường trú:"
        label-for="input-horizontal">
            <b-form-input id="input-horizontal" :disabled="isEditable" v-model="identityCard"> 
            </b-form-input> 
        </b-form-group>

        <b-form-group id="fieldset-horizontal"
        label-cols-sm="4"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="7"
        label="Căn cước công dân:   "
        label-for="input-horizontal">
            <b-form-input id="input-horizontal" :disabled="isEditable" v-model="location"> 
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
export default {
    data : () => {
        return {
            isChange: false,
            lastName: "Nguyễn",
            isEditable: true,
            button_text : "Chỉnh sửa"
        }
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