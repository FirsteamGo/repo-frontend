<style>
thead {
  background-color: blue;
  color: cornsilk;
}
</style>

<template>
  <div id="app" class="container">


    <div class="row" style="width:50%;margin-left:auto;margin-right:10px;">
      <label class="col-lg-3 form-label">篩選</label>
      <input type="text" class="col-lg-7 form-control" v-model="filter" placeholder="請輸入關鍵字" />
      <button class="btn btn-outline-secondary" @click="filterEmployee">篩選</button>
    </div>


    <div class="form-group">
      <button type="button" @click="showModal" class="btn btn-success mb-3">新增紀錄</button>
    </div>



    <div class="form-group">
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <td>EmployeeId</td>
            <td>FirstName</td>
            <td>LastName</td>
            <td>Title</td>
            <td>Edit</td>
          </tr>
        </thead>

        <tbody>
          <tr v-for="item in employeeDTOes">
            <template v-if="item.Edit == true">

              <td>{{ item.employeeId }}</td>
              <td><input v-model="item.firstName" /></td>
              <td><input v-model="item.lastName" /></td>
              <td><input v-model="item.title" /></td>
              <td>
                <button class="btn btn-primary" @click="update(item)">修改</button>
                <button class="btn btn-warning" @click="cancel">取消</button>
              </td>
            </template>

            <template v-else>

              <td>{{ item.employeeId }}</td>
              <td>{{ item.firstName }}</td>
              <td>{{ item.lastName }}</td>
              <td>{{ item.title }}</td>
              <td>
                <button class="btn btn-success " @click="edit(item.employeeId)">編輯</button>
                <button class="btn btn-danger" @click="deleteEmployee(item.employeeId)">刪除</button>
              </td>
            </template>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="insertModal" tabindex="-1" role="dialog" aria-labelledby="modalTitleId"
      aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modalTitleId">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">

            <div class="form-group">
              <label class="form-lable">FirstName</label>
              <input type="text" class="form-control" v-model="firstName" />
            </div>

            <div class="form-group">
              <label class="form-lable">LastName</label>
              <input type="text" class="form-control" v-model="lastName" />
            </div>

            <div class="form-group">
              <label class="form-lable">Title</label>
              <input type="text" class="form-control" v-model="title" />
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">關閉</button>
            <button type="button" class="btn btn-primary" @@click="insert">新增</button>
          </div>
        </div>
      </div>
    </div>




  </div>
</template>



<!-- <script src="https://unpkg.com/vue@3.2.36"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.3.4/axios.min.js"></script>  -->

<!-- onMounted 只做一次  computed 可做多次 -->
<script setup>
import { ref, reactive, onMounted, computed } from 'vue'
import axios from "axios";

const webApiBaseAddr = ref("https://localhost:7226/api/Employees");

let employeeDTOes = reactive([])


const filter = ref("")
const employeeId = ref(null)
let firstName = ref(null)
let lastName = ref(null)
let title = ref(null)
let firstNameOld = ref(null)
let lastNameOld = ref(null)
let titleOld = ref(null)
let employeeList = reactive([])




const getEmployeeDTOes = onMounted(() => {
  //呼叫後端EmployeeController資料
  axios
    .get(webApiBaseAddr.value)
    .then(respose => {
      //console.log(respose);
      //console.log(respose.data);
      //employeeDTOes = respose.data;
      // console.log(employeeDTOes);
      //  第一種
      // employeeDTOes.splice(0,respose.data.length,...respose.data)
      // for (var i = 0; i < employeeDTOes.length; i++) {
      //       var item = employeeDTOes[i];
      //       item.Edit = false;
      //       employeeList.push(item);

      //     }

      //     employeeDTOes.splice(0,employeeList.length,...employeeList)


      //  第二種
      for (var i = 0; i < respose.data.length; i++) {
        var item = respose.data[i];
        item.Edit = false;
      }
      employeeDTOes.splice(0, respose.data.length, ...respose.data)
      console.log(employeeDTOes);
    })
    .catch((err) => {
      console.log(err);

    });
})
const filterEmployee = () => {
  let p = {
    FirstName: filter.value,
    LastName: filter.value,
    Title: filter.value
  }
  axios
    .post(`${webApiBaseAddr.value}/Filter`, p)
    .then(response => {
      // console.log(response.data);
      for (var i = 0; i < response.data.length; i++) {
        var item = response.data[i];
        item.Edit = false;
      }

      employeeDTOes.splice(0, employeeDTOes.length, ...response.data)
      // console.log(employeeDTOes);
    })
    .catch((err) => {
      console.log(err);
    });
}


let edit = (employeeId) => {
  var employeeList = [];
  for (var i = 0; i < employeeDTOes.length; i++) {
    var item = employeeDTOes[i];
    if (item.employeeId == employeeId) {
      item.Edit = true;
      firstNameOld = item.firstName;
      lastNameOld = item.lastName;
      titleOld = item.title;

    }//_this:取用自己的data model
    else {
      item.Edit = false;
    }
    employeeList.push(item);
  }

  employeeDTOes.splice(0, employeeList.length, ...employeeList);
}
const cancel = () => {
  //alert("cancel");
  // let _this = this;
  var employeeList = [];

  for (var i = 0; i < employeeDTOes.length; i++) {
    var item = employeeDTOes[i];
    if (item.Edit == true) {
      item.Edit = false;
      item.firstName = firstNameOld;
      item.lastName = lastNameOld;
      item.Title = titleOld;
    }
    employeeList.push(item);
  }

  employeeDTOes.splice(0, employeeList.length, ...employeeList);

}
const update = function (item) {
  // alert("update");
  // let _this = this;
  var p = {
    EmployeeId: item.employeeId,
    FirstName: item.firstName,
    LastName: item.lastName,
    Title: item.title
  }
  axios.put(`${webApiBaseAddr.value}/${item.employeeId}`, p).then(response => {
    alert(response.data);
    filterEmployee();
    cancel();
  })
}

const deleteEmployee = function (employeeId) {
  //alert("delete");
  // let _this = this;
  var ret = confirm("確定要刪除嗎?");
  if (ret == true) {
    axios.delete(`${webApiBaseAddr.value}/${employeeId}`).then(response => {
      alert(response.data);

      filterEmployee();

    });
  }

}

const showModal = () => {
  //alert("showModal");
  $('#insertModal').modal('show');
}

const insert = function () {
  //alert("insert");
  // let _this = this;
  var p = {
    EmployeeId: 0,
    FirstName: firstName,
    LastName: lastName,
    Title: title
  };
  axios
    .post(`${webApiBaseAddr.value}`, p)
    .then(response => {
      alert(response.data);
      window.location = "/Home/VUESPA";
    });
}


//   FETCH 寫法
// fetch(`${webApiBaseAddr.value}`,{
//     method:"GET"
//   })
//   .then(result=>{
//     if(result.ok) {
//       return result.json();
//     }else{
//       console.log("err");
//     }
//   })
//   .then(data => {
//     console.log(data);
//     employeeDTOes.splice(0,data.length,...data)
//     console.log(employeeDTOes);

//   });
// })
//   ======================================================

</script>


