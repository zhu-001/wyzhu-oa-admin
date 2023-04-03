import request from '@/utils/request'



const api_name = '/admin/system/sysRole'

export default {

    /*
    获取角色分页列表(带搜索)
    */
    getPageList(page, limit, searchObj) {
      return request({
        url: `${api_name}/${page}/${limit}`,
        method: 'get',
        params: searchObj
      })
    },
    // 角色删除
    removeById(id) {
        return request({
          url: `${api_name}/delete/${id}`,
          method: 'delete'
        })
      },
    saveRole(role){
        return request({
            url: `${api_name}/save`,
            method: 'post',
            data:role
          })
      },
      getById(id) {
        return request({
          url: `${api_name}/get/${id}`,
          method: 'get'
        })
      },
      
      updateById(role) {
        return request({
          url: `${api_name}/update`,
          method: 'put',
          data: role
        })
      },

      batchRemove(idList){
        return request({
            url: `${api_name}/batchDelete`,
            method: `delete`,
            data: idList
          })
      },
      getRoles(adminId) {
        return request({
          url: `${api_name}/toAssign/${adminId}`,
          method: 'get'
        })
      },
      
      assignRoles(assginRoleVo) {
        return request({
          url: `${api_name}/doAssign`,
          method: 'post',
          data: assginRoleVo
        })
      }
  }